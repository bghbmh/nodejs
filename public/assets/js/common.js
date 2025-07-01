

import { UploadFiles } from './custom-library/bUploadFile/export-bUploadFile.js';


window.addEventListener('load', () => {
	console.log("load - " );
	let samplepageBtn = document.querySelector(".example11 .upload-file-btn");
	let mainimageBtn = document.querySelector(".example22 .upload-file-btn");
	let subimageBtn = document.querySelector(".upload-type3 .upload-file-btn");

	const uploadInstances = {};
	samplepageBtn.zuFile = UploadFiles.init({
		loadBtn: document.querySelector(".example11 .upload-file-btn"),
		fileBox: document.querySelector(".example11 .upload-file-box"),
		onPreviewMarkUp: (file, objectURL) => { return upload1markup(file, objectURL) },
	})

	mainimageBtn.zuFile = UploadFiles.init({
		loadBtn: document.querySelector(".example22 .upload-file-btn"),
		fileBox: document.querySelector(".example22 .upload-file-box"),
		multiple: false, //기본 true, 선택 사항: 단일 파일의 경우 false로 설정
		onPreviewMarkUp: upload2markup
	});

	subimageBtn.zuFile = UploadFiles.init({
		loadBtn: document.querySelector(".upload-type3 .upload-file-btn"),
		fileBox: document.querySelector(".upload-type3 .upload-file-box"),
		onPreviewMarkUp: upload2markup
	});


});
	

const form = document.getElementById('dataTestForm');
form.addEventListener('submit', testTest );


function testTest(e){

	uploadHandler(e)
	.then( d => {
		console.log('최종적으로 받은 데이터:', d);
		// 받은 데이터를 가지고 UI 업데이트 등 다음 작업 수행
	}).catch( err => {
		console.error('업로드 중 오류 발생:', err);
    	// 사용자에게 오류 메시지 표시
	})
	
}


async function uploadHandler(e) {

	e.preventDefault(); // 폼 기본 제출 방지

	const formData = new FormData();
	e.target.samplename.value ? formData.append('directoryName', e.target.samplename.value ) : '';

	let newProject = setProjectDataInfo(e.target, formData);

	formData.append('myData', JSON.stringify(newProject) );
	console.log( "newProject : 보내기 직전 콘솔", formData)

	try {
		const response = await fetch('/upload', { // 서버의 파일 업로드 엔드포인트 URL
			method: 'POST',
			body: formData,
			// FormData를 사용할 때는 Content-Type 헤더를 명시적으로 설정하지 않습니다.
			// 브라우저가 알아서 multipart/form-data 와 boundary를 설정해줍니다.
		});

		// 응답 상태 확인
		if (!response.ok) { // HTTP 상태 코드가 200-299 범위가 아니면 오류
			const errorText = await response.text(); // 오류 응답 본문을 텍스트로 읽기
			throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
		}

		// 응답 본문을 JSON으로 파싱 (서버에서 JSON으로 응답을 보냈을 경우)
    	const result = await response.json();
		console.log('서버로부터 받은 데이터 (성공):', result);
		// 이제 result 객체 안에 서버가 보낸 데이터가 있습니다.
		// 예: { message: '파일 업로드 성공!', fileInfo: [...] }
		return result; // 받은 데이터를 반환

	} catch (error) {
		console.error('전송 중 오류 발생:', error);
		// 에러 처리 로직
    	throw error; // 에러를 다시 throw하여 호출자에게 알림
	}
}


function setProjectDataInfo(np, formData){
	let projectData = {
		mainOpen : np.mainOpen.checked,
		mainOpenImages : setfile(np.mainOpenImages, "mainOpenImages") ,
		category : [...np.maincategory, ...np.subcategory].filter( a => a.checked )
					.map( h => ({name : h.value, type : h.dataset.type, label : h.dataset.label }) ),
		'hash' : [...np.hash].filter( h =>  h.checked ).map( el => el.value ),
		title : np.title.value,
		description : np.description.value,
		'extraInfo': setExtra(np.extra),
		'externalLink': setExtra(np.externalLink),
		"mainimage" : setfile(np.mainimage.zuFile, "mainimage"),
		"subimage" : setfile(np.subimage.zuFile, "subimage"),
		"sampleName" : np.samplename.value,
		"samplePage" : setfile(np.samplePage.zuFile, "samplepage", np.samplePagelabel),
	};

	function setfile(ff, label, options){
		if( !ff   ){
			console.log("파일없음", label)
			return [];
		}
		
		let files = [...ff.getSelectedFiles()];
		let arr ;
		let pLabel ;
		arr = files.map(function(f, idx){
			formData.append(label, f);
			if( label === "page" ){
				if( options.length ) pLabel = [...options].find(s => s.dataset.fileName === f.name );
				else pLabel = options;
				
				pLabel.value === '' ? pLabel.value = 'sample' + idx : '';
				return { label : pLabel.value, ...fileDataInfo(f)}
			} else {
				return fileDataInfo(f);
			}
		});
		
		return arr;
	}

	function fileDataInfo(f){
		return { name : f.name, size :  f.size, type: f.type, lastModified : f.lastModified }
	}

	function setExtra(exLinks, box={}){
		if( !exLinks ) return box;
		for( let i=0; i<exLinks.length; i+=2 ){
			if( exLinks[i].value) {
				//console.log("setExternalLink 22 - ",exLinks[i].value )
				box[exLinks[i].value] = exLinks[i+1].value ;
			}
		}
		return box;
	}

	return projectData;
}


function upload1markup(file, objectURL, v=''){

	const image = file.type.startsWith('image/');
	const tempUrl = 'https://bghbmh.github.io/simple-ui-test/UploadFiles/icon-svg-double-paper.svg';

	let fileItemWrap = document.createElement("figure");
	fileItemWrap.setAttribute("class", "item");
	fileItemWrap.innerHTML = `
		<img src="${image ? objectURL : tempUrl}" alt="이미지">
		<figcaption>
			<label><span class="guide">라벨</span><input name="samplePagelabel" data-file-name="${file.name}" type="text" value="${v}" placeholder="라벨을 입력하세요"></label>
			<span class="option title">${file.name}</span>
			<span class="option">${(file.size / 1024).toFixed(2)} KB</span>
		</figcaption>
	`;
	return fileItemWrap;

}
function upload2markup(file, objectURL){
	const image = file.type.startsWith('image/');
	const tempUrl = 'https://bghbmh.github.io/simple-ui-test/UploadFiles/icon-svg-double-paper.svg';
		
	let fileItemWrap = document.createElement("figure");
	fileItemWrap.setAttribute("class", "item");
	fileItemWrap.innerHTML = `
		<img src="${image ? objectURL : tempUrl}" alt="이미지">
		<figcaption>
			<span class="option title">${file.name}</span>
			<span class="option">${(file.size / 1024).toFixed(2)} KB</span>
		</figcaption>
	`;
	return fileItemWrap;
}





	// public/js/common.js
	async function loadLatestData() {
		try {
			const response = await fetch('/get-latest-data'); // 서버의 데이터 가져오는 라우트 URL

			if (!response.ok) {
				// HTTP 상태 코드가 200-299 범위를 벗어날 경우 오류 처리
				const errorText = await response.text(); // 오류 응답 본문 읽기
				throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
			}

			const data = await response.json(); // 응답을 JSON으로 파싱
			console.log('서버로부터 불러온 데이터:', data);

			// 불러온 데이터를 사용하여 HTML 업데이트 또는 다른 작업 수행
			// 예: document.getElementById('displayArea').innerText = JSON.stringify(data, null, 2);

		} catch (error) {
			console.error('데이터 로드 중 오류 발생:', error);
			// 사용자에게 오류 메시지 표시 등
			// 예: alert('데이터를 불러오는데 실패했습니다.');
		}
	}

	// 페이지 로드 시 또는 특정 이벤트 발생 시 데이터 로드 함수 호출
	// 예: 페이지 로드 완료 후 데이터 불러오기
	//window.addEventListener('load', loadLatestData);

	// 또는 버튼 클릭 시 불러오기 등
	//document.getElementById('loadButton').addEventListener('click', loadLatestData);