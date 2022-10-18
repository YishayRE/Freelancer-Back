import { Router } from 'express';

import { proyectoHabilidades } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/proyectoHabilidades
 */

// Obtener proyectoHabilidades Privado/Admin
router.get('/', proyectoHabilidades.obtenerProyectoHabilidades);
router.get('/unico/', proyectoHabilidades.obtenerProyectoHabilidad);

// Crear proyectoHabilidad Publico
router.post('/', proyectoHabilidades.crearProyectoHabilidad);

// Actualizar proyectoHabilidad Privado/Admin
router.put('/', proyectoHabilidades.actualizarProyectoHabilidad);

// Eliminar proyectoHabilidad Privado/Admin
router.delete('/', proyectoHabilidades.eliminarProyectoHabilidad);

export { router };