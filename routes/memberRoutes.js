// routes/memberRoutes.js
import express from 'express';

import { getMemberDB, updateTheme } from '../controllers/memberController.js';

const router = express.Router();

router.get('/', getMemberDB);

//router.post('/theme', memberMiddleware, updateMember);
router.post('/theme',  updateTheme);
export default router;