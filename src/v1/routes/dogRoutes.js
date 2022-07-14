const express = require("express");
const dogController = require("../../controllers/dogController");

const router = express.Router();

/**
 * @openapi
 * /api/v1/dogs:
 *   get:
 *     summary: Returns a list of dogs
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
 *       404:
 *         description: NOT FOUND
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: string
 *                    example: Not found
 *                  message:
 *                    type: string 
 *                    example: No record
 */
router.get("/", dogController.getAllDogs);

/**
 * @openapi
 * /api/v1/dogs/{dogId}:
 *   get:
 *     summary: Returns a dog of given id
 *     parameters:
 *      - name: dogId
 *        in: path
 *        required: true
 *        description: ID of dog
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
 *       404:
 *          description: NOT FOUND
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                   status:
 *                     type: string
 *                     example: Not found
 *                   message:
 *                     type: string 
 *                     example: Dog on given id does not exists
 */
router.get("/:dogId", dogController.getOneDog);

router.post("/", dogController.createNewDog);

router.patch("/:dogId", dogController.updateOneDog);

/**
 * @openapi
 * /api/v1/dogs/{dogId}:
 *   delete:
 *     summary: Delete a dog of given id
 *     parameters:
 *      - name: dogId
 *        in: path
 *        required: true
 *        description: ID of dog
 *     tags:
 *       - Dogs
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                   status:
 *                     type: string
 *                     example: Not found
 *                   message:
 *                     type: string 
 *                     example: Dog deleted!
 *       404:
 *          description: NOT FOUND
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                   status:
 *                     type: string
 *                     example: Not found
 *                   message:
 *                     type: string 
 *                     example: Could not delete dog, given id does not exists!
 */
router.delete("/:dogId", dogController.deleteOneDog);

module.exports = router;