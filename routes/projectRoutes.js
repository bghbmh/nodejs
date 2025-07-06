// routes/projectRoutes.js
/**
 * projectController의 함수와 URL 경로를 매핑합니다.
 */
import express from 'express';
import { createProjectNumberAndFolders } from '../middleware/projectMiddleware.js';
import { uploadFilesMiddleware, createProjectAndUpload, updateProjectAndUpload, getProjectDB } from '../controllers/projectController.js';

const router = express.Router();

router.post('/upload', createProjectNumberAndFolders, uploadFilesMiddleware, createProjectAndUpload);
router.post('/update', uploadFilesMiddleware, updateProjectAndUpload);
router.get('/jsonDB', getProjectDB);

export default router;