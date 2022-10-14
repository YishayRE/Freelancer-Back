import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerUsuarioCategoria = async (req = request, res = response) => {
    const { id } = req.headers;

    const usuarioCategoria = await services.mongo.usuarioCategorias.getUsuarioCategoria(id, null);

    res.status(200).json(usuarioCategoria);
}

const obtenerUsuarioCategorias = async (req = request, res = response) => {
    const query = { estado: true };

    const usuarioCategorias = await services.mongo.usuarioCategorias.getUsuarioCategoria(null, query); 

    res.status(200).json(usuarioCategorias);
}

const crearUsuarioCategoria = async (req = request, res = response) => {
    const { usuario, categoria } = req.body;

    const usuarioCategoria = await services.mongo.usuarioCategorias.postUsuarioCategoria({ usuario, categoria });

    res.status(200).json(usuarioCategoria);
}

const actualizarUsuarioCategoria = async (req = request, res = response) => {
    const { usuario, categoria, id } = req.body;

    const usuarioCategoria = await services.mongo.usuarioCategorias.putUsuarioCategoria(id, { usuario, categoria });

    res.status(200).json(usuarioCategoria);
}

const eliminarUsuarioCategoria = async (req = request, res = response) => {
    const { id } = req.headers;

    const usuarioCategoria = await services.mongo.usuarioCategorias.delUsuarioCategoria(id);

    res.status(200).json(usuarioCategoria);
}

export {
    obtenerUsuarioCategoria,
    obtenerUsuarioCategorias,
    crearUsuarioCategoria,
    actualizarUsuarioCategoria,
    eliminarUsuarioCategoria
}