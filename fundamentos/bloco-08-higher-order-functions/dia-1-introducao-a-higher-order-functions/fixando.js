const wakeUp = () => "Acordando!!";
const coffee = () => "Bora tomar café!!";
const sleep = () => "Partiu dormir!!";

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);
