const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Give me something to shoot...");
});
