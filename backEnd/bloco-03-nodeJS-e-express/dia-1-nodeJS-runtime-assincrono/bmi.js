import readlineSync from 'readline-sync';

const calcIMC = async () => {
  const weight = readlineSync.questionFloat('qual o seu peso ')
  const height = readlineSync.question('qual a sua altura ')

  const result = weight / (height ^ 2);
  const bonitoResult = Math.round(result * 10) / 10
  const defaultMSG = `seu IMC é ${bonitoResult} e é considerado `
  if (result <= 18.5) return defaultMSG + 'abaixo do peso (magreza)'
  if (result > 18.5 && result<=24.9) return defaultMSG + 'peso normal'
  if (result > 24.9 && result<=29.9) return defaultMSG + 'acima do peso (sobrepeso)'
  if (result > 29.9 && result<=34.9) return defaultMSG + 'Obesidade grau I'
  if (result > 34.9 && result<=39.9) return defaultMSG + 'Obesidade grau II'
  return defaultMSG + 'Obesidade graus III e IV'

};

console.log(calcIMC());