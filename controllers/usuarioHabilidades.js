import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerUsuarioHabilidad = async (req = request, res = response) => {
    const { id } = req.headers;

    const usuarioHabilidad = await services.mongo.usuarioHabilidades.getUsuarioHabilidad(id, null);

    res.status(200).json(usuarioHabilidad);
}

const obtenerUsuarioHabilidadHabilidades = async (req = request, res = response) => {
    const query = { estado: true };

    const usuarioHabilidadHabilidades = await services.mongo.usuarioHabilidades.getUsuarioHabilidad(null, query); 

    res.status(200).json(usuarioHabilidadHabilidades);
}

const crearUsuarioHabilidad = async (req = request, res = response) => {
    const { usuarioCategoria, habilidad } = req.body;

    const usuarioHabilidad = await services.mongo.usuarioHabilidades.postUsuarioHabilidad({ usuarioCategoria, habilidad });

    res.status(200).json(usuarioHabilidad);
}

const actualizarUsuarioHabilidad = async (req = request, res = response) => {
    const { usuarioCategoria, habilidad, id } = req.body;

    const usuarioHabilidad = await services.mongo.usuarioHabilidades.putUsuarioHabilidad(id, { usuarioCategoria, habilidad });

    res.status(200).json(usuarioHabilidad);
}

const eliminarUsuarioHabilidad = async (req = request, res = response) => {
    const { id } = req.headers;

    const usuarioHabilidad = await services.mongo.usuarioHabilidades.delUsuarioHabilidad(id);

    res.status(200).json(usuarioHabilidad);
}

export {
    obtenerUsuarioHabilidad,
    obtenerUsuarioHabilidadHabilidades,
    crearUsuarioHabilidad,
    actualizarUsuarioHabilidad,
    eliminarUsuarioHabilidad
}