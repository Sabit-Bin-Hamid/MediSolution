const express = require("express");
const router = express.Router();
/**
 * routing controllers
 */
//getting controllers
const appointmentController = require("../controllers/appointmentController.js");

router.get("/appointment",appointmentController.homeAppointment);
router.post("/appointment",appointmentController.appointment);


module.exports = router;