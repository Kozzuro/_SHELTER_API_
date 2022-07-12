const DB = require("./db.json");
const connect = require("./db");
const Dog = require("./models/dogModel");
const { saveToDatabase } = require("./utils");

async function getAllDogs() {
  try {
    let dbData = await Dog.find({});
    return dbData;
  } catch (err) {
    console.log(err);
  }
}

const createNewDog = (newDog) => {
  console.log(newDog);
  DB.dogs.push(newDog);
  saveToDatabase(DB);
  return newDog;
};

module.exports = { getAllDogs, createNewDog };
