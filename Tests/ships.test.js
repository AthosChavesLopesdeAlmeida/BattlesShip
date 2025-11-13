import { Ships } from '../js/ships.js';

const mockLength = 2;

let ship; // Declaramos fora para acessar nos testes

beforeEach(() => {
  ship = new Ships(mockLength); // Cria instância fresca a cada teste
});

test('isSunk and takeHit work properly', () => { 
  // Teste interno para takeHit
  test('takes hits properly', () => {
    ship.takeHitFunction(); // Assumindo que é o método real
    ship.takeHitFunction();

    expect(ship.hitsTaken).toBe(2); // Acessa a propriedade da instância
  });

  test('isSunk returns true after full hits', () => {
    ship.takeHit();
    ship.takeHit(); // Agora hitsTaken === length (2)

    expect(ship.isSunk()).toBe(true); // Assumindo que isSunk() verifica isso
  });

  test('isSunk returns false before full hits', () => {
    ship.takeHit(); 

    expect(ship.isSunk()).toBe(false);
  });
});
