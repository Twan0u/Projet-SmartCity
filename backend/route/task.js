const TaskController = require("../controleur/task");
const router = require("express").Router();

const authToken = require("../middleware/authToken").authToken;
const permit = require('../middleware/roleAuth').permit;

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Returns all the task of class in which the user is a part of.
 *      tags:
 *          - task
 *      security:
 *          - bearerAuth: []
 *          # permit todo
 *      parameters:
 *        - in: header
 *          name: Authorization
 *          schema:
 *            type: string
 *            format: JWT
 *          required: true
 *      responses:
 *          '200':
 *              description: A JSON Array of tasks
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Task'
 *          '401':
 *              description: Authorization information is missing or invalid.
 *          '403':
 *              description: The role of the user does not permit that action
 *          '404':
 *              description: No task was found
 *          '5XX':
 *              description: Unexpected error.
 *
 */
router.get('/',authToken,permit("teacher","pupil"), TaskController.getTasks);
/**
 * @swagger
 * /tasks/today:
 *  get:
 *      summary: Returns all the task for the class for today
 *      tags:
 *          - task
 *      security:
 *          - bearerAuth: []
 *          # permit todo
 *      parameters:
 *        - in: header
 *          name: Authorization
 *          schema:
 *            type: string
 *            format: JWT
 *          required: true
 *      responses:
 *          '200':
 *              description: A JSON Array of tasks
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Task'
 *          '401':
 *              description: Authorization information is missing or invalid.
 *          '403':
 *              description: The role of the user does not permit that action
 *          '404':
 *              description: No task was found
 *          '5XX':
 *              description: Unexpected error.
 *
 */
router.get('/today',authToken,permit("teacher","pupil"), TaskController.getTodayTasks);

/**
 * @swagger
 * /tasks/week:
 *  get:
 *      summary: Returns all the task due for the class from tomorrow to the end of the week
 *      tags:
 *          - task
 *      security:
 *          - bearerAuth: []
 *          # permit todo
 *      parameters:
 *        - in: header
 *          name: Authorization
 *          schema:
 *            type: string
 *            format: JWT
 *          required: true
 *      responses:
 *          '200':
 *              description: A JSON Array of tasks
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Task'
 *          '401':
 *              description: Authorization information is missing or invalid.
 *          '403':
 *              description: The role of the user does not permit that action
 *          '404':
 *              description: No task was found
 *          '5XX':
 *              description: Unexpected error.
 *
 */
router.get('/week',authToken,permit("teacher","pupil"), TaskController.getWeekTasks);
router.post('/',authToken,permit("teacher"), TaskController.postTask);
router.patch('/:id',authToken,permit("teacher"), TaskController.updateTask);
router.delete('/:id',authToken,permit("teacher"), TaskController.deleteTask);

module.exports = router;