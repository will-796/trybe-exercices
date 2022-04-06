let a = 77;
let b = 55;
let c = 99;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
} else if (a == b && b == c) {
  console.log("todas as variáveis sao iguais");
} else {
  console.log("algumas variáveis são iguais");
}
