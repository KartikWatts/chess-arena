import "./bootstrap";
import { Chess } from "chess.js";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

var board = null;
var $board = $("#board");
var game = new Chess();
var whiteSquareGrey = "#a9a9a9";
var blackSquareGrey = "#696969";
var squareToHighlight = null;
var colorToHighlight = null;
var squareClass = "square-55d63";

let boardElement = document.getElementById("board");
let startPositionFEN = document.getElementById("puzzleFEN");
let movesList = document.getElementById("puzzleMoves");
let movesColorElement = document.getElementById("moveColor");

var $status = $("#status");
var $fen = $("#fen");
var $pgn = $("#pgn");

let solutionMoveIndex = 0;
let moveOrder;

let positionConfig = "start";
let orientationConfig = "white";

if (startPositionFEN) {
    const [position, turn, castling, enPassant, halfMoveClock, fullMoveNumber] =
        startPositionFEN.value.split(" ");
    positionConfig = position;
    // Setting Inverse Orientation as first move in the solution is to be moved by itself after load
    orientationConfig = turn === "w" ? "black" : "white";
    movesColorElement.innerText = `(${orientationConfig} to move)`;
}

function onDragStart(source, piece, position, orientation) {
    // do not pick up pieces if the game is over
    if (game.isGameOver()) return false;

    // only pick up pieces for the side to move
    if (
        (game.turn() === "w" && piece.search(/^b/) !== -1) ||
        (game.turn() === "b" && piece.search(/^w/) !== -1)
    ) {
        return false;
    }
}

function onDrop(source, target) {
    removeGreySquares();

    // see if the move is legal
    try {
        var move = game.move({
            from: source,
            to: target,
        });
        if (move.color === "w") {
            $board.find("." + squareClass).removeClass("highlight-white");
            $board.find(".square-" + move.from).addClass("highlight-white");
            squareToHighlight = move.to;
            colorToHighlight = "white";
        } else {
            $board.find("." + squareClass).removeClass("highlight-black");
            $board.find(".square-" + move.from).addClass("highlight-black");
            squareToHighlight = move.to;
            colorToHighlight = "black";
        }
        console.log(move);
    } catch (error) {
        console.log(error);
        return "snapback";
    }
    updateStatus(source, target);
}

function onMouseoverSquare(square, piece) {
    // get list of possible moves for this square
    var moves = game.moves({
        square: square,
        verbose: true,
    });

    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    // highlight the square they moused over
    greySquare(square);

    // highlight the possible squares for this piece
    for (var i = 0; i < moves.length; i++) {
        greySquare(moves[i].to);
    }
}

function onMouseoutSquare(square, piece) {
    removeGreySquares();
}

function onSnapEnd() {
    board.position(game.fen());
}

function onMoveEnd() {
    $board
        .find(".square-" + squareToHighlight)
        .addClass("highlight-" + colorToHighlight);
}

function getStrippedPGN(pgnString) {
    return pgnString.replace(/\[[^\]]*\]/g, "");
}

function checkCorrectMove(sourceInput, targetInput) {
    const [source, target, move] = getMoveForBoard(
        moveOrder[solutionMoveIndex]
    );
    console.log(sourceInput, targetInput);
    console.log(source, target);
    if (source != sourceInput || target != targetInput) {
        Toastify({
            text: "Incorrect Move!",
            duration: -1,
            style: {
                background: "red",
            },
        }).showToast();
        boardElement.classList.add("disable-actions");
        return false;
    }
    return true;
}

function updateStatus(source, target) {
    var status = "";

    var moveColor = "White";
    if (game.turn() === "b") {
        moveColor = "Black";
    }

    // checkmate?
    if (game.isCheckmate()) {
        status = "Game over, " + moveColor + " is in checkmate.";
    }

    // draw?
    else if (game.isDraw()) {
        status = "Game over, drawn position";
    }

    // game still on
    else {
        status = moveColor + " to move";

        // check?
        if (game.isCheck()) {
            status += ", " + moveColor + " is in check";
        }
    }

    $status.html(status);
    $fen.html(game.fen());
    $pgn.html(getStrippedPGN(game.pgn()));
    console.log(game.ascii());

    checkCorrectMove(source, target);

    solutionMoveIndex++;
    boardElement.classList.toggle("disable-actions");

    if (solutionMoveIndex % 2 == 0) {
        setTimeout(() => {
            makeMoveBasedOnMoveIndex();
        }, 300);
    }
}

let config = {
    position: positionConfig,
    orientation: orientationConfig,
    draggable: true,
    appearSpeed: "slow",
    moveSpeed: "slow",
    showErrors: "alert",
    onDragStart: onDragStart,
    onDrop: onDrop,
    onMouseoutSquare: onMouseoutSquare,
    onMouseoverSquare: onMouseoverSquare,
    onSnapEnd: onSnapEnd,
    onMoveEnd: onMoveEnd,
};

function removeGreySquares() {
    $("#board .square-55d63").css("background", "");
}

function greySquare(square) {
    var $square = $("#board .square-" + square);

    var background = whiteSquareGrey;
    if ($square.hasClass("black-3c85d")) {
        background = blackSquareGrey;
    }

    $square.css("background", background);
}

board = Chessboard("board", config);

const getMoveForBoard = (moveString) => {
    const source = moveString.slice(0, 2);
    const target = moveString.slice(2);
    const move = `${source}-${target}`;
    return [source, target, move];
};

const makeMoveBasedOnMoveIndex = () => {
    const [source, target, move] = getMoveForBoard(
        moveOrder[solutionMoveIndex]
    );
    board.move(move);
    onDrop(source, target);
};

if (movesList) {
    moveOrder = movesList.value.split(" ");
    setTimeout(() => {
        game.load(startPositionFEN.value);
        makeMoveBasedOnMoveIndex();
    }, 1000);
}

$(window).resize(board.resize);
