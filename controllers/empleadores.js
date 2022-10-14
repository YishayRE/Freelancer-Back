import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerEmpleador = async (req = request, res = response) => {
    const { id } = req.headers;

    const empleador = await services.mongo.empleadores.getEmpleador(id, null);

    res.status(200).json(empleador);
}

const obtenerEmpleadores = async (req = request, res = response) => {
    const query = { estado: true };

    const empleadores = await services.mongo.empleadores.getEmpleador(null, query); 

    res.status(200).json(empleadores);
}

const crearEmpleador = async (req = request, res = response) => {
    const { email, password, nombre, rfc, razon_social } = req.body;

    const empleador = await services.mongo.empleadores.postEmpleador({ email, password, nombre, rfc, razon_social });

    res.status(200).json(empleador);
}

const actualizarEmpleador = async (req = request, res = response) => {
    const { email, password, nombre, rfc, razon_social, id } = req.body;

    const empleador = await services.mongo.empleadores.putEmpleador(id, { email, password, nombre, rfc, razon_social });

    res.status(200).json(empleador);
}

const eliminarEmpleador = async (req = request, res = response) => {
    const { id } = req.headers;

    const empleador = await services.mongo.empleadores.delEmpleador(id);

    res.status(200).json(empleador);
}

export {
    obtenerEmpleador,
    obtenerEmpleadores,
    crearEmpleador,
    actualizarEmpleador,
    eliminarEmpleador
}