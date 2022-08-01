const Cat = require("../database/Cat");
const { v4: uuid } = require("uuid");

async function getAllCats() {
  const allCats = await Cat.getAllCats();
  return allCats;
}

async function getCatsPagination(page, limit) {
  const CatPagintaion = await Cat.getCatsPagination(page, limit);
  return CatPagintaion;
}

async function getOneCat(CatId) {
  const cat = await Cat.getOneCat(CatId);
  return cat;
}

async function createNewCat(newCat) {
  const CatToInsert = {
    ...newCat,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdCat = await Cat.createNewCat(CatToInsert);
  return createdCat;
}

async function updateOneCat(CatId, changes) {
  const updatedCat = await Cat.updateOneCat(CatId, changes);
  return updatedCat;
}

async function deleteOneCat(CatId) {
  await Cat.deleteOneCat(CatId);
}

module.exports = {
  getAllCats,
  getCatsPagination,
  createNewCat,
  getOneCat,
  updateOneCat,
  deleteOneCat,
};
