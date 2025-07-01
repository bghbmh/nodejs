
import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { getFileUrl, CheckFilesInFolder } from './Utils-api.js';
import { DispatchCustomEvent } from './Utils-event.js';



class GlobalNav extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._profile = null;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._nav = null;
		this._logout = null;
		this._body = null;
		this._selected = null;
		this._clicked = null;

		this.shadowRoot.adoptedStyleSheets = [commonSheet, this.componentSheet]; // 컴포넌트별 스타일과 함께 적용
		
		
		this._bindUiClickHandler = this._uiClickHandler.bind(this);
		this._initBody(); 
	}

	get componentSheet() {
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		return sheet;
	}

	_initBody() {
		// 컴포넌트의 기본 HTML 구조 설정
		this._body = this.shadowRoot;
		this._nav = DOM.CreateElement({tag:"nav", id:'gnb', class:'gnb'});
		this._nav.addEventListener('click', this._bindUiClickHandler );
		this._body.appendChild(this._nav);

		const wrap = DOM.CreateElement({tag:"div", class:"btn-wrap"})
		this._logout = DOM.CreateElement({tag:"button", type:'button', class:'btn ctrl-logout'});

		this._logout.innerHTML = MarkUp.logout();
		wrap.appendChild(this._logout);
		this._body.appendChild(wrap);
		
		
	}


	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set list(list) {
		this._list = list;
		if (!this._list) {
			this.setAttribute('mode', 'empty');
			return;
		}
		
		this._list.forEach( m =>  this._nav.innerHTML += MarkUp.view(m)  );

		this.setAttribute('mode', 0);
		this._render();
	}

	get list() {
		return this._list;
	}

	set menu(o) {
		console.log('asdfasdfasdfasdfasdfasdf ---', o);

		this.setAttribute('mode', o);
	}

	get menu() {
		return this.getAttribute('mode');
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

	// 속성 값이 변경될 때 호출 (observedAttributes에 등록된 속성만 해당)
	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'mode' && oldValue !== newValue) this._render(); 
	}

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {

		const mode = this.getAttribute('mode');
		
		switch (mode) {
			case 'empty':
				this._nav.innerHTML = '<div>No data available.</div>';
				break;
			default :
				let selected = this._nav.querySelector(".active");
				selected?.classList.remove("active");

				let n = Number(mode);
				this._nav.children[n].children[0].classList.add("active");
				break;
			
		}
		
	}

	_uiClickHandler(e){

		let selected = this._nav.querySelector(".active");
		let clicked = e.target.closest("button");

		//if( !clicked || selected === clicked ) return;

		//selected?.classList.remove("active");
		//clicked.classList.add("active");

		let n = [...this._nav.children].findIndex( b => b === clicked.parentNode );

		this.setAttribute('mode', n);
		DispatchCustomEvent(this._body, 'gnb-clicked', {  link: clicked.dataset.link } );
		
	}

}
customElements.define('global-nav', GlobalNav);


// 마크업 함수 ===========================================
const MarkUp = {
	logout : () => {
		return `
			<span>로그아웃</span><i class="icon-svg2-logout"></i>
		`
	},
	view : (m) => {
		return  `
			<div class="gnb-item">
				<button type="button" data-link="${m.href}" class="btn"><i class="${m.icon}" aria-hidden="true"></i><span>${m.text}</span></button>
			</div>
		`;
	}
}

function setCssStyle(){
	// CSS 파일 연결
	return `

/* gnb */
:host{
	display: flex;
	flex-direction: column;
}
.gnb{
	flex: none;
	display: flex;
	flex-wrap: wrap;
	gap: 3px;
	font-size: 16px;
	padding: 0 20px;
}
.gnb .gnb-item{
	position: relative;
	flex: 1 1 45%;
	min-width: 100px;
	min-height: 140px;
	z-index: 0;
	transition: all .3s;
}
.gnb .gnb-item > .btn{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
	width: 100%;
	height: 100%;
	background-color: var(--gnb-menu-bg-color);
	color: var(--gnb-menu-font-color);
	border-radius: 16px;
	transition: all .3s;
	margin-left: 0;
	margin-top: 0;
	font-weight: 600;
	border : 0;
	font-size: 1em;
}
.gnb .gnb-item > .btn:hover{
	color: var(--primary-500);
	box-shadow: 0 0 1.5em hsl( 0 0% 0% / .1);
	z-index: 2;
}
.gnb .gnb-item > .btn i{ font-size: 1.3em; }
.gnb .gnb-item > .btn:hover i[class*="-svg2-"] { filter: saturate(10);  }
.gnb .gnb-item > .btn:hover i[class*="-svg-"] { --fcColor : var(--primary-700) }
.gnb .gnb-item:has(>.active){ z-index: 3; }
.gnb .gnb-item > .btn.active{

	width: calc(100% + 16px);
	height: calc(100% + 16px);
	background-color: var(--primary-500);
	color: var(--primary-900);
	box-shadow: 0 3.5px 13.1px 3px hsla(140, 56%, 56%, 0.3);
	margin-left: -8px;
	margin-top: -8px;
}
.gnb .gnb-item > .btn.active i{ filter: brightness(150%) contrast(350%);  }


.btn-wrap { padding-left: 20px; margin-top: 40px; margin-bottom: 2em;  }
.btn-wrap .btn{
	font-size: 14px;
	color: var(--dark-500);
	
}

@media(max-width: 1440px){
	.gnb{ font-size: 12px;  margin-bottom: auto; }
	.gnb .gnb-item{ min-width: 64px; min-height: 64px; }
	.gnb .gnb-item > .btn{ gap: 0px; }
	.gnb .gnb-item > .btn.active{ 
		width: calc(100% + 0px);
		height: calc(100% + 0px);
		margin-left: 0px;
		margin-top: 0px;
	}

	.btn-wrap { padding-left: 0px; text-align : center; }
	.ctrl-logout{ 
		overflow: hidden;
		color: transparent !important;
		position: relative;
		min-height: 3em;
	}
	.ctrl-logout i{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(1.7);
	}
}
@media (max-width: 1024px) {
	.gnb{ font-size: 14px;  }
	.gnb .gnb-item { min-width: 100px; min-height: 100px; }
	.gnb .gnb-item > .btn{ gap: 4px; }

	.btn-wrap { padding-left: 20px; text-align : left; }
	.ctrl-logout {
		color: inherit !important;
		min-height:auto;
	}

	.ctrl-logout i {
		position: static;
		transform: none;
	}
}
@media (max-width: 440px) {
	.gnb .gnb-item { flex-basis: 31%; width: calc(( 100vw - 40px - 6px) / 4 ); height: 100px; }
}	
	`;
}