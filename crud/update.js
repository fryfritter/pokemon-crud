const db = require("../db/models/index.js");

const { Op } = require("sequelize");

// No returning records by default
const updatePokemonsBaseHP = async () => {
  const numberOfAffectedRecords = await SimplePokemon.update(
    { baseHP: 100 },
    {
      where: {
        category: {
          [Op.like]: "%Turtle%",
        },
      },
    }
  );
};

// With updated records
const [numberOfAffectedRecords, updatedPokemons] = await SimplePokemon.update(
  { baseHP: 100 },
  {
    where: {
      category: {
        [Op.like]: "%Turtle%",
      },
    },
    returning: true,
  }
);
