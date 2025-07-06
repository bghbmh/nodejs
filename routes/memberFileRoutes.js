// routes/fileRoutes.js
import express from 'express';
import { serveMemberFile } from '../controllers/fileController.js';

const router = express.Router();

router.get('/:directoryName/:filename', serveMemberFile);

export default router;