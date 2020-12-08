const router = require("express").Router();

const ClassController = require("../controleur/class");

const authToken = require("../middleware/authToken").authToken;
const permit = require('../middleware/roleAuth').permit;

router.get('/teacher',authToken,permit("teacher","pupil"), ClassController.getClassTeacher);
router.get('/pupils',authToken,permit("teacher"), ClassController.getPupilsInClass);
router.get('/',authToken,permit("teacher","pupil"), ClassController.getClass);

module.exports = router;