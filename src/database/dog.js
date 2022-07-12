const connect = require("./db");
const Dog = require("./models/dogModel");

async function getAllDogs() {
  try {
    let dbData = await Dog.find({});
    return dbData;
  } catch (err) {
    console.log(err);
  }
}

async function getOneDog(dogId) {
  try {
    let dbData = await Dog.find({ id: dogId });
    return dbData;
  } catch (err) {
    console.log(err);
  }
}

async function createNewDog(newDog) {
  try {
    let dbData = await Dog.create(newDog);
    return dbData;
  } catch (err) {
    console.log(err);
  }
}

async function deleteOneWorkout(dogId) {
  try {
    let dbData = await Dog.deleteOne({ id: dogId });
    return dbData;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getAllDogs, createNewDog, getOneDog, deleteOneWorkout };
