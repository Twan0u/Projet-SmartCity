const TaskController = require("../controleur/task");
const router = require("express").Router();

router.get('/:id', TaskController.getTask);
router.post('/', TaskController.postTask);
router.patch('/', TaskController.updateTask);
router.delete('/', TaskController.deleteTask);

module.exports = router;