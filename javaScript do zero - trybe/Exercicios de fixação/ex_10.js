//Encadeamento de condicionais
//Eventualmente você vai se deparar com problemas que terão mais de duas condições a serem verificadas. Para atender a mais de duas condições nós utilizamos o else if.

//Para entender o else if, vamos supor que você gosta muito de vitamina de abacate e de banana, mas quando não tem nenhuma dessas duas frutas em casa, você faz vitamina da fruta que estiver disponível. Então você tem a seguinte estrutura condicional para fazer a vitamina:

//Se a fruta for abacate, podemos fazer uma vitamina de abacate;
//Se não, se a fruta for banana, podemos fazer uma vitamina de banana;
//Se não for nenhuma dessas duas, podemos fazer um suco da fruta que temos disponível.



const frutaDisponivel = "banana";

if (frutaDisponivel === "abacate") {
  console.log("Vitamina de abacate saindo");
} else if (frutaDisponivel === "banana") {
  console.log("Vitamina de banana saindo");
} else {
  console.log("Suco de " + frutaDisponivel + " saindo");
}
