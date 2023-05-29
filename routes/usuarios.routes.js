import { Router }  from 'express';

import {getUsuarios, deleteUsuarios, postUsuarios, putUsuarios} from '../controllers/usuarios.controller.js';

const router=Router();

router.get('/', getUsuarios);
router.post('/', postUsuarios);
router.put('/:id', putUsuarios);
router.delete('/', deleteUsuarios);


export { router }