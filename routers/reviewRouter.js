const express = require('express');
const router = express.Router();

/**
 * -- routering
 */
// getting controllers
const basicController = require('../controllers/reviewController.js');

router.get("/Review", basicController.Review)
router.get("/viewReview", basicController.viewReview)
router.post("/Review", basicController.Insertinfo)

module.exports = router;