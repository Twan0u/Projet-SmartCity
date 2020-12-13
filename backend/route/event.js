const EventControleur = require("../controleur/event");
const router = require("express").Router();

const authToken = require("../middleware/authToken").authToken;
const permit = require('../middleware/roleAuth').permit;

router.get('/',authToken,permit("teacher","pupil"), EventControleur.getEvents);
router.get('/today',authToken,permit("teacher","pupil"), EventControleur.getTodayEvents);
router.get('/week',authToken,permit("teacher","pupil"), EventControleur.getWeekEvents);
router.post('/',authToken,permit("teacher"), EventControleur.postEvent);
router.patch('/',authToken,permit("teacher"), EventControleur.updateEvent);
router.delete('/',authToken,permit("teacher"), EventControleur.deleteEvent);

module.exports = router;