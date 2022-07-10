const express = require("express"); 
const v1WorkoutRouter = require("./v1/routes/dogRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use("/api/v1/dogs", v1WorkoutRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});