const { deletePokemon } = require("../delete.js");

const db = require("../../db/models/index.js");
const PokemonModel = db.SimplePokemon;

jest.setTimeout(3000);
// jest.mock("../../utils/logger.js");

const pikachu = {
  name: "Pikachu",
  japaneseName: "ピカチュウ",
  baseHP: 35,
  category: "Mouse Pokemon",
};
const pokemons = [
  pikachu,
  {
    name: "Squirtle",
    japaneseName: "ゼニガメ",
    baseHP: 44,
    category: "Tiny Turtle Pokemon",
  },
  {
    name: "Wartortle",
    japaneseName: "カメール",
    baseHP: 59,
    category: "Turtle Pokémon",
  },
  {
    name: "Meowth",
    japaneseName: "ニャース",
    baseHP: 40,
    category: "Scratch Cat Pokémon",
  },
];

describe("retrieve/read/find", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await PokemonModel.bulkCreate(pokemons);
  });

  afterAll(async () => {
    await PokemonModel.truncate();
    await db.sequelize.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* eslint-disable no-unused-vars, no-unused-expressions, jest/no-disabled-tests */

  it("should delete 1 ", async () => {
    const retrieved = await deletePokemon(1);
    expect(retrieved).toEqual(1);
  });
});
