
import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { DispatchCustomEvent } from './Utils-event.js';

function setCssStyle(){
	// CSS 파일 연결
	return `
:host{ 
	display: inline-flex; 
	border-radius: 1em;
	background-color: #fff;
	cursor: pointer;
	font-size: 1em; 
	overflow: hidden;

	background-color: var(--tab-menu-bc); 
	color: var(--tab-menu-fc);
}
	
div {
	display: inline-flex;
	align-items: center;
	gap: 5px 12px;
	padding: 4px 20px 4px 20px;
}
div:has(i){ padding: .5em 1em .5em .5em; }

 i{   }
 i[class*="-svg2-"] {
	flex: 0 0 auto;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 1.25em;
	height: 1.25em;
	z-index: 0;
	line-height: 1;

	padding: 4px;
	background-color: hsl(0 100% 100% / .1 );
	border-radius: .5em;
	box-sizing: content-box;
 }


.icon-svg2-user-profile::before,
.icon-svg2-user-protection:before{ background-size: 140%; }


.font-number{ color: var(--red-400) }
:host(.active){ 
	background-color: var(--active-tab-menu-bc); 
	color: var(--active-tab-menu-fc);
	font-weight: 500
}
:host(.active) .font-number{ color: var(--primary-100)   }





:host(.no-tab){
	height: 2em;
  width: 5em;
  position: relative;
  overflow: hidden
}
:host(.no-tab) loading-skeleton{
position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  }

`
}

class TabMenuType1 extends HTMLElement {

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
		this._body.innerHTML = `<div>
			${ this._data.icon ? `<i part="icon" class="${this._data.icon}" aria-hidden="true"></i>` : '' }
			${this._data.title}
			${ this._data.total ? `<span class="font-number fcPrimary">${this._data.total}</span> `: ''}
			</div>
		`;
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		this._init();
	}


}

customElements.define('tab-menu-type1', TabMenuType1);

// 마크업 함수 ===========================================

