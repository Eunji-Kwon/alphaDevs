const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

//router.post('/', reservationController.createReservation);
//router.get('/:email', reservationController.getReservationByEmail);

router.post('/create_re', reservationController.createReservation);
router.get('/:email', reservationController.getReservationByEmail);

module.exports = router;
