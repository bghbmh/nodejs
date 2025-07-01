
import commonSheet from './styles/style-common.js';
import * as DOM from './Utils-dom.js';

function setCssStyle(){
	return `
	
:host {
	display: flex; 
	flex-wrap: wrap;
}
:host([type="view"]){ gap: 8px 1em;  }

.extra-info {
	display: flex;
	flex-wrap: wrap;
	gap: 4px 8px;
}
.extra-info > label{
	flex: 0 1;
	display: inline-flex;
	gap: 4px 8px;
	min-width: 13em;
	align-items: center;
	padding: 0 0 0 8px;
	border: 1px solid var(--dark-300);
	border-radius: var(--border-radius-8px);
}
.extra-info > label:nth-of-last-type{ flex: 1 }
.extra-info > label .guide{ 
	flex: none;
	display: inline-block; 
	color: var(--dark-500);
	font-size: .8em;
}
.extra-info > label input{ border: 0 !important;}
.extra-info + .extra-info{ margin-top: .5em; padding-top: .5em; border-top: 1px dashed var(--dark-100); }

.extra-info > label input:focus { outline: none !important; border-color: transparent !important;  }
.extra-info > label:has(input:focus)  {
	outline: 2px solid var(--primary-500);
	border-color: transparent;
}

.extra-info-item{
	display: inline-flex;
	gap: 4px 1em;
	padding: .3em 1em .3em .3em;
	border-radius: var(--border-radius-circle);
	color: var(--blue-900);
	background-color: var(--blue-50);
	border: 1px solid var(--blue-200);
}
.extra-info-item:before{
	content: attr(aria-label);
	font-size: .8em;
	padding: .3em .7em;
	border-radius: var(--border-radius-circle);
	color: var(--blue-100);
	background-color: var(--blue-500);
}
.extra-info-item.no-item{
	background-color: var(--body-background-color);
	border-color: var(--gray-d);
	color: var(--gray-9);
	column-gap: .5em;
}
.extra-info-item.no-item:before{
	content: '';
	background-image: url('/assets/img/common/icon-svg-warning-circle-line.svg');
	background-repeat: no-repeat;
	background-position: center center;
	background-color: transparent;
	border-color: var(--gray-d);
	color: var(--gray-9);
	display: inline-flex;
	background-size: 1.7em;
}
.btn{
	display: inline-flex;
	gap: 4px;
	width: auto;
	height: auto;
	line-height: 1;
	padding: 4px;
	font-size: calc(1em - 1px);
}
.btn.delete-one::before {
	content: "";
	display: block;
	width: 1em;
	height: 1em;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%23e8eaed' aria-hidden='true'%3E%3Cpath d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'/%3E%3C/svg%3E");
	background-position: center center;
	background-size: contain;
	filter: brightness(0);
}

	`;
}

class ExtraInfo extends HTMLElement {
	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._body = null;
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		
		this.shadowRoot.adoptedStyleSheets = [ commonSheet, sheet ];
		this._initBody();
		this._loadInitData( this.getAttribute('data') );
		
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
		return ['type', 'data'];
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		console.log("connectedCallback - extra-info " );
	}
	
	disconnectedCallback() { // 컴포넌트가 DOM에서 제거될 때 호출
		this._body.removeEventListener('click', this._bindUiClickHandler );
	}

	attributeChangedCallback(name, oldValue, newValue){
		console.log("loading category 00",name,  oldValue, newValue)
		if( name === 'type' && oldValue !== newValue ) this._render();
	}

	// --- 데이터 처리 ---
	_loadInitData(data) {
		this._data =  JSON.parse(data);		
    }


	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {
		if (!this._body) return;

		const type = this.getAttribute('type');

		//let data = this.getAttribute('data');

		switch(type){
			case 'view':
				if (Object.keys(this._data).length === 0) {
					this._body.innerHTML = `<div class="extra-info-item no-item">추가 정보없음</div>`;
				} else {
					this._body.innerHTML = Object.entries( this._data ).map( a => `<span class="extra-info-item" aria-label="${a[0]}">${a[1]}</span>`).join('');
				}
			break;
			case 'edit':

				let aaa = this._data ? Object.keys(this._data).length === 0 : false;

				console.log("extra-info -", aaa, this._data)

				if ( this._data) {
					this._body.innerHTML = Object.entries( this._data ).map( (a, idx) => `
					<div class="extra-info">
						<label>
							<span class="guide">라벨</span>
							<input type="text" name="extrainfo" value="${a[0]}" placeholder="라벨">
						</label>
						<label class="flex-1">
							<span class="guide">내용</span>
							<input type="text" name="extrainfo" value="${a[1]}" placeholder="내용">
						</label>
						<button type="button" class="btn delete-one">삭제</button>
					</div>
					`).join('');
					
				} else {
					this._body.innerHTML += `
					<div class="extra-info">
						<label><span class="guide">라벨</span><input type="text" name="extrainfo" value="" placeholder="라벨"></label>
						<label class="flex-1"><span class="guide">내용</span><input type="text" name="extrainfo" value="" placeholder="내용"></label>
						<button type="button" class="btn delete-one">삭제</button>
					</div>
					<div class="extra-info">
						<label><span class="guide">라벨</span><input type="text" name="extrainfo" value="" placeholder="라벨"></label>
						<label class="flex-1"><span class="guide">내용</span><input type="text" name="extrainfo" value="" placeholder="내용"></label>
						<button type="button" class="btn delete-one">삭제</button>
					</div>`
				}			
			break;
		}
		
		


	}	
}
customElements.define('extra-info', ExtraInfo);

