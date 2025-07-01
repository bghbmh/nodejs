let ct = {
	main : ["웹", "인쇄", "콘텐츠", "브랜딩", "UI"],
	sub :  ["제작", "구축","리뉴얼" ,"유지보수", "sample" ],
	hash : ["디자인",
		"마크업",
		"모바일",
		"데스크탑",
		"반응형",
		"마케팅",
		"웹",
		"콘텐츠",
		"인쇄",
		"브랜딩",
		"ui-test"
	],
	cIcon : ['icon-svg2-web', 'icon-svg2-print', 'icon-svg2-contents', 'icon-svg2-branding', 'icon-svg2-me']
};
import commonSheet from './styles/style-common.js';
import { UploadFiles } from '/assets/js/custom-library/bUploadFile/export-bUploadFile.js';

let noItem = {
	image : "/assets/img/common/icon-svg-no-image1.svg",
	sample : "/assets/img/common/icon-svg-double-paper.svg"
};

class ProjectDetail extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._item = null;
		this._isEditing = false;
		this._isLoading = false;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = null;

		this.shadowRoot.adoptedStyleSheets = [ commonSheet ];
		this.loadStylesSheets([
            '/assets/js/custom-library/bUploadFile/bUploadFile.css',
			'/components/styles/projectDetail.css'
		]);
		this._initBody();

		this._markUp = markUp();
	}

	get componentSheet() {
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		return sheet;
	}

	async loadStylesSheets( cssFilePaths ) {
        try {
			const loadedSheets = await Promise.all(
				cssFilePaths.map(path => this.getStyleSheet(path))
			);

			this.shadowRoot.adoptedStyleSheets = [
				...this.shadowRoot.adoptedStyleSheets,
				...loadedSheets
			];
        } catch (error) {
            console.error('Failed to apply all stylesheets:', error);
        }
    }
	
	async getStyleSheet(cssPath) {
        try {
            const response = await fetch(cssPath);
            if (!response.ok) {
                throw new Error(`Failed to load CSS: ${response.statusText} from ${cssPath}`);
            }
            const cssText = await response.text();
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(cssText);
            return sheet;
        } catch (error) {
            console.error(`Error loading stylesheet ${cssPath}:`, error);
            return new CSSStyleSheet();
        }
    }

	// --- 속성 및 데이터 Getter/Setter ---
	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set item(itemData) {
		this._item = itemData;
		this._loadInitData();
	}

	get item() {
		return this._item;
	}

	static get observedAttributes() {
		return ['mode'];
	}

	// --- 라이프사이클 콜백 ---
	
	connectedCallback() { // 컴포넌트가 DOM에 추가될 때 호출

		
	}	

	disconnectedCallback() {
		this._body.removeEventListener('click', this.uiHandler.bind(this));
	}
	

	// 속성 값이 변경될 때 호출 (observedAttributes에 등록된 속성만 해당)
	attributeChangedCallback(name, oldValue, newValue) {
		console.log(`project-detail ---- Attribute ${name} changed from ${oldValue} to ${newValue}`);
		// 속성 변경에 따른 로직 수행 (예: 데이터 업데이트 및 리렌더링)
		// 주의: 속성으로 복잡한 객체나 배열을 전달하기는 어렵습니다.
		if (name === 'mode' && oldValue !== newValue) {
            console.log(`Attribute 'mode' changed from '${oldValue}' to '${newValue}'`);
            this._render();
        }
	}

	_initBody() {
        // 컴포넌트의 기본 HTML 구조 설정
        this._body = document.createElement("section");
        this._body.setAttribute("class", "section type2 project-detail");
        this.shadowRoot.appendChild(this._body);
    }


    // --- 데이터 처리 ---
	async _setFilesData(item) {
		this._fileItems.mainimage = await this.getFileUrl('image', [...this._item.mainimage]) ; 
		this._fileItems.subimage = await this.getFileUrl('image', [...this._item.subimage]) ;
		this._fileItems.samplePage = await this.getFileUrl('sample', [...this._item.samplePage]) ;
	}

	async getFileUrl(kind, files){ // kind : 이미지 iamge, 문서 file, page 종류
		if (!files || files.length === 0) return [];
        const resetFile = files.map(async (file) => {
            try {
                const webUrl = await this.checkFile(file.webUrl);
                return { ...file, webUrl };
            } catch (error) {
                // 파일이 없을 경우 기본 이미지로 대체
                return { ...file, webUrl: noItem[kind] };
            }
        });
        return Promise.all( resetFile );
	}

	async checkFile(f){
		const requestUrl = '/files/' + f.webUrl; // 서버의 전용 라우트 URL 구성
		try {
			const response = await fetch(requestUrl, { method: 'GET' });

			if (!response.ok) {
				console.error(`checkFile: HTTP 오류! URL: ${requestUrl}, 상태: ${response.status}`);
				const errorBody = await response.text(); // 오류 본문 읽기 시도
				throw new Error(`checkFile: HTTP 오류! Status: ${response.status}, StatusText: ${response.statusText}, Body: ${errorBody}`);
			}
			return response.url;

		} catch (error) {
			throw error;
		}
	}

    async _loadInitData() {
        if (!this._item) {
            this.setAttribute('mode', 'empty');
            return;
        }

        this.setAttribute('mode', 'loading');

		console.log("_loadInitData 123123 project-detail ")

        // try {
        //     await this._setFilesData(this._item);
        //     console.log('[InitialLoad] 데이터 로딩 완료');
        //     this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
        // } catch (error) {
        //     console.error('[InitialLoad] 데이터 로딩 오류:', error);
        //     this.setAttribute('mode', 'error');
        // }
    }

	async fetchHandler(formData){
		try{
			const response = await fetch( origin + '/update', { 
				method: 'POST',
				mode: "cors",
				credentials: "same-origin",
				body:  formData
			});
			
			// 응답 상태 확인
            if (!response.ok) {
                const errorBody = await response.text(); // 오류 본문 읽기 시도
                throw new Error(`updateProject - HTTP error! Status: ${response.status}, StatusText: ${response.statusText}, Body: ${errorBody}`);
            }
			const result = await response.json();
			return result;
		} catch (error){
			console.log("front error - ", error)
			return error;
		}
	}

	setFormData(np){

		const formData = new FormData();

		formData.append('directoryName', e.target.dataset.projectNum );		
		formData.append('update', e.target.dataset.projectNum);

		let projectData = {
			mainOpen : np.mainOpen.checked,
			mainOpenImages : setfile(np.mainOpenImages, "mainOpenImages") ,//
			category : [...np.maincategory, ...np.subcategory].filter( a => a.checked )
						.map( h => ({name : h.value, type : h.dataset.type, label : h.dataset.label }) ),
			'hash' : [...np.hash].filter( h =>  h.checked ).map( el => el.value ),
			title : np.headline.value !== '' ? np.headline.value : '',
			description : np.description.value,
			'extraInfo': setExtra(np.extra),
			'externalLink': setExtra(np.externalLink),
			"mainimage" : setfile(np.mainimage.zuFile, "mainimage"),
			"subimage" : setfile(np.subimage.zuFile, "subimage"),
			"sampleName" : np.samplename.value,
			"samplePage" : setfile(np.samplePage.zuFile, "page", np.samplePagelabel),
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
					return { label : pLabel.value, alt : '', ...fileDataInfo(f)}
				} else {
					return { alt : '', ...fileDataInfo(f)};
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

		formData.append('myData', JSON.stringify(projectData) );

		return formData;
	}

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {   console.log("_render000000 ------ ", this._body )
		if (!this._body) return;


		console.log("_render0 1111111110 ------ " )

		// 기존 이벤트 리스너 제거
        this._body.removeEventListener('click', this._uiClickHandler.bind(this));
        this._body.removeEventListener('submit', this._uiSubmitHandler.bind(this));

        const mode = this.getAttribute('mode');


		
        
        switch (mode) {
            case 'loading':
                this._body.innerHTML = this._markUp.loading();
                break;
            case 'edit':
                this._body.innerHTML = this.Html.edit(this._item);
                this._initializeUploaders();
                break;
            case 'view':
                this._body.innerHTML = this._markUp.view(this._item, this._fileItems);
                break;
            case 'error':
                 this._body.innerHTML = '<div>Error loading data.</div>';
                 break;
            case 'empty':
            default:
                this._body.innerHTML = '<div>No data available.</div>';
                break;
        }
        
        // 렌더링 후 새롭게 이벤트 리스너 연결
        this._body.addEventListener('click', this._uiClickHandler.bind(this));
        if (mode === 'edit') {
            this._body.addEventListener('submit', this._uiSubmitHandler.bind(this));
        }
	}

	_uiClickHandler(e){
		const button = e.target.closest("button");
		if (!button) return;

		const action = button.dataset.action;
		if (!action) return;

		e.preventDefault();

		switch (action) {
			case "view":
				this.setAttribute('mode', 'view');
				break;
			case "edit":
				this.setAttribute('mode', 'edit');
				break;
			case "delete-field":
			case "add-field":
				this._handleDynamicField(button);
				break;
			case "list":
			case "delete":
				// 외부로 이벤트를 보내 상위 컴포넌트가 처리하도록 함
				this._dispatchCustomEvent('project-action', action, { projectNum: this._item.projectNum });
				break;
		}	
	}

	async _uiSubmitHandler(e) {
		// update 인지 upload 인지 구분하는 것 추가하기
		e.preventDefault();
		e.stopPropagation();

		const form = e.target;		
		const formData = this.setFormData(form);

		this.setAttribute('mode', 'loading');

		try {
			this._item = await this.fetchHandler(formData);

			console.log("_uiSubmitHandler - ", formData );

			await this._loadInitData();

		} catch (err) {
			console.error('Failed to update project:', error);
            this.setAttribute('mode', 'error');
		}
	}

	_initUploaders() {
		const projectDetail = this.shadowRoot.querySelector('.project-detail');
		if (!projectDetail) return;

		console.log("_initUploaders - ",this._item.mainimage, this._fileItems)

		// 미리보기 파일 업로드 초기화
		let samplepageBtn = projectDetail.querySelector(".example11 .upload-file-btn");
		samplepageBtn.zuFile = UploadFiles.init({
			loadBtn: projectDetail.querySelector(".example11 .upload-file-btn"),
			fileBox: projectDetail.querySelector(".example11 .upload-file-box"),
			onPreviewMarkUp: (file, objectURL) => { return upload1markup(file, objectURL) },
			onSetFiles: () => { 
				if( this._item.samplePage.length === 0 ) return { files : [] }
				
				return { files : this._fileItems.samplePage }
			}
		});

		let mainimageBtn = projectDetail.querySelector(".example22 .upload-file-btn");
		mainimageBtn.zuFile = UploadFiles.init({
			loadBtn: projectDetail.querySelector(".example22 .upload-file-btn"),
			fileBox: projectDetail.querySelector(".example22 .upload-file-box"),
			multiple: false, //기본 true, 선택 사항: 단일 파일의 경우 false로 설정
			onPreviewMarkUp: upload2markup,
			onSetFiles: () => { 
				if( this._item.mainimage.length === 0 ) return { files : [] }
				return { files : this._fileItems.mainimage }
			}
		});

		let subimageBtn = projectDetail.querySelector(".upload-type3 .upload-file-btn");
		subimageBtn.zuFile = UploadFiles.init({
			loadBtn: projectDetail.querySelector(".upload-type3 .upload-file-btn"),
			fileBox: projectDetail.querySelector(".upload-type3 .upload-file-box"),
			onPreviewMarkUp: upload2markup,
			onSetFiles: () => ({ files: this._fileItems.samplePage || [] })
		});
	}

	_dispatchCustomEvent(customEventName, action, detail) {
		const event = new CustomEvent( customEventName, {
			bubbles: true,
			composed: true,
			detail: { action, ...detail }
		});
		this.dispatchEvent(event);
	}

}


customElements.define('project-detail', ProjectDetail);


// 마크업 함수 ===========================================
function categories(act, category = null, label = '') {
	//if( !category || !category.length ) return;
	if (act === 'view') {
		return category.map(c => `<span data-type="${c.type}">${c.name}</span>`).join(' / ');
	} else if (act === 'edit') {
		let a = category.filter(o => o.label === label);
		return ct[label].map((c, idx) => ctMarkup(label, c, idx + 1, a.some(d => d.name === c) ) ).join('');
	} else {
		return ct[label].map((c, idx) => ctMarkup(label, c, idx + 1, false) ).join('');
	}
}

function ctMarkup(label, value, num, checked) {
	return `
	<label>
		<input type="radio" name="${label}category" value="${value}" data-label="${label}" data-type="${num}" ${checked ? 'checked' : ''}>${value} 
		<i class="${ct.cIcon[num - 1]}" aria-hidden="true"></i>
	</label>`;
}

function state(act, s){
	let stepText = ['진행전','진행중','완료', '모름'];

	if( !s ) s = stepText.length-1;
	let wrap = '';

	if( act === 'view' ){
		wrap = stateMarkup(false, '', s);
	} else {
		wrap = `<div class="state">`
		wrap += stepText.map( (t, idx) => stateMarkup(idx === s, t) ).join('');
		wrap += `</div>`
	} 
	return wrap;
}

function stateMarkup(checked, text='', step = null){
	let tag = [`<div class="state-before"><i class="icon-svg-warning-circle-line"></i>진행전</div>`,
		`<div class="state-ongoing"><i class="icon-svg-state-ongoing"></i>진행중</div>`,
		`<div class="state-complete"><i class="icon-svg-check-circle-fill"></i>완료</div>`,
		`<div class="state-before"><i class="icon-svg-warning-circle-line"></i>모름</div>`
	];
	if( step ){
		return tag[step]
	}
	return `<label><input type="radio" name="state" ${checked ? 'checked' : ''}><span>${text}</span></label>`;
}

function previewMarkUp(c = '', f ){
	return `<figure class="${c}">
			<img src="${f.webUrl}" alt="${f.alt !== '' ? f.alt : f.name}">
			<figcaption>
				<span class="option title">${f.name}</span>
				${ f.size > 0 ? '<span class="option">' + (f.size / 1024).toFixed(2) + 'KB</span>' : ''} 
			</figcaption>
		</figure>`;
}

function extraInfo(act, data = null) {

	console.log("asdasd - ", data);
	let wrap = '';
	if (act === 'view') {
		wrap = `<div class="extra-info-wrap">`;
		for (let key in data) {
			wrap += `<span class="extra-info-item" aria-label="${key}">${data[key]}</span>`;
		}
		if (Object.keys(data).length === 0) {
			wrap += `<div class="extra-info">추가 정보없음</div>`;
		}
		wrap += `</div>`
	} else {
		for (let key in data) {
			wrap += `<div class="extra-info">
			<label><span class="guide">라벨</span><input type="text" name="extrainfo" value="${key}" placeholder="라벨"></label>
			<label><span class="guide">내용</span><input type="text" name="extrainfo" value="${data[key]}" placeholder="내용"></label>
		</div>`
		}

		let aaa = data ? Object.keys(data).length === 0 : false;

		if (aaa || !data) {
			wrap += `<div class="extra-info">
				<label><span class="guide">라벨</span><input type="text" name="extrainfo" value="" placeholder="라벨"></label>
				<label><span class="guide">내용</span><input type="text" name="extrainfo" value="" placeholder="내용"></label>
			</div>
			<div class="extra-info">
				<label><span class="guide">라벨</span><input type="text" name="extrainfo" value="" placeholder="라벨"></label>
				<label><span class="guide">내용</span><input type="text" name="extrainfo" value="" placeholder="내용"></label>
			</div>`
		}
	}

	return wrap;
}


function searchHash(act, data=null){
	let wrap = '';
	if( act === 'view' ){
		wrap = 'test ----';
	} else if( act === 'edit' ){
		wrap = `
			<div class="hash-wrap">
				${ct.hash.map( v => `<label><input type="checkbox" name="hash" value="${v}" ${data.includes(v) ? 'checked' : ''}>${v}</label>` ).join('')}
			</div>`;
	}else {
		wrap = `
			<div class="hash-wrap">
				${ct.hash.map( v => `<label><input type="checkbox" name="hash" value="${v}">${v}</label>` ).join('')}
			</div>`;
	}
	return wrap;
}

function externalLink(act, links = null){
	let wrap = ''; 
	if( act === 'view' ){
		if( Object.keys(links).length === 0 ) wrap = `<div class="extra-info">링크없음</div>`
		for( let key in links ){
			wrap += `<div class="extra-info"><a target="_blank" href="${key}" >${links[key]}</a></div>`;
		}
	} else {
		

		if( !links || Object.keys(links).length === 0 ){ // 임시
			wrap =`<div class="extra-info">
			<label><span class="guide">라벨</span><input type="text" name="externalLink" value="" placeholder="외부 링크 라벨"></label>
			<label><span class="guide">내용</span><input type="text" name="externalLink" value=""  placeholder="외부 링크 url"></label>
			<div class="ctrl"><button type="button" data-action="delete" class="btn">삭제1</button></div></div>
			<div class="extra-info">
			<label><span class="guide">라벨</span><input type="text" name="externalLink" value="" placeholder="외부 링크 라벨"></label>
			<label><span class="guide">내용</span><input type="text" name="externalLink" value=""  placeholder="외부 링크 url"></label>
			<div class="ctrl"><button type="button" data-action="delete" class="btn">삭제1</button></div></div>` ;
		} else {
			wrap = Object.entries(links).map( arr => `<div class="extra-info">
			<label><span class="guide">라벨</span><input type="text" name="externalLink" value="${arr[1]}" placeholder="외부 링크 라벨"></label>
			<label><span class="guide">내용</span><input type="text" name="externalLink" value="${arr[0]}"  placeholder="외부 링크 url"></label>
			<div class="ctrl"><button type="button" data-action="delete" class="btn">삭제1</button></div></div>`).join('');
		}
			 
	} 
	return wrap;

}

function filePreview(c = '', files){
	//console.log(' filePreview :', files, files?.length);
	if (!files || files.length === 0) {

		if( !files ) files = [];
		if(  c === 'item' ) {
			c += ' no-item';
			files.push({
				"name": "미리보기가 없습니다",
				"size": 0,
				"type": "",
				"lastModified": 0,
				"webUrl": noItem.sample,
				"alt" : "미리보기가 없습니다"
			})
		} else if( c === 'image' ) {
			c += ' no-image';
			files.push({
				"name": "등록된 이미지가 없습니다",
				"size": 0,
				"type": "",
				"lastModified": 0,
				"webUrl": noItem.image,
				"alt" : "등록된 이미지가 없습니다"
			})
		}
	}

	return files.map( f => previewMarkUp(c,f) ).join('');
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


// projectDetail 전체 마크업
function markUp(){
	let section = document.createElement("section");
	section.setAttribute("class", "section type2");
	return {
		view : ( item, fileItems = null ) => {
			return  `
				<!--섹션-->
				<!--섹션 헤더-->
				<header class="section-header tCom009">
					<div class="title">
						<i class="icon-svg2-web" aria-hidden="true"></i>
						<h3 class="text">testView_section TITLE </h3>
					</div>
					<div class="btn-wrap">
						<div class="dropdown">
							<button type="button" class="btn default round dropdown-toggle " data-action="toggle" title="버튼 목록 보기" aria-label="버튼 목록 보기"><i class="icon-svg-dots-vertical" aria-hidden="true"></i></button>
							<div class="dropdown-menu">
								<button type="button" class="dropdown-item" data-action="edit" data-page-layout="sub" data-page-name="myAdmin-project-detail">수정</button> 
								<button type="button" class="dropdown-item" data-action="delete" data-page-layout="sub" data-page-name="myAdmin-project-list">삭제</button>
							</div>
						</div>
					</div>
				</header>
				<!--//섹션 헤더-->

				<hr class="solid">
				<!--콘텐츠-->
				<div class="content-wrap">
					<div class="tCom010">
						<div class="info">
							<dl>
								<dt>현재 상황</dt>
								<dd>
									${state('view',item.state)}
								</dd>
							</dl>

							<dl>
								<dt>카테고리</dt>
								<dd>${categories('view',item.category)}</dd>
							</dl>
							<dl>
								<dt>기간</dt>
								<dd>2025.1.1 ~ test.11.13</dd>
							</dl>
							
							<dl>
								<dt>참여자</dt>
								<dd>
									<div class="member-wrap">
										<figure class="member circle no-user"><img src="/sample/dashboard02/assets/img/common/icon-svg-no-user.svg" alt="참여자이름"><figcaption><span>참여자이름</span></figcaption></figure>
										<figure class="member circle no-user"><img src="/sample/dashboard02/assets/img/common/icon-svg-no-user.svg" alt="참여자이름"><figcaption><span>참여자이름</span></figcaption></figure>
										<span class="plus-more" class="추가 이미지 개수">
											<i class="icon">+</i>2
										</span>
									</div>
									
								</dd>
							</dl>

							<dl class="flex-none w-100">
								<dt>추가 정보</dt>
								<dd>
									${extraInfo('view', item.extraInfo)}
								</dd>
							</dl>

							<dl class="flex-none w-100">
								<dt>미리보기<small>(샘플 파일 담을 폴더 이름)</small></dt>
								<dd>
									<div class="sample-file " >
										${ filePreview('item', fileItems.samplePage) }
									</div>

									<!--item_기본 스타일
									<div class="sample-file " >
										<figure class="item">
											<img src="/sample/dashboard02/assets/img/common/test-sample22.png" alt="이미지">
											<figcaption>
												<span class="option title">첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 직접 선택해주세요. 한글파일_filename.png</span>
												<span class="option">1234kb</span>
											</figcaption>
											<div class="ctrl"><button type="button" class="btn delete-one" aria-label="삭제"></button></div>
										</figure>
									</div>-->
									<!--//item_기본 스타일-->
									
								</dd>
							</dl>

							<dl>
								<dt>외부링크 추가</dt>
								<dd>
									${externalLink('view',item.externalLink)}
								</dd>
							</dl>

							<dl class="flex-none w-100">
								<dt>설명</dt>
								<dd class="description">${item.description ? item.description : '입력없음' }</dd>
							</dl>
						</div>
						<div class="image-wrap"> <!--임시 안보이게 style="display:none"  -->
							<div class="main">
								${ filePreview('image', fileItems.mainimage) }
							</div>
							<div class="sub">
								${ filePreview('image', fileItems.subimage) }
							</div>
						</div>
					</div>	
					
					<div class="bottom-btn-wrap">
						<button type="button" class="btn default margin-right-auto" 
							data-action="list" 
							data-page-layout="sub" 
							data-page-name="myAdmin-project-list">목록</button>

						<button type="button" class="btn default" 
							data-action="delete" 
							data-page-layout="sub" 
							data-page-name="myAdmin-project-list">삭제</button>

						<button type="button" class="btn dark" 
							data-action="edit" 
							data-page-layout="sub"
							data-page-name="myAdmin-project-detail">수정</button> 
					</div>

				</div>
				<!--//콘텐츠-->
				<!--//섹션--> `;			
		},
		edit : ( item, fileItems = null ) => {
			return `
				<form class="tCom011" encType="multipart/form-data" data-pn="${item.projectNum}">
					<div class="info">
						<dl>
							<dt>제목</dt>
							<dd><label class="width-100per"><input type="text" name="headline" value="${item.title}"></label></dd>
						</dl>
						<dl>
							<dt>카테고리</dt>
							<dd>
								<div class="option-wrap category">
									<div class="option">
										<b class="title">업무</b> <!--, 인쇄 등-->
										<div class="item">
											${categories('edit', item.category,'main')}
										</div>
									</div>

									<div class="option">
										<b class="title">작업</b> <!--구축, 유지보수 등-->
										<div class="item">
											${categories('edit', item.category,'sub')}
										</div>
									</div>
								</div>
								
							</dd>
						</dl>

						<dl>
							<dt>검색 키워드</dt>
							<dd>
								${searchHash('edit', item.hash)}
							</dd>
						</dl>

						<dl>
							<dt>참여자</dt>
							<dd>
								<div class="tCom012">
									<button type="button" class="btn dark round">추가</button>
									<div class="list-item-wrap">
										<div class="item">
											<figure class="member no-user ">
												<img src="/sample/dashboard02/assets/img/common/icon-svg-no-user.svg" alt="참여자사진"><figcaption><span>참여자가 없습니다</span></figcaption>
											</figure>
										</div>

										<div class="item">
											<label aria-label="참여자"><input name="member" type="checkbox" checked></label>
											<figure class="member ">
												<img src="" alt="참여자사진"><figcaption><span>참여자이름이 긴 경우</span></figcaption>
											</figure>
										</div>

										<div class="item">
											<label aria-label="참여자"><input name="member" type="checkbox" checked></label>
											<figure class="member">
												<img src="" alt="참여자사진"><figcaption><span>이름이</span></figcaption>
											</figure>
										</div>
									</div>
									
								</div>								
							</dd>
						</dl>

						<dl>
							<dt>추가 정보</dt>
							<dd>
								${extraInfo('edit', item.extraInfo)}
							</dd>
						</dl>
						
						<dl>
							<dt>wkrdjqrlrks_기간</dt>
							<dd>
								<div class="calendar-a">
									<label><input type="text" name="calendar-start" value="test value"></label>
									<label><input type="text" name="calendar-end" value="test value"></label>
								</div>
							</dd>
						</dl>
						<dl>
							<dt>현재 상황</dt>
							<dd>
								${state('edit',item.state)}
							</dd>
						</dl>
						<dl>
							<dt>미리보기</dt>
							<dd>
								<label class="width-100per margin-bottom-1">
									<input class="" name="samplename" type="text" value="${item.sampleName ? item.sampleName : ''}">
								</label>	
								
								<!--upload type1-->
								<div class=" upload-type1 example11">
									<button type="button" name="samplePage" class="upload-file-btn " title="파일 추가하기" aria-label="파일 추가하기">
										<span class="area">
											미리보기 할 목업 파일을 여기에 끌어다 놓거나,<br>
											파일 선택 버튼으로 직접 선택해주세요.
											<span class="btn primary">파일 선택</span>
										</span>
									</button>
									<div class="upload-file-box " ></div>
								</div>
								<!--//upload type1-->
							</dd>
						</dl>

						<dl>
							<dt>외부링크 추가</dt>
							<dd>
							${externalLink('edit',item.externalLink)}
							</dd>
						</dl>
						
						<dl>
							<dt>설명</dt>
							<dd class="description">
								<label class="width-100per"><textarea name="description" rows="6" class="resize-none"  placeholder="내용을 입력하세요" value="" >${item.description}</textarea></label>
							</dd>
						</dl>
					</div>

					<dl class="image-wrap">
						<dt>메인이미지</dt>
						<dd>
							<!-- upload type2 -->
							<div class="upload-type2 example22"> 
								<button type="button" name="mainimage" class="upload-file-btn " title="이미지 추가하기" aria-label="이미지 추가하기">
									<span class="area" aria-hidden="true">파일 선택</span>
								</button>
								<div class="upload-file-box"></div>
							</div>
							<!--//upload type2 -->
						</dd>
							

						<dt>서브이미지</dt>
						<dd>
							<!--upload type3-->
							<div class=" upload-type3 ">
								<button type="button" name="subimage" class="upload-file-btn " title="이미지 추가하기" aria-label="이미지 추가하기">
									<span class="area" aria-hidden="true">파일 선택</span>
								</button>
								<div class="upload-file-box example32"></div>
							</div>
							<!--//upload type3-->
						</dd>

						<dt>메인노출여부</dt>
						<dd>
							<label class="" title="메인에 보이게 할지말지 선택하는 버튼">
								<span class="">선택하기</span>
								<input type="checkbox" data-ui-action="toggle" name="mainOpen">
							</label>
						</dd>

					</dl>

					<div class="bottom-btn-wrap width-100per">
						<button type="button" class="btn default margin-right-auto" data-action="list" data-page-layout="sub" data-page-name="myAdmin-project-list">목록</button>



						<button type="button" class="btn default " 
							data-action="view" 
							data-page-layout="sub" 
							data-page-name="myAdmin-project-list">취소</button>

						<button type="submit" class="btn primary" data-action="update">저장</button> 
					</div>

				</form>			
			`;
		},
		loading : () => {
			return  `
				<!--섹션-->
				<!--섹션 헤더-->
				<header class="section-header tCom009 loading">
					<div class="title skeleton-text">
						로딩스타일
					</div>
				</header>
				<!--//섹션 헤더-->

				<hr class="solid">
				<!--콘텐츠-->
				<div class="content-wrap">
					<div class="tCom010 loading">
						<div class="info">
							<dl>
								<dt class="skeleton-text"></dt>
								<dd class="skeleton-text"></dd>
							</dl>

							<dl>
								<dt class="skeleton-text"></dt>
								<dd class="skeleton-text"></dd>
							</dl>
							<dl>
								<dt class="skeleton-text"></dt>
								<dd class="skeleton-text"></dd>
							</dl>
							
							<dl>
								<dt class="skeleton-text"></dt>
								<dd class="skeleton-text"></dd>
							</dl>

							<dl class="flex-none w-100">
								<dt class="skeleton-text"></dt>
								<dd class="skeleton-text"></dd>
							</dl>

							<dl class="flex-none w-100">
								<dt class="skeleton-text"></dt>
								<dd class="skeleton-text">
									
								</dd>
							</dl>

							<dl>
								<dt class="skeleton-text"></dt>
								<dd class="skeleton-text"></dd>
							</dl>

							<dl class="flex-none w-100">
								<dt class="skeleton-text"></dt>
								<dd class="description skeleton-text"></dd>
							</dl>
						</div>
						<div class="image-wrap"> <!--임시 안보이게 style="display:none"  -->
							<div class="main skeleton-image" >
							
							</div>
							<div class="sub skeleton-image">
							
							</div>
						</div>
					</div>	
					
					<div class="bottom-btn-wrap">
					
					</div>

				</div>
				<!--//콘텐츠-->
				<!--//섹션--> `;			
		
		}
	}

}

function viewMarkUp(item, fileItems){
	let section = document.createElement("section");
	section.setAttribute("class", "section type2");
	return  `
		<!--섹션-->
			<!--섹션 헤더-->
			<header class="section-header tCom009">
				<div class="title">
					<i class="icon-svg2-web" aria-hidden="true"></i>
					<h3 class="text">testView_section TITLE </h3>
				</div>
				<div class="btn-wrap">
					<div class="dropdown">
						<button type="button" class="btn default round dropdown-toggle " data-action="toggle" title="버튼 목록 보기" aria-label="버튼 목록 보기"><i class="icon-svg-dots-vertical" aria-hidden="true"></i></button>
						<div class="dropdown-menu">
							<button type="button" class="dropdown-item" data-action="edit" data-page-layout="sub" data-page-name="myAdmin-project-detail">수정</button> 
							<button type="button" class="dropdown-item" data-action="delete" data-page-layout="sub" data-page-name="myAdmin-project-list">삭제</button>
						</div>
					</div>
				</div>
			</header>
			<!--//섹션 헤더-->

			<hr class="solid">
			<!--콘텐츠-->
			<div class="content-wrap">
				<div class="tCom010">
					<div class="info">
						<dl>
							<dt>현재 상황</dt>
							<dd>
								${state('view',item.state)}
							</dd>
						</dl>

						<dl>
							<dt>카테고리</dt>
							<dd>${categories('view',item.category)}</dd>
						</dl>
						<dl>
							<dt>기간</dt>
							<dd>2025.1.1 ~ test.11.13</dd>
						</dl>
						
						<dl>
							<dt>참여자</dt>
							<dd>
								<div class="member-wrap">
									<figure class="member circle no-user"><img src="/sample/dashboard02/assets/img/common/icon-svg-no-user.svg" alt="참여자이름"><figcaption><span>참여자이름</span></figcaption></figure>
									<figure class="member circle no-user"><img src="/sample/dashboard02/assets/img/common/icon-svg-no-user.svg" alt="참여자이름"><figcaption><span>참여자이름</span></figcaption></figure>
									<span class="plus-more" class="추가 이미지 개수">
										<i class="icon">+</i>2
									</span>
								</div>
								
							</dd>
						</dl>

						<dl class="flex-none w-100">
							<dt>추가 정보</dt>
							<dd>
								${extraInfo('view', item.extraInfo)}
							</dd>
						</dl>

						<dl class="flex-none w-100">
							<dt>미리보기<small>(샘플 파일 담을 폴더 이름)</small></dt>
							<dd>
								<div class="sample-file " >
									${ filePreview('item', fileItems.samplePage) }
								</div>

								<!--item_기본 스타일
								<div class="sample-file " >
									<figure class="item">
										<img src="/sample/dashboard02/assets/img/common/test-sample22.png" alt="이미지">
										<figcaption>
											<span class="option title">첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 직접 선택해주세요. 한글파일_filename.png</span>
											<span class="option">1234kb</span>
										</figcaption>
										<div class="ctrl"><button type="button" class="btn delete-one" aria-label="삭제"></button></div>
									</figure>
								</div>-->
								<!--//item_기본 스타일-->
								
							</dd>
						</dl>

						<dl>
							<dt>외부링크 추가</dt>
							<dd>
								${externalLink('view',item.externalLink)}
							</dd>
						</dl>

						<dl class="flex-none w-100">
							<dt>설명</dt>
							<dd class="description">${item.description ? item.description : '입력없음' }</dd>
						</dl>
					</div>
					<div class="image-wrap"> <!--임시 안보이게 style="display:none"  -->
						<div class="main">
							${ filePreview('image', fileItems.mainimage) }
						</div>
						<div class="sub">
							${ filePreview('image', fileItems.subimage) }
						</div>
					</div>
				</div>	
				
				<div class="bottom-btn-wrap">
					<button type="button" class="btn default margin-right-auto" 
						data-action="list" 
						data-page-layout="sub" 
						data-page-name="myAdmin-project-list">목록</button>

					<button type="button" class="btn default" 
						data-action="delete" 
						data-page-layout="sub" 
						data-page-name="myAdmin-project-list">삭제</button>

					<button type="button" class="btn dark" 
						data-action="edit" 
						data-page-layout="sub"
						data-page-name="myAdmin-project-detail">수정</button> 
				</div>

			</div>
			<!--//콘텐츠-->
		<!--//섹션--> `;
}

function editMarkUp(item){
	let section = document.createElement("section");
	section.setAttribute("class", "section type2");
	return `
		<form class="tCom011" encType="multipart/form-data" data-pn="${item.projectNum}">
			<div class="info">
				<dl>
					<dt>제목</dt>
					<dd><label class="width-100per"><input type="text" name="headline" value="${item.title}"></label></dd>
				</dl>
				<dl>
					<dt>카테고리</dt>
					<dd>
						<div class="option-wrap category">
							<div class="option">
								<b class="title">업무</b> <!--, 인쇄 등-->
								<div class="item">
									${categories('edit', item.category,'main')}
								</div>
							</div>

							<div class="option">
								<b class="title">작업</b> <!--구축, 유지보수 등-->
								<div class="item">
									${categories('edit', item.category,'sub')}
								</div>
							</div>
						</div>
						
					</dd>
				</dl>

				<dl>
					<dt>검색 키워드</dt>
					<dd>
						${searchHash('edit', item.hash)}
					</dd>
				</dl>

				<dl>
					<dt>참여자</dt>
					<dd>
						<div class="tCom012">
							<button type="button" class="btn dark round">추가</button>
							<div class="list-item-wrap">
								<div class="item">
									<figure class="member no-user ">
										<img src="/sample/dashboard02/assets/img/common/icon-svg-no-user.svg" alt="참여자사진"><figcaption><span>참여자가 없습니다</span></figcaption>
									</figure>
								</div>

								<div class="item">
									<label aria-label="참여자"><input name="member" type="checkbox" checked></label>
									<figure class="member ">
										<img src="" alt="참여자사진"><figcaption><span>참여자이름이 긴 경우</span></figcaption>
									</figure>
								</div>

								<div class="item">
									<label aria-label="참여자"><input name="member" type="checkbox" checked></label>
									<figure class="member">
										<img src="" alt="참여자사진"><figcaption><span>이름이</span></figcaption>
									</figure>
								</div>
							</div>
							
						</div>								
					</dd>
				</dl>

				<dl>
					<dt>추가 정보</dt>
					<dd>
						${extraInfo('edit', item.extraInfo)}
					</dd>
				</dl>
				
				<dl>
					<dt>wkrdjqrlrks_기간</dt>
					<dd>
						<div class="calendar-a">
							<label><input type="text" name="calendar-start" value="test value"></label>
							<label><input type="text" name="calendar-end" value="test value"></label>
						</div>
					</dd>
				</dl>
				<dl>
					<dt>현재 상황</dt>
					<dd>
						${state('edit',item.state)}
					</dd>
				</dl>
				<dl>
					<dt>미리보기</dt>
					<dd>
						<label class="width-100per margin-bottom-1">
							<input class="" name="samplename" type="text" value="${item.sampleName ? item.sampleName : ''}">
						</label>	
						
						<!--upload type1-->
						<div class=" upload-type1 example11">
							<button type="button" name="samplePage" class="upload-file-btn " title="파일 추가하기" aria-label="파일 추가하기">
								<span class="area">
									미리보기 할 목업 파일을 여기에 끌어다 놓거나,<br>
									파일 선택 버튼으로 직접 선택해주세요.
									<span class="btn primary">파일 선택</span>
								</span>
							</button>
							<div class="upload-file-box " ></div>
						</div>
						<!--//upload type1-->
					</dd>
				</dl>

				<dl>
					<dt>외부링크 추가</dt>
					<dd>
					${externalLink('edit',item.externalLink)}
					</dd>
				</dl>
				
				<dl>
					<dt>설명</dt>
					<dd class="description">
						<label class="width-100per"><textarea name="description" rows="6" class="resize-none"  placeholder="내용을 입력하세요" value="" >${item.description}</textarea></label>
					</dd>
				</dl>
			</div>

			<dl class="image-wrap">
				<dt>메인이미지</dt>
				<dd>
					<!-- upload type2 -->
					<div class="upload-type2 example22"> 
						<button type="button" name="mainimage" class="upload-file-btn " title="이미지 추가하기" aria-label="이미지 추가하기">
							<span class="area" aria-hidden="true">파일 선택</span>
						</button>
						<div class="upload-file-box"></div>
					</div>
					<!--//upload type2 -->
				</dd>
					

				<dt>서브이미지</dt>
				<dd>
					<!--upload type3-->
					<div class=" upload-type3 ">
						<button type="button" name="subimage" class="upload-file-btn " title="이미지 추가하기" aria-label="이미지 추가하기">
							<span class="area" aria-hidden="true">파일 선택</span>
						</button>
						<div class="upload-file-box example32"></div>
					</div>
					<!--//upload type3-->
				</dd>

				<dt>메인노출여부</dt>
				<dd>
					<label class="" title="메인에 보이게 할지말지 선택하는 버튼">
						<span class="">선택하기</span>
						<input type="checkbox" data-ui-action="toggle" name="mainOpen">
					</label>
				</dd>

			</dl>

			<div class="bottom-btn-wrap width-100per">
				<button type="button" class="btn default margin-right-auto" data-action="list" data-page-layout="sub" data-page-name="myAdmin-project-list">목록</button>



				<button type="button" class="btn default " 
					data-action="view" 
					data-page-layout="sub" 
					data-page-name="myAdmin-project-list">취소</button>

				<button type="submit" class="btn primary" data-action="update">저장</button> 
			</div>

		</form>`;
}