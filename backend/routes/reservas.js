const express = require('express');
const router = express.Router();
const Reserva = require('../models/reserva');

// Crear reserva
router.post('/', (req, res) => {
    Reserva.crearReserva(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: 'Reserva creada exitosamente', result });
    });
});

router.get('/', (req, res) => {
    Reserva.obtenerReservas((err, result) => {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
});

// Cancelar reserva
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Reserva.cancelarReserva(id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Reserva cancelada exitosamente' });
    });
});

module.exports = router;
