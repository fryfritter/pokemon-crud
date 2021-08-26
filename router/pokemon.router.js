// empty.route.js
const express = require("express");
const createPokemon = require("../crud/create.js");

const router = express.Router();

// router.get("/", (res, req) => res.end());
router.post("/create", async (req, res) => {
  const data = req.body;
  console.log("i am here", data);

  try {
    const result = await createPokemon(data);
    res.send(result);
  } catch (Error) {
    res.status(500).end();
  }
});

module.exports = router;
