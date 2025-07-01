
import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { DispatchCustomEvent } from './Utils-event.js';

import './text-icon.js';

class ListItemType2 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._body = this.shadowRoot;

		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );

		this.shadowRoot.adoptedStyleSheets = [ commonSheet, sheet]; // 또는 [...shadowRoot.adoptedStyleSheets, sheet];

		 //this._bindUiClickHandler = this._uiClickHandler.bind(this); 
	}

	set data(data) {
		this._data = data;  
		this._init();
	}
	get data() {
		return this._data;
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		this._init();
	}

	// 속성 값이 변경될 때 호출 (observedAttributes에 등록된 속성만 해당)
	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'mode' && oldValue !== newValue) this._render();
	}

	// --- 데이터 처리 ---
	_init() { 
		if (!this._data) {
			this._body.innerHTML = '<div>No data available.</div>';
			return;
		}

		//this.dataset.order = this._data.projectNum;
		this._body.innerHTML = `
			<div class="title">${this._data.description}</div>
			${
				this._data.keyword.filter( n => n === '새글').map( t => `<text-icon title="${t}" class="new"></text-icon>` )
			}
			<!-- 웬만하면 짧은 단어, 6자 이하로 구성--> `;
	}
}

customElements.define('list-item-type2', ListItemType2 );

// 마크업 함수 ===========================================

function setCssStyle(){
	// CSS 파일 연결
	return `

:host { 
	display: flex;
	align-items: center;
	font-size: 1em;
}
 .title::before{
	content: '•';
	flex: none;
	display: inline-flex;
	width: calc(1em + 4px);
	padding-left: 4px;
	max-height: calc(1em * 1.5);
	justify-content: center;
	align-items: center;
	/* margin-left: calc( var(--pl) * -1); */
	opacity : .5;
}
 .title{
	flex:0 1 100%;
	display: inline-block;
	padding-right: 8px;
	
	vertical-align: middle;

	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	
	color: var(--font-color-default);
}
 i{ flex: none }


`
}
