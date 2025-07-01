

import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { getFileUrl, CheckFilesInFolder } from './Utils-api.js';
import { DispatchCustomEvent } from './Utils-event.js';

import '/components/section-header.js';
import { UploadFiles } from '/assets/js/custom-library/bUploadFile/export-bUploadFile.js';

import './tab-type2.js';
import './personal-info.js';
import './site-account.js';

class ProfileInfo extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = null;

		this._tab = null;
		this._tabCntWrap = null;

		this._PersonalInfo = null;
		this._SiteAccount = null;

		// 생성자 내에서 한 번만 생성하여 재사용
        const styles = new CSSStyleSheet();
		styles.replaceSync(setCssStyle());
		this.shadowRoot.adoptedStyleSheets = [ styles]; // 컴포넌트별 스타일과 함께 적용
		//this.loadStylesSheets(['/assets/js/custom-library/bUploadFile/bUploadFile.css',]);
		
		//this._bindUiClickHandler = this._uiClickHandler.bind(this);

		this._initBody();
		
	}

	set data(data) {
		this._data = data;
		this._initData(data); //임시
	}

	get data() {
		return this._data;
	}

	static get observedAttributes() {
		return [ 'order']; // 
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		
	}
	
	disconnectedCallback() { // 컴포넌트가 DOM에서 제거될 때 호출

	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'order' && oldValue !== newValue) {
            this._render();
        }
	}

	//초기화
	_initBody() {
		// 컴포넌트의 기본 HTML 구조 설정
		
		this._body = this.shadowRoot;
		this._tab = DOM.CreateElement({tag:"tab-type2"  });
		this._tabCntWrap = DOM.CreateElement({tag:"div", class:"items-wrap"});

		this._PersonalInfo = DOM.CreateElement({tag:'personal-info'});
		this._SiteAccount = DOM.CreateElement({tag:'site-account'});

		this._body.appendChild(this._tab);
		this._body.appendChild(this._tabCntWrap);

		this._tab.addEventListener("tab-menu-selected", e => {
			console.log('profile-info : tab-menu-selected --- ', e.detail);
			this.setAttribute('order', e.detail.order);
		});

	}	

	_initData(){
		console.log('sd - ', this._data);		
		this._tab.data = { 
			action: "view", 
			list : [
				{
					name : "개인정보",
					icon : `icon-svg2-user-profile`
				},
				{
					name : "로그인 정보",
					icon : `icon-svg2-user-protection`
				}
			] , 
			all : null 
		};

		this.setAttribute('order', '1');
	}

	// --- 데이터 처리 ---

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {
		//this._body.innerHTML = '';

		const order = this.getAttribute('order');
		switch (order) {
			case '1':     console.log("11 - ", this._data);
				this._tabCntWrap.innerHTML = '';
				this._tabCntWrap.appendChild(this._PersonalInfo);
				this._PersonalInfo.data = this._data ;
			break;
			case '2':       console.log("22 - ");
				this._tabCntWrap.innerHTML = '';
				this._tabCntWrap.appendChild(this._SiteAccount);
				this._SiteAccount.data = this._data ;
			break;
		}

	}

}

customElements.define('profile-info', ProfileInfo);

// 마크업 함수 ===========================================
const MarkUp = {

}

function setCssStyle(){
	// CSS 파일 연결
	return `


:host {

	display: flex;
	flex-direction: column;
	gap: 1em;
      
	}
tab-type2 { margin-bottom : 0 }

tab-menu-type1:part(icon){
}

`
}
