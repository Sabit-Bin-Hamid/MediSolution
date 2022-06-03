/**
 * setting up express and routing app
 */
const express = require("express");
const router = express.Router();

/**
 * getting the controllers
 */
const searchDoctorController = require("../controllers/searchDoctorController.js");
/**
 * get and post method
 */

router.get("/searchDoctor", searchDoctorController.homeDoctor);
router.post("/searchDoctor", searchDoctorController.searchDoctor);
//router.get("/hospitalsearch",basicControllers.hospitalSearch);


/**
 * exports module
 */
module.exports = router;