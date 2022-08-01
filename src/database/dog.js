const connect = require("./db");
const Dog = require("./models/dogModel");

async function getAllDogs() {
  try {
    let dbData = await Dog.find({}, "-_id -__v");
    return dbData;
  } catch (err) {
    console.log(err);
  }
}

async function getDogsPagination(page, limit) {
  try {
    let dbData = await Dog.paginate({}, {page:page, limit:limit, customLabels: { docs: 'data' }}, "-_id -__v");
    return dbData;
  } catch (err) {
    console.log(err);
  }
}

async function getOneDog(dogId) {
  try {
    let dbData = await Dog.find({ id: dogId }, "-_id -__v");
    return dbData;
  } catch (err) {
    return { status: 404, message: err.message };
  }
}

async function createNewDog(newDog) {
  try {
    let dbData = await Dog.create(newDog);
    return dbData;
  } catch (err) {
    return { status: 400, message: err.message };
  }
}

async function updateOneDog(dogId, changes) {
  const updatedDog = {
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    let dbData = await Dog.updateOne({ id: dogId }, updatedDog);
    return dbData;
  } catch (err) {
    return { status: 400, message: err.message };
  }
}

async function deleteOneDog(dogId) {
  try {
    let dbData = await Dog.deleteOne({ id: dogId });
    return dbData;
  } catch (err) {
    return { status: 400, message: err.message };
  }
}

module.exports = {
  getAllDogs,
  getDogsPagination,
  createNewDog,
  getOneDog,
  updateOneDog,
  deleteOneDog,
};
