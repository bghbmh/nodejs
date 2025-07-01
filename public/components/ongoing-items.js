let ct = {
	main : ["웹", "인쇄", "콘텐츠", "브랜딩", "UI"],
	sub :  ["제작", "구축","리뉴얼" ,"유지보수", "sample" ],
	hash : ["디자인",
		"마크업",
		"모바일",
		"데스크탑",
		"반응형",
		"마케팅",
		"웹",
		"콘텐츠",
		"인쇄",
		"브랜딩",
		"ui-test"
	],
	cIcon : ['icon-svg2-web', 'icon-svg2-print', 'icon-svg2-contents', 'icon-svg2-branding', 'icon-svg2-me']
};

import commonSheet from './styles/style-common.js';



import * as DOM from './Utils-dom.js';
import { DispatchCustomEvent } from './Utils-event.js';
import './section-header.js';
import './list-item-type4.js';


class OngoingItems extends HTMLElement {

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
		console.log(" _loadInitData- ",items);

		if( ! this._data ) {
			this.header.data = { title: '진행중', count : 0 }; 
			this.items.innerHTML = `<div class="no-project">진행 중인 프로젝트가 없습니다</div>`;
			return;
		} 
		
		this.header.data = { title: '진행중', count : this._data.all, link:'aaa'}; 
		this._data.data.forEach(  (d, idx) => {
			const c = DOM.CreateElement({
				tag:"list-item-type4", 
				class:'item',
				"data-action" : "view",
				"data-page-layout" : "sub" 
			});
			this.items.appendChild(c) ;

			c.data = { 
				order: d.projectNum, 
				title: d.title, 
				icon : ct.cIcon[ Number(d.category[0].type) ] };
		});
	}
	
	_uiClickHandler(e){
		console.log('ongoing-items - ', e.target.closest("[data-action]"));	

		const button = e.target.closest("[data-action]");
		if (!button || button.type ==="submit" ) return;

		// 외부로 이벤트를 보내 상위 컴포넌트가 처리하도록 함
		DispatchCustomEvent(this._body, 'project-detail', { action : button.dataset.action, order: Number(button.dataset.order), des : '상세보기' });
	}
}

customElements.define('ongoing-items', OngoingItems);

// 마크업 함수 ===========================================
const MarkUp = {

}

function setCssStyle(){
	// CSS 파일 연결
	return `

:host {
	display: flex;
  flex-direction: column;
}


.content-wrap{ flex: 1;
display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--dark-900);
}
.content-wrap > * {
	flex: 0 1 33%;
}
@media(max-width: 1280px){
	.content-wrap { font-size: 16px; }
}
@media(max-width: 768px){

}

.no-project{ flex: 1;
	display: flex;
	gap: 8px;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--dark-50);
	border: 1px dotted var(--dark-100);
	border-radius : var(--border-radius-default) ;
	color: var(--text-dark-1);
	min-height : 10em;
}
.no-project:before{
	content: "";
	background-image: url("https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20in%20Clouds.png");
	display: block;
	width: 3em;
	height: 3em;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;

}



`
}