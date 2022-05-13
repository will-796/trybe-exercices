const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomNumberInterval = (min, max) => {
  const damage = Math.floor(Math.random() * (max - min - 1) + min);
  return damage;
};

const damageDragon = (callback) => {
  return callback(15, dragon.strength);
};

const damageWarior = (callback) => {
  const { strength, weaponDmg } = warrior;
  return callback(strength, strength * weaponDmg);
};

const damageMage = (callback) => {
  const { intelligence } = mage;
  if (mage.mana < 15) return "Não possui mana suficiente";
  const mageTurn = {
    mana: mage.mana,
    damage: callback(intelligence, intelligence * 2),
  };
  return mageTurn;
};

const gameActions = {
  wariorTurn: (callback) => {
    const damage = callback(randomNumberInterval);
    warrior.damage = damage
    dragon.healthPoints -= warrior.damage
  },
  mageTurn: (callback) => {
    const turn = callback(randomNumberInterval);
    mage.damage = turn.damage
    mage.mana -= 15;
    dragon.healthPoints -= mage.damage
  },
  dragonTurn: (callback) => {
    const damage = callback(randomNumberInterval);
    dragon.damage = damage
    warrior.healthPoints -= dragon.damage
    mage.healthPoints -= dragon.damage
  },
  turnResult: () => console.log(battleMembers) 
}


gameActions.mageTurn(damageMage)
gameActions.wariorTurn(damageWarior)
gameActions.dragonTurn(damageDragon)
gameActions.turnResult()
