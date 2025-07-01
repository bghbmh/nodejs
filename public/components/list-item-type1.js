
import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { DispatchCustomEvent } from './Utils-event.js';

function setCssStyle(){
	// CSS 파일 연결
	return `

:host{
position: relative;

	display: flex; 
	gap: 1em;
	align-items: center;
	height: 100%;
	padding: 6px 12px;
	border-radius: var(--border-radius-default);
	background-color: var(--section-background-color);
	min-height: 4em;
	color: var(--text-dark-0);
	overflow: hidden;
}
i{ 
	padding: 18px !important;
	box-sizing: content-box;
	border-radius: var(--border-radius-default);
}


loading-skeleton{
position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}



@media(max-width: 1280px){
	i { padding: 0px;  }
}
@media(max-width: 768px){
	:host{
    	padding: .5em;
	}
	i { padding: 18px;  }
}






`
}

class ListItemType1 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._body =  this.shadowRoot ;
		this._data = null;

		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet];

	}

	set data(data){
		this._data = data;
		this._init();
	}

	get data(){
		return this._data
	}

	_init(){

		if( ! this._data ){
			this._body.innerHTML = `<loading-skeleton></loading-skeleton>`;
			return;
		}
		
		//this.setAttribute("order", this._data.order)
		this.dataset.order = this._data.order;
		this._body.innerHTML = `
			<i class="${this._data.icon}" aria-hidden="true"></i>
			${this._data.title}
			${ this._data.num ? `<span class="font-number fcPrimary">${this._data.num}</span> `: ''}
		`;
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		this._init();
	}


}

customElements.define('list-item-type1', ListItemType1);

// 마크업 함수 ===========================================

