import { Router } from 'express';

import { usuarioCategorias } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/usuarioCategorias
 */

// Obtener usuarioCategorias Privado/Admin
router.get('/', usuarioCategorias.obtenerUsuarioCategorias);
router.get('/obtener', usuarioCategorias.obtenerUsuarioCategoria);

// Crear usuarioCategoria Publico
router.post('/crear', usuarioCategorias.crearUsuarioCategoria);

// Actualizar usuarioCategoria Privado/Admin
router.put('/actualizar', usuarioCategorias.actualizarUsuarioCategoria);

// Eliminar usuarioCategoria Privado/Admin
router.delete('/eliminar', usuarioCategorias.eliminarUsuarioCategoria);

export { router };