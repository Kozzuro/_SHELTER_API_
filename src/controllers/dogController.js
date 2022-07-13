const dogService = require("../services/dogService");

async function getAllDogs(req, res) {
  const allDogs = await dogService.getAllDogs();
  res.send({ status: "OK", data: allDogs });
}

async function getOneDog(req, res) {
  const {
    params: { dogId },
  } = req;
  if (!dogId) {
    return;
  }
  const dog = await dogService.getOneDog(dogId);
  res.send({ status: "OK", data: dog });
}

async function createNewDog(req, res) {
  const { body } = req;
  const newDog = {
    name: body.name,
    breed: body.breed,
    birth: body.birth,
    images: body.images,
    description: body.description,
    characteristic: body.characteristic,
  };
  const createdDog = await dogService.createNewDog(newDog);
  if(!createdDog.hasOwnProperty('error')){
    res.status(201).send({ status: 201, data: createdDog });
  }else{
    res.status(createdDog.status).send({ status: createdDog.status, data: createdDog.message });
  }
}

async function updateOneDog(req, res) {
  const {
    body,
    params: { dogId },
  } = req;
  if (!dogId) {
    return;
  }
  const updatedDog = await dogService.updateOneDog(dogId, body);
  res.send({ status: "OK", data: updatedDog });
}

async function deleteOneDog(req, res) {
  const {
    params: { dogId },
  } = req;
  if (!dogId) {
    return;
  }
  await dogService.deleteOneDog(dogId);
  res.status(204).send({ status: "OK" });
}

module.exports = {
  getAllDogs,
  getOneDog,
  createNewDog,
  updateOneDog,
  deleteOneDog,
};
