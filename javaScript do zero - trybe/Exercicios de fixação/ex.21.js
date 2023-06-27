//Trocando posições dos itens de um array ↔️
//Você criou uma lista com os jogos de que você mais gosta para postar no seu blog, ordenando da seguinte forma:

//1 - Quebra-Cabeça
//2 - Tetris
//3 - Sudoku
//4 - Xadrez
//5 - Batalha Naval
//Ao finalizar a lista, você decidiu ordená-la do jogo em que você menos se diverte para o que mais se diverte.

//Para isso, crie um algoritmo capaz de inverter a ordem da sua lista:

//5 - Batalha Naval
//4 - Xadrez
//3 - Sudoku
//2 - Tetris
//1 - Quebra-Cabeça
//Note que, ao invés de exibir os números em ordem crescente - 1, 2, 3, 4, 5, sua lista ficará na ordem invertida - 5, 4, 3, 2, 1.

//Para a resolução desse exercício, considere os seguintes pontos:

//Utilize as seguintes variáveis no código:
//Copiar
//let lista = [1, 2, 3, 4, 5];
//let inverter = true;
//let listaInvertida = [];
//Crie uma condicional if/else:
//Se o valor da variável inverter for true, uma nova lista invertida deve ser salva na constante listaInvertida. Em seguida, mostre o array de listaInvertida no console;

//Se inverter não for true, então nada será atribuído na constante listaInvertida e o array de lista será mostrado no console.

let lista = [1, 2, 3, 4, 5];
let inverter = true;
let listaInvertida = [];

if (inverter) {
  listaInvertida[0] = lista[4];
  listaInvertida[1] = lista[3];
  listaInvertida[2] = lista[2];
  listaInvertida[3] = lista[1];
  listaInvertida[4] = lista[0];

  console.log(listaInvertida);
} else {
  console.log(lista);
}
