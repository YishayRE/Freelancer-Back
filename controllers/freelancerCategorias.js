import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerFreelancerCategoria = async (req = request, res = response) => {
    const { id } = req.headers;

    const freelancerCategoria = await services.mongo.freelancerCategorias.getFreelancerCategoria(id, null);

    res.status(200).json(freelancerCategoria);
}

const obtenerFreelancerCategorias = async (req = request, res = response) => {
    const query = { estado: true };

    const freelancerCategorias = await services.mongo.freelancerCategorias.getFreelancerCategoria(null, query); 

    res.status(200).json(freelancerCategorias);
}

const crearFreelancerCategoria = async (req = request, res = response) => {
    const { usuario, categoria } = req.body;

    const freelancerCategoria = await services.mongo.freelancerCategorias.postFreelancerCategoria({ usuario, categoria });

    res.status(200).json(freelancerCategoria);
}

const actualizarFreelancerCategoria = async (req = request, res = response) => {
    const { usuario, categoria, id } = req.body;

    const freelancerCategoria = await services.mongo.freelancerCategorias.putFreelancerCategoria(id, { usuario, categoria });

    res.status(200).json(freelancerCategoria);
}

const eliminarFreelancerCategoria = async (req = request, res = response) => {
    const { id } = req.headers;

    const freelancerCategoria = await services.mongo.freelancerCategorias.delFreelancerCategoria(id);

    res.status(200).json(freelancerCategoria);
}

export {
    obtenerFreelancerCategoria,
    obtenerFreelancerCategorias,
    crearFreelancerCategoria,
    actualizarFreelancerCategoria,
    eliminarFreelancerCategoria
}