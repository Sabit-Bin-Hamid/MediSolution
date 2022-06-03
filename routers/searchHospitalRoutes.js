/**
 * setting up express and routing app
 */
const express = require("express");
const router = express.Router();

/**
 * getting the controllers
 */
const searchHospitalController = require("../controllers/searchHospitalController.js");
/**
 * get and post method
 */

router.get("/searchHospital", searchHospitalController.homeHospital);
router.post("/searchHospital", searchHospitalController.searchHospital);


/**
 * exports module
 */
module.exports = router;