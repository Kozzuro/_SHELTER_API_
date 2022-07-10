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
  const { body } = req;
  if (
    !body.name ||
    !body.breed ||
    !body.age ||
    !body.images ||
    !body.description ||
    !body.characteristic
  ) {
    return;
  }
  const newDog = {
    name: body.name,
    breed: body.breed,
    age: body.age,
    images: body.images,
    description: body.description,
    characteristic: body.characteristic,
  };
  const createdDog = dogService.createNewDog(newDog);
  res.status(201).send({ status: "OK", data: createdDog });
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
