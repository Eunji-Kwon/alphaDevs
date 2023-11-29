const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const reservation = require('../models/reservation');

router.post('/', reservationController.createReservation);
router.get('/:email', reservationController.getReservationByEmail);

module.exports = router;