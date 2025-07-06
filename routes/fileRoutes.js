// routes/fileRoutes.js
import express from 'express';
import { serveFile } from '../controllers/fileController.js';

const router = express.Router();

router.get('/:directoryName/:subdir/:filename', serveFile);

export default router;