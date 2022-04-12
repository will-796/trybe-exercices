let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

const moradorBloco1 = moradores.blocoUm
for (const key in moradorBloco1) {
  console.log(
    moradorBloco1[key].nome,
    moradorBloco1[key].sobrenome
  );
}

const moradorBloco2 = moradores.blocoDois
for (const key in moradorBloco2) {
  console.log(
    moradorBloco2[key].nome,
    moradorBloco2[key].sobrenome
  );
}
