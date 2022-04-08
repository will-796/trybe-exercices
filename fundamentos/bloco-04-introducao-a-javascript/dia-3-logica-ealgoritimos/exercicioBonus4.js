let n = 5;
let i,j,k,a,b

for (let i = 0; i < n; i++) {
  let linha = "";
  if (i < n / 2) {
    for (let a = i; a < n/2-1; a++) {
      linha += " ";
    }
    for (let b = 0; b < 2*i+1; b++){
      linha += "*";
    }
  } else {
    for (let k = 0; k < n; k++) {
      linha += " ";
    }
  }
  console.log(linha);
}
