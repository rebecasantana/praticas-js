// Exercicio Nota Escolar
// Obter a média a partir de um array

// 0-59: f
// 60-69: d
// 70-79: c
//80-89:d
//90-100:a

const array = [70, 70, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
  const media = calcularMedia(notas);

  if (media < 59) return "f";
  if (media < 69) return "d";
  if (media < 79) return "c";
  if (media < 89) return "b";
  return "a";
}

function calcularMedia(array) {
  let soma = 0;
  for (let valor of array) {
    soma += valor;
  }
  return soma / array.length;
}
