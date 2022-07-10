const DB = require("./db.json");

const getAllDogs = () => {
  return DB.dogs;
};

module.exports = { getAllDogs };