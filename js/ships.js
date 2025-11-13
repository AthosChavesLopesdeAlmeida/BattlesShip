export class Ships {
  constructor(length, height) {
    this.length = length;
    this.height = height
    this.hitsTaken = 0;
    this.isSunk = false;
  }

  takeHitsFunction() {
    this.hitsTaken++;
    return this.hitsTaken;
  }

  isSunkFunction() {
    if (this.hitsTaken >= this.length) {
      this.isSunk = true
    } else {
      this.isSunk = false
    }

    return this.isSunk;
  }

  /* Função de rotação para ser implementada mais tarde
  rotateFunction() {
    this.height = this.length
    this.length = this.height
    return this.height, this.length; 
  }*/
}