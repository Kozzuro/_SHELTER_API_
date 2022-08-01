const connect = require("./db");
const Cat = require("./models/CatModel");

async function getAllCats() {
  try {
    let dbData = await Cat.find({}, "-_id -__v");
    return dbData;
  } catch (err) {
    console.log(err);
  }
}

async function getCatsPagination(page, limit) {
  try {
    let dbData = await Cat.paginate({}, {page:page, limit:limit, customLabels: { docs: 'data' }}, "-_id -__v");
    return dbData;
  } catch (err) {
    console.log(err);
  }
}

async function getOneCat(CatId) {
  try {
    let dbData = await Cat.find({ id: CatId }, "-_id -__v");
    return dbData;
  } catch (err) {
    return { status: 404, message: err.message };
  }
}

async function createNewCat(newCat) {
  try {
    let dbData = await Cat.create(newCat);
    return dbData;
  } catch (err) {
    return { status: 400, message: err.message };
  }
}

async function updateOneCat(CatId, changes) {
  const updatedCat = {
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    let dbData = await Cat.updateOne({ id: CatId }, updatedCat);
    return dbData;
  } catch (err) {
    return { status: 400, message: err.message };
  }
}

async function deleteOneCat(CatId) {
  try {
    let dbData = await Cat.deleteOne({ id: CatId });
    return dbData;
  } catch (err) {
    return { status: 400, message: err.message };
  }
}

module.exports = {
  getAllCats,
  getCatsPagination,
  createNewCat,
  getOneCat,
  updateOneCat,
  deleteOneCat,
};
