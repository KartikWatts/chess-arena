import "./bootstrap";

let startPositionFEN = document.getElementById("puzzleFEN");
let movesList = document.getElementById("puzzleMoves");
let moveOrder;

let positionConfig = "start";
let orientationConfig = "white";

if (startPositionFEN) {
    const [position, turn, castling, enPassant, halfMoveClock, fullMoveNumber] =
        startPositionFEN.value.split(" ");
    positionConfig = position;
    // Setting Inverse Orientation as first move in the solution is to be moved by itself after load
    orientationConfig = turn === "w" ? "black" : "white";
}

let config = {
    position: positionConfig,
    orientation: orientationConfig,
    draggable: true,
    appearSpeed: "slow",
    moveSpeed: "slow",
    showErrors: "alert",
};

let board = Chessboard("board", config);

const getMoveForBoard = (moveString) => {
    const part1 = moveString.slice(0, 2);
    const part2 = moveString.slice(2);
    return `${part1}-${part2}`;
};

if (movesList) {
    moveOrder = movesList.value.split(" ");
    setTimeout(() => {
        board.move(getMoveForBoard(moveOrder[0]));
    }, 1000);
}

$(window).resize(board.resize);
