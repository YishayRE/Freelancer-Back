import { Router } from 'express';

import { freelancerHabilidades } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/freelancerHabilidades
 */

// Obtener freelancerHabilidades Privado/Admin
router.get('/', freelancerHabilidades.obtenerFreelancerHabilidades);
router.get('/unico/', freelancerHabilidades.obtenerFreelancerHabilidad);

// Crear freelancerHabilidad Publico
router.post('/', freelancerHabilidades.crearFreelancerHabilidad);

// Actualizar freelancerHabilidad Privado/Admin
router.put('/', freelancerHabilidades.actualizarFreelancerHabilidad);

// Eliminar freelancerHabilidad Privado/Admin
router.delete('/', freelancerHabilidades.eliminarFreelancerHabilidad);

export { router };