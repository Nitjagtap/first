const express = require("express");
const Controller = require("../controllers/Registration Controller");
const router = express.Router();

router.post("/register",Controller.controller);
router.get("/userid",Controller.controller1);


module.exports = router;