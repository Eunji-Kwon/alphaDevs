const Reservation = require('../models/ReservationModel');

exports.createReservation = async (req, res) => {
    try {
        const newReservation = new Reservation(req.body);
        await newReservation.save();
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getReservationByEmail = async (req, res) => {
    try {
        if(req.params.email === "admin@gmail.com") {
            const reservation = await Reservation.find();
            if (!reservation) {
                return res.status(404).json({ message: 'Reservation not found' });
            }
            res.json(reservation);
        } else {
            const reservation = await Reservation.findOne({ contact: req.params.email });
            if (!reservation) {
                return res.status(404).json({ message: 'Reservation not found' });
            }
            res.json(reservation);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};