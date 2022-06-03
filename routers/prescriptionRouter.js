/**
 * Required for express app
 */
const express = require('express');
const router = express.Router();


/**
 * Getting controllers.
 */
const prescriptionController = require('../controllers/prescriptionController.js');

/**
 * Define the prescription page route and go respective function.
 */
router.get('/prescription', prescriptionController.doctorPrescription);
router.get('/viewprescription/:id', prescriptionController.viewPrescription);
router.post('/prescription', prescriptionController.insertInformation);

/**
 * Exports router
 */
module.exports = router;