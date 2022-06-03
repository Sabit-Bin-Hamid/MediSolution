const express = require("express");
const router = express.Router();

/**
 * routing controller
 */
//getting controllers
const viewAppointmentController = require("../controllers/viewAppointmentController.js");

router.get("/viewAppointment", viewAppointmentController.homeView);
router.post("/viewAppointment", viewAppointmentController.appointmentView);
//router.get("/hospitalsearch",basicControllers.hospitalSearch);



module.exports = router;