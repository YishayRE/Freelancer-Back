import { Router } from 'express';

import { usuarios } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/usuarios
 */

// Obtener usuarios Privado/Admin
router.get('/', usuarios.obtenerUsuarios);
router.get('/obtener', usuarios.obtenerUsuario);

// Crear usuario Publico
router.post('/crear', usuarios.crearUsuario);

// Actualizar usuario Privado/Admin
router.put('/actualizar', usuarios.actualizarUsuario);

// Eliminar usuario Privado/Admin
router.delete('/eliminar', usuarios.eliminarUsuario);

export { router };