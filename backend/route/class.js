const ClassController = require("../controleur/class");
const router = require("express").Router();

router.get('/:id', ClassController.getClasse);

module.exports = router;