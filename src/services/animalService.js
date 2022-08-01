const Animal = require("../database/Animal");
const { v4: uuid } = require("uuid");

async function getAllAnimals() {
  const allAnimals = await Animal.getAllAnimals();
  return allAnimals;
}

async function getAnimalsPagination(page, limit) {
  const AnimalPagintaion = await Animal.getAnimalsPagination(page, limit);
  return AnimalPagintaion;
}

async function getOneAnimal(AnimalId) {
  const animal = await Animal.getOneAnimal(AnimalId);
  return animal;
}

async function createNewAnimal(newAnimal) {
  const AnimalToInsert = {
    ...newAnimal,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdAnimal = await Animal.createNewAnimal(AnimalToInsert);
  return createdAnimal;
}

async function updateOneAnimal(AnimalId, changes) {
  const updatedAnimal = await Animal.updateOneAnimal(AnimalId, changes);
  return updatedAnimal;
}

async function deleteOneAnimal(AnimalId) {
  await Animal.deleteOneAnimal(AnimalId);
}

module.exports = {
  getAllAnimals,
  getAnimalsPagination,
  createNewAnimal,
  getOneAnimal,
  updateOneAnimal,
  deleteOneAnimal,
};
