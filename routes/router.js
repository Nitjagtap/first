const express = require("express");
const RegisterController = require("../controllers/RegistrationController");
const LoginController = require('../controllers/LoginContoller')
const DeleteController = require('../controllers/DeleteController');
const UpdateController = require("../controllers/UpdateController");
const Allemployee = require("../controllers/getallemployees");
const router = express.Router();


router.post("/register", RegisterController.register);

router.post("/login", LoginController.login);

router.put("/update", UpdateController.update)

router.delete("/delete", DeleteController.delete);

router.get("/allemployee", Allemployee.allemployee);



module.exports = router;