const express = require("express");
const AnimalController = require("../../controllers/AnimalController");
const router = express.Router();

/**
 * @openapi
 * /api/v1/Animals:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Returns a list of Animals
 *     tags:
 *       - Animals
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           appliAnimalion/json:
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
 *       401:
 *         description: UNAUTHORIZED
 *         content:
 *           appliAnimalion/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 401
 *                 message:
 *                    type: string 
 *                    example: Unauthorized!
 *       404:
 *         description: NOT FOUND
 *         content:
 *           appliAnimalion/json:
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
router.get("/", AnimalController.getAllAnimals);

router.get("/:page/:limit", AnimalController.getAnimalsPagination);

/**
 * @openapi
 * /api/v1/Animals/{AnimalId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Returns a Animal of given id
 *     parameters:
 *      - name: AnimalId
 *        in: path
 *        required: true
 *        description: ID of Animal
 *     tags:
 *       - Animals
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           appliAnimalion/json:
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
 *       401:
 *         description: UNAUTHORIZED
 *         content:
 *           appliAnimalion/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 401
 *                 message:
 *                    type: string 
 *                    example: Unauthorized!
 *       404:
 *          description: NOT FOUND
 *          content:
 *            appliAnimalion/json:
 *              schema:
 *                type: object
 *                properties:
 *                   status:
 *                     type: string
 *                     example: Not found
 *                   message:
 *                     type: string 
 *                     example: Animal on given id does not exists
 */
router.get("/:AnimalId", AnimalController.getOneAnimal);

/**
 * @openapi
 * /api/v1/Animals/:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Creates new Animal
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         appliAnimalion/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - breed
 *               - birth
 *               - alive
 *               - images
 *               - description
 *               - characteristic
 *             properties:
 *               name:
 *                 type: string
 *               breed:
 *                 type: string
 *               birth:
 *                 type: string
 *               alive:
 *                 type: boolean
 *               microchip:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:                          
 *                   example: image_1.jpg
 *               description:
 *                 type: string
 *               characteristic:
 *                 type: array
 *                 items:                         
 *                   example: example_characteristic
 *     tags:
 *       - Animals
 *     responses:
 *       201:
 *         description: CREATED
 *         content:
 *           appliAnimalion/json:
 *             schema:
 *              type: object
 *              properties:
 *                   status:
 *                     type: string
 *                     example: 201
 *                   message:
 *                     type: string 
 *                     example: Created!
 *       401:
 *         description: UNAUTHORIZED
 *         content:
 *           appliAnimalion/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 401
 *                 message:
 *                    type: string 
 *                    example: Unauthorized!
 *       400:
 *          description: Bad Request
 *          content:
 *            appliAnimalion/json:
 *              schema:
 *                type: object
 *                properties:
 *                   status:
 *                     type: string
 *                     example: 404
 *                   message:
 *                     type: string 
 *                     example: Bad Request!
 */
router.post("/", AnimalController.createNewAnimal);

/**
 * @openapi
 * /api/v1/Animals/{AnimalId}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a Animal
 *     parameters:
 *      - name: AnimalId
 *        in: path
 *        required: true
 *        description: ID of Animal
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         appliAnimalion/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - breed
 *               - birth
 *               - alvie
 *               - images
 *               - description
 *               - characteristic
 *             properties:
 *               name:
 *                 type: string
 *               breed:
 *                 type: string
 *               birth:
 *                 type: string
 *               alive:
 *                 type: boolean
 *               microchip:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:                          
 *                   example: image_1.jpg
 *               description:
 *                 type: string
 *               characteristic:
 *                 type: array
 *                 items:                         
 *                   example: example_characteristic
 *     tags:
 *       - Animals
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           appliAnimalion/json:
 *             schema:
 *              type: object
 *              properties:
 *                   status:
 *                     type: string
 *                     example: 200
 *                   message:
 *                     type: string 
 *                     example: Updated!
*       401:
 *         description: UNAUTHORIZED
 *         content:
 *           appliAnimalion/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 401
 *                 message:
 *                    type: string 
 *                    example: Unauthorized!
 *       404:
 *          description: NOT FOUND
 *          content:
 *            appliAnimalion/json:
 *              schema:
 *                type: object
 *                properties:
 *                   status:
 *                     type: string
 *                     example: 404
 *                   message:
 *                     type: string 
 *                     example: Could not create, given id does not exists!
 */
router.patch("/:AnimalId", AnimalController.updateOneAnimal);

/**
 * @openapi
 * /api/v1/Animals/{AnimalId}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a Animal of given id
 *     parameters:
 *      - name: AnimalId
 *        in: path
 *        required: true
 *        description: ID of Animal
 *     tags:
 *       - Animals
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           appliAnimalion/json:
 *             schema:
 *              type: object
 *              properties:
 *                   status:
 *                     type: string
 *                     example: Not found
 *                   message:
 *                     type: string 
 *                     example: Animal deleted!
*       401:
 *         description: UNAUTHORIZED
 *         content:
 *           appliAnimalion/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 401
 *                 message:
 *                    type: string 
 *                    example: Unauthorized!
 *       404:
 *          description: NOT FOUND
 *          content:
 *            appliAnimalion/json:
 *              schema:
 *                type: object
 *                properties:
 *                   status:
 *                     type: string
 *                     example: Not found
 *                   message:
 *                     type: string 
 *                     example: Could not delete Animal, given id does not exists!
 */
router.delete("/:AnimalId", AnimalController.deleteOneAnimal);

module.exports = router;