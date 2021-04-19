'use strict';
const mongoose = require('mongoose');

const schema_usuario = new mongoose.Schema({
    nombreNegocio: { type: String, required: true, unique: false },
    nombre: { type: String, required: true, unique: false },
    apellido1: { type: String, required: true, unique: false },
    apellido2: { type: String, required: true, unique: false },
    identificacion: { type: String, required: true, unique: true },
    tipo: { type: String, required: true, unique: false },
    contrasenna: { type: String, required: false, unique: false },
    estado: { type: String, required: true, unique: false }

});

module.exports = mongoose.model('Usuario', schema_usuario, 'usuarios');