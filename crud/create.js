// crud/create.js
const db = require("../db/models/index.js");

const createPikachu = async (pokemon) => {
  // console.log("HERE");
  const created = await db.SimplePokemon.create(pokemon);
  // console.log("HERE");
  return created;
};

module.exports = createPikachu;
