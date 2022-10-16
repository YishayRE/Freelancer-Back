import { Router } from 'express';

import { freelancerHabilidades } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/freelancerHabilidades
 */

// Obtener freelancerHabilidades Privado/Admin
router.get('/', freelancerHabilidades.obtenerFreelancerHabilidades);
router.get('/obtener', freelancerHabilidades.obtenerFreelancerHabilidad);

// Crear freelancerHabilidad Publico
router.post('/crear', freelancerHabilidades.crearFreelancerHabilidad);

// Actualizar freelancerHabilidad Privado/Admin
router.put('/actualizar', freelancerHabilidades.actualizarFreelancerHabilidad);

// Eliminar freelancerHabilidad Privado/Admin
router.delete('/eliminar', freelancerHabilidades.eliminarFreelancerHabilidad);

export { router };