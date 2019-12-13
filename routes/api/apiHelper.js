const db = require("../../data/dbConfig.js");

function addUnit(unit) {
  return db("units")
    .insert(unit)
    .then(res => {
      const id = res[0];
      return db("units")
        .where({ id })
        .first();
    });
}

function getUnitBy(filter) {
  return db("units")
    .where({ filter })
    .first();
}

function delUnit(id) {
  return db("units")
    .where({ id })
    .del();
}

module.exports = {
  addUnit,
  getUnitBy,
  delUnit
};
