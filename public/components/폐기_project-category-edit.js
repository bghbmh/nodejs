
import commonSheet from './styles/style-common.js';
import * as DOM from './Utils-dom.js';

import { ct } from '../json/tempCategoryListl.js';

function setCssStyle(){
	return `
:host{
	display: flex;
	gap: 1em;
	flex-wrap: wrap;
	padding: 0px;
}
label { 	min-width: 9em; }
label i[class*="-svg2-"]{ 
	padding: 7px ; 
	border-radius: 100em;
	margin-left: auto;
}
label {
	position: relative;
	display: inline-flex;
	align-items: center;
	gap: 8px;
	min-height: 3em;
	border-radius: 100em;
	background-color: transparent;
	border: 1px solid var(--dark-50);
	padding: 0 .5em 0 .5em;
	padding-left: 0.8em;
	font-size: 15px;
}
label input { border-radius: 100em;  }
label:has(input:checked){
	background-color: var(--primary-500);
	border-color: var(--primary-500);
	color: #fff;
}


	`;
}

class ProjectCategoryEdit extends HTMLElement {
	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._body = null;
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		
		this.shadowRoot.adoptedStyleSheets = [ commonSheet, sheet ];
		this._initBody();
		
	}

	_initBody() {
		// 컴포넌트의 기본 HTML 구조 설정
		this._body = this.shadowRoot;
	}
	
	set data(data) {
		this._data = data;
		
	}

	get data() {
		return this._data;
	}

	static get observedAttributes(){
		return ['type'];
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		
	}
	
	disconnectedCallback() { // 컴포넌트가 DOM에서 제거될 때 호출
		this._body.removeEventListener('click', this._bindUiClickHandler );
	}

	attributeChangedCallback(name, oldValue, newValue){
		console.log("loading category 00",name,  oldValue, newValue)
		if( name === 'type' && oldValue !== newValue ) this._render();
	}

	// --- 데이터 처리 ---
	_loadInitData(type = '') {

		if( type === 'edit' ){
			this._data = {
				label : this.dataset.label,
				type : parseInt(this.dataset.type),
			}
		}
		
    }


	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {
		if (!this._body) return;
		
		

		const type = this.getAttribute('type');

		switch (type) {
			case 'loading':
				this._body.innerHTML = `loading`;
				break;
			case 'edit':
				this._loadInitData('edit');
				
				let label = this._data.label;
				this._body.innerHTML = ct[label].map((c, idx) => `
					<label>
						<input type="radio" name="${label}category" value="${c}" data-label="${label}" data-type="${idx+1}" ${ this._data.type-1 === idx  ? 'checked' : ''}>${c} 
						<i class="${ct.cIcon[idx]}" aria-hidden="true"></i>
					</label>`
				).join('');
				break;
		}

		

	}	
}
customElements.define('project-category-edit', ProjectCategoryEdit);

