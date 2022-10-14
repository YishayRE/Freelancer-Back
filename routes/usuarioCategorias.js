import { Router } from 'express';

import { examples } from '../controllers/index.js';

const router = Router();

/**
 * {{url}}/api/examples
 */

//  Route example
router.get('/', examples.example);

export { router };