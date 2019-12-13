const db = require("../../data/dbConfig.js");

function addUnit(unit) {
  return db("units")
    .insert(unit)
    .then(id => {
      return db("units").where({ id });
    });
}

function getUnitBy(filter) {
  return db("units").where({ filter });
}

function delUnit(id) {
  return db("units")
    .where({ id })
    .del();
}
