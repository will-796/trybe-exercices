const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const createObj = (obj, key, value) => (obj[key] = value);

const listKeys = (obj) => Object.keys(obj);

const objLength = (obj) => Object.keys(obj).length;

const allLessons = Object.assign(
  { lesson1: lesson1 },
  { lesson2: lesson2 },
  { lesson3: lesson3 }
);

const allStudents = () => {
  const arrayValues = Object.values(allLessons);
  let numeroDeEstudantes = 0;
  for (let index = 0; index < arrayValues.length; index += 1) {
    numeroDeEstudantes += arrayValues[index].numeroEstudantes;
  }
  return numeroDeEstudantes
};

const getValueByNumber = (obj, index) =>{
  const arrayObj = Object.values(obj)
  return arrayObj[index]
}

const verifyPair = (obj, key, value)=>{ 
  const arrayKeyValue = Object.entries(obj)
  for (let index = 0; index < arrayKeyValue.length; index+=1) {
    if (arrayKeyValue[index][0] === key && arrayKeyValue[index][1] === value) {
      return true
    }
  }
  return false
}


