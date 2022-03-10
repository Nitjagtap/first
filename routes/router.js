const express = require("express");
const controller = require("../controllers/Registration Controller");
const router = express.Router();

router.get("/userid",controller.controller);

router.get("/username",controller.controller2)

router.get("/usercity",controller.controller3)

router.get("/userphone",controller.controller4)

router.get("/userpass",controller.controller5)

router.get("/country",controller.controller6)


module.exports = router;