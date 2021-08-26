const db = require("../db/models/index.js");

const { Op } = require("sequelize");

// No returning records by default
const deletePokemon = async (id) => {
  const numberOfDeletedRecord = await db.SimplePokemon.destroy({
    where: {
      id: id,
    },
  });
  console.log("-" + numberOfDeletedRecord);
  return numberOfDeletedRecord;
};

module.exports = {
  deletePokemon,
};
