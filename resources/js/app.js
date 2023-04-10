import { Chess } from "chess.js";
import "./bootstrap";

var board = null;
var game = new Chess();

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
    // see if the move is legal
    var move = game.move({
        from: source,
        to: target,
    });

    console.log(move);

    // illegal move
    if (move === null) return "snapback";

    updateStatus();
}

function onSnapEnd() {
    board.position(game.fen());
}

function getStrippedPGN(pgnString) {
    return pgnString.replace(/\[[^\]]*\]/g, "");
}

function updateStatus() {
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
    onSnapEnd: onSnapEnd,
};

board = Chessboard("board", config);

const getMoveForBoard = (moveString) => {
    const source = moveString.slice(0, 2);
    const target = moveString.slice(2);
    const move = `${source}-${target}`;
    return [source, target, move];
};

if (movesList) {
    moveOrder = movesList.value.split(" ");
    setTimeout(() => {
        game.load(startPositionFEN.value);
        const [source, target, move] = getMoveForBoard(
            moveOrder[solutionMoveIndex]
        );
        board.move(move);
        onDrop(source, target);
    }, 1000);
}

$(window).resize(board.resize);
