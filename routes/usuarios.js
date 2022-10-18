import { Router } from 'express';

import { usuarios } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/usuarios
 */

// Obtener usuarios Privado/Admin
router.get('/', usuarios.obtenerUsuarios);
router.get('/unico/', usuarios.obtenerUsuario);

// Crear usuario Publico
router.post('/', usuarios.crearUsuario);

// Actualizar usuario Privado/Admin
router.put('/', usuarios.actualizarUsuario);

// Eliminar usuario Privado/Admin
router.delete('/elminar', usuarios.eliminarUsuario);

export { router };