const express = require("express");
const db = require("./apiHelper.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Give me something to shoot..." });
});

router.get("/units", (req, res) => {
  db.getAll()
    .then(units => {
      res.status(200).json(units);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve units" });
    });
});

router.post("/units", (req, res) => {
  const info = req.body;
  db.addUnit(info)
    .then(unit => {
      res.status(201).json(unit);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding new unit" });
    });
});

router.delete("/units/:id", (req, res) => {
  const id = req.params.id;
  db.delUnit(id)
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ message: "Error deleting unit" });
    });
});

module.exports = router;
