const skills = ["javascript", "css", "html", "flexbox", "git"];

const replaceX = (string) => {
  return `Tryber ${string} aqui!`;
};

const stringSkills = (string) => {
  return `${replaceX(string)}
  Minhas cinco principais habilidades são:
  
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}
  ${skills[3]}
  ${skills[4]}`
};

console.log(stringSkills('willian'));