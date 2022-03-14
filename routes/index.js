const express = require("express");
const LoginController = require("../controllers/LoginContoller");
const router = express.Router();



const routes = require("./router");

router.use("/", routes);

module.exports = router;



