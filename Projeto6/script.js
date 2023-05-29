// Criar um método para ler propriedades de um objeto
// Exibir somente as propriedades do tipo string que estão nesse objeto.

const filme = {
  titulo: "vingadores",
  ano: 2018,
  diretor: "Robin",
  personagem: "Thor",
};

exibirPropriedades(filme);
function exibirPropriedades(obj) {
  for (prop in obj)
    if (typeof obj[prop] === "string") console.log(prop, obj[prop]);
}
