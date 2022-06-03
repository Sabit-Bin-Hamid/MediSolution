/**
 * setting up express and routing app
 */
const express = require("express");
const router = express.Router();

/**
 * getting the controllers
 */
const searchMedicineController = require("../controllers/searchMedicineController.js");
/**
 * get and post method
 */

router.get("/searchMedicine", searchMedicineController.homeMedicine);
router.post("/searchMedicine", searchMedicineController.searchMedicine);



/**
 * exports module
 */
module.exports = router;