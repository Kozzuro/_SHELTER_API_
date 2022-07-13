const express = require("express");
const dogController = require("../../controllers/dogController");

const router = express.Router();

/**
 * @openapi
 * /api/v1/dogs:
 *   get:
 *     tags:
 *       - Dogs
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get("/", dogController.getAllDogs);

router.get("/:dogId", dogController.getOneDog);

router.post("/", dogController.createNewDog);

router.patch("/:dogId", dogController.updateOneDog);

router.delete("/:dogId", dogController.deleteOneDog);

module.exports = router;