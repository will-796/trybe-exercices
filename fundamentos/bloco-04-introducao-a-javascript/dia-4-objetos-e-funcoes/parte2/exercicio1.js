// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for

function isPalindrome(word) {
  let reverseWord = "";
  for (const index in word) {
    reverseWord = word[index] + reverseWord;
  }
  if(word == reverseWord){
    return console.log(true)
  } else {
    return console.log(false)
  }
}
isPalindrome("arara");
