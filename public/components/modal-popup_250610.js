
import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';

import { DispatchCustomEvent } from './Utils-event.js';


class ModalPopup extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = null;

		// 생성자 내에서 한 번만 생성하여 재사용
        sheet = new CSSStyleSheet();
        sheet.replaceSync(setCssStyle());
		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet]; // 컴포넌트별 스타일과 함께 적용

		this._initBody();

		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
		this._body.addEventListener('click', this._bindUiClickHandler);

		

	}

	_initBody() {
		// 컴포넌트의 기본 HTML 구조 설정
		this._body = this.shadowRoot;
	}	

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set data(data) {
		this._data = data;
		this._loadInitData(data);
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

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'mode' && oldValue !== newValue) {
            this._render();
        }
	}

	// --- 데이터 처리 ---
	async _loadInitData(data) {

       this.setAttribute('mode', 'loading');

		try {
			//await this._setFilesData(this._data);
			this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
		} catch (error) {
			console.error('[InitialLoad] 데이터 로딩 오류:', error);
			this.setAttribute('mode', 'error');
		}
    }

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {

		if (!this._body) return;

		this._body.innerHTML = MarkUp.view();

	}

	_uiClickHandler(e){
		console.log('clickElem - ', e.target.closest("button"));	

		const button = e.target.closest("button");
		if (!button || button.type ==="submit" ) return;

		const action = button.dataset.action;
		if (!action) return;


	}

}

customElements.define('modal-popup', ModalPopup);

// 마크업 함수 ===========================================
const MarkUp = {
	loading : () => {
		return 'loading'
	},
	view : () => {
		console.log("modal-popup markup")
		return `


		`
	},
	edit : (member, files) => {
		return `
				
		`
	}

}

function setCssStyle(){
	// CSS 파일 연결
	return `


:host {
      }



.modal.show {
	display: block;
	background-color: hsl(0 0% 0% / .6);
	padding: 8px;
}
.modal-dialog.size-small{ --modal-width : 300px }
.modal-dialog.size-medium{ --modal-width : 420px }
.modal-dialog,
.modal-dialog.size-default{ --modal-width : 640px }
.modal-dialog.size-large{ --modal-width : 1024px }
.modal-dialog.size-extra-large{ --modal-width : 1280px }
.modal-dialog.size-full{ --modal-width : 100% }


.modal-dialog.size-small .btn-wrap .btn{ min-height: 36px; }

.modal-dialog {
    max-width: var(--modal-width);
	
    margin-right: auto;
    margin-left: auto;

	--ui-modal-header-padding : 40px 40px 24px;
	--ui-modal-header-border-color: transparent;
	--ui-modal-padding : 0 40px 32px;
}

.modal-title {	font-size: 16px; font-weight: 700; }
@media(max-width: 768px){
	.modal-dialog {
		--ui-modal-header-padding : 24px 24px 16px;
		--ui-modal-padding : 0 24px 20px;
	}
}










`
}
