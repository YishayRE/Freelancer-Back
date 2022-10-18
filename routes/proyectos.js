import { Router } from 'express';

import { proyectos } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/proyectos
 */

// Obtener proyectos Privado/Admin
router.get('/', proyectos.obtenerProyectos);
router.get('/unico/', proyectos.obtenerProyecto);

// Crear proyecto Publico
router.post('/', proyectos.crearProyecto);

// Actualizar proyecto Privado/Admin
router.put('/', proyectos.actualizarProyecto);

// Eliminar proyecto Privado/Admin
router.delete('/', proyectos.eliminarProyecto);

export { router };