const express = require("express");
const router = express.Router();
/**
 * routing controller
 */
//getting controllers
const homecontroller= require("../controllers/homeController.js");

router.get("/home",homecontroller.home);
router.get("/homedoc",homecontroller.homedoc);

module.exports = router;