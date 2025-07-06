/**
 * /files/:directoryName/:subdir/:filename 및 /member/:directoryName/:filename 라우트의 로직을 처리합니다.

fs.access, res.sendFile 등의 로직을 사용하여 파일을 제공합니다.
 */
// controllers/fileController.js
import { promises as fs } from 'fs';
import path from 'path';
import { DB_ROOT_DIR } from '../config/config.js';

export const serveFile = async (req, res) => {  console.log("serveFile - ", req.params.filename);	
    const { directoryName, subdir, filename } = req.params;
    const decodedFilename = decodeURIComponent(filename);

    let filePath;
    if (directoryName === 'profile') {
        filePath = path.join(DB_ROOT_DIR, directoryName, decodedFilename);
    } else {
        if (subdir === 'sample') {
            filePath = path.join(DB_ROOT_DIR, directoryName, subdir, 'html', decodedFilename);
        } else {
			
            filePath = path.join(DB_ROOT_DIR, directoryName, subdir, decodedFilename);
        }
    }

    try {
        await fs.access(filePath, fs.constants.F_OK);
        res.sendFile(filePath);
    } catch (err) {
        console.error('파일 접근 오류 또는 파일 없음:', filePath, err);
        res.status(404).send('File not found.');
    }
};

export const serveMemberFile = async (req, res) => {

	console.log("serveMemberFile - ", req.params.filename);	

	 
    const { directoryName, filename } = req.params;
    const decodedFilename = decodeURIComponent(filename);

    const filePath = path.join(DB_ROOT_DIR, directoryName, decodedFilename);
    console.log("member file request:", filePath);

    try {
        await fs.access(filePath, fs.constants.F_OK);
        res.sendFile(filePath);
    } catch (err) {
        console.error('멤버 파일 접근 오류 또는 파일 없음:', filePath, err);
        res.status(404).send('File not found.');
    }
};