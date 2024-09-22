const db = require('../db');

const Reserva = {
    crearReserva: (datos, callback) => {
        const { nombre, email, personas, fecha, hora } = datos;
        const query = `INSERT INTO reservas (nombre, email, personas, fecha, hora) VALUES (?, ?, ?, ?, ?)`;
        db.query(query, [nombre, email, personas, fecha, hora], callback);
    },

    obtenerReservas: (callback) => {
        const query = 'SELECT * FROM reservas';
        db.query(query, callback);
    },

    cancelarReserva: (id, callback) => {
        const query = 'DELETE FROM reservas WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Reserva;
