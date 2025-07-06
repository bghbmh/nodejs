/**
 * testDB.json 파일의 CRUD(생성, 읽기, 업데이트, 삭제) 로직을 담당합니다.

checkDBPromise, setFileList와 같은 함수들이 여기에 포함됩니다.

fs.readFile, fs.writeFile과 같은 파일 시스템 접근은 이 계층에서 이루어집니다.
 */
// services/dbService.js
import { promises as fs } from 'fs';
import path from 'path';
import { DATABASE_PATH, MEMBER_DB_PATH, DB_ROOT_DIR } from '../config/config.js';
import Project from '../models/Project.js'; // Project 모델 임포트

// DB 파일 존재 여부 확인 및 초기화
export async function checkProjectDB() {
    try {
        await fs.access(DATABASE_PATH, fs.constants.F_OK);
        console.log(`checkProjectDB - '${DATABASE_PATH}' 파일이 이미 존재합니다.`);
        const dbData = await fs.readFile(DATABASE_PATH, 'utf8');
        return JSON.parse(dbData);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`'${DATABASE_PATH}' 파일이 존재하지 않아 생성합니다.`);
            const initialData = JSON.stringify([], null, 2);
            await fs.writeFile(DATABASE_PATH, initialData, 'utf8');
            console.log(`'${DATABASE_PATH}' 파일이 성공적으로 생성되었습니다.`);
            return []; // 빈 배열 반환
        } else {
            console.error(`'${DATABASE_PATH}' 파일 접근 중 예상치 못한 오류 발생:`, error);
            throw error;
        }
    }
}

// 모든 프로젝트 데이터 가져오기
export async function getProjects() {
    await checkProjectDB(); // DB 존재 여부 확인 및 초기화
    const fileContent = await fs.readFile(DATABASE_PATH, { encoding: 'utf8' });
    return JSON.parse(fileContent);
}

// 새로운 프로젝트 추가 또는 업데이트
export async function saveProject(projectData, files = {}, projectID) {
    let currentDB = await getProjects();
    let newData = { ...projectData }; // 새로운 데이터 객체 복사

    // 파일 정보 업데이트 (Multer에서 받은 파일 정보를 newData에 매핑)
    setFileList(files, newData, projectID);

    let newJsonDB;
    const existingProjectIndex = currentDB.findIndex(item => item.ID === projectID);

    if (existingProjectIndex > -1) {
        // 기존 프로젝트 업데이트
        newJsonDB = currentDB.map((cur, idx) => {
            if (idx === existingProjectIndex) {
                return { ...cur, ...newData }; // 기존 데이터와 새로운 데이터를 병합
            }
            return cur;
        });
        console.log(`프로젝트 업데이트 완료: ${projectID}`);
    } else {
        // 새 프로젝트 추가 (맨 앞에 추가)
        newData.order = currentDB.length;
        newJsonDB = [newData, ...currentDB];
        console.log(`새 프로젝트 추가 완료: ${projectID}`);
    }

    await fs.writeFile(DATABASE_PATH, JSON.stringify(newJsonDB, null, 2), 'utf8');
    return newData; // 저장된 데이터 반환
}

// 파일 리스트 설정 도우미 함수 (이전 admin-server.js의 setFileList)
export function setFileList(reqFiles, updateData, directory) {
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
        updateData.samplePage = updateData.samplePage.map(frontFile => { // map으로 변경하여 새로운 배열 반환
            const uploadedFile = reqFiles.samplePage.find(f => f.originalname === frontFile.name);
            return uploadedFile ? { ...frontFile, webUrl: `${directory}/sample/html/${uploadedFile.filename}` } : frontFile;
        });
    }
}

// makeProjectFolder 함수도 여기에 두면 좋습니다.
export async function makeProjectFolder(subfolderName){   console.log(`makeProjectFolder 폴더 구조 생성 완료: ${subfolderName}`);
    const dynamicUserPath = path.join(DB_ROOT_DIR, subfolderName);
    const previewPath = path.join(dynamicUserPath, 'preview');
    const samplePath = path.join(dynamicUserPath, 'sample');
    const htmlPath = path.join(samplePath, 'html');

    try {
        await fs.mkdir(dynamicUserPath, { recursive: true });
        await fs.mkdir(previewPath, { recursive: true });
        await fs.mkdir(samplePath, { recursive: true });
        await fs.mkdir(htmlPath, { recursive: true });
        console.log(`폴더 구조 생성 완료: ${subfolderName}`);
    } catch (error) {
        console.error(`폴더 생성 오류 발생: ${error}`);
        throw error;
    }
}

// dataMigration 함수도 여기에 둘 수 있습니다.
// fetchAndSaveFile 함수도 여기에 둘 수 있습니다. (외부 fetch 모듈 사용)



// 멤버 DB 가져오기
export async function getMembers() {
    try {
        const memberList = await fs.readFile(MEMBER_DB_PATH, { encoding: 'utf8' });
        return JSON.parse(memberList);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`${MEMBER_DB_PATH} 파일이 존재하지 않습니다.`);
            return []; // 파일이 없으면 빈 배열 반환
        }
        console.error('멤버 DB 파일 읽기 오류:', error);
        throw error;
    }
}

// 새로운 프로젝트 추가 또는 업데이트
export async function saveMember(data, files = {} ) {  

	const db =  await getMembers();;
	let currentDB = [ ...db ]; // 새로운 데이터 객체 복사
	console.log('saveMember : ',MEMBER_DB_PATH, data, currentDB, typeof currentDB);


    let newMember = { ...data }; // 새로운 데이터 객체 복사

    let newJsonDB;
    const idx = currentDB.findIndex(member => Number(member.ID) === Number(data.id) );

    if ( idx > -1) {
		newJsonDB[ idx ] = { ...currentDB[idx], ...newMember };

        console.log('사용자정보 업데이트 완료: ', newJsonDB[ idx ] );
    } else {
        // 새 프로젝트 추가 (맨 앞에 추가)
        newMember.id = Date.now();
        newJsonDB = [newMember, ...currentDB];
        console.log(`사용자정보 추가 완료: ${newMember}`);
    }

    await fs.writeFile(MEMBER_DB_PATH, JSON.stringify(newJsonDB, null, 2), 'utf8');
    return newJsonDB[ idx ]; // 저장된 데이터 반환
}

export async function setTheme(data ) {  

	let db =  await getMembers();;
	let currentDB = [ ...db ]; // 새로운 데이터 객체 복사
	console.log('setTheme : ', data, currentDB );

	let isMember = currentDB.find(member => Number(member.id) === Number(data.id) );

	console.log('setTheme : ', data, isMember );
	isMember.theme = data.theme;

    await fs.writeFile(MEMBER_DB_PATH, JSON.stringify(currentDB, null, 2), 'utf8');
    return isMember; // 저장된 데이터 반환
}