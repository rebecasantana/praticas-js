//Adicione um item no array com push ➕
//Mario decidiu fazer uma salada de frutas e precisa comprar banana, maçã, mamão e goiaba. Ele criou uma lista com JavaScript para guardar esses valores:

//Copiar
//const listaDeFrutas = ['banana', 'maçã', 'mamão', 'goiaba'];
//Mario esqueceu de adicionar ‘manga’ em sua lista e precisa da sua ajuda para resolver esse problema:

//Utilize o método push para adicionar o valor 'manga' ao final do array listaDeFrutas;

//Use a estrutura de repetição for na constante listaDeFrutas atualizada para exibir todas as frutas da lista.

//const listaDeFrutas = ["banana", "maçã", "mamão", "goiaba"];
//listaDeFrutas.push("manga");
//for (let index = 0; index < listaDeFrutas.length; index = index + 1) {
//  console.log(listaDeFrutas[index]);
//}

//const listaDeRoupa = ["calça", "camiseta", "vestido"];
//listaDeRoupa.push("calça");
//for (let index = 0; index < listaDeRoupa.length; index = index + 1) {
//  console.log(listaDeRoupa[index]);
//}

//const ListaNomes = ["Vanessa", "joaquem", "mariano", "thailor"];
//ListaNomes.push("Ana");
//for (let index = 0; index < ListaNomes.length; index = index + 1) {
//  console.log(ListaNomes[index]);
//}

const multiplicador = [3, 7];
const tabuada = [];
for (let index = 0; index < multiplicador.length; index = index + 1) {
  for (let index2 = 1; index2 <= 9; index2 = index2 + 1) {
    resultado = multiplicador[index] * index2;
    console.log(multiplicador[index] + " x " + index2 + " = " + resultado);
  }
}
