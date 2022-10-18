import { Router } from 'express';

import { empleadores } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/empleadores
 */

// Obtener empleadores Privado/Admin
router.get('/', empleadores.obtenerEmpleadores);
router.get('/unico/', empleadores.obtenerEmpleador);

// Crear empleador Publico
router.post('/', empleadores.crearEmpleador);

// Actualizar empleador Privado/Admin
router.put('/', empleadores.actualizarEmpleador);

// Eliminar empleador Privado/Admin
router.delete('/', empleadores.eliminarEmpleador);

export { router };