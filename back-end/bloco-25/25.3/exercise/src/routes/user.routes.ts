import { Router } from 'express';
import UserController from '../controllers/user.controllers';
import { validateUser, validateLogin } from '../middlewares/user.middlewares';
import { validateToken } from '../middlewares/auth.middleware';

const router = Router();

const userController = new UserController();

router.get('/', (req, res) => userController.getAll(req, res));
router.get('/:id', (req, res) => userController.getById(req, res));

router.post('/', validateUser, (req, res) => userController.register(req, res));
router.post('/login', validateLogin, (req, res) => userController.login(req, res));

router.put('/', validateToken, validateUser, (req, res) => userController.edit(req, res));

router.delete('/', validateToken, (req, res) => userController.delete(req, res));

export default router;
