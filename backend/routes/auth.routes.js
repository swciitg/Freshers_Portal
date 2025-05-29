import express from 'express';
import { getLoginPage, login, logout } from '../src/controllers/auth.controller.js';

const router = express.Router();

router.get('/login', getLoginPage);
router.post('/login', login);
router.get('/logout', logout);

export default router;
