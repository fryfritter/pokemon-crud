const express = require("express");

const pokemonRouter = require("./router/pokemon.router.js");
const app = express();
app.use(express.json());

//initialize DB connection
const db = require("./db/models/index.js");
db.sequelize.sync({ force: true });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/pokemon", pokemonRouter);

module.exports = app;
