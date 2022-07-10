const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllDogs = () => {
  return DB.dogs;
};

const createNewDog = (newDog) => {
//   const isAlreadyAdded = DB.dogs.findIndex((dog) => dog.name === dog.name) > -1;
//   if (isAlreadyAdded) {
//     return;
//   }
  console.log(newDog);
  DB.dogs.push(newDog);
  saveToDatabase(DB);
  return newDog;
};

module.exports = { getAllDogs, createNewDog };
