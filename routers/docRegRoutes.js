const express = require("express");
const router = express.Router();
/**
 * routing controller
 */
//getting controllers
const docRegController = require("../controllers/docRegController.js");
router.get("/docReg", docRegController.homeDocReg);
router.post("/docReg", docRegController.docReg);
//router.get("/hospitalsearch",basicControllers.hospitalSearch);



module.exports = router;