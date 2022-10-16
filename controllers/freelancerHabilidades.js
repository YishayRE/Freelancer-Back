import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerFreelancerHabilidad = async (req = request, res = response) => {
    const { id } = req.headers;

    const freelancerHabilidad = await services.mongo.freelancerHabilidades.getFreelancerHabilidad(id, null);

    res.status(200).json(freelancerHabilidad);
}

const obtenerFreelancerHabilidades = async (req = request, res = response) => {
    const query = { estado: true };

    const freelancerHabilidadHabilidades = await services.mongo.freelancerHabilidades.getFreelancerHabilidad(null, query); 

    res.status(200).json(freelancerHabilidadHabilidades);
}

const crearFreelancerHabilidad = async (req = request, res = response) => {
    const { freelancerCategoria, habilidad } = req.body;

    const freelancerHabilidad = await services.mongo.freelancerHabilidades.postFreelancerHabilidad({ freelancerCategoria, habilidad });

    res.status(200).json(freelancerHabilidad);
}

const actualizarFreelancerHabilidad = async (req = request, res = response) => {
    const { freelancerCategoria, habilidad, id } = req.body;

    const freelancerHabilidad = await services.mongo.freelancerHabilidades.putFreelancerHabilidad(id, { freelancerCategoria, habilidad });

    res.status(200).json(freelancerHabilidad);
}

const eliminarFreelancerHabilidad = async (req = request, res = response) => {
    const { id } = req.headers;

    const freelancerHabilidad = await services.mongo.freelancerHabilidades.delFreelancerHabilidad(id);

    res.status(200).json(freelancerHabilidad);
}

export {
    obtenerFreelancerHabilidad,
    obtenerFreelancerHabilidades,
    crearFreelancerHabilidad,
    actualizarFreelancerHabilidad,
    eliminarFreelancerHabilidad
}