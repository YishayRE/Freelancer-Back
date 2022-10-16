import { Router } from 'express';

import { freelancers } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/freelancers
 */

// Obtener freelancers Privado/Admin
router.get('/', freelancers.obtenerFreelancers);
router.get('/obtener', freelancers.obtenerFreelancer);

// Crear freelancer Publico
router.post('/crear', freelancers.crearFreelancer);

// Actualizar freelancer Privado/Admin
router.put('/actualizar', freelancers.actualizarFreelancer);

// Eliminar freelancer Privado/Admin
router.delete('/eliminar', freelancers.eliminarFreelancer);

export { router };