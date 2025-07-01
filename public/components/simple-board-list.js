

import commonSheet from './styles/style-common.js';



import * as DOM from './Utils-dom.js';
import { DispatchCustomEvent } from './Utils-event.js';
import './section-header.js';
import './list-item-type4.js';

let x = 0;

class SimpleBoardList extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = [];
		this._body = this.shadowRoot;
		
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );

		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet]; // 컴포넌트별 스타일과 함께 적용

		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
		
		this._body.addEventListener('click', this._bindUiClickHandler);
		
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() { 
		this._init();
	}
	
	disconnectedCallback() {// 컴포넌트가 DOM에서 제거될 때 호출
	}

	set data(data = []){ console.log("============== 11 ", x++ )
		this._data = data;
		this._init();
	}

	get data(){
		return this._data
	}

	// --- 데이터 처리 ---
	_init() {
		if( !this._data.length ) {
			this._body.innerHTML = `<div class="no-message">알림이 없습니다</div>`;
			return; 
		}

		this._body.innerHTML = '';
		this._data.forEach(  (d, idx) => {
			const c = DOM.CreateElement({
				tag:"list-item-type2", 
				class:'item',
				"data-action" : "view",
				"data-page-layout" : "sub" 
			});
			this._body.appendChild(c) ;

			c.data = d ;
		});
	}
	
	_uiClickHandler(e){
		console.log('simple-board-list - ', e.target.closest("[data-action]"));	

		const button = e.target.closest("[data-action]");
		if (!button || button.type ==="submit" ) return;

		// 외부로 이벤트를 보내 상위 컴포넌트가 처리하도록 함
		DispatchCustomEvent(this._body, 'board-detail', { action : button.dataset.action, order: Number(button.dataset.order), des : '상세보기' });
	}

	/**
	 * 
	 * _uiClickHandler(e){

		const button = e.target.closest("button");
		if (!button || button.type ==="submit" ) return;

		const action = button.dataset.action;
		if (!action) return;

		e.preventDefault();
		//console.log('list-item - ', clickBtn );
		switch( action ){
			case "view":
				this.setAttribute('mode', 'view');
				
				// 외부로 이벤트를 보내 상위 컴포넌트가 처리하도록 함
				DispatchCustomEvent(this._body, 'border-item-selected', { action : action, id : '클릭한 목록 번혼 반환' + this._body.dataset.id });
				break;
			case "list":
				
				break;
		}	
	}
	 */
}

customElements.define('simple-board-list', SimpleBoardList);

// 마크업 함수 ===========================================
const MarkUp = {

}

function setCssStyle(){
	// CSS 파일 연결
	return `

:host {
	display: flex;
  flex-direction: column;
  height: 100%;
  /* padding: 16px 20px;  */
	background-color: var(--section-background-color);
	border-radius : var(--border-radius-default) ;
}



list-item-type2{ 
	padding: 8px 0;
	margin-left: 20px;
	margin-right: 20px;
	min-height: 25%; 
	font-size: 16px;
}
list-item-type2:first-child{ margin-top: 8px }
list-item-type2 + list-item-type2{ border-top: 1px dashed var(--gray-e) }



.no-message {
	display: flex;
	gap: 8px;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: var(--text-dark-1);
	background-color: var(--dark-50);
	border: 1px dotted var(--dark-100);
	border-radius : var(--border-radius-default) ;
	min-height : 10em;
}
.no-message:before{
	content: "";
	background-image: url("https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Hamsa.png");
	display: block;
	width: 3em;
	height: 3em;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;

}



`
}