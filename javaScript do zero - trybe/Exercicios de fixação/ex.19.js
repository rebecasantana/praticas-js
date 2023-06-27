//Substituir e adicionar itens em um array 🔄
//Cleyton decidiu promover uma festa no final de semana, e até já possui uma lista de convidados definida:

//Copiar
//const convidados = ['Adilson', 'Claudio', 'Juliana', 'Vinícius'];
//Na sexta-feira a noite, ele lembrou de convidar mais três amigos: Laura, Guilherme e Leticia. Além disso, Juliana entrou em contato e cancelou sua presença.

//Crie um algoritmo que ajude Cleyton a manipular o array convidados para:

//Substituir o nome 'Juliana' por 'Laura';
//Adicionar 'Guilherme' e 'Leticia' no array.

const convidados = ["Adilson", "Claudio", "Juliana", "Vinícius"];
convidados[2] = "Laura";
convidados.push("Guilherme");
convidados.push("Leticia");

console.log(convidados);
