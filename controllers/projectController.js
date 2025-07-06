// controllers/projectController.js
/**
 * /upload, /update 라우트의 로직을 처리합니다.

dbService를 호출하여 실제 데이터 작업을 수행합니다.

클라이언트에 응답을 보냅니다.
 */
import { saveProject, getProjects } from '../services/dbService.js';
import multer from 'multer';
import path from 'path';
import { DB_ROOT_DIR } from '../config/config.js'; // DB_ROOT_DIR 임포트

// Multer 설정 (destination 함수는 이제 동기적으로 경로만 선택)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const projectNumber = req.body.projectNumber || req.projectNumber; // createProjectNumberAndFolders 미들웨어에서 설정됨

        if (!projectNumber) {
            return cb(new Error('projectNumber가 누락되었거나 생성되지 않았습니다'));
        }

        const subfolderName = 'bmh' + projectNumber;
        const dynamicUserPath = path.join(DB_ROOT_DIR, subfolderName);
        const previewPath = path.join(dynamicUserPath, 'preview');
        const samplePath = path.join(dynamicUserPath, 'sample','html'); // sample/html

        if (file.fieldname === 'mainimage' || file.fieldname === 'subimage' || file.fieldname === 'mainOpenImages') {
            cb(null, previewPath);
        } else if (file.fieldname === 'samplePage') {
            cb(null, samplePath);
        } else {
            cb(null, dynamicUserPath); // 기타 필드에 대한 폴백
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // 원본 파일 이름을 유지합니다.
    }
});

export const uploadFilesMiddleware = multer({ storage: storage }).fields([
    { name: "mainOpenImages" },
    { name: 'mainimage'},
    { name: 'subimage'},
    { name: 'samplePage'}
]);

// 새로운 프로젝트 생성 및 파일 업로드
export const createProjectAndUpload = async (req, res) => {   console.log("createProjectAndUpload  - ", req.body.projectNumber )
    try {
        const pNumber = req.body.projectNumber || req.projectNumber;
        const directory = 'bmh' + pNumber;
        const myData = JSON.parse(req.body.myData);

        // 서비스 계층으로 파일 저장 및 DB 업데이트 위임
        const savedData = await saveProject({ ...myData, ID: directory, projectNum: pNumber }, req.files, directory);

        res.status(200).json({
            message: '파일 업로드 및 프로젝트 생성 성공',
            data: JSON.stringify(savedData)
        });
    } catch (error) {
        console.error('파일 업로드 및 프로젝트 생성 처리 중 오류 발생:', error);
        res.status(500).send(`Server Error: ${error.message}`);
    }
};

// 프로젝트 업데이트 및 파일 업로드
export const updateProjectAndUpload = async (req, res) => {
    try {
        const projectNumber = req.body.projectNumber;
        const directory = 'bmh' + projectNumber;
        const myData = JSON.parse(req.body.myData);

        // 서비스 계층으로 파일 저장 및 DB 업데이트 위임
        const savedData = await saveProject({ ...myData }, req.files, directory); // myData에 ID가 이미 포함되어 있어야 합니다.

        res.status(200).json({
            message: '파일 업로드 및 프로젝트 업데이트 성공',
            data: JSON.stringify(savedData)
        });
    } catch (error) {
        console.error('파일 업로드 및 프로젝트 업데이트 처리 중 오류 발생:', error);
        res.status(500).send(`Server Error: ${error.message}`);
    }
};

// 모든 프로젝트 데이터 가져오기
export const getProjectDB = async (req, res) => {
    try {
        const projects = await getProjects();
        res.json(projects);
    } catch (error) {
        console.error('JSON 파일 읽기/전송 오류:', error);
        if (error.code === 'ENOENT') {
            res.status(404).json({ message: 'JSON 파일을 찾을 수 없습니다.' });
        } else {
            res.status(500).json({ message: '서버에서 JSON 파일을 읽는 데 실패했습니다.', error: error.message });
        }
    }
};