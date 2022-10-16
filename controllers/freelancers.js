import { response, request } from 'express';
import * as services from '../services/index.js';

const obtenerFreelancer = async (req = request, res = response) => {
    const { id } = req.headers;

    const freelancer = await services.mongo.freelancers.getFreelancer(id, null);

    res.status(200).json(freelancer);
}

const obtenerFreelancers = async (req = request, res = response) => {
    const query = { estado: true };

    const freelancers = await services.mongo.freelancers.getFreelancer(null, query); 

    res.status(200).json(freelancers);
}

const crearFreelancer = async (req = request, res = response) => {
    const { usuario, apellidoP, apellidoM } = req.body;

    const freelancer = await services.mongo.freelancers.postFreelancer({ usuario, apellidoP, apellidoM });

    res.status(200).json(freelancer);
}

const actualizarFreelancer = async (req = request, res = response) => {
    const { usuario, apellidoP, apellidoM, id } = req.body;

    const freelancer = await services.mongo.freelancers.putFreelancer(id, { usuario, apellidoP, apellidoM });

    res.status(200).json(freelancer);
}

const eliminarFreelancer = async (req = request, res = response) => {
    const { id } = req.headers;

    const freelancer = await services.mongo.freelancers.delFreelancer(id);

    res.status(200).json(freelancer);
}

export {
    obtenerFreelancer,
    obtenerFreelancers,
    crearFreelancer,
    actualizarFreelancer,
    eliminarFreelancer
}