//기본정보
// import { IP } from "./myConfig.js";
// const myIP = IP[0]; 
const port = process.env.PORT || 3000;


// ES 모듈 방식 (package.json에 "type": "module" 설정 시 또는 번들러 사용 시)
import express from 'express';
import cors from 'cors';
import path from 'path';

import { promises as fs } from 'fs'; // 또는 import * as fs from 'fs/promises';
import multer from 'multer';
import fetch from 'node-fetch';

const app = express();

import { fileURLToPath } from 'url'; // url 모듈에서 fileURLToPath를 가져옵니다.
// 현재 모듈 파일의 디렉토리 경로를 얻습니다.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, 'public'); // 클라이언트 사이드 파일들이 있는 폴더
const dataFolderPath = path.join(__dirname, 'data');
const DATABASE_PATH = path.join(__dirname,'data', 'testDB.json') //myJsonDB 
const memberDBPath = path.join(__dirname,'data','profile', 'info.json')


app.use(express.static(publicPath));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


const DB_ROOT_DIR = path.join(__dirname, 'data'); // 모든 업로드의 최상위 디렉토리

async function makeProjectFolder(subfolderName){
	const dynamicUserPath = path.join(DB_ROOT_DIR, subfolderName);
	const previewPath = path.join(dynamicUserPath, 'preview');
	const samplePath = path.join(dynamicUserPath, 'sample');
	const htmlPath = path.join(samplePath, 'html');

	try {
		await fs.mkdir(dynamicUserPath, { recursive: true });
		await fs.mkdir(previewPath, { recursive: true });
		await fs.mkdir(samplePath, { recursive: true });
		await fs.mkdir(htmlPath, { recursive: true });
		//console.log("DB_ROOT_DIR 폴더있음")
	} catch (error) {
		console.error(`'${DB_ROOT_DIR}' checkDBPromise  오류 발생:`, error);
		throw error;
	}
}

// --- 2단계: Multer 설정 (destination 함수는 이제 동기적으로 경로만 선택) ---
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
		
		console.log(`diskStorage ${req.body.projectNumber}`);
        const projectNumber = req.body.projectNumber;

        if (!projectNumber) { // 오류를 콜백으로 전달 
            return cb(new Error('projectNumber가 누락되었거나 생성되지 않았습니다'));
        }

        const subfolderName = 'bmh' + projectNumber;
        const dynamicUserPath = path.join(DB_ROOT_DIR, subfolderName);
        const previewPath = path.join(dynamicUserPath, 'preview');
        const samplePath = path.join(dynamicUserPath, 'sample','html');
		const htmlPath = path.join(samplePath, 'html'); // samplePath 아래에 html 폴더 추가

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

const uploadFiles = multer({ storage: storage });

// projectNumber를 생성하는 미들웨어
const createProject = async (req, res, next) => {
	// 클라이언트에서 projectNumber를 보내지 않으므로 여기서 생성
	// 현재 시간을 기반으로 고유한 projectNumber 생성
	req.projectNumber = Date.now();
	req.body.projectNumber = req.projectNumber;
	console.log(`Server createProjectNumber : ${req.body.projectNumber}`);

	const subfolderName = 'bmh' + req.projectNumber;
    try {
        await makeProjectFolder(subfolderName); // 필요한 폴더 구조 미리 생성
        console.log(`Server createProjectNumberAndFolders: ${req.body.projectNumber} 폴더 생성 완료`);
        next(); // 다음 미들웨어로 진행 (Multer)
    } catch (error) {
        console.error(`폴더 생성 중 오류 발생: ${error}`);
        res.status(500).send('Server Error: Failed to create project folders.');
    }
}

// createDynamicUploadFolders 미들웨어를 multer 미들웨어 앞에 추가합니다.
app.post('/upload', 
	createProject, 
	uploadFiles.fields([
		{ name: "mainOpenImages" },
		{ name: 'mainimage'},
		{ name: 'subimage'},
		{ name: 'samplePage'} //, maxCount: 1  예시: 다른 이미지 필드 // 기타 필요한 파일 필드 추가
	]), 
	async (req, res) => {

		console.log(`upload : ${req.body.projectNumber} `);

		try {
			// if (!req.files || Object.keys(req.files).length === 0) {
			// 	return res.status(400).send('No files uploaded.');
			// }
			let pNumber = req.body.projectNumber || req.projectNumber; 
			const directory = 'bmh'+ pNumber; 
			
			console.log('업로드 완료:', directory);
			
			let myJsonDB = [] ;
			try {
				const jsonDB = await fs.readFile(DATABASE_PATH, 'utf8');
				if (jsonDB.trim().length > 0) myJsonDB = JSON.parse(jsonDB);
			} catch (error) {
				if (error.code !== 'ENOENT') { // ENOENT (파일 없음)
					console.error('파일 읽기 중 오류 발생:', error);
					throw error; // 다른 오류는 다시 던져서 호출자가 처리하게 함
				}
				console.log(`${DATABASE_PATH} 파일이 존재하지 않아 새 파일로 시작합니다.`);
			}

			let newData = JSON.parse(req.body.myData);
			setFileList( req.files, newData, directory );

			newData.ID = directory;
			newData.projectNum = req.body.projectNumber || req.projectNumber; 
			newData.order = myJsonDB.length;

			myJsonDB.unshift( newData );


			try {
				await fs.writeFile(DATABASE_PATH, JSON.stringify(myJsonDB, null, 2), 'utf8');
				console.log("myJsonDB.json 파일에 쓰기 성공.");
				res.status(200).json({// req.body를 포함하여 클라이언트가 보낸 다른 데이터도 반환 가능
					message: '파일 업로드 성공',
					data: JSON.stringify(newData)
				});

			} catch (writeError) {
				console.error('myJsonDB.json 파일 쓰기 오류:', writeError);
				res.status(500).json({ 
					message: 'DB 파일 쓰기 오류' + writeError.message, 
					data: null 
				});
			}			
			
		} catch (error) {
			console.error('파일 업로드 처리 중 오류 발생:', error);
			res.status(500).send('Server Error');
		}
	}
);



//-- edit와 관련된건 update로 따로 작성하기
app.post('/update', uploadFiles.fields([
    { name: "mainOpenImages" },
    { name: 'mainimage'},
    { name: 'subimage'},
    { name: 'samplePage'}
]), async (req, res) => { // upload 변수에 설정된 multer 미들웨어 적용

    console.log(`update: ${req.body.projectNumber}`);

    const projectNumber = req.body.projectNumber; // projectNumber는 이제 여기에 존재함이 보장됩니다.
    const directory = 'bmh'+projectNumber; // projectNumber를 직접 사용합니다.

    let myJsonDB = [] ;
    try {
        const jsonDB = await fs.readFile(DATABASE_PATH, 'utf8');
        if (jsonDB.trim().length > 0) myJsonDB = JSON.parse(jsonDB);
    } catch (error) {
        if (error.code !== 'ENOENT') { // ENOENT (파일 없음)
            console.error('파일 읽기 중 오류 발생:', error);
            throw error; // 다른 오류는 다시 던져서 호출자가 처리하게 함
        }
        console.log(`${DATABASE_PATH} 파일이 존재하지 않아 새 파일로 시작합니다.`);
    }

    let updateData = JSON.parse(req.body.myData);

    // Multer에 의해 업로드된 파일 정보를 데이터 구조에 매핑합니다.
    // req.files에는 저장된 파일 정보(filename, path 등)가 포함됩니다.
	setFileList( req.files, updateData, directory );


    let newJsonDB = myJsonDB.map( (cur) => {
        if( cur.ID === directory ){
            // 기존 cur 객체를 직접 변경하지 않고 새 객체를 반환하여 병합합니다.
            return { ...cur, ...updateData, ID: directory };
        }
        return cur;
    });

    // 프로젝트가 아직 존재하지 않는 경우, 새 항목으로 추가합니다.
    const projectExists = newJsonDB.some(item => item.ID === directory);
    if (!projectExists) {
        newJsonDB.push({ ID: directory, ...updateData });
    }

	let aaa = newJsonDB.find( item => item.ID === directory );

	try {
		await fs.writeFile(DATABASE_PATH, JSON.stringify(newJsonDB, null, 2), 'utf8');
		console.log("myJsonDB.json 파일에 쓰기 성공.");
		res.status(200).json({// req.body를 포함하여 클라이언트가 보낸 다른 데이터도 반환 가능
			message: '파일 업로드 성공',
			data: JSON.stringify(aaa)
		});

	} catch (writeError) {
		console.error('myJsonDB.json 파일 쓰기 오류:', writeError);
		res.status(500).json({ 
			message: 'DB 파일 쓰기 오류' + writeError.message, 
			data: null 
		});
	}	
});

function setFileList( reqFiles, updateData, directory ){
    if (reqFiles.mainOpenImages) {
        updateData.mainOpenImages = updateData.mainOpenImages.map(frontFile => {
            const uploadedFile = reqFiles.mainOpenImages.find(f => f.originalname === frontFile.name);
            return uploadedFile ? { ...frontFile, webUrl: `${directory}/preview/${uploadedFile.filename}` } : frontFile;
        });
    }

    if (reqFiles.mainimage) {
        updateData.mainimage = updateData.mainimage.map(frontFile => {
            const uploadedFile = reqFiles.mainimage.find(f => f.originalname === frontFile.name);
            return uploadedFile ? { ...frontFile, webUrl: `${directory}/preview/${uploadedFile.filename}` } : frontFile;
        });
    }

    if (reqFiles.subimage) {
        updateData.subimage = updateData.subimage.map(frontFile => {
            const uploadedFile = reqFiles.subimage.find(f => f.originalname === frontFile.name);
            return uploadedFile ? { ...frontFile, webUrl: `${directory}/preview/${uploadedFile.filename}` } : frontFile;
        });
    }

    if (reqFiles.samplePage) {
		updateData.samplePage.map(frontFile => {
            const uploadedFile = reqFiles.samplePage.find(f => f.originalname === frontFile.name);
            // samplePage는 라벨을 가질 수 있으므로, 해당 정보도 유지하는 것이 좋습니다.
            return uploadedFile ? { ...frontFile, webUrl: `${directory}/sample/html/${uploadedFile.filename}` } : frontFile;
        });
    }
}


// 서버 코드에서
app.get('/files/:directoryName/:subdir/:filename', async (req, res) => {
    const directoryName = req.params.directoryName;
    let subdir = req.params.subdir; // 'preview' 또는 'sample'
    const filename = decodeURIComponent(req.params.filename); //  req.params.filename;//

	//console.log("file ===== ", filename);

	let filePath;
	if( directoryName === 'profile' ){
		filePath = path.join(DB_ROOT_DIR, directoryName, filename);
	} else {
		if( subdir === 'sample' ){
			filePath = path.join(DB_ROOT_DIR, directoryName, subdir,'html', filename);
		} else {
			filePath = path.join(DB_ROOT_DIR, directoryName, subdir, filename);
		}	
	}

    // 파일이 존재하는지 확인 후 전송
    try {
        await fs.access(filePath, fs.constants.F_OK); // 파일 존재 여부 확인
        res.sendFile(filePath); // 파일 전송
    } catch (err) {
        console.error('파일 접근 오류 또는 파일 없음:', filePath, err);
        return res.status(404).send('File not found.');
    }
});
// 이제 브라우저에서 '/files/project1/preview/image.jpg' 와 같은 URL로 접근 가능

// 서버 코드에서
app.get('/member/:directoryName/:filename', async (req, res) => {
    const directoryName = req.params.directoryName;
    const filename = decodeURIComponent(req.params.filename); // req.params.filename;//

console.log("member ===== ",directoryName, filename);

	let filePath;
		filePath = path.join(DB_ROOT_DIR, directoryName, filename);

    // 파일이 존재하는지 확인 후 전송
    try {
        await fs.access(filePath, fs.constants.F_OK); // 파일 존재 여부 확인
        res.sendFile(filePath); // 파일 전송
    } catch (err) {
        console.error('파일 접근 오류 또는 파일 없음:', filePath, err);
        return res.status(404).send('File not found.');
    }
});



// --- JSON 파일을 읽어서 클라이언트로 전송하는 GET 라우트 추가 ---
// GET 요청 처리 라우트
//app.get('/jsonDB', async (req, res) => {
app.get('/jsonDB', async (req, res) => {
	try {
		// JSON 파일 읽기
		const fileContent = await fs.readFile(DATABASE_PATH, { encoding: 'utf8' });
		const jsonData = JSON.parse(fileContent);

		// JSON 데이터를 응답 본문에 담아 전송
		// Express의 res.json()은 자동으로 Content-Type을 application/json으로 설정하고 JSON.stringify를 수행합니다.
		res.json(jsonData);

	} catch (error) {
		console.error('JSON 파일 읽기/전송 오류:', error);
		// 파일이 없거나 읽을 수 없는 경우 등 오류 처리
		if (error.code === 'ENOENT') {
			res.status(404).json({ message: 'JSON 파일을 찾을 수 없습니다.' });
		} else {
			res.status(500).json({ message: '서버에서 JSON 파일을 읽는 데 실패했습니다.', error: error.message });
		}
	}

});
// --- JSON 파일 읽기 라우트 끝 ---

app.get('/memberDB', async (req, res) => {
	try {
		const fileContent = await fs.readFile(memberDBPath, { encoding: 'utf8' });
		const jsonData = JSON.parse(fileContent);
		res.json(jsonData);

	} catch (error) {
		console.error('JSON 파일 읽기/전송 오류:', error);
		// 파일이 없거나 읽을 수 없는 경우 등 오류 처리
		if (error.code === 'ENOENT') {
			res.status(404).json({ message: 'JSON 파일을 찾을 수 없습니다.' });
		} else {
			res.status(500).json({ message: '서버에서 JSON 파일을 읽는 데 실패했습니다.', error: error.message });
		}
	}
});

let testPath = path.join(publicPath, 'index.html')


//app.get("/", (req, res) => res.sendFile( testPath ) );

// 3. SPA의 catch-all 라우트 (가장 마지막에 위치해야 합니다!)
// 모든 API 라우트와 정적 파일 미들웨어 다음에 와야 합니다.
// 클라이언트 측 라우팅이 처리할 모든 경로에 대해 main.html을 반환합니다.
// 변경된 부분: '*' 대신 '/*any' 또는 '/*' 사용
app.get('*', (req, res) => { // 'any'는 임의의 이름입니다. 'splat', 'path' 등 원하는 이름을 사용해도 됩니다.
    res.sendFile(testPath, (err) => {
        if (err) {
            console.error('main.html 파일 전송 오류:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.listen(port, () => {
    console.log(`server is running at port-${port}, path-${publicPath} ` + testPath);
});