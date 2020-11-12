const TeacherRouter = require('./produit');

const router = require("express").Router();

router.use("/Teacher", TeacherRouter);


module.exports = router;
