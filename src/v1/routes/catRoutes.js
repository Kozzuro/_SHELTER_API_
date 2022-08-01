const express = require("express");
const CatController = require("../../controllers/CatController");
const router = express.Router();

/**
 * @openapi
 * /api/v1/Cats:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Returns a list of Cats
 *     tags:
 *       - Cats
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
router.get("/", CatController.getAllCats);

router.get("/:page/:limit", CatController.getCatsPagination);

/**
 * @openapi
 * /api/v1/Cats/{CatId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Returns a Cat of given id
 *     parameters:
 *      - name: CatId
 *        in: path
 *        required: true
 *        description: ID of Cat
 *     tags:
 *       - Cats
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
 *                     example: Cat on given id does not exists
 */
router.get("/:CatId", CatController.getOneCat);

/**
 * @openapi
 * /api/v1/Cats/:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Creates new Cat
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
 *       - Cats
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
router.post("/", CatController.createNewCat);

/**
 * @openapi
 * /api/v1/Cats/{CatId}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a Cat
 *     parameters:
 *      - name: CatId
 *        in: path
 *        required: true
 *        description: ID of Cat
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
 *       - Cats
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
router.patch("/:CatId", CatController.updateOneCat);

/**
 * @openapi
 * /api/v1/Cats/{CatId}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a Cat of given id
 *     parameters:
 *      - name: CatId
 *        in: path
 *        required: true
 *        description: ID of Cat
 *     tags:
 *       - Cats
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
 *                     example: Cat deleted!
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
 *                     example: Could not delete Cat, given id does not exists!
 */
router.delete("/:CatId", CatController.deleteOneCat);

module.exports = router;