import { Router } from 'express';

import { usuarioHabilidades } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/usuarioHabilidades
 */

// Obtener usuarioHabilidades Privado/Admin
router.get('/', usuarioHabilidades.obtenerUsuarioHabilidades);
router.get('/obtener', usuarioHabilidades.obtenerUsuarioHabilidad);

// Crear usuarioHabilidad Publico
router.post('/crear', usuarioHabilidades.crearUsuarioHabilidad);

// Actualizar usuarioHabilidad Privado/Admin
router.put('/actualizar', usuarioHabilidades.actualizarUsuarioHabilidad);

// Eliminar usuarioHabilidad Privado/Admin
router.delete('/eliminar', usuarioHabilidades.eliminarUsuarioHabilidad);

export { router };