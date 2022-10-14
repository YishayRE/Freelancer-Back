import { Router } from 'express';

import { proyectos } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/proyectos
 */

// Obtener proyectos Privado/Admin
router.get('/', proyectos.obtenerProyectos);
router.get('/obtener', proyectos.obtenerProyecto);

// Crear proyecto Publico
router.post('/crear', proyectos.crearProyecto);

// Actualizar proyecto Privado/Admin
router.put('/actualizar', proyectos.actualizarProyecto);

// Eliminar proyecto Privado/Admin
router.delete('/eliminar', proyectos.eliminarProyecto);

export { router };