// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function compareEndOfString(string, end) {
  array =string.split(end)
  if(array[1] == ''){
    return console.log(true)
  } else {
    return console.log(false)
  }
}

compareEndOfString("trybe", "be");

