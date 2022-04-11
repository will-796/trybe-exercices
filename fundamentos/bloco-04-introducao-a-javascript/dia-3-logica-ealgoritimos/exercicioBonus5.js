// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 11;

if(n%2==0){
  console.log("error");
}else{
  let metade = (n + 1) / 2;
  let esquerda = metade;
  let direita = metade;

  for (let i = 1; i <= metade; i += 1) {
    let linha = '';
    for (let j = 1; j <= n; j += 1) {
      if (j == esquerda || j == direita || i == metade) {
        linha += '*';
      } else {
        linha += ' ';
      }
    }
    esquerda -= 1;
    direita += 1;
    console.log(linha);
  }
}
