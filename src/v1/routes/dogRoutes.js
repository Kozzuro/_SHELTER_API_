const express = require("express");
const dogController = require("../../controllers/dogController");

const router = express.Router();

router.get("/", dogController.getAllDogs);

router.get("/:dogId", dogController.getOneDog);

router.post("/", dogController.createNewDog);

router.patch("/:dogId", dogController.updateOneDog);

router.delete("/:dogId", dogController.deleteOneDog);

module.exports = router;