import { Router } from 'express';

import { proyectoCategorias } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/proyectoCategorias
 */

// Obtener proyectoCategorias Privado/Admin
router.get('/', proyectoCategorias.obtenerProyectoCategorias);
router.get('/unico/', proyectoCategorias.obtenerProyectoCategoria);

// Crear proyectoCategoria Publico
router.post('/', proyectoCategorias.crearProyectoCategoria);

// Actualizar proyectoCategoria Privado/Admin
router.put('/', proyectoCategorias.actualizarProyectoCategoria);

// Eliminar proyectoCategoria Privado/Admin
router.delete('/', proyectoCategorias.eliminarProyectoCategoria);

export { router };