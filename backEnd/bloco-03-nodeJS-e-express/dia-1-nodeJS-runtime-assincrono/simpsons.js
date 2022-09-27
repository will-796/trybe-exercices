import * as fs from "fs";
import readlineSync from "readline-sync";

const data = await fs.promises.readFile("./simpsons.json", "utf-8");
console.log(data);
const dataJSON = JSON.parse(data);
const simpsonsFormated = () => {
  const result = dataJSON.map(
    (character) => `${character.id} - ${character.name}`
  );
  console.log(result);
};
simpsonsFormated();

const findSimpsons = () => {
  const id = readlineSync.questionFloat("informe o id procurado ");
  const result = dataJSON.find((element) => Number(element.id) === id);
  console.log(!result ? "personagem não encontrado" : result);
};
findSimpsons();

const formatSimpsons = async () => {
  const updatedData = dataJSON.filter(
    (element) => !["6", "10"].includes(element.id)
  );
  await fs.promises.writeFile(
    "./newSimpson.json",
    JSON.stringify(updatedData, null, 2)
  );
};

formatSimpsons();

const simpsonFamily = async () => {
  const updatedData = dataJSON.filter((element) => element.id <= 4);
  console.log(updatedData);
  await fs.promises.writeFile(
    "./simpsonFamily.json",
    JSON.stringify(updatedData, null, 2)
  );
};

simpsonFamily();

const addNelsonToFamily = async () => {
  const familyJson = await fs.promises.readFile(
    "./simpsonFamily.json",
    "utf-8"
  );
  const modifiedArray = [
    ...JSON.parse(familyJson),
    dataJSON.find((character) => character.name === "Nelson Muntz"),
  ];
  await fs.promises.writeFile(
    "./simpsonFamily.json",
    JSON.stringify(modifiedArray, null, 2)
  );
};

addNelsonToFamily();
