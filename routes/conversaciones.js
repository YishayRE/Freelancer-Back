import { Router } from 'express';

import { conversaciones } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/conversaciones
 */

// Obtener conversaciones Privado/Admin
router.get('/', conversaciones.obtenerConversaciones);
router.get('/unico/', conversaciones.obtenerConversacion);

// Crear conversacion Publico
router.post('/', conversaciones.crearConversacion);

// Actualizar conversacion Privado/Admin
router.put('/', conversaciones.actualizarConversacion);

// Eliminar conversacion Privado/Admin
router.delete('/', conversaciones.eliminarConversacion);

export { router };