const createPokemon = require("../create.js");
const db = require("../../db/models/index.js");
const PokemonModel = db.SimplePokemon;

jest.setTimeout(3000);
// jest.mock("../../utils/logger.js");

const pokemon1 = {
  name: "Pikachu",
  japaneseName: "ピカチュウ",
  baseHP: 35,
  category: "Mouse Pokemon",
};

describe("create", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await PokemonModel.truncate();
    await db.sequelize.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* eslint-disable no-unused-vars, no-unused-expressions, jest/no-disabled-tests */

  it.only("should create a pokemon", async () => {
    const created = await createPokemon(pokemon1);

    expect(created.id).not.toBeNull();
    // expect(created).toEqual(pokemon1); // false
    // expect(created).toContainEqual(pokemon1); // false
    expect(created).toMatchObject(pokemon1);
  });

  it("should not create pokemon without name", async () => {
    // run
    await expect(createPokemon({ ...pokemon1, name: null })).rejects.toThrow();
    // assert
  });

  it.skip("should not create pokemon with empty name", async () => {
    // run
    const created = await createPokemon({
      ...pokemon1,
      name: "",
    });

    // assertion
  });

  it.skip("should not create pokemon with duplicated name", async () => {
    // set up
    await expect(createPokemon({ ...pokemon1, name: null })).toThrow();
    // run

    // assertion
  });
});
