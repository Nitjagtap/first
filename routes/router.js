const express = require("express");
const RegisterController = require("../controllers/RegistrationController");
const LoginController = require('../controllers/LoginContoller')
const DeleteController = require('../controllers/DeleteController');
const UpdateController = require("../controllers/UpdateController");
const router = express.Router();

router.post("/register", RegisterController.register);

router.post("/login", LoginController.login);

router.put("/update", UpdateController.update)

router.delete("/delete", DeleteController.delete)


module.exports = router;