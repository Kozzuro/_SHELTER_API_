const Dogs = require("../database/Dog");

const getAllDogs = () => {
  const allDogs = Dogs.getAllDogs();
  return allDogs;
};

const getOneDog = () => {
  return;
};

const createNewDog = () => {
  return;
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
