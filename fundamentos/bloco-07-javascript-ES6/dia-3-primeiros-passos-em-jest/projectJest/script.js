function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

function encode(string) {
  // seu código aqui
  let newString = "";
  for (const char of string) {
    if (char === "a") {
      newString += "1";
    } else if (char === "e") {
      newString += "2";
    } else if (char === "i") {
      newString += "3";
    } else if (char === "o") {
      newString += "4";
    } else if (char === "u") {
      newString += "5";
    } else {
      newString += char;
    }
  }
  return newString;
}

function decode(string) {
  // seu código aqui
  let newString = "";
  string.replace();
  for (const char of string) {
    if (char === "1") {
      newString += "a";
    } else if (char === "2") {
      newString += "e";
    } else if (char === "3") {
      newString += "i";
    } else if (char === "4") {
      newString += "o";
    } else if (char === "5") {
      newString += "u";
    } else {
      newString += char;
    }
  }
  return newString;
}

function techList(array, aluno) {
  // seu código aqui
  if (array.length === 0) {
    return "Vazio!";
  }
  const answer = [];
  const arraySorted = array.sort();
  for (const interator of arraySorted) {
    const obj = { tech: null, name: null };
    obj.name = aluno;
    obj.tech = interator;
    answer.push(obj);
  }
  return answer;
}

function hydrate(string) {
  let counter = 0;
  for (const char of string) {
    if (
      char === "1" ||
      char === "2" ||
      char === "3" ||
      char === "4" ||
      char === "5" ||
      char === "6" ||
      char === "7" ||
      char === "8" ||
      char === "9"
    ) {
      counter += parseInt(char);
    }
  }
  if (counter == 1) {
    return `${counter} copo de água`;
  }
  return `${counter} copos de água`;
}

const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

const searchEmployee = (id) => {
  const obj = professionalBoard.find((obj) => obj.id === id);
  obj === undefined ? "id não existe" : null;
};

console.log(searchEmployee("4678-2"));

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
};

const average = (arr) => {
  if (arr.length === 0) return undefined
  if (arr.some((value) => typeof value === "string")) return undefined
  const resposta = Math.round(arr.reduce((acc, att) => acc + att) / arr.length);
  return resposta;
};
const teste = [1, 2, 3, 6, 5, 4];

console.log(average(teste));
