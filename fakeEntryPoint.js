// fakeEntryPoint.js
const sequelizeConnection = require("./db/index");

const initOrGetSimplePokemonModel = require("./db/models/simple-pokemon.model.js");
const SimplePokemon = initOrGetSimplePokemonModel(sequelizeConnection);

const pikachu = {
  name: "Pikachu",
  japaneseName: "ピカチュウ",
  baseHP: 35,
  category: "Mouse Pokemon",
};
const created = SimplePokemon.create(pikachu);

console.log("Pikachu was saved to the database!");
console.log(created); // Not recommended, since Sequelize instances have a lot of things attached. This might produce a lot of clutter.
// console.log(created.toJSON()); // The recommended way to log an instance, but do note that this might still log sensitive data stored in database.
