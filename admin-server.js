//기본정보
const myIP = process.env.MY_SERVER_IP; 
const port = 1113;


// CommonJS 방식 (Node.js 기본), 사용할 모듈들
// const express = require('express');
// const cors = require('cors'); // cors 미들웨어 불러오기
// const app = express();
// const path = require('path');
// const fs = require('fs').promises; // 내장 모듈이라 설치 없이 바로 사용
// const multer = require('multer');
// const fetch = require('node-fetch');



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
const DATABASE_PATH = path.join(__dirname,'data', 'testDB.json') //내 DB는 json
const memberDBPath = path.join(__dirname,'data','profile', 'info.json')

// --- 필수 미들웨어: req.body 파싱 ---
// 1. 정적 파일 서비스 (항상 가장 먼저 와야 합니다!)
// 'public' 폴더에 있는 정적 파일들(index.html, CSS, JS 등)을 서비스합니다.
// 예를 들어, localhost:1113/css/style.css 와 같이 접근 가능하게 합니다.
app.use(express.static(publicPath));
// JSON 및 URL-encoded 본문 파싱 (파일 업로드와는 별개)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// const OLD_SERVER_URL = `http://${myIP}:1323/oldData`;// 데이터를 가져올 다른 서버의 주소와 포트
const DB_ROOT_DIR = path.join(__dirname, 'data'); // 모든 업로드의 최상위 디렉토리

// 데이터 이관하기 dataMigration
async function fetchAndSaveFile(url, saveDir) {

	 try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}

		// 1. 응답 헤더에서 Content-Type 및 Content-Length 확인
        const contentType = response.headers.get('content-type');
        const contentLength = response.headers.get('content-length'); // <-- Content-Length 헤더
        const fileSizeInBytes = contentLength ? parseInt(contentLength, 10) : 'Unknown';

		// URL에서 파일 이름 추출 (간단한 예시)
		let fileName = path.basename(new URL(url).pathname);
		fileName = decodeURIComponent(fileName);

		const savePath = path.join(DB_ROOT_DIR, saveDir, fileName);

		let savedData; // 저장될 데이터 (Buffer 또는 string)
        let finalFileSizeAfterSave; // 실제 저장 후 파일 크기
		
		// 2. Content-Type에 따라 처리 방식 분기
        if (contentType && contentType.startsWith('application/json')) {
            const jsonData = await response.json();
            savedData = JSON.stringify(jsonData, null, 2);
            await fs.writeFile(savePath, savedData, 'utf8'); // JSON은 보통 UTF-8로 저장
            console.log(`JSON 파일 저장 완료: ${savePath}`);
        } else if (contentType && (contentType.startsWith('image/') || contentType.startsWith('application/pdf'))) {
            // 이미지, PDF 등 바이너리 파일 처리
            savedData = Buffer.from(await response.arrayBuffer());
            await fs.writeFile(savePath, savedData);
            console.log('바이너리 파일 저장 완료: ', savePath);
        } else {
            // 그 외에는 텍스트로 간주하여 처리
            savedData = await response.text();
            await fs.writeFile(savePath, savedData, 'utf8'); // 텍스트 파일은 보통 UTF-8로 저장
            console.log(`텍스트 파일 저장 완료: ${savePath}`);
        }

		// 3. 파일 저장 후 실제 크기 확인 (선택적이지만 정확함)
		// 파일이 실제로 저장된 후 fs.stat()을 사용하여 크기를 얻습니다.
		try {
			const stats = await fs.stat(savePath);
			finalFileSizeAfterSave = stats.size;
			//console.log(`Actual Saved File Size (bytes): ${finalFileSizeAfterSave}`);
		} catch (statError) {
			console.error(`Error getting file stats after save: ${statError.message}`);
		}

		// 여기에서 파일 크기 정보 등을 반환하거나 활용할 수 있습니다.
		return {
			name: fileName,
			webUrl: saveDir,
			type: contentType,
			expectedSize: fileSizeInBytes,
			size: finalFileSizeAfterSave
		};
	} catch (error) {
        console.error(`파일 다운로드 및 저장 중 오류 발생: ${error.message}`);
        throw error; // 오류를 다시 던져서 호출자가 처리하게 함
    }
}

async function dataMigration(DB){
	// 예전 파일 수정
	let oldDB, newDB ;
	try {
		const jsonDB = await fs.readFile(DATABASE_PATH, 'utf8');
		if (jsonDB.trim().length > 0) oldDB = JSON.parse(jsonDB);
		
		newDB = oldDB.map( (item, idx) => {
			//임시
			if( item.order ){ // 예전 데이터
				let r =  new Date(2025,5,25, 0, 0, 0, idx).getTime(); 
				item.projectNum = r;
				item.ID = 'bmh' + r;
				makeProjectFolder(item.ID);

				if( idx < 2 ) item.projectState = 'complete';
				else item.projectState = 'unknown';
				item.member = [];
				
				let previewPath = path.join(item.ID, 'preview');//미리보기이미지 폴더
				let samplePath = path.join(item.ID, 'sample', 'html');//샘플보기이미지 폴더

				if( item.mainimage.length > 0 ){
					item.mainimage.forEach( async (file) => {
						let url = OLD_SERVER_URL +'/files/'+ encodeURIComponent(file.name);
						await fetchAndSaveFile(url, previewPath );
					})
				}

				if( item.subimage.length > 0 ){
					item.subimage.forEach( async (file) => {
						let url = OLD_SERVER_URL +'/files/'+ encodeURIComponent(file.name);
						await fetchAndSaveFile(url, previewPath );
					})
				}

				if( item.samplePage.length > 0 ){
					item.samplePage.forEach( async (file) => {
						let url = OLD_SERVER_URL +`/sample/${item.sampleName}/html/`+ encodeURIComponent(file.name);
						await fetchAndSaveFile(url, samplePath ) ;
					})
				}

			}
			
			return item
		});

		newDB.forEach( (item, idx) => {

			let pp = path.join(item.ID, 'preview');//미리보기이미지 폴더
			let sp = path.join(item.ID, 'sample', 'html');//샘플보기이미지 폴더

			if( item.mainimage.length > 0 ){
				item.mainimage.forEach( file => file.webUrl = `${item.ID}/preview/${file.name}` )
			}

			if( item.subimage.length > 0 ){
				item.subimage.forEach( file => file.webUrl = `${item.ID}/preview/${file.name}` )
			}

			if( item.samplePage.length > 0 ){
				item.samplePage.forEach( file => file.webUrl = `${item.ID}/sample/${file.name}` )
			}

		});
		
		newDB.reverse();
		//return newDB;
		
		await fs.writeFile(DATABASE_PATH, JSON.stringify(newDB, null, 2), 'utf8'); // null, 2 추가하여 읽기 쉽게 저장

	} catch (error) {
		if (error.code !== 'ENOENT') { // ENOENT (파일 없음)
			console.error('파일 읽기 중 오류 발생:', error);
			throw error; // 다른 오류는 다시 던져서 호출자가 처리하게 함
		}
		// ENOENT (파일 없음)의 경우 jsonData는 []로 유지됩니다.
		console.log(`${dbFilePath} 파일이 존재하지 않아 새 파일로 시작합니다.`);
	}
	//console.log("aaa - ", newDB[1], newDB[0].mainimage[0])
}

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

// 방법 1: checkDB 함수를 Promise를 반환하도록 수정 (권장되는 패턴)
async function checkDBPromise() { // async 키워드를 사용하면 함수가 자동으로 Promise를 반환합니다.
    try {
        await fs.access(DATABASE_PATH, fs.constants.F_OK);
        console.log(`'${DATABASE_PATH}' 파일이 이미 존재합니다.`);

		// 파일이 존재할 경우, 여기에서 필요한 추가 작업을 수행할 수 있습니다.
        // 예: 파일 내용을 읽어 변수에 로드
        const dbData = await fs.readFile(DATABASE_PATH, 'utf8');
        return JSON.parse(dbData);

    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`'${DATABASE_PATH}' 파일이 존재하지 않아 생성합니다.`);
            const initialData = JSON.stringify([], null, 2);
            await fs.writeFile(DATABASE_PATH, initialData, 'utf8');
            console.log(`'${DATABASE_PATH}' 파일이 성공적으로 생성되었습니다.`);
        } else {
            console.error(`'${DATABASE_PATH}' 파일 접근 중 예상치 못한 오류 발생:`, error);
            throw error;
        }
    }
}

// checkDBPromise 함수 호출 예시
checkDBPromise()
    .then((DB) => {
        console.log("DB 체크 프로세스 완료.");
		if( !DB[0].projectNum ){ //projectState  
			//dataMigration(DB);
		}
        // DB 파일이 존재하거나 생성된 후의 다음 작업
    })
    .catch(err => {
        console.error("DB 체크 중 최종 오류:", err);
    });

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

/**
 * 
    if (req.files.mainOpenImages) {
        updateData.mainOpenImages = updateData.mainOpenImages.map(frontFile => {
            const uploadedFile = req.files.mainOpenImages.find(f => f.originalname === frontFile.name);
            return uploadedFile ? { ...frontFile, webUrl: `${directory}/preview/${uploadedFile.filename}` } : frontFile;
        });
    }

    if (req.files.mainimage) {
        updateData.mainimage = updateData.mainimage.map(frontFile => {
            const uploadedFile = req.files.mainimage.find(f => f.originalname === frontFile.name);
            return uploadedFile ? { ...frontFile, webUrl: `${directory}/preview/${uploadedFile.filename}` } : frontFile;
        });
    }

    if (req.files.subimage) {
        updateData.subimage = updateData.subimage.map(frontFile => {
            const uploadedFile = req.files.subimage.find(f => f.originalname === frontFile.name);
            return uploadedFile ? { ...frontFile, webUrl: `${directory}/preview/${uploadedFile.filename}` } : frontFile;
        });
    }

    if (req.files.samplePage) {
		updateData.samplePage.map(frontFile => {
            const uploadedFile = req.files.samplePage.find(f => f.originalname === frontFile.name);
            // samplePage는 라벨을 가질 수 있으므로, 해당 정보도 유지하는 것이 좋습니다.
            return uploadedFile ? { ...frontFile, webUrl: `${directory}/sample/${uploadedFile.filename}` } : frontFile;
        });
    }
 */

// 서버 코드에서
app.get('/files/:directoryName/:subdir/:filename', async (req, res) => {
    const directoryName = req.params.directoryName;
    let subdir = req.params.subdir; // 'preview' 또는 'sample'
    const filename = decodeURIComponent(req.params.filename); //  req.params.filename;//

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

//let testPath = path.join(publicPath, 'html', 'index.html')
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