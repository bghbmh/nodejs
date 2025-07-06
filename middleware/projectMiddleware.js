// middleware/projectMiddleware.js
import { makeProjectFolder } from '../services/dbService.js'; // 폴더 생성 함수 임포트

export const createProjectNumberAndFolders = async (req, res, next) => {    console.log(`Server createProjectNumberAndFolders:  ///////////////////////////////////////// `);
    req.projectNumber = Date.now();
    req.body.projectNumber = req.projectNumber; // Multer의 destination에서 사용될 수 있도록 req.body에도 추가

    const subfolderName = 'bmh' + req.projectNumber;
    try {
        await makeProjectFolder(subfolderName); // 필요한 폴더 구조 미리 생성
        console.log(`Server createProjectNumberAndFolders: ${req.body.projectNumber} 폴더 생성 완료`);
        next(); // 다음 미들웨어로 진행 (Multer)
    } catch (error) {
        console.error(`폴더 생성 중 오류 발생: ${error}`);
        res.status(500).send('Server Error: Failed to create project folders.');
    }
};