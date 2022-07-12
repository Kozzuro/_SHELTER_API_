const Dog = require("../database/dog");
const { v4: uuid } = require("uuid");

async function getAllDogs() {
  const allDogs = await Dog.getAllDogs();
  return allDogs;
}

const getOneDog = () => {
  return;
};

const createNewDog = (newDog) => {
  const dogToInsert = {
    ...newDog,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdDog = Dog.createNewDog(dogToInsert);
  return createdDog;
};

const updateOneDog = () => {
  return;
};

const deleteOneDog = () => {
  return;
};

module.exports = {
  getAllDogs,
  getOneDog,
  createNewDog,
  updateOneDog,
  deleteOneDog,
};
