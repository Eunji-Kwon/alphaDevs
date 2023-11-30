const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const reservation = require('../models/reservation');

//router.post('/', reservationController.createReservation);
//router.get('/:email', reservationController.getReservationByEmail);

router.post('/create_re', reservationController.createReservation);
router.get('/:email', reservation.getReservationByEmail);

module.exports = router;