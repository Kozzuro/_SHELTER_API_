const connect = require("./db");
const Animal = require("./models/AnimalModel");

async function getAllAnimals() {
  try {
    let dbData = await Animal.find({}, "-_id -__v");
    return dbData;
  } catch (err) {
    console.log(err);
  }
}

async function getAnimalsPagination(page, limit) {
  try {
    let dbData = await Animal.paginate({}, {page:page, limit:limit, customLabels: { docs: 'data' }}, "-_id -__v");
    return dbData;
  } catch (err) {
    console.log(err);
  }
}

async function getOneAnimal(AnimalId) {
  try {
    let dbData = await Animal.find({ id: AnimalId }, "-_id -__v");
    return dbData;
  } catch (err) {
    return { status: 404, message: err.message };
  }
}

async function createNewAnimal(newAnimal) {
  try {
    let dbData = await Animal.create(newAnimal);
    return dbData;
  } catch (err) {
    return { status: 400, message: err.message };
  }
}

async function updateOneAnimal(AnimalId, changes) {
  const updatedAnimal = {
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    let dbData = await Animal.updateOne({ id: AnimalId }, updatedAnimal);
    return dbData;
  } catch (err) {
    return { status: 400, message: err.message };
  }
}

async function deleteOneAnimal(AnimalId) {
  try {
    let dbData = await Animal.deleteOne({ id: AnimalId });
    return dbData;
  } catch (err) {
    return { status: 400, message: err.message };
  }
}

module.exports = {
  getAllAnimals,
  getAnimalsPagination,
  createNewAnimal,
  getOneAnimal,
  updateOneAnimal,
  deleteOneAnimal,
};
