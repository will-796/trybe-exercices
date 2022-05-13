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
  return callback(15, dragon.damage);
};

const damageWarior = (callback) => {
  const { strength, weaponDmg } = warrior;
  return callback(strength, strength * weaponDmg);
};

const damageMage = (callback) => {
  const { intelligence } = mage;
  if (mage.mana < 15) return "Não possui mana suficiente";
  mage.mana -= 15;
  const mageTurn = {
    mana: mage.mana,
    damage: callback(intelligence, intelligence * 2),
  };
  return mageTurn;
};

console.log(damageMage(randomNumberInterval));

console.log(mage);
