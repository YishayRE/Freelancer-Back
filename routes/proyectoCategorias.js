import { Router } from 'express';

import { proyectoCategorias } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/proyectoCategorias
 */

// Obtener proyectoCategorias Privado/Admin
router.get('/', proyectoCategorias.obtenerProyectoCategorias);
router.get('/obtener', proyectoCategorias.obtenerProyectoCategoria);

// Crear proyectoCategoria Publico
router.post('/crear', proyectoCategorias.crearProyectoCategoria);

// Actualizar proyectoCategoria Privado/Admin
router.put('/actualizar', proyectoCategorias.actualizarProyectoCategoria);

// Eliminar proyectoCategoria Privado/Admin
router.delete('/eliminar', proyectoCategorias.eliminarProyectoCategoria);

export { router };