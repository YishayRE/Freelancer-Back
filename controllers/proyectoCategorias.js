import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerProyectoCategoria = async (req = request, res = response) => {
    const { id } = req.headers;

    const proyectoCategoria = await services.mongo.proyectoCategorias.getProyectoCategoria(id, null);

    res.status(200).json(proyectoCategoria);
}

const obtenerProyectoCategorias = async (req = request, res = response) => {
    const query = { estado: true };

    const proyectoCategorias = await services.mongo.proyectoCategorias.getProyectoCategoria(null, query); 

    res.status(200).json(proyectoCategorias);
}

const crearProyectoCategoria = async (req = request, res = response) => {
    const { proyecto, categoria } = req.body;

    const proyectoCategoria = await services.mongo.proyectoCategorias.postProyectoCategoria({ proyecto, categoria });

    res.status(200).json(proyectoCategoria);
}

const actualizarProyectoCategoria = async (req = request, res = response) => {
    const { proyecto, categoria, id } = req.body;

    const proyectoCategoria = await services.mongo.proyectoCategorias.putProyectoCategoria(id, { proyecto, categoria });

    res.status(200).json(proyectoCategoria);
}

const eliminarProyectoCategoria = async (req = request, res = response) => {
    const { id } = req.headers;

    const proyectoCategoria = await services.mongo.proyectoCategorias.delProyectoCategoria(id);

    res.status(200).json(proyectoCategoria);
}

export {
    obtenerProyectoCategoria,
    obtenerProyectoCategorias,
    crearProyectoCategoria,
    actualizarProyectoCategoria,
    eliminarProyectoCategoria
}