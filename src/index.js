const express = require("express"); 
const bodyParser = require("body-parser");

const v1DogRouter = require("./v1/routes/dogRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use("/api/v1/dogs", v1DogRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});