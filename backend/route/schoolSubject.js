const SchoolSubjectController = require("../controleur/schoolSubject");
const router = require("express").Router();

router.get('/:id', SchoolSubjectController.getSchoolSubject);

module.exports = router;