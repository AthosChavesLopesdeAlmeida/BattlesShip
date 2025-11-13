import { Ships } from '../js/ships.js';

const mockLength = 2;
const mockHeight = 1;

let ship; // Declara fora para acessar nos testes (IMPORTANTE)

beforeEach(() => {
  ship = new Ships(mockLength, mockHeight); // Cria nova instância a cada teste
});


  // Teste interno para takeHit
  test('takes hits properly', () => {
    ship.takeHitsFunction(); // Assumindo que é o método real
    ship.takeHitsFunction();

    expect(ship.hitsTaken).toBe(2); // Acessa a propriedade da instância
  });

  test('isSunk returns true after full hits', () => {
    ship.takeHitsFunction();
    ship.takeHitsFunction(); // Agora hitsTaken === length (2)

    expect(ship.isSunkFunction()).toBe(true); // Assumindo que isSunk() verifica isso
  });

  test('isSunk returns false before full hits', () => {
    ship.takeHitsFunction(); 

    expect(ship.isSunkFunction()).toBe(false);
  });

  /* Teste para mais tarde
  test('Rotate functions properly', () => {
    ship.rotateFunction()

    expect(ship.mockHeight).toBe(2);
    expect(ship.mockLength).toBe(1);
  })*/ 