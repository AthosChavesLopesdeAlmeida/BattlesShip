import { gameBoard }  from "../js/board";

const startBtn = document.getElementById('startBtn');
const board = document.getElementById('playerBoard');

startBtn.addEventListener('click', () => {
  const playerBoard = new gameBoard();
  playerBoard.createBoardFunction(board);
})