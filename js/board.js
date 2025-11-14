import { Ships } from './ships.js'

export class gameBoard {
  constructor() {
    this.axisY = 10; // Altura (h)
    this.axisX = 10; // Largura (w)
  };

  // Método para criar o tabuleiro (completo)
  createBoardFunction(parentEl) {
    if (!parentEl) throw new Error('parentEl is required');

    parentEl.innerHTML = '';

    // Cria uma casa para cada coordenada do tabuleiros
    for (let y = 0; h < this.axisY; h++) {
      for (let x = 0; w < this.axisX; w++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = '';
        cell.id = `[${x}, ${y}]`;
        cell.setAttribute('data-coords', `${x}, ${y}`);
        parentEl.appendChild(cell);
      }
    }
  };

  // Método para posicionar um navio no tabuleiro (incompleto)
  placeShipAt(coords, h, w) {
    if(!coords || !h || !w) throw new Error('You need coordinates, height and width');
    if (coords.length !== 2) throw new Error('Coordinates must be an array of two numbers');

    const id = `[${x}, ${y}]`;
    const cellElement = document.getElementById(id);
    
  };

  receiveAttackFunction() {

  };

  checkingFunction() {

  }; 
};