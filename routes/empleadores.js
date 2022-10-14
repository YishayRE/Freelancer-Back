import { Router } from 'express';

import { empleadores } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/empleadores
 */

// Obtener empleadores Privado/Admin
router.get('/', empleadores.obtenerEmpleadores);
router.get('/obtener', empleadores.obtenerEmpleador);

// Crear empleador Publico
router.post('/crear', empleadores.crearEmpleador);

// Actualizar empleador Privado/Admin
router.put('/actualizar', empleadores.actualizarEmpleador);

// Eliminar empleador Privado/Admin
router.delete('/eliminar', empleadores.eliminarEmpleador);

export { router };