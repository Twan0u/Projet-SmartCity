const TutorController = require("../controleur/tutor");
const router = require("express").Router();

const authToken = require("../middleware/authToken").authToken;
const permit = require('../middleware/roleAuth').permit;

router.get('/pupils',authToken,permit("tutor"), TutorController.getPupils);
router.post('/add/pupil',authToken,permit("tutor"), TutorController.addPupil);

module.exports = router;