// Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ["java", "javascript", "python", "html", "css"];
let maior = array[0].length;
let indiceMaior;
for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > maior) {
    maior = array[i].length;
    indiceMaior = i;
  }
}

console.log(array[indiceMaior]);
