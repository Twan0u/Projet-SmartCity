const EventControleur = require("../controleur/event");
const router = require("express").Router();

router.get('/:id', EventControleur.getEvent);
router.post('/', EventControleur.postEvent);
router.patch('/', EventControleur.updateEvent);
router.delete('/', EventControleur.deleteEvent);

module.exports = router;