import "./bootstrap";

let startPosition = document.getElementById("puzzleFEN");
// console.log(startPosition);
let chessBoard = Chessboard("board", "start");
if (startPosition) chessBoard = Chessboard("board", startPosition.value);
