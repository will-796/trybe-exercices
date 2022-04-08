// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 4;
let resultado = 1;
for (let i = 1; i <= fatorial; i += 1) {
  resultado = resultado * i;
}

console.log(resultado);
