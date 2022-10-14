import { Router } from 'express';

import { conversaciones } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/conversaciones
 */

// Obtener conversaciones Privado/Admin
router.get('/', conversaciones.obtenerConversaciones);
router.get('/obtener', conversaciones.obtenerConversacion);

// Crear conversacion Publico
router.post('/crear', conversaciones.crearConversacion);

// Actualizar conversacion Privado/Admin
router.put('/actualizar', conversaciones.actualizarConversacion);

// Eliminar conversacion Privado/Admin
router.delete('/eliminar', conversaciones.eliminarConversacion);

export { router };