//Pedido na pizzaria 🍕
//Crie uma função clientePedido que receba um parâmetro numeroPedido. Considere as condições a seguir:

//Se numeroPedido for igual a 1, retorne a mensagem 'Pizza de Calabresa';
//Se numeroPedido for igual a 2, retorne a mensagem 'Pizza de Quatro Queijos';
//Se numeroPedido for igual a 3, retorne a mensagem 'Pizza de Frango com Catupiry';
//Se numeroPedido for igual a 4, retorne a mensagem 'Pizza de Brigadeiro';
//Se numeroPedido não entrar nas condições acima, retorne a mensagem 'Número do pedido inválido!'.
function clientePedido(numeroPedido) {
  if (numeroPedido === 1) {
    return "Pizza de Calabresa";
  } else if (numeroPedido === 2) {
    return "Pizza de Quatro Queijos";
  } else if (numeroPedido === 3) {
    return "Pizza de Frango com Catupiry";
  } else if (numeroPedido === 4) {
    return "Pizza de Brigadeiro";
  } else {
    return "Número do pedido inválido!";
  }
}
