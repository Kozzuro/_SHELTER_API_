const DB = require("./db.json");
const Dog = require("./dogModel");
const mongoose = require("mongoose");
const { saveToDatabase } = require("./utils");

const username = "Kozzuro";
const password = "AUeYjKGSTZ0fwYLm";
const cluster = "cluster.6ebvk";
const dbname = "shelter";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

const getAllDogs = () => {
  return DB.dogs;
};

const createNewDog = (newDog) => {
  console.log(newDog);
  DB.dogs.push(newDog);
  saveToDatabase(DB);
  return newDog;
};

module.exports = { getAllDogs, createNewDog };
