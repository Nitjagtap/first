const express = require("express");
const RegisterController = require("../controllers/RegistrationController");
const LoginController = require('../controllers/LoginContoller')
const router = express.Router();

router.post("/register", RegisterController.register);
router.post("/login", LoginController.login);


module.exports = router;