const TeacherController = require("../controleur/teacher");
const router = require("express").Router();

router.get('/:id', TeacherController.getTeacher);

module.exports = router;
