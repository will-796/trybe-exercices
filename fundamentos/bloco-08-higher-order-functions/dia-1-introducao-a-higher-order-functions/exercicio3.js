const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const checkAnswes = (questionR, questionS) => {
  if (questionS === "N.A") return 0;
  if (questionS !== questionR) return 0.5;
  if (questionS === questionR) return 1;
};

const notes = (rigthA, studentA, func) => {
  let nota = 0;
  for (let index = 0; index < rigthA.length; index += 1) {
    nota += func(rigthA[index], studentA[index]);
  }
  return nota;
};

console.log(notes(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswes));
