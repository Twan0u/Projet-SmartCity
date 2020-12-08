const LoginController = require("../controleur/login");
const router = require("express").Router();

router.post('/', LoginController.getToken);

module.exports = router;