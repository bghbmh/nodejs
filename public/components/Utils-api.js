
import { NO_ITEM_CONFIG } from './config.js';

export async function CheckExistFile(requestUrl) { // f 대신 더 명확한 이름 사용
//    const requestUrl = '/files/' + filePath;
    try {
		//console.log('requestUrl 000- ', requestUrl)
        const response = await fetch(requestUrl, { method: 'GET' });

        if (!response.ok) {
            console.error(`checkFile: HTTP 오류! URL: ${requestUrl}, 상태: ${response.status}`);
            const errorBody = await response.text();
            throw new Error(`checkFile: HTTP 오류! Status: ${response.status}, StatusText: ${response.statusText}, Body: ${errorBody}`);
        }

		
        return decodeURIComponent(response.url);

    } catch (error) {
        // 오류 로깅은 여기서 하고, throw는 상위에서 처리하도록 유지 
        throw error;
    }
}

export async function getFileUrl(kind, files){ // kind : 이미지 iamge, 문서 file, page 종류
	if (!files || files.length === 0) return [];
	
	const resetFile = files.map(async (file) => {
	try { 
			let parts = file.webUrl.split('/');

			let path='';
			for( let i=0; i<parts.length; i++ ){
				// if( i === parts.length-1 ){
				// 	path += '/' + encodeURIComponent(parts.slice(2).join('/')); 

				//console.log('file url 9999999999 - ',parts )
				// } else {
					path += '/' + encodeURIComponent(parts[i]);
				//}
				
			}
            // let directoryName = encodeURIComponent(parts[0]);
            // let subdir = encodeURIComponent(parts[1]);
            // let filename = encodeURIComponent(parts.slice(2).join('/')); 

			// let requestUrl = `/files/${directoryName}/${subdir}/${filename}`;
			let requestUrl = `/files${path}`;

			if( kind === 'member') requestUrl = `/member${path}`;

			const webUrl = await CheckExistFile(requestUrl);
			return { ...file, webUrl };
		} catch (error) {
			// 파일이 없을 경우 기본 이미지로 대체
			console.log('file url 999 - ',kind,file.webUrl)

			return { ...file, alt : '이미지가 없습니다', webUrl: NO_ITEM_CONFIG[kind] };
		}
	});
	return Promise.all( resetFile );
}

export function CheckFilesInFolder(kind, files){
	if (!files || files.length === 0) {

		if( !files ) files = [];
		if(  kind === 'item' ) {
			files.push({
				"name": "등록한 미리보기가 없습니다",
				"size": 0,
				"type": "",
				"lastModified": 0,
				"webUrl": NO_ITEM_CONFIG.FolderEmpthItem,
				"alt" : "등록한 미리보기가 없습니다"
			})
		} else if( kind === 'image' ) {
			files.push({
				"name": "등록된 이미지가 없습니다",
				"size": 0,
				"type": "",
				"lastModified": 0,
				"webUrl": NO_ITEM_CONFIG.FolderEmpthImg,
				"alt" : "등록한 이미지가 없습니다"
			})
		}

		return {files : files, empth : true };
	} 
	
	return {files : files, empth : false };
}