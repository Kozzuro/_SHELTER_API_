const dogService = require("../services/dogService");

const getAllDogs = (req, res) => {
  const allDogs = dogService.getAllDogs();
  res.send({ status: "OK", data: allDogs });
};

const getOneDog = (req, res) => {
  const dog = dogService.getOneDog();
  res.send("Get an existing dog");
};

const createNewDog = (req, res) => {
  const createdDog = dogService.createNewDog();
  res.send("Create a new dog");
};

const updateOneDog = (req, res) => {
  const updatedDog = dogService.updateOneDog();
  res.send("Update an existing dog");
};

const deleteOneDog = (req, res) => {
  dogService.deleteOneDog();
  res.send("Delete an existing dog");
};

module.exports = {
  getAllDogs,
  getOneDog,
  createNewDog,
  updateOneDog,
  deleteOneDog,
};
