const mongoose = require("mongoose");

const username = "Kozzuro";
const password = "AUeYjKGSTZ0fwYLm";
const cluster = "cluster.6ebvk";
const dbname = "shelter";
const mongoAtlasUri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

try {
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}


