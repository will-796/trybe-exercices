const checkNumbers = (apost, randNumbers) => {
  for (const number of apost) {
    if (!randNumbers.includes(number)) return false ;
  }
  return true
};

const getLucky = (apost, func) => {
  const randNumbers = Array.from({ length: 5 },() => Math.floor(Math.random() * 5));
  const msgWin = "Parabéns você ganhou"
  const msgLose = `Tente novamente os números são ${randNumbers}`
  return (func(apost, randNumbers)) ? msgWin : msgLose;
  
};

for (let index = 0; index < 10000; index+=1) {
  console.log(getLucky([1,2,3,4,5], checkNumbers));
}