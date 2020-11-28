const TestControleur = require("../controleur/test");
const router = require("express").Router();

router.get('/:id', TestControleur.getTest);
router.post('/', TestControleur.postTest);
router.patch('/', TestControleur.updateTest);
router.delete('/', TestControleur.deleteTest);

module.exports = router;
