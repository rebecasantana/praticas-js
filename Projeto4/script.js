//Velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// Pontos maiores que 12 -> "Carteira Suspendida"

verificarVelocidade(130);

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70;
  const kmPorPonto = 5;
  if (velocidade <= velocidadeMaxima) console.log("Ok");
  else {
    const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
    if (pontos >= 12) console.log("Carteira Suspensa");
    else console.log("Pontos", pontos);
  }
}
