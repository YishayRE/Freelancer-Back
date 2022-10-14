import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerConversacion = async (req = request, res = response) => {
    const { id } = req.headers;

    const conversacion = await services.mongo.conversaciones.getConversacion(id, null);

    res.status(200).json(conversacion);
}

const obtenerConversaciones = async (req = request, res = response) => {
    const query = { estado: true };

    const conversaciones = await services.mongo.conversaciones.getConversacion(null, query); 

    res.status(200).json(conversaciones);
}

const crearConversacion = async (req = request, res = response) => {
    const { proyecto, usuario, empleador, mensaje, estado } = req.body;

    const conversacion = await services.mongo.conversaciones.postConversacion({ proyecto, usuario, empleador, mensaje, estado });

    res.status(200).json(conversacion);
}

const actualizarConversacion = async (req = request, res = response) => {
    const { proyecto, usuario, empleador, mensaje, estado, id } = req.body;

    const conversacion = await services.mongo.conversaciones.putConversacion(id, { proyecto, usuario, empleador, mensaje, estado });

    res.status(200).json(conversacion);
}

const eliminarConversacion = async (req = request, res = response) => {
    const { id } = req.headers;

    const conversacion = await services.mongo.conversaciones.delConversacion(id);

    res.status(200).json(conversacion);
}

export {
    obtenerConversacion,
    obtenerConversaciones,
    crearConversacion,
    actualizarConversacion,
    eliminarConversacion
}