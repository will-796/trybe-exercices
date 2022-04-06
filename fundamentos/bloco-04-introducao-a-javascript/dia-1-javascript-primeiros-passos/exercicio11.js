let salario = 3000;
let inss, ir, alicota, imposto, liquido, salarioBase;

if (salario <= 1556.94) {
  inss = 0.08;
} else if (salario > 1556.94 && salario <= 2594.92) {
  inss = 0.09;
} else if (salario > 2594.92 && salario <= 5189.82) {
  inss = 0.11;
}

if (salario > 5189.82) {
  salarioBase = salario - 570.88;
} else {
  salarioBase = salario - salario * inss;
}

if (salarioBase < 1903.98) {
  ir = 0;
  parcela = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  ir = 0.075;
  parcela = 142.8;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  ir = 0.15;
  parcela = 354.8;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  ir = 0.225;
  parcela = 636.13;
} else if (salarioBase > 4664.68) {
  ir = 0.275;
  parcela = 869.36;
}

imposto = salarioBase * ir - parcela;
liquido = salarioBase - imposto;

console.log(liquido);
