let pecaXadrez = "Dama";
pecaXadrez = pecaXadrez.toLowerCase();

switch (pecaXadrez) {
  case "peao":
    console.log("Anda uma ou duas casas a frente");
    break;
  case "torre":
    console.log("anda em linha reta");
    break;
  case "cavalo":
    console.log(
      "anda três casas em qualquer direção reta e depois uma casa ao lado"
    );
    break;
  case "bispo":
    console.log("anda pelas diagonais");
    break;
  case "dama":
  case "rainha":
    console.log("anda em todas as direções");
    break;
  case "rei":
    console.log("anda uma casa em todas as direções");
    break;
  default:
    console.log("alguma coisa deu errado :c");
}
