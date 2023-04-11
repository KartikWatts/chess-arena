import "./bootstrap";

var board = null;

let positionConfig = "start";
let orientationConfig = "white";

let config = {
    position: positionConfig,
    orientation: orientationConfig,
    draggable: true,
    dropOffBoard: "trash",
    appearSpeed: "slow",
    moveSpeed: "slow",
    showErrors: "alert",
};

board = Chessboard("board", config);

$(window).resize(board.resize);
