import { Router } from 'express';

import { categoriaEmpleos } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/categoriaEmpleos
 */

// Obtener categoriaEmpleos Privado/Admin
router.get('/', categoriaEmpleos.obtenerCategoriaEmpleos);
router.get('/obtener', categoriaEmpleos.obtenerCategoriaEmpleo);

// Crear categoriaEmpleo Publico
router.post('/crear', categoriaEmpleos.crearCategoriaEmpleo);

// Actualizar categoriaEmpleo Privado/Admin
router.put('/actualizar', categoriaEmpleos.actualizarCategoriaEmpleo);

// Eliminar categoriaEmpleo Privado/Admin
router.delete('/eliminar', categoriaEmpleos.eliminarCategoriaEmpleo);

export { router };