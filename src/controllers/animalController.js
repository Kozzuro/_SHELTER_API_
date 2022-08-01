const AnimalService = require("../services/AnimalService");

async function getAllAnimals(req, res) {
  const allAnimals = await AnimalService.getAllAnimals();
  if (allAnimals === undefined || allAnimals.length == 0) {
    res
      .status(404)
      .send({ status: 404, message: "No records, check database!" });
  } else {
    res.status(200).send({ status: "OK", data: allAnimals });
  }
}

async function getAnimalsPagination(req, res) {
  const {
    params: { page, limit },
  } = req;
  if (!page && !limit) {
    return;
  }
  const AnimalPagintaion = await AnimalService.getAnimalsPagination(page, limit);
  res.status(200).send({ status: 200, data: AnimalPagintaion });
}

async function getOneAnimal(req, res) {
  const {
    params: { AnimalId },
  } = req;
  if (!AnimalId) {
    return;
  }
  const Animal = await AnimalService.getOneAnimal(AnimalId);
  if (Animal === undefined || Animal.length == 0) {
    res.status(404).send({ status: 404, message: "Given id does not exists!" });
  } else {
    res.status(200).send({ status: 200, data: Animal });
  }
}

async function createNewAnimal(req, res) {
  const { body } = req;
  const newAnimal = {
    name: body.name,
    breed: body.breed,
    birth: body.birth,
    alive: body.alive,
    microchip: body.microchip,
    images: body.images,
    description: body.description,
    characteristic: body.characteristic,
  };
  const createdAnimal = await AnimalService.createNewAnimal(newAnimal);
  if (!createdAnimal.hasOwnProperty("message")) {
    res.status(201).send({ status: 201, data: createdAnimal });
  } else {
    res
      .status(createdAnimal.status)
      .send({ status: createdAnimal.status, data: createdAnimal.message });
  }
}

async function updateOneAnimal(req, res) {
  const {
    body,
    params: { AnimalId },
  } = req;
  if (!AnimalId) {
    return;
  }
  const Animal = await AnimalService.getOneAnimal(AnimalId);
  if (Animal === undefined || Animal.length == 0) {
    res.status(404).send({
      status: 404,
      message: "Could not update, given id does not exists!",
    });
  } else {
    const updatedAnimal = await AnimalService.updateOneAnimal(AnimalId, body);
    if (!updatedAnimal.hasOwnProperty("message")) {
      res.status(200).send({ status: "OK", data: updatedAnimal });
    } else {
      res
        .status(updatedAnimal.status)
        .send({ status: updatedAnimal.status, data: updatedAnimal.message });
    }
  }
}

async function deleteOneAnimal(req, res) {
  const {
    params: { AnimalId },
  } = req;
  if (!AnimalId) {
    return;
  }
  const Animal = await AnimalService.getOneAnimal(AnimalId);
  if (Animal === undefined || Animal.length == 0) {
    res.status(404).send({
      status: 404,
      message: "Could not delete, given id does not exists!",
    });
  } else {
    await AnimalService.deleteOneAnimal(AnimalId);
    res.status(200).send({ status: 200, message: "Deleted!" });
  }
}

module.exports = {
  getAllAnimals,
  getOneAnimal,
  getAnimalsPagination,
  createNewAnimal,
  updateOneAnimal,
  deleteOneAnimal,
};
