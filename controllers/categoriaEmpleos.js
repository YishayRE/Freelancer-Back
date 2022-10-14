import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerCategoriaEmpleo = async (req = request, res = response) => {
    const { id } = req.headers;

    const categoriaEmpleo = await services.mongo.categoriaEmpleos.getCategoriaEmpleo(id, null);

    res.status(200).json(categoriaEmpleo);
}

const obtenerCategoriaEmpleos = async (req = request, res = response) => {
    const query = { estado: true };

    const categoriaEmpleos = await services.mongo.categoriaEmpleos.getCategoriaEmpleo(null, query); 

    res.status(200).json(categoriaEmpleos);
}

const crearCategoriaEmpleo = async (req = request, res = response) => {
    const { nombre, habilidades } = req.body;

    const categoriaEmpleo = await services.mongo.categoriaEmpleos.postCategoriaEmpleo({ nombre, habilidades });

    res.status(200).json(categoriaEmpleo);
}

const actualizarCategoriaEmpleo = async (req = request, res = response) => {
    const { nombre, habilidades, id } = req.body;

    const categoriaEmpleo = await services.mongo.categoriaEmpleos.putCategoriaEmpleo(id, { nombre, habilidades });

    res.status(200).json(categoriaEmpleo);
}

const eliminarCategoriaEmpleo = async (req = request, res = response) => {
    const { id } = req.headers;

    const categoriaEmpleo = await services.mongo.categoriaEmpleos.delCategoriaEmpleo(id);

    res.status(200).json(categoriaEmpleo);
}

export {
    obtenerCategoriaEmpleo,
    obtenerCategoriaEmpleos,
    crearCategoriaEmpleo,
    actualizarCategoriaEmpleo,
    eliminarCategoriaEmpleo
}