let infoMargarida = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "sim",
};

let infoTioPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "sim",
};

let infoRecorrente
if (infoMargarida.recorrente == 'sim' && infoTioPatinhas.recorrente =='sim') {
  infoRecorrente ='Ambos recorrentes'
}

console.log(infoMargarida.personagem, 'e' ,infoTioPatinhas.personagem);
console.log(infoMargarida.origem, 'e' ,infoTioPatinhas.origem);
console.log(infoMargarida.nota, 'e' ,infoTioPatinhas.nota);
console.log(infoRecorrente);
