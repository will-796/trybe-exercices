let nota = NaN;

switch (true) {
  case nota >= 90:
    console.log("sua nota é um A");
    break;
  case nota >= 80:
    console.log("sua nota é um B");
    break;
  case nota >= 70:
    console.log("sua nota é um C");
    break;
  case nota >= 60:
    console.log("sua nota é um D");
    break;
  case nota >= 50:
    console.log("sua nota é um E");
    break;
  case nota < 50:
    console.log("sua nota é um F");
    break;
  default:
    console.log("algo deu errado, insira uma nota válida");
}
