import { gameBoard }  from "../js/board";
import { Ships } from "../js/ships";

const startBtn = document.getElementById('startBtn');
const board = document.getElementById('playerBoard');

startBtn.addEventListener('click', () => {
  const playerBoard = new gameBoard();
  playerBoard.createBoardFunction(board);
})