import readlineSync from "readline-sync";

const Fibonacci = (terms) => {
  if (terms < 0) return console.log("insira um valor válido");
  const fibo = [0, 1];
  for (let index = 2; index <= terms; index += 1) {
    fibo[index] = fibo[index - 1] + fibo[index - 2];
  }
  return console.log(fibo);
};

const fiboTerms = readlineSync.questionInt(
  "quantos termos de Fibonacci deseja mostrar   "
);

Fibonacci(fiboTerms);
