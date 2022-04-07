let custo = 1000;
let venda = 1200;

if (custo < 0) {
  console.log("peço invalido");
} else {
  let lucro = venda - custo;
  let imposto = lucro * 0.2;
  let lucroImposto = lucro - imposto;
  console.log("Seu lucro é", lucroImposto, "parabens");
}
