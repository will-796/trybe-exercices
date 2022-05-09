const longestWord = (frase) => {
  const sortedArrFrases = frase.split(" ").sort((a, b) => b.length - a.length);
  console.log(sortedArrFrases[0]);
};

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
