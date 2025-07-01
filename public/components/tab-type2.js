import * as DOM from './Utils-dom.js';
import { DispatchCustomEvent } from './Utils-event.js';

import './tab-menu-type1.js';

function setCssStyle(){
	// CSS 파일 연결
	return `

:host {
	display: flex;
	gap: 10px;
	font-size: 16x;
	margin-bottom: 30px;
}
.wrap{
	
}
tab-menu-type1{ flex: none }

tab-menu-type1.no-tab{

}

@media(max-width: 1280px){
	:host { flex-wrap: wrap }
}
@media(max-width: 900px){
	:host {
		--pl : 20px;
		flex-wrap: nowrap; 
		
		padding-left: var(--pl);
		margin-left: calc( -1 * var(--pl) );
		margin-right: calc( -1 * var(--pl) );
		padding-right: var(--pl);

		overflow: auto;
		scrollbar-width: none; /* 스크롤바 숨김  */ 
	}
	:host::-webkit-scrollbar {  display: none; /* 스크롤바 숨김 */ }
}

`
}

class TabType2 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		//this._body = DOM.CreateElement({tag:"div", class:'wrap'});
		//this.shadowRoot.appendChild(this._body);

		this._body = this.shadowRoot;

		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		this.shadowRoot.adoptedStyleSheets = [sheet];

		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
		this._body.addEventListener('click', this._bindUiClickHandler);
	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set data(data) {
		this._data = data;
		this._init();
	}
	get data() {
		return this._data;
	}

	// 컴포넌트가 DOM에 추가될 때 호출
	connectedCallback() {
		this._init();
	}
	
	disconnectedCallback() {// 컴포넌트가 DOM에서 제거될 때 호출
		this._body.removeEventListener('click', this._bindUiClickHandler);
	}

	// --- 렌더링 및 내부 로직 메서드 ---
	_init(){
		console.log('CategoryList - ', this._data);	

		if( ! this._data ){   console.log('CategoryList 999999 - ', this._data);	
			this._body.appendChild( DOM.CreateElement({tag:"tab-menu-type1", class:'tab-menu no-tab'}) );
			return;
		}
		
		this._body.innerHTML = '';

		if( this._data.all ){ // 전체 메뉴 있는 경우
			let all = DOM.CreateElement({ tag:"tab-menu-type1", class:`tab-menu `, "data-action" : this._data.action });
			this._body.appendChild(all);
			all.data = { 
				order:0, 
				title:"전체", 
				icon : 'icon-svg2-all', 
				total : this._data.all 
			}
		}

		this._data.list.forEach( (item, idx) => {
			let c = DOM.CreateElement({ tag:"tab-menu-type1", class:`tab-menu `, "data-action" : this._data.action });
			this._body.appendChild(c);
			c.data = { 
				order:idx+1, 
				title:item.name, 
				icon : item.icon || null, 
				total : item.total || null }
			
		} );

		this._body.children[0].classList.add("active");

	}
	_render() {

	}

	_uiClickHandler(e){

		const selected = this._body.querySelector(".active");
		const clicked = e.target.closest(".tab-menu");
		if (!clicked || clicked.type ==="submit" ) return;

		if( selected === clicked ) return;

		const action = clicked.dataset.action;
		if (!action || !clicked.dataset.order ) return;
		
		console.log("tab - ", clicked)
		selected.classList.remove("active");
		clicked.classList.add("active");

		DispatchCustomEvent(this._body, 'tab-menu-selected', { 
			action : action, 
			order : clicked.dataset.order
		});

	}

}

customElements.define('tab-type2', TabType2);

// 마크업 함수 ===========================================


// projectDetail 전체 마크업
const MarkUp = {

	
}
