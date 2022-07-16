const Dog = require("../database/dog");
const { v4: uuid } = require("uuid");

async function getAllDogs() {
  const allDogs = await Dog.getAllDogs();
  return allDogs;
}

async function getDogsPagination(page, limit) {
  const dogPagintaion = await Dog.getDogsPagination(page, limit);
  return dogPagintaion;
}

async function getOneDog(dogId) {
  const dog = await Dog.getOneDog(dogId);
  return dog;
};

async function createNewDog(newDog) {
  const dogToInsert = {
    ...newDog,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdDog = await Dog.createNewDog(dogToInsert);
  return createdDog;
}

async function updateOneDog(dogId, changes) {
  const updatedDog = await Dog.updateOneDog(dogId, changes);
  return updatedDog;
};

async function deleteOneDog(dogId) {
  await Dog.deleteOneWorkout(dogId);
};

module.exports = {
  getAllDogs,
  getDogsPagination,
  getOneDog,
  createNewDog,
  updateOneDog,
  deleteOneDog,
};
