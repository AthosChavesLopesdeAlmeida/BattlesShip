import { use } from 'react';
import { Ships } from './ships.js'

export class gameBoard {
  constructor() {
    this.axisY = 10; // Altura (h)
    this.axisX = 10; // Largura (w)
    this.board = this.initializeBoard(); // Modelo: matriz que rastreia células
    this.ships = []; // Array com todos os navios colocados
    this.usedCells = [];
  };

  // Inicializa matriz 2D: cada célula é null (vazia) ou { shipId, hit }
  initializeBoard() {
    const board = [];
    for (let y = 0; y < this.axisY; y++) {
      board[y] = [];
      for (let x = 0; x < this.axisX; x++) {
        board[y][x] = null; // null = vazio
      }
    }
    return board;
  };

  // Método para criar o tabuleiro (completo)
  createBoardFunction(parentEl) {
    if (!parentEl) throw new Error('parentEl is required');

    parentEl.innerHTML = '';

    // Cria uma casa para cada coordenada do tabuleiro
    for (let y = 0; y < this.axisY; y++) { 
      for (let x = 0; x < this.axisX; x++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${x}-${y}`; // ID único
        cell.setAttribute('data-coords', `${x},${y}`);
        parentEl.appendChild(cell);
      }
    }
  };

  // Método para posicionar um navio no tabuleiro
  placeShipAt(ship, startX, startY, orientation = 'horizontal') {
    // 1. VALIDAÇÃO
    if (!ship) throw new Error('Ship problem');
    if (typeof startX !== 'number' || typeof startY !== 'number') {
      throw new Error('X or Y problem');
    }
    if (orientation !== 'horizontal' && orientation !== 'vertical') {
      throw new Error('orientation problem');
    }

    // Calcula as coordenadas ocupadas pelo navio
    const occupiedCells = this.getOccupiedCells(startX, startY, ship, orientation);

    // Valida limites do tabuleiro
    for (const [x, y] of occupiedCells) {
      if (x < 0 || x >= this.axisX || y < 0 || y >= this.axisY) {
        throw new Error(`Ship goes out of bounds at [${x}, ${y}]`);
      }
    }

    // Valida colisão com outro navio
    for (const [x, y] of occupiedCells) {
      if (this.board[y][x] !== null) {
        throw new Error(`Cell [${x}, ${y}] is already occupied by another ship`);
      }
    }

    // 2. ARMAZENAMENTO NO MODELO
    const shipId = this.ships.length; // ID único do navio
    this.ships.push({ ship, startX, startY, orientation, shipId }); // Armazena objeto com atributos do navio

    for (const [x, y] of occupiedCells) {
      this.board[y][x] = { shipId, hit: false };
    }

    // 3. RENDERIZAÇÃO (marcar células como ocupadas)
    this.renderShip(shipId, occupiedCells);
  };

  // Calcula coordenadas ocupadas por um navio (???????)
  getOccupiedCells(startX, startY, ship, orientation) {
    const cells = [];
    const size = orientation === 'horizontal' ? ship.length : ship.height;

    if (orientation === 'horizontal') {
      for (let i = 0; i < size; i++) { 
        cells.push([startX + i, startY]);
      }
    } else {
      for (let i = 0; i < size; i++) {
        cells.push([startX, startY + i]);
      }
    }

    return cells;
  };

  // Renderiza o navio no DOM
  renderShip(shipId, occupiedCells) {
    for (const [x, y] of occupiedCells) {
      const cellElement = document.getElementById(`cell-${x}-${y}`);
      if (cellElement) {
        cellElement.classList.add('ship-cell');
        cellElement.setAttribute('data-shipId', shipId);
      }
    }
  };

  receiveAttackFunction(cell) {
    if (this.usedCells.contains(cell)) {
      throw new Error("No");
    }

    if (cell.contains('ship-cell')) {
      ships.takeHitsFunction();
      cell.classList.add('hit-cell')
      this.usedCells.push(cell);
    } 
    else {
      cell.classList.add('miss-cell')
      this.usedCells.push(cell);
    }
  };

  checkingFunction() {

  }; 
};