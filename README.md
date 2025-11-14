# BattlesShip
This is the last project in 'The Odin Project's JS course


Tabuleiro: 10 x 10

1 navio de 5 casas
1 navio de 4 casas
2 navios de 3 casas
2 navios de 2 casas

IMPORTANTE LEMBRAR: A altura e largura dos navios NÃO SÃO as mesmas que a altura e largura do tabuleiro. TALVEZ algumas parte do código tenham que ser refatoradas por conta dessa 'confusão'. Em contrapartida, as coordenadas em board.js podem continuar como estão, por conta de que elas correspondem ao eixo 'x' e ao eixo 'y' do tabuleiro. Inclusive, as letras 'h' e 'w' foram trocadas por 'x' e 'y' em board.js (onde foi necessário)

Resumo rápido (fluxo mental antes de implementar)

Mantenha separação: modelo de dados (estado do tabuleiro) e representação DOM (visual).
Para mostrar um navio no tabuleiro você: 1) cria/obtém o modelo do navio; 2) calcula as coordenadas que ele ocupará; 3) atualiza o modelo do tabuleiro; 4) atualiza o DOM para refletir esses ocupados.
Como fazer passo a passo (ensino, sem código pronto para copiar)

Defina um modelo claro

Tenha uma estrutura em gameBoard (por exemplo uma matriz 2D) que armazene por célula se há shipId / ocupado / atingido.
Exemplo mental: board[y][x] = null ou { shipId: 1, hit: false }.
Crie/instancie o navio (modelo)

Use a classe Ships só para dados (comprimento, orientação, hits).
Quando quiser um novo navio, faça new Ships(length, height); não misture com DOM aqui.
Calcule as células que o navio ocupará

Receba: posição inicial (h,w) e orientação (horizontal/vertical).
Gere uma lista de pares coordenados: se horizontal e length=3 a partir de (h,w) → [(h,w), (h,w+1), (h,w+2)].
Verifique limites: nenhuma coordenada deve sair do tabuleiro.
Verifique colisões: nas coordenadas destino, board[y][x] deve ser null (ou vazio).
Atualize o modelo do tabuleiro

Para cada coordenada válida, marque board[y][x] = shipId (ou objeto com referência ao navio).
Assim as regras do jogo (receber ataque, afundar) usam o modelo, não o DOM.
Atualize o DOM para representar o navio — duas opções comuns:

Opção A (mais simples, por-célula):
Para cada célula ocupada, selecione o elemento já criado (pela id ou data-coords) e:
Adicione uma classe (por ex. ship) para estilizar.
Coloque cell.dataset.shipId = shipId para referência.
Vantagem: simples e compatível com seu createBoardFunction. Cada célula mostra parte do navio.
Opção B (elemento único que “cobre” várias células, mais elegante):
Faça o container do tabuleiro usar CSS Grid.
Crie um único <div class="ship"> e posicione usando propriedades de grid:
defina grid-row-start / grid-column-start a partir da coordenada (soma +1 porque grid é 1-based).
defina grid-row-end ou grid-column-end para span <length>.
Vantagem: visual único, fácil de mover/animar; mas exige que o layout do tabuleiro suporte grid e cálculo correto de índices.
Como mapear coordenada → elemento DOM

Se você usou id previsível (ex.: cell-<h>-<w>), construa esse id a partir das variáveis e use document.getElementById(id).
Alternativa com data-coords: use parentEl.querySelector('[data-coords=\"<x>, <y>\"]').
Regra: sempre construa a string do seletor a partir dos números, depois selecione e atualize.
Por que manter o modelo separado do DOM

Lógica do jogo (atingir, afundar, validações) deve consultar o board[y][x] e o objeto Ships — assim você pode testar sem DOM.
O DOM é apenas a visão; atualize-o a partir do modelo.
Boas práticas extras

Use shipId incremental para identificar navios (útil para dataset).
Não dependa apenas de classes visuais para lógica — use dataset para vincular modelo ↔ DOM.
Centralize a função de “colocar navio”: gameBoard.placeShip(startY, startX, ship, orientation) que:
calcula coordenadas, valida, atualiza board, atualiza DOM.
Teste casos: posição na borda, colisão, rotacionar.
Exemplo mental de fluxo de placeShip

Recebe (startY, startX, ship, orientation).
Gera coords = [] com length de ship.length.
Valida limites e colisões usando board.
Se tudo ok:
Para cada coord: board[y][x] = ship.id.
Para cada coord: selecione célula no DOM e cell.classList.add('ship-part') e cell.dataset.shipId = ship.id.
(ou) crie um elemento .ship e posicione com CSS Grid.
Se quiser, eu implemento a função placeShip em board.js usando sua escolha (A ou B) e deixo o modelo 2D pronto — quer que eu 
