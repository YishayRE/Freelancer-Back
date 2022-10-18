import { Router } from 'express';

import { freelancerCategorias } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/freelancerCategorias
 */

// Obtener freelancerCategorias Privado/Admin
router.get('/', freelancerCategorias.obtenerFreelancerCategorias);
router.get('/unico/', freelancerCategorias.obtenerFreelancerCategoria);

// Crear freelancerCategoria Publico
router.post('/', freelancerCategorias.crearFreelancerCategoria);

// Actualizar freelancerCategoria Privado/Admin
router.put('/', freelancerCategorias.actualizarFreelancerCategoria);

// Eliminar freelancerCategoria Privado/Admin
router.delete('/', freelancerCategorias.eliminarFreelancerCategoria);

export { router };