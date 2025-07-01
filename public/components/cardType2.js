

import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { DispatchCustomEvent } from './Utils-event.js';
import { getFileUrl,CheckFilesInFolder } from './Utils-api.js';

import './project-member.js'

class CardType2 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = null;

		this.shadowRoot.adoptedStyleSheets = [commonSheet, this.componentSheet]; // 컴포넌트별 스타일과 함께 적용

		this._initBody();
		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
	}

	get componentSheet() {
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		return sheet;
	}

	_initBody() {
		// 컴포넌트의 기본 HTML 구조 설정
		this._body = DOM.CreateElement({tag:"div", class:"card-type2"});
		this.shadowRoot.appendChild(this._body);
	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set data(data) {
		this._data = data;
		//console.log("dardtype2 - ", this._data)
		this._loadInitData();
	}
	get data() {
		return this._data;
	}

	static get observedAttributes() {
		return ['mode'];
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출

	}
	
	disconnectedCallback() { // 컴포넌트가 DOM에서 제거될 때 호출
		this._body.removeEventListener('click', this._bindUiClickHandler );
	}

	// 속성 값이 변경될 때 호출 (observedAttributes에 등록된 속성만 해당)
	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'mode' && oldValue !== newValue) {
            this._render();
        }
	}

	// --- 데이터 처리 ---
	async _loadInitData() {
		if (!this._data) {
			this.setAttribute('mode', 'empty');
			return;
		}

		this.setAttribute('mode', 'loading');

		try {
			await this._setFilesData(this._data);
			this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
		} catch (error) {
			console.error('[InitialLoad] 데이터 로딩 오류:', error);
			this.setAttribute('mode', 'error');
		}
	}

	async _setFilesData(item) { 
		this._fileItems.mainimage = await getFileUrl('image', [...item.mainimage]) ; 
		this._fileItems.subimage = await getFileUrl('image', [...item.subimage]) ;
		this._fileItems.samplePage = await getFileUrl('sample', [...item.samplePage]) ;
		
		//console.log("_setFilesData - ", this._fileItems )
	}


	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {

		if (!this._body) return;
		this._body.removeEventListener('click', this._bindUiClickHandler );

		const mode = this.getAttribute('mode');
		switch (mode) {
			case 'loading':
				this._body.innerHTML = MarkUp.loading();
				break;
			case 'view':
				this._body.dataset.order = this._data.projectNum;
				this._body.innerHTML = MarkUp.view(this._data, this._fileItems );
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
		this._body.addEventListener('click', this._bindUiClickHandler);
	}


	_uiClickHandler(e){
		console.log('card22 - ', e.target.closest("button"));	

		const button = e.target.closest("button");
		if (!button || button.type ==="submit" ) return;

		// 외부로 이벤트를 보내 상위 컴포넌트가 처리하도록 함
		DispatchCustomEvent(this._body, 'project-detail', { action : button.dataset.action, order: Number(this._body.dataset.order), des : '상세보기' });
	}

}

customElements.define('card-type2', CardType2);


// 마크업 함수 ===========================================
function setFiles(c = '', files){
	
	let more = 0;
	if ( files.length > 1 ) more = files.length - 1;

	let folder = CheckFilesInFolder(c, [...files]);
	
	if( folder.empth ){
		if(  c === 'item' ) c += ' no-item';
		if( c === 'image' ) c += ' no-image';
	}

	return MarkUp.previewFile(c,folder.files[0], more);
}
const MarkUp = {
	loading : () => {
		return `
			loading
			`
	},
	view : (item, fileItems) => {
		return  `
		${setFiles('image',fileItems.mainimage)}				
		<div class="card-contents">
			<div class="title">${item.title}</div>
			<div class="tCom006">
				<project-member type="view" data=""></project-member>
			</div>
			<div class="btn-wrap">
				<button type="button" class="btn2" 
					data-action="view" 
					data-page-layout="sub" 
					data-page-name="myAdmin-project-list">프로젝트</button>
			</div>

		</div>`
	},
	previewFile : (c = '', f , more = 0) => {
		return `
			<figure class="image-wrap ${c}">
				<img src="${f.webUrl}" alt="${f.alt !== '' ? f.alt : f.name}" aria-hidden="true">
				<figcaption>
					<span class="option title">${f.name}</span>
					${ f.size > 0 ? '<span class="option">' + (f.size / 1024).toFixed(2) + 'KB</span>' : ''} 
				</figcaption>
			</figure>
			${ more > 0 ? `<span class="plus-more" aria-label="업로드된 전체 이미지 개수는 ${more}개 입니다"><i class="icon">+</i> ${more}</span>` : ''} `
	},

}

function setCssStyle(){
	// CSS 파일 연결
	return `

.card-type2{
	display: flex;
	justify-content: flex-start;
	gap: 16px;
}
.card-type2 .title{
	font-size: 18px;
	color: var(--font-color-default);

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* 보여줄 줄 수 */
	-webkit-box-orient: vertical;
}
.card-type2 .image-wrap{
	position: relative;
	flex: 1 1 174px;
	max-width: 174px;

	height: 150px;
	border-radius: 4px;
	margin: 0;
	background-color: var(--body-background-color);
	overflow: hidden;
}
.card-type2 .image-wrap img{
	position: absolute;
	top: 50%; left: 50%;
	transform: translate(-50%, -50%);
}
.card-type2 .image-wrap img[src*="-no-image"]{ width: 42px;  height: auto; }
.card-type2 .image-wrap figcaption{ display: none }


.card-type2 .card-contents{
	flex: 1 1 0;
	display: flex;
	flex-direction: column;
}
.card-type2 .btn-wrap{ margin-top: auto; font-size: 14px }
.card-type2 .tCom006{ margin: 8px 0; }

.tCom006{ display: flex; flex-wrap: wrap; }
.tCom006 member-profile{ 
	width: 30px; height: 30px;
	border-radius: 100em;
	border: 3px solid var(--section-background-color);
	box-sizing: content-box;
	overflow: hidden;
}
.tCom006 member-profile + member-profile{ margin-left: -8px; }


`
}