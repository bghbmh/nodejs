/**
 * /memberDB 라우트의 로직을 처리합니다.

dbService를 호출하여 멤버 데이터를 가져옵니다.
 */

// controllers/memberController.js
import multer from 'multer';

import { getMembers, setTheme } from '../services/dbService.js';


// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		const projectNumber = req.body.projectNumber; // createProjectNumberAndFolders 미들웨어에서 설정됨

// 		if (!projectNumber) {
// 			return cb(new Error('projectNumber가 누락되었거나 생성되지 않았습니다'));
// 		}

// 		const subfolderName = 'bmh' + projectNumber;
// 		const dynamicUserPath = path.join(DB_ROOT_DIR, subfolderName);
// 		const previewPath = path.join(dynamicUserPath, 'preview');
// 		const samplePath = path.join(dynamicUserPath, 'sample','html'); // sample/html

// 		if (file.fieldname === 'mainimage' || file.fieldname === 'subimage' || file.fieldname === 'mainOpenImages') {
// 			cb(null, previewPath);
// 		} else if (file.fieldname === 'samplePage') {
// 			cb(null, samplePath);
// 		} else {
// 			cb(null, dynamicUserPath); // 기타 필드에 대한 폴백
// 		}
// 	},
// 	filename: function (req, file, cb) {
// 		cb(null, file.originalname); // 원본 파일 이름을 유지합니다.
// 	}
// });

 
// export const memberMiddleware = multer({ storage: storage }).fields([
// 	{ name: "main" },
// 	{ name: 'info'}
// ]);

export const getMemberDB = async (req, res) => {
    try {
        const members = await getMembers();
        res.json(members);
    } catch (error) {
        console.error('JSON 파일 읽기/전송 오류:', error);
        if (error.code === 'ENOENT') {
            res.status(404).json({ message: 'JSON 파일을 찾을 수 없습니다.' });
        } else {
            res.status(500).json({ message: '서버에서 JSON 파일을 읽는 데 실패했습니다.', error: error.message });
        }
    }
};


export const updateTheme = async (req, res) => {
	try {
		console.log("theme front  - ", req.body )
		const savedData = await setTheme(req.body )// , files = {}

		res.status(200).json({
			message: '화면 설정을 변경하였습니다',
			theme: req.body.theme
		});
	} catch (error) {
		console.error('파일 업로드 및 프로젝트 업데이트 처리 중 오류 발생:', error);
		res.status(500).send(`Server Error: ${error.message}`);
	}
};