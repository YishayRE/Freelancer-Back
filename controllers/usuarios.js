import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerUsuario = async (req = request, res = response) => {
    const { id } = req.headers;

    const usuario = await services.mongo.usuarios.getUsuario(id, null);

    res.status(200).json(usuario);
}

const obtenerUsuarios = async (req = request, res = response) => {
    const query = { estado: true };

    const usuarios = await services.mongo.usuarios.getUsuario(null, query); 

    res.status(200).json(usuarios);
}

const crearUsuario = async (req = request, res = response) => {
    const { email, password, nombre, apellidoP, apellidoM } = req.body;

    const usuario = await services.mongo.usuarios.postUsuario({ email, password, nombre, apellidoP, apellidoM });

    res.status(200).json(usuario);
}

const actualizarUsuario = async (req = request, res = response) => {
    const { email, password, nombre, apellidoP, apellidoM, id } = req.body;

    const usuario = await services.mongo.usuarios.putUsuario(id, { email, password, nombre, apellidoP, apellidoM });

    res.status(200).json(usuario);
}

const eliminarUsuario = async (req = request, res = response) => {
    const { id } = req.headers;

    const usuario = await services.mongo.usuarios.delUsuario(id);

    res.status(200).json(usuario);
}

export {
    obtenerUsuario,
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}