let n = 5;
let metade = (n + 1) / 2;
let direita = metade
let esquerda  = metade

for (let i = 0; i <= metade; i++) {
  let linha = "";
  for (let j = 0; j <= n; j++) {
    if (j < direita && j > esquerda) {
      linha += "*";
    } else {
      linha += " ";
    }
  }
  direita+=1
  esquerda-=1
  console.log(linha);
}
