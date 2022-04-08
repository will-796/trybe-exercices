// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "tryber";
let newWord = "";
for (let i = 0; i < word.length; i++) {
  newWord = word[i] + newWord;
}

console.log(newWord);
