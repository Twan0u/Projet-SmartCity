const TestController = require("../controleur/test");
const router = require("express").Router();

router.get('/', TestController.getTests);
router.get('/unsigned', TestController.getUnsigned);
router.get('/today', TestController.getTodayTests);
router.get('/week', TestController.getWeekTests);
router.post('/', TestController.addTest);
router.patch('/:id', TestController.updateTest);
router.delete('/:id', TestController.deleteTest);

module.exports = router;
