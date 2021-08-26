const db = require("../db/models/index.js");

const { Op } = require("sequelize");

// No returning records by default
const updatePokemonsBaseHPByCategory = async (newHp, category) => {
  const numberOfAffectedRecords = await db.SimplePokemon.update(
    { baseHP: newHp },
    {
      where: {
        category: {
          [Op.like]: `%${category}%`,
        },
      },
    }
  );
  console.log(newHp + "-" + category + "-" + numberOfAffectedRecords);
  return numberOfAffectedRecords;
};

// With updated records
const updatePokemonsBaseHPWithUpdatedRecord = async (newHp, category) => {
  const [numberOfAffectedRecords, updatedPokemons] =
    await db.SimplePokemon.update(
      { baseHP: newHp },
      {
        where: {
          category: {
            [Op.like]: `%${category}%`,
          },
        },
        returning: true,
      }
    );
  console.log(updatedPokemons);
  return numberOfAffectedRecords;
};

module.exports = {
  updatePokemonsBaseHPByCategory,
  updatePokemonsBaseHPWithUpdatedRecord,
};
