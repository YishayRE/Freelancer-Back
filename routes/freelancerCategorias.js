import { Router } from 'express';

import { freelancerCategorias } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/freelancerCategorias
 */

// Obtener freelancerCategorias Privado/Admin
router.get('/', freelancerCategorias.obtenerFreelancerCategorias);
router.get('/obtener', freelancerCategorias.obtenerFreelancerCategoria);

// Crear freelancerCategoria Publico
router.post('/crear', freelancerCategorias.crearFreelancerCategoria);

// Actualizar freelancerCategoria Privado/Admin
router.put('/actualizar', freelancerCategorias.actualizarFreelancerCategoria);

// Eliminar freelancerCategoria Privado/Admin
router.delete('/eliminar', freelancerCategorias.eliminarFreelancerCategoria);

export { router };