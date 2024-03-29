const express = require("express");
const dogController = require("../../controllers/dogController");
const router = express.Router();

/**
 * @openapi
 * /api/v1/dogs:
 *   get:
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: UNAUTHORIZED
 *         content:
 *           application/json:
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

router.get("/:page/:limit", dogController.getDogsPagination);

/**
 * @openapi
 * /api/v1/dogs/{dogId}:
 *   get:
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: UNAUTHORIZED
 *         content:
 *           application/json:
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

/**
 * @openapi
 * /api/v1/dogs/:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Creates new dog
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
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
 *       - Dogs
 *     responses:
 *       201:
 *         description: CREATED
 *         content:
 *           application/json:
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
 *           application/json:
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
 *            application/json:
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
router.post("/", dogController.createNewDog);

/**
 * @openapi
 * /api/v1/dogs/{dogId}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a dog
 *     parameters:
 *      - name: dogId
 *        in: path
 *        required: true
 *        description: ID of dog
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
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
 *                     example: 200
 *                   message:
 *                     type: string 
 *                     example: Updated!
*       401:
 *         description: UNAUTHORIZED
 *         content:
 *           application/json:
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
 *            application/json:
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
router.patch("/:dogId", dogController.updateOneDog);

/**
 * @openapi
 * /api/v1/dogs/{dogId}:
 *   delete:
 *     security:
 *       - bearerAuth: []
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
*       401:
 *         description: UNAUTHORIZED
 *         content:
 *           application/json:
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