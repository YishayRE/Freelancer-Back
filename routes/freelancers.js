import { Router } from 'express';

import { freelancers } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/freelancers
 */

// Obtener freelancers Privado/Admin
router.get('/', freelancers.obtenerFreelancers);
router.get('/unico/', freelancers.obtenerFreelancer);

// Crear freelancer Publico
router.post('/', freelancers.crearFreelancer);

// Actualizar freelancer Privado/Admin
router.put('/', freelancers.actualizarFreelancer);

// Eliminar freelancer Privado/Admin
router.delete('/', freelancers.eliminarFreelancer);

export { router };