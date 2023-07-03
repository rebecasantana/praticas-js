function mediaDosNumeros(arrayNumeros) {
  let soma = 0;
  let media = 0;

  for (let index = 0; index < arrayNumeros.length; index = index + 1) {
    soma = soma + arrayNumeros[index];
  }

  media = soma / arrayNumeros.length;

  return media;
}
