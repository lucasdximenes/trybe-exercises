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

const dragonDamage = (dragon) => {
  const minDmg = 15;
  const maxDmg = dragon.strength;
  return Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
};

const warriorDamage = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = warrior.strength * warrior.weaponDmg;
  return Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
};

const mageDamage = (mage) => {
  const minDmg = mage.intelligence;
  const maxDmg = mage.intelligence * 2;
  const mana = mage.mana;
  const turn = {
    damage: "Not enough mana",
    mana: 0,
  };
  if (mana > 15) {
    turn.damage = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
    turn.mana = 15;
    return turn;
  }
  return turn;
};

const gameActions = {
  warriorTurn: (dmg) => {
    warrior.damage = dmg(warrior);
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (dmg) => {
    mage.damage = dmg(mage).damage;
    mage.mana -= dmg(mage).mana;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (dmg) => {
    dragon.damage = dmg(dragon);
    warrior.healthPoints -= dmg(dragon);
    mage.healthPoints -= dmg(dragon);
  },
  turn: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turn());
