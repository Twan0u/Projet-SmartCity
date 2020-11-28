const PupilControleur = require("../controleur/pupil");
const router = require("express").Router();

router.get('/:id', PupilControleur.getPupil);

module.exports = router;