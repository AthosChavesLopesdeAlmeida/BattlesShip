export class Ships {
  constructor(length, height) {
    this.length = length;
    this.height = height
    this.hitsTaken = 0;
    this.isSunk = false;
  };

  // Método para registrar um acerto (completo)
  takeHitsFunction() {
    this.hitsTaken++;
    return this.hitsTaken;
  };

  // Método para verificar se o navio afundou (completo)
  isSunkFunction() {

    if (this.height === this.length) {
      if (this.hitsTaken >= this.length) {
        this.isSunk = true;
      } else {
        this.isSunk = false;
      };
    }

    else if(this.height > this.length) {
      if (this.hitsTaken >= this.height) {
        this.isSunk = true;
      } else {
        this.isSunk = false;
      };
    }


    else {
      if (this.hitsTaken >= this.length) {
        this.isSunk = true;
      } else {
        this.isSunk = false;
      };
    };

    return this.isSunk;
  };

  // Método para rotacionar o navio (completo)
  rotateFunction() {
    this.height = this.length
    this.length = this.height
    return this.height, this.length; 
  };
};