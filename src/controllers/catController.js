const CatService = require("../services/CatService");

async function getAllCats(req, res) {
  const allCats = await CatService.getAllCats();
  if (allCats === undefined || allCats.length == 0) {
    res
      .status(404)
      .send({ status: 404, message: "No records, check database!" });
  } else {
    res.status(200).send({ status: "OK", data: allCats });
  }
}

async function getCatsPagination(req, res) {
  const {
    params: { page, limit },
  } = req;
  if (!page && !limit) {
    return;
  }
  const CatPagintaion = await CatService.getCatsPagination(page, limit);
  res.status(200).send({ status: 200, data: CatPagintaion });
}

async function getOneCat(req, res) {
  const {
    params: { CatId },
  } = req;
  if (!CatId) {
    return;
  }
  const Cat = await CatService.getOneCat(CatId);
  if (Cat === undefined || Cat.length == 0) {
    res.status(404).send({ status: 404, message: "Given id does not exists!" });
  } else {
    res.status(200).send({ status: 200, data: Cat });
  }
}

async function createNewCat(req, res) {
  const { body } = req;
  const newCat = {
    name: body.name,
    breed: body.breed,
    birth: body.birth,
    alive: body.alive,
    microchip: body.microchip,
    images: body.images,
    description: body.description,
    characteristic: body.characteristic,
  };
  const createdCat = await CatService.createNewCat(newCat);
  if (!createdCat.hasOwnProperty("message")) {
    res.status(201).send({ status: 201, data: createdCat });
  } else {
    res
      .status(createdCat.status)
      .send({ status: createdCat.status, data: createdCat.message });
  }
}

async function updateOneCat(req, res) {
  const {
    body,
    params: { CatId },
  } = req;
  if (!CatId) {
    return;
  }
  const Cat = await CatService.getOneCat(CatId);
  if (Cat === undefined || Cat.length == 0) {
    res.status(404).send({
      status: 404,
      message: "Could not update, given id does not exists!",
    });
  } else {
    const updatedCat = await CatService.updateOneCat(CatId, body);
    if (!updatedCat.hasOwnProperty("message")) {
      res.status(200).send({ status: "OK", data: updatedCat });
    } else {
      res
        .status(updatedCat.status)
        .send({ status: updatedCat.status, data: updatedCat.message });
    }
  }
}

async function deleteOneCat(req, res) {
  const {
    params: { CatId },
  } = req;
  if (!CatId) {
    return;
  }
  const Cat = await CatService.getOneCat(CatId);
  if (Cat === undefined || Cat.length == 0) {
    res.status(404).send({
      status: 404,
      message: "Could not delete, given id does not exists!",
    });
  } else {
    await CatService.deleteOneCat(CatId);
    res.status(200).send({ status: 200, message: "Deleted!" });
  }
}

module.exports = {
  getAllCats,
  getOneCat,
  getCatsPagination,
  createNewCat,
  updateOneCat,
  deleteOneCat,
};
