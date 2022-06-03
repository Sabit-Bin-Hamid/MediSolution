/**
 * setting up express and routing app
 */
const express = require("express");
const router = express.Router();

/**
 * getting the controllers
 */
const paymentController = require("../controllers/paymentController.js");
/**
 * get and post method
 */

router.get("/payform", paymentController.showPayForm);
router.post("/paymentform", paymentController.pay);
router.post("/payment", paymentController.payment);

/**
 * exports module
 */
module.exports = router;