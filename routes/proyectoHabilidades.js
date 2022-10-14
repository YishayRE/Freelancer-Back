import { Router } from 'express';

import { proyectoHabilidades } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/proyectoHabilidades
 */

// Obtener proyectoHabilidades Privado/Admin
router.get('/', proyectoHabilidades.obtenerProyectoHabilidades);
router.get('/obtener', proyectoHabilidades.obtenerProyectoHabilidad);

// Crear proyectoHabilidad Publico
router.post('/crear', proyectoHabilidades.crearProyectoHabilidad);

// Actualizar proyectoHabilidad Privado/Admin
router.put('/actualizar', proyectoHabilidades.actualizarProyectoHabilidad);

// Eliminar proyectoHabilidad Privado/Admin
router.delete('/eliminar', proyectoHabilidades.eliminarProyectoHabilidad);

export { router };