const express = require("express");
const router = express.Router();
/**
 * routing controller
 */
//getting controllers
const loginController = require("../controllers/loginController.js");

router.get("/login",loginController.login);
router.post("/login",loginController.authenticate1);
router.post("/login",loginController.authenticate2);

router.get("/logout",loginController.logout);

module.exports = router;