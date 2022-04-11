// Agora inverta o lado do triângulo.

let n=5
let i,j,k

for (let i = 0; i < n; i++) {
  let linha =''
  for (let j = 0; j < n-i-1; j++) {
    linha+=' '
  } 
  for (let k = 0; k <= i ; k++) {
    linha +="*"  
  }
  console.log(linha);
}