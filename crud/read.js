// crud/read.js
const db = require("../db/models/index.js");

const { Op } = require("sequelize");

const findPokemonsWithBaseHpMoreThan = async (baseHP) => {
  const foundPokemons = await db.SimplePokemon.findAll({
    where: {
      baseHP: {
        [Op.gt]: baseHP,
      },
    },
    // raw: true,
  });
  console.log(
    `RESULT FOR findPokemonsWithBaseHpMoreThan: ${foundPokemons.length}`
  );
  //   console.log(foundPokemons);
  console.log(foundPokemons[0].toJSON()); //this will print virtual field

  return foundPokemons;
};

const findPokemonWithNameOrBaseHp = async (name, baseHP) => {
  const foundPokemons = await db.SimplePokemon.findAll({
    where: {
      [Op.or]: [{ name: name }, { baseHP: baseHP }],
    },
  });
  console.log(
    `RESULT FOR findPokemonWithNameOrBaseHp: ${foundPokemons.length}`
  );
  console.log(foundPokemons);
  return foundPokemons;
};

module.exports = {
  findPokemonsWithBaseHpMoreThan,
  findPokemonWithNameOrBaseHp,
};
