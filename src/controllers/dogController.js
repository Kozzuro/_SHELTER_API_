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

// const getOneDog = (req, res) => {
//   const dog = dogService.getOneDog();
//   res.send("Get an existing dog");
// };

async function createNewDog(req, res) {
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
  const createdDog = await dogService.createNewDog(newDog);
  res.status(201).send({ status: "OK", data: createdDog });
}

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
