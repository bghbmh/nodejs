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

import '/components/section-header.js';

import * as DOM from './Utils-dom.js';
import { DispatchCustomEvent } from './Utils-event.js';

import './category-list.js';

class MainSection2 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._body = this.shadowRoot;
		this.header = null;
		this.contents = null;

		this.shadowRoot.adoptedStyleSheets = [commonSheet, this.componentSheet]; // 컴포넌트별 스타일과 함께 적용

		
		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
	}

	get componentSheet() {
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		return sheet;
	}

	_initBody() {
		// 컴포넌트의 기본 HTML 구조 설정
		this.header = DOM.CreateElement({'tag' : "section-header", class:'section-header'});
		this.contents = DOM.CreateElement({'tag' : "category-list" });
		this._body.appendChild(this.header) ;
		this._body.appendChild(this.contents) ;
	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set data(data) {
		this._data = data;
		this._render();
	}
	get data() {
		return this._data;
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		this._initBody();
	}
	
	disconnectedCallback() {// 컴포넌트가 DOM에서 제거될 때 호출
		// this._body.removeEventListener('click', this._bindUiClickHandler );
	}

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {

		if( ! this._data ) return;

		this.header.data = { title: '프로젝트', count : 0,	}; // link : null
		
		let num ={};
		ct.main.forEach( (value, idx) => {
			num[value] = this._data.filter( d => d.category[0].name === value ).length;
		} );

		console.log('sd - ', num);		
		this.contents.data = { value : ct.main, icon : ct.cIcon, num: num};

	}

	_uiClickHandler(e){
		console.log('clickElem - ', e.target.closest("button"));	

		const button = e.target.closest("button");
		if (!button || button.type ==="submit" ) return;

		const action = button.dataset.action;
		if (!action) return;
	}

}

customElements.define('main-section2', MainSection2);

// 마크업 함수 ===========================================


// projectDetail 전체 마크업
const MarkUp = {

	header1 : () => {
		return  `
			header1`
	},
	header2 : () => {
		return  ` test header2`
	}
	
}

function setCssStyle(){
	// CSS 파일 연결
	return `

:host {
      }
.section{ /* background-color: #fff; */ }
.section + .section{ margin-top: 30px;}


.tCom002 .content-wrap{ display: flex; gap: 24px; }
.tCom002 .content-wrap .item{
	background-color: var(--section-background-color);
	border-radius: var(--border-radius-default);
	padding: 1em ;
	flex: 1 1 130px;
	column-gap: 1em;
  /* min-width: 130px; */
  max-width: 30%;
}
.tCom002 .content-wrap .item i{ 
	/* background-color: var(--dark-100); */
	padding: 18px !important;
	box-sizing: content-box;
	border-radius: var(--border-radius-default);
}


.tCom002 .content-wrap .item .badge{ 
	font-family: "Bebas Neue", sans-serif; 	
	font-weight: 400;	
	font-style: normal; 
}
@media(max-width: 1280px){
	.tCom002 .content-wrap .item i { padding: 0px;  }
}
@media(max-width: 768px){
	.tCom002 .content-wrap { 
		overflow: auto; 
		margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;
	}
	.tCom002 .content-wrap .item i { padding: 18px;  }
	.tCom002 .content-wrap .item{
		flex: 1 0 200px;
    max-width: none;
    padding: .5em;
	}
}

`
}