
import commonSheet from './styles/style-common.js';
import * as DOM from './Utils-dom.js';
import { DispatchCustomEvent } from './Utils-event.js';

class SectionHeader extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._isEditing = false;
		this._isLoading = false;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = null;
		
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );

		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet]; // 컴포넌트별 스타일과 함께 적용

		this._initBody();
		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
	}

	_initBody() {
		// 컴포넌트의 기본 HTML 구조 설정
		this._body = DOM.CreateElement({tag:"header", class:"section-header"});
		this.shadowRoot.appendChild(this._body);
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

	// --- 렌더링 및 내부 로직 메서드 ---
	_init(mode) {

		if( ! this._data ){
			this._body.innerHTML = `<loading-skeleton></loading-skeleton>`;
			return;
		}
		
		this._body.innerHTML = MarkUp.view(this._data) ;

	}

	_uiClickHandler(e){
		console.log('clickElem - ', e.target.closest("button"));	

		const button = e.target.closest("button");
		if (!button || button.type ==="submit" ) return;

		const action = button.dataset.action;
		if (!action) return;
	}

}

customElements.define('section-header', SectionHeader );

// 마크업 ===========================================
const MarkUp = {

	view : (prop) => {
		return  `
		<div class="title margin-right-2">
			<h3 class="text">
				${prop.title ? prop.title : '제목없음'}
				${prop.count && prop.count > 0  ? `<span class="font-number fcPrimary">${prop.count}</span>` : ''} 
			</h3>
		</div>
		${prop.link ? MarkUp.button(prop) : '' }
		`
	},
	button : prop => {
		return `
			<div class="btn-wrap">
				<button type="button" class="btn3 round" aria-label="페이지 이동 버튼 test"><i class="icon-svg-chevron-right" aria-hidden="true"></i></button>
			</div> 
		`;
	}
}

function setCssStyle(){
	// CSS 파일 연결
	return `
.section-header{ display: flex; gap: 8px; padding: 1em 0 16px; align-items: center; }
.section-header .title{ margin-right: auto }
.section-header .title .text{ 
	font-size: 24px; 
	font-weight: 900; 
	color: var(--font-color-default); 
	margin: 0; 

	font-weight: 700;
  font-family: 'TheJamsil5Bold';

}
loading-skeleton{ width: 30%; border-radius: 4px }
@media(max-width: 1280px){
	.section-header .title .text { font-size: 20px; }
}

`
}
