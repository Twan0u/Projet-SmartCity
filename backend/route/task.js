const TaskController = require("../controleur/task");
const router = require("express").Router();

router.get('/', TaskController.getTask);
router.post('/', TaskController.postTask);
router.patch(':id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);

module.exports = router;