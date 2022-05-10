const allLessons = {
  lesson1: {
    materia: "Matemática",
    numeroEstudantes: 20,
    professor: "Maria Clara",
    turno: "manhã",
  },
  lesson2: {
    materia: "História",
    numeroEstudantes: 20,
    professor: "Carlos",
  },
  lesson3: {
    materia: "Matemática",
    numeroEstudantes: 10,
    professor: "Maria Clara",
    turno: "noite",
  },
};

const countMathStudents = (allLessons) => {
  const keys = Object.keys(allLessons);
  let counter = 0;
  for (const values of keys) {
    counter += allLessons[values].numeroEstudantes;
  }
  return counter;
};

console.log(countMathStudents(allLessons));

const createReport = (allLessons, teacher) => {
  const arrObj = Object.values(allLessons);
  let estudantes = 0
  const aulas= []
  for (const value of arrObj) {
    if (value.professor === teacher) {
      aulas.push(value.materia);
      estudantes += value.numeroEstudantes;
    }
  }
  const objReturn = {
    professor: teacher,
    aulas: aulas,
    estudantes: estudantes
  };
  return objReturn; 
};

console.log(createReport(allLessons, 'Maria Clara'))
