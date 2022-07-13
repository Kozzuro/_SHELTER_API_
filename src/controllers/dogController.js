const dogService = require("../services/dogService");

async function getAllDogs(req, res) {
  const allDogs = await dogService.getAllDogs();
  if (allDogs === undefined || allDogs.length == 0) {
    res.status(404).send({ status: 404, message: "No record!" });
  } else {
    res.status(200).send({ status: "OK", data: allDogs });
  }
}

async function getOneDog(req, res) {
  const {
    params: { dogId },
  } = req;
  if (!dogId) {
    return;
  }
  const dog = await dogService.getOneDog(dogId);
  if (dog === undefined || dog.length == 0) {
    res
      .status(404)
      .send({ status: 404, message: "Dog on given id does not exists!" });
  } else {
    res.status(200).send({ status: 200, data: dog });
  }
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
  if (!createdDog.hasOwnProperty("message")) {
    res.status(201).send({ status: 201, data: createdDog });
  } else {
    res
      .status(createdDog.status)
      .send({ status: createdDog.status, data: createdDog.message });
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
  const dog = await dogService.getOneDog(dogId);
  if (dog === undefined || dog.length == 0) {
    res
      .status(404)
      .send({
        status: 404,
        message: "Could not update dog, given id does not exists!",
      });
  } else {
    const updatedDog = await dogService.updateOneDog(dogId, body);
    if (!updatedDog.hasOwnProperty("message")) {
      res.status(200).send({ status: "OK", data: updatedDog });
    } else {
      res
        .status(updatedDog.status)
        .send({ status: updatedDog.status, data: updatedDog.message });
    }
  }
}

async function deleteOneDog(req, res) {
  const {
    params: { dogId },
  } = req;
  if (!dogId) {
    return;
  }
  const dog = await dogService.getOneDog(dogId);
  if (dog === undefined || dog.length == 0) {
    res
      .status(404)
      .send({
        status: 404,
        message: "Could not delete dog, given id does not exists!",
      });
  } else {
    await dogService.deleteOneDog(dogId);
    res.status(200).send({ status: 200, message: "Dog deleted!" });
  }
}

module.exports = {
  getAllDogs,
  getOneDog,
  createNewDog,
  updateOneDog,
  deleteOneDog,
};
