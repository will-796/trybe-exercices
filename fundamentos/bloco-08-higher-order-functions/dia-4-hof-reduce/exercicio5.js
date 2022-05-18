const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce((countA, word) => {
    word
      .split("")
      .forEach((letter) =>
        letter === "a" || letter === "A" ? (countA += 1) : null
      );
    return countA
  }, 0);
}

console.log(containsA());