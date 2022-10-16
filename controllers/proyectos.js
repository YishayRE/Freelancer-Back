import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerProyecto = async (req = request, res = response) => {
    const { id } = req.headers;

    const proyecto = await services.mongo.proyectos.getProyecto(id, null);

    res.status(200).json(proyecto);
}

const obtenerProyectos = async (req = request, res = response) => {
    const query = { estado: true };

    const proyectos = await services.mongo.proyectos.getProyecto(null, query); 

    res.status(200).json(proyectos);
}

const crearProyecto = async (req = request, res = response) => {
    const { usuario, nombre, descripcion, duracion, inicio, vacantes } = req.body;

    const proyecto = await services.mongo.proyectos.postProyecto({ usuario, nombre, descripcion, duracion, inicio, vacantes });

    res.status(200).json(proyecto);
}

const actualizarProyecto = async (req = request, res = response) => {
    const { usuario, nombre, descripcion, duracion, inicio, vacantes, id } = req.body;

    const proyecto = await services.mongo.proyectos.putProyecto(id, { usuario, nombre, descripcion, duracion, inicio, vacantes });

    res.status(200).json(proyecto);
}

const eliminarProyecto = async (req = request, res = response) => {
    const { id } = req.headers;

    const proyecto = await services.mongo.proyectos.delProyecto(id);

    res.status(200).json(proyecto);
}

export {
    obtenerProyecto,
    obtenerProyectos,
    crearProyecto,
    actualizarProyecto,
    eliminarProyecto
}