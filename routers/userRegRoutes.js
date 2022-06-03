const express = require("express");
const router = express.Router();
/**
 * routing controller
 */
//getting controllers
const userRegController = require("../controllers/userRegController.js");
router.get("/userReg", userRegController.homeUserReg);
router.post("/userReg", userRegController.userReg);
//router.get("/hospitalsearch",basicControllers.hospitalSearch);



module.exports = router;