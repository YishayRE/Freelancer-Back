import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerProyectoHabilidad = async (req = request, res = response) => {
    const { id } = req.headers;

    const proyectoHabilidad = await services.mongo.proyectoHabilidades.getProyectoHabilidad(id, null);

    res.status(200).json(proyectoHabilidad);
}

const obtenerProyectoHabilidades = async (req = request, res = response) => {
    const query = { estado: true };

    const proyectoHabilidades = await services.mongo.proyectoHabilidades.getProyectoHabilidad(null, query); 

    res.status(200).json(proyectoHabilidades);
}

const crearProyectoHabilidad = async (req = request, res = response) => {
    const { proyectoCategoria, habilidad } = req.body;

    const proyectoHabilidad = await services.mongo.proyectoHabilidades.postProyectoHabilidad({ proyectoCategoria, habilidad });

    res.status(200).json(proyectoHabilidad);
}

const actualizarProyectoHabilidad = async (req = request, res = response) => {
    const { proyectoCategoria, habilidad, id } = req.body;

    const proyectoHabilidad = await services.mongo.proyectoHabilidades.putProyectoHabilidad(id, { proyectoCategoria, habilidad });

    res.status(200).json(proyectoHabilidad);
}

const eliminarProyectoHabilidad = async (req = request, res = response) => {
    const { id } = req.headers;

    const proyectoHabilidad = await services.mongo.proyectoHabilidades.delProyectoHabilidad(id);

    res.status(200).json(proyectoHabilidad);
}

export {
    obtenerProyectoHabilidad,
    obtenerProyectoHabilidades,
    crearProyectoHabilidad,
    actualizarProyectoHabilidad,
    eliminarProyectoHabilidad
}