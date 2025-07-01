

import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { getFileUrl, CheckFilesInFolder } from './Utils-api.js';
import { DispatchCustomEvent } from './Utils-event.js';

import '/components/section-header.js';
import { UploadFiles } from '/assets/js/custom-library/bUploadFile/export-bUploadFile.js';

import './modal-popup.js';
import './preview-file.js'
import './file-uploader.js';

class PersonalInfo extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._profile = null;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = null;

		// 생성자 내에서 한 번만 생성하여 재사용
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(setCssStyle());
		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet]; // 컴포넌트별 스타일과 함께 적용
		this.loadStylesSheets([
            '/assets/js/custom-library/bUploadFile/bUploadFile.css',
		]);

		this._initBody();

		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
		
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

	_initBody() {
		// 컴포넌트의 기본 HTML 구조 설정
		this._body = DOM.CreateElement({tag:"section", class:"section type2"});
		this.shadowRoot.appendChild( this._body )
	}	

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set data(data) {   console.log('PersonalInfo data ', data);
		this._profile = data;   
		this._loadInitData(data);
	}

	get data() {
		return this._profile;
	}

	static get observedAttributes() {
		return ['mode'];
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		this.setAttribute('mode', 'loading');
		this.shadowRoot.addEventListener('click', this._bindUiClickHandler);
	}
	
	disconnectedCallback() { // 컴포넌트가 DOM에서 제거될 때 호출
		this.shadowRoot.removeEventListener('click', this._bindUiClickHandler );
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'mode' && oldValue !== newValue) {
            this._render();
        }
	}

	// --- 데이터 처리 ---
	async _loadInitData(data) {

		//this._profile = items[1]; // 임시

        if (!data) {
            this.setAttribute('mode', 'empty');
            return;
        }

       this.setAttribute('mode', 'loading');

		try {
			await this._setFilesData(data);
			this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
		} catch (error) {
			console.error('[InitialLoad] 데이터 로딩 오류:', error);
			this.setAttribute('mode', 'error');
		}
    }

	async _setFilesData(item) { //console.log("_setFilesData - ", this._fileItems )
		this._fileItems.main = await getFileUrl('member', [item.image.main]) ;	
		this._fileItems.info = await getFileUrl('member', [ item.image.info]) ;		
	}


	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {

		const mode = this.getAttribute('mode');
		
		switch (mode) {
			case 'loading':
				this.setAttribute('aria-busy', 'true');
				this._body.innerHTML = MarkUp.loading();
				break;
			case 'view':
				this.removeAttribute('aria-busy');
				console.log("proile view - ", this._fileItems )
				this._body.innerHTML = MarkUp.view(this._profile, this._fileItems);

				// console.log("proile popup - ", popup )
				break;
			case 'edit':
				this.removeAttribute('aria-busy');
				this._body.innerHTML = MarkUp.edit(this._profile, this._fileItems);
				this._initUploaders();

				break;
		}

	}

	_uiClickHandler(e){
		console.log('clickElem - ', e.target.closest("button"));	

		const button = e.target.closest("button");
		if (!button || button.type ==="submit" ) return;

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
		}	

	}

	_initUploaders() {

		let profileimage = this._body.querySelector(".upload-type2");
		profileimage.files = this._fileItems.main || [];
		profileimage.onPreviewMarkUp = upload2markup;

		console.log("_initUploaders - ", profileimage)

	}
}

customElements.define('personal-info', PersonalInfo);

// 마크업 함수 ===========================================
function upload2markup(file, objectURL){
	const image = file.type.startsWith('image/');
	const tempUrl = 'https://bghbmh.github.io/simple-ui-test/UploadFiles/icon-svg-double-paper.svg';
		
	//<img src="https://design6.hullaro.com/resource/files/0/template/202407/CTnHoiDHoulujICArSfbFlIvwwbqhHZR">

	let fileItemWrap = document.createElement("figure");
	fileItemWrap.setAttribute("class", "item");
	fileItemWrap.innerHTML = `
		<img src="${image ? objectURL : tempUrl}" alt="이미지"></img>
		<figcaption>
			<span class="option title">${file.name}</span>
			<span class="option">${(file.size / 1024).toFixed(2)} KB</span>
		</figcaption>
	`;
	return fileItemWrap;
}

const MarkUp = {
	loading : () => {
		return `
		<loading-skeleton></loading-skeleton>
		<loading-skeleton></loading-skeleton>
		`;
	},
	view : (member, files) => {
		console.log("_render", member, files)
		return `
			<!--섹션 헤더-->
			<header class="section-header ">
				<div class="title">
					<h3 class="text ">test_view profile </h3>
				</div>
				<div class="btn-wrap">
					<button type="button" class="btn dark" 
						data-action="edit" 
						data-page-layout="sub"
						data-page-name="profile">수정</button>
				</div>
			</header>
			<!--//섹션 헤더-->

			<hr class="solid margin-top-0">

			<!--콘텐츠-->
			<div class="content-wrap">

				<div class="tCom013">

					<div class="image-wrap">
						<figure class="member circle ">
							<img src="${files.main[0].webUrl}" alt="${files.main[0].alt !== '' ? files.main[0].alt : files.main[0].name}" aria-hidden="true">
							<figcaption>
								<span class="option title">${member.name}</span>
								${ files.main[0].size > 0 ? '<span class="option">' + (files.main[0].size / 1024).toFixed(2) + 'KB</span>' : ''} 
							</figcaption>
						</figure>
					</div>

					<div class="info">
						<dl>
							<dt>이름</dt>
							<dd>${member.name}</dd>
						</dl>
						<dl>
							<dt>별명 ${member.nickname.check ? '별명 사용 중' : '별명 사용 안함' }</dt>
							<dd>${member.nickname.value ? member.nickname.value : '별명없음' }</dd>
						</dl>
						<dl>
							<dt>이메일</dt>
							<dd>${member.email}</dd>
						</dl>
						<dl>
							<dt>전화번호</dt>
							<dd>test 1234</dd>
						</dl>
						<dl>
							<dt>소속 / 직급</dt>
							<dd>${member.business.team} / ${member.business.position}</dd>
						</dl>
						<dl>
							<dt>회사</dt>
							<dd>${member.business.company}</dd>
						</dl>
						<dl>
							<dt>내선번호</dt>
							<dd>${member.business.number}</dd>
						</dl>
					</div>
				</div>

			</div>
			<!--//콘텐츠-->		
		`
	},
	edit : (member, files) => {
		return `
			<!--섹션 헤더-->
			<header class="section-header">
				<div class="title">
					<h3 class="text">test_edit profile </h3>
				</div>
				<div class="btn-wrap">
					<button type="button" class="btn default " 
						data-action="view" 
						data-page-layout="sub" 
						data-page-name="profile">취소</button>

					<button type="submit" class="btn primary" data-action="update">저장</button> 
					
				</div>
			</header>
			<!--//섹션 헤더-->

			<hr class="solid margin-top-0">

			<!--콘텐츠-->
			<div class="content-wrap">

				<form class="tCom014">

					<div class="image-wrap">
						<file-uploader class="upload-type2 " id="profileimage">
							<button slot="upload-button" type="button" class="upload-file-btn">
								<span class="area">파일 선택</span>
							</button>
							<div slot="file-box" class="upload-file-box"></div>
						</file-uploader>

					</div>

					<div class="info">
						<dl class="flex-fill w-100">
							<dt>이름</dt>
							<dd><label class="w-100"><input type="text" value="${member.name}"></label></dd>
						</dl>
						<dl>
							<dt>별명</dt>
							<dd>
								<label class="w-100"><input type="text" value="${member.nickname.value}"></label>
							</dd>
						</dl>
						<dl class="p-1 align-self-end">
							<dd>
								<switch-type1 class="margin-left-auto" name="mainOpen" guide="별명 사용" title="" ${member.nickname.check ? 'checked' : ''}></switch-type1><!-- disabled -->
							</dd>
						</dl>
						<dl>
							<dt>이메일</dt>
							<dd><label class="w-100"><input type="text" value="${member.email}"></label></dd>
						</dl>
						<dl>
							<dt>전화번호</dt>
							<dd><label class="w-100"><input type="text" value="${member.business.number}"></label></dd>
						</dl>
						<dl>
							<dt>소속</dt>
							<dd><label class="w-100"><input type="text" value="${member.business.team}"></label></dd>
						</dl>
						<dl>
							<dt>직급</dt>
							<dd><label class="w-100"><input type="text" value="${member.business.position}"></label></dd>
						</dl>
						<dl>
							<dt>내선번호</dt>
							<dd><label class="w-100"><input type="text" value="${member.business.number}"></label></dd>
						</dl>
					</div>

				</form>

			</div>
			<!--//콘텐츠-->		
		`
	}

}

function setCssStyle(){
	// CSS 파일 연결
return `


:host {
      }

.section-header{ display: flex; gap: 8px; padding: 1em 0 16px; }
.section-header .title{ margin-right: auto }
.section-header .title .text{ font-size: 24px; font-weight: 700; color: var(--font-color-default); margin-bottom: 0; }

.section.type2{
	padding: 1em 2.5em 1.5em;
	border-radius: var(--border-radius-default);
	background-color: var(--section-background-color);
}
.section.type2 .section-header{ }
@media(max-width: 1280px){
	.section-header .title .text { font-size: 20px; }
}
@media(max-width: 768px){
	.section.type2 { padding: 1em 1.3em; }
	.section.type2 .section-header{ padding-top: 0em }
	.section + .section{ margin-top: 15px;}
}



.tCom013{
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 8px 3em;
}
.tCom013 .image-wrap{ width: 160px; height: 160px; flex: none; }
.tCom013 .member{
	width: 100%;
	height: 100%;
	background-color: var(--dark-50);
	margin: 0;
}
.tCom013 .member img[src*="-no-user"]{
	display: block;
	width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: center;
	scale: .35;
}
.tCom013 .image-wrap .member figcaption{ display: none }


.tCom013 .info{ 
	flex: 1;
	display: flex;
	flex-wrap: wrap;
	gap: 1em 2em;
	font-size: 1em;
}
.tCom013 .info > dl { flex: 1 0 40%; min-width: 240px; }
.tCom013 .info dt{ font-size: 1em; font-weight: 400; padding-bottom: .7em; }
.tCom013 .info dd{ 
	padding: 1em; 
	background-color: var(--gray-f9); 
	color: var(--font-color-default); 
	border-radius: var(--border-radius-8px);
	font-size: 1em;
}


.tCom014{
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 8px 3em;
}
.tCom014 .image-wrap{  flex: 0 1 auto; min-width: 200px  }

.tCom014 .upload-type2{ /* width: auto; height: auto; */ max-width: 160px;  }
.tCom014 .upload-type2 .upload-file-box .item{ background-color: transparent; }
.tCom014 .upload-type2 .upload-file-box img{  
	/* width: 160px; 
	height: 160px; 
	
	border-radius: 100em;
	border : 1px solid var(--dark-200);
	*/
}
.tCom014 .upload-type2 figcaption{ top: 0; right: 0; }
.tCom014 .upload-type2 figcaption span{ display: none; }
.tCom014 .upload-type2 .ctrl .btn{
	background-color: #009e97;
	border-radius: 100em;
	width: 2.5em;
	height: 2.5em;

}
.tCom014 .info{ 
	flex: 1;
	display: flex;
	flex-wrap: wrap;
	gap: 1em 2em;
	font-size: 1em;
}
.tCom014 .info > dl { flex: 1 0 40%; min-width: 240px; }
.tCom014 .info dt{ font-size: 1em; font-weight: 400; padding-bottom: .7em; }

@media(max-width: 900px){
	switch-type1{ width: 100%; }
	switch-type1::part(switch){ width: 100%;   justify-content: space-between;}
}




`
}
