import { Router } from 'express';

import { categoriaEmpleos } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/categoriaEmpleos
 */

// Obtener categoriaEmpleos Privado/Admin
router.get('/', categoriaEmpleos.obtenerCategoriaEmpleos);
router.get('/unico/', categoriaEmpleos.obtenerCategoriaEmpleo);

// Crear categoriaEmpleo Publico
router.post('/', categoriaEmpleos.crearCategoriaEmpleo);

// Actualizar categoriaEmpleo Privado/Admin
router.put('/', categoriaEmpleos.actualizarCategoriaEmpleo);

// Eliminar categoriaEmpleo Privado/Admin
router.delete('/', categoriaEmpleos.eliminarCategoriaEmpleo);

export { router };