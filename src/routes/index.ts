import { Router } from 'express';
import { getUsers } from '../controllers/usersController';
const router = Router();

router.get('/users', getUsers)
// router.get('/users/:id', getUsers)
// router.post('/users', getUsers)
// router.put('/users/:id', getUsers)
// router.delete('/users/:id', getUsers)

export default router;