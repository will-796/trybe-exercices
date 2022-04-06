a = 2;
b = 4;
c = 7;

if (!(a % 2 == 0) || !(b % 2 == 0) || !(c % 2 == 0)) {
  console.log(true, "ao menos um numero é impar");
} else {
  console.log(false, "nenhum numero é impar");
}
