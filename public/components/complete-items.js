
import commonSheet from './styles/style-common.js';

import './section-header.js';

import * as DOM from './Utils-dom.js';
import { getFileUrl, CheckFilesInFolder } from './Utils-api.js';
import { DispatchCustomEvent } from './Utils-event.js';

import './cardType1.js';
import './list-item-type2.js';
import './list-item-type4.js';


class CompleteItems extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._body = this.shadowRoot;
		
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );

		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet]; // 컴포넌트별 스타일과 함께 적용

		this.header = null;
		this.items = null;
		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
 
		this._initBody();
		this._body.addEventListener('click', this._bindUiClickHandler);
		
	}

	_initBody() {
		this._body.classList = "colg-6 item";
	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set data(data) {
		this._data = data; 
		this._loadInitData(data);
	}
	get data() {
		return this._data;
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		this.header = DOM.CreateElement({'tag' : "section-header", class:'section-header'});
		this.items = DOM.CreateElement({'tag' : "div", class:'content-wrap'});

		this._body.appendChild(this.header) ;
		this._body.appendChild(this.items) ;

	}
	
	disconnectedCallback() {// 컴포넌트가 DOM에서 제거될 때 호출
		//this._body.removeEventListener('click', this._bindUiClickHandler );
	}

	// --- 데이터 처리 ---
	_loadInitData(items) {
		this.header.data = { title: '완료', count : this._data?.all || 0, link:'aaa'}; 

		for( let i=0; i<2; i++ ){
			const c = DOM.CreateElement({
				tag:"card-type1", 
				class:'item',
				"data-action" : "view",
				"data-page-layout" : "sub" 
			});
			this.items.appendChild(c) ;

			let d = this._data.data[i];
			let f = this._data.files[i];
			
			if( d && f ) c.data = {...d, cardImage: f[0] }; 
			else c.data = null        
		}
	}
	
	_uiClickHandler(e){	

		const button = e.target.closest("[data-action]");
		if (!button || button.type ==="submit" ) return;

		DispatchCustomEvent(this._body, 'project-detail', { action : button.dataset.action, order: Number(button.dataset.order), des : '상세보기' });
	}
}

customElements.define('complete-items', CompleteItems);

// 마크업 함수 ===========================================
const MarkUp = {

}

function setCssStyle(){
	// CSS 파일 연결
	return `

:host {
      }


.content-wrap{
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
}
.content-wrap card-type1{
	/* flex: 0 1;
	min-width: calc( (100% - 24px) / 2 );
	max-width: 10px; */
	flex: 1;
	min-width: 160px;
	border-radius: var(--border-radius-default);
  overflow: hidden;
  font-size: 18px;
}
@media(max-width: 1280px){
	.content-wrap card-type1{ font-size: 16px; }
}
@media(max-width: 768px){
	.content-wrap card-type1{ min-width: 250px; }
}




`
}