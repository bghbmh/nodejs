

import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { getFileUrl, CheckFilesInFolder } from './Utils-api.js';
import { DispatchCustomEvent } from './Utils-event.js';

class CardType1 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._body = this.shadowRoot;
		
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );

		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet]; 
	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
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

	// --- 데이터 처리 및 렌더링 ---
	_init() {
		if (!this._data) { 
			this._body.innerHTML = '<div class="no-project">아직은 없네요</div>';
			return;
		}
		
		this.dataset.order = this._data.projectNum;
		this._body.innerHTML = MarkUp.view(this._data);

	}

}

customElements.define('card-type1', CardType1);

// 마크업 함수 ===========================================

const MarkUp = {

	view : (item) => {

		return  `
		<div class="card-contents">
			<div class="badge-wrap">
				<span class="badge">${item.category[0].name}</span>
				<span class="badge">${item.category[1].name}</span>
			</div>

			<div class="title text-truncate">${item.title}</div>
			<small>2025.4.17 - 2025.4.18_설정 안됨</small>
		</div>
		
		<img class="bg-image" src="${item.cardImage.webUrl}" alt="${item.cardImage.alt !== '' ? item.cardImage.alt : item.cardImage.name}" aria-hidden="true">`
		
	}
}

function setCssStyle(){
	// CSS 파일 연결
	return `

:host{
	position: relative;
	z-index: 0;
	height: 240px;
	border-radius: var(--border-radius-default);
  overflow: hidden;
 
}
.bg-image{
	position: absolute;
	display: block;
	width: 100%;;
	height: 100%;
	object-fit: contain;
	object-position: center;
	z-index: -1;
	left: 0;
	top: 0;
}

.bg-image[src*="-no-image"]{
	width: auto;
	height: auto;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.card-contents{
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding: 30px;
	color: #fff;
	background-color: hsl( 0 0% 0% / .6);
	 cursor: pointer;
}
.card-contents .title{ 
	white-space: nowrap; 
	overflow:hidden; 
	text-overflow: ellipsis;  
	margin-top: auto;
}
.badge{ color: #fff; }



.no-project{
flex: 1 1 0%;
  display: flex;
  gap: 8px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-50);
  border: 1px dotted var(--dark-100);
  border-radius: var(--border-radius-default);
  color: var(--text-dark-3);
  min-height: 10em;
}
.no-project:before{
	content: "";
	background-image: url("https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Zzz.png");
	display: block;
	width: 3em;
	height: 3em;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;


}

`
}