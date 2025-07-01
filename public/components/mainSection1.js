

import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { getFileUrl, CheckFilesInFolder } from './Utils-api.js';
import { DispatchCustomEvent } from './Utils-event.js';


class MainSection1 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._item = null;
		this._isEditing = false;
		this._isLoading = false;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = null;

		// const sheet = new CSSStyleSheet();
		// sheet.replaceSync( setCssStyle() );
		// this.shadowRoot.adoptedStyleSheets = [sheet]; // 또는 [...shadowRoot.adoptedStyleSheets, sheet];

		this.shadowRoot.adoptedStyleSheets = [commonSheet, this.componentSheet]; // 컴포넌트별 스타일과 함께 적용

		this._initBody();

		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
		//this._body.addEventListener('click', this._bindUiClickHandler);

	}

	get componentSheet() {
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		return sheet;
	}

	async loadStylesSheets( cssFilePaths ) {
		try {
			const loadedSheets = await Promise.all(
				cssFilePaths.map(path => this.getStyleSheet(path))
			);

			this.shadowRoot.adoptedStyleSheets = [
				...this.shadowRoot.adoptedStyleSheets,
				...loadedSheets
			];
		} catch (error) {
			console.error('Failed to apply all stylesheets:', error);
		}
	}
	
	async getStyleSheet(cssPath) {
		try {
			const response = await fetch(cssPath);
			if (!response.ok) {
				throw new Error(`Failed to load CSS: ${response.statusText} from ${cssPath}`);
			}
			const cssText = await response.text();
			const sheet = new CSSStyleSheet();
			sheet.replaceSync(cssText);
			return sheet;
		} catch (error) {
			console.error(`Error loading stylesheet ${cssPath}:`, error);
			return new CSSStyleSheet();
		}
	}

	_initBody() {
		// 컴포넌트의 기본 HTML 구조 설정
		this._body = DOM.CreateElement({tag:"section", class:"section tCom001"});
		this.shadowRoot.appendChild(this._body);
	}	

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set data(items) {
		this._data = items;
		//this._items = ;
		this._loadInitData(items);
	}

	get data() {
		return this._item;
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

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'mode' && oldValue !== newValue) {
            this._render();
        }
	}

	// --- 데이터 처리 ---
	async _loadInitData(items) {

		this._item = items[2]; // 임시

        if (!this._item) {
            this.setAttribute('mode', 'empty');
            return;
        }

        this.setAttribute('mode', 'loading');

		try {
			await this._setFilesData(this._item);
			this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
		} catch (error) {
			console.error('[InitialLoad] 데이터 로딩 오류:', error);
			this.setAttribute('mode', 'error');
		}
    }

	async _setFilesData(item) { 
		this._fileItems.mainimage = await getFileUrl('image', [...item.mainimage]) ; 
		this._fileItems.subimage = await getFileUrl('image', [...item.subimage]) ;
		this._fileItems.samplePage = await getFileUrl('sample', [...item.samplePage]) ;
		
		//console.log("_setFilesData - ", this._fileItems )
	}


	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {

		if (!this._body) return;

		const mode = this.getAttribute('mode');
		switch (mode) {
			case 'loading':
				this._body.innerHTML = MarkUp.loading();
				break;
			case 'view':
				this._body.innerHTML = '';
				tempView(this._body, this._item, this._data);
				break;
		}

		function tempView(body,item, dataaa){
			//console.log('_render : main-section1 - ', item);

			let article1 = DOM.CreateElement({'tag' : "article", class:'colg-5 item'});
			let header1 = DOM.CreateElement({'tag' : "header", class:'section-header'});
			header1.innerHTML = MarkUp.header1();

			const chart = document.createElement('bar-chart-type1');
			chart.data = dataaa;
			article1.appendChild(header1) ;
			article1.appendChild(chart) ;

			//
			let article2 = DOM.CreateElement({'tag' : "article", class:'colg-5 item'});
			let header2 = DOM.CreateElement({'tag' : "header", class:'section-header'});
			header2.innerHTML = MarkUp.header2();

			const cardType2 = document.createElement('card-type2');
			cardType2.data = item; // 임시
			article2.appendChild(header2) ;
			article2.appendChild(cardType2) ;

			//
			let article3 = DOM.CreateElement({'tag' : "article", class:'colg-2 item'});
			article3.innerHTML = `
				<button type="button" class="btn btn-add" 
						data-action="create-project" 
						data-page-layout="sub" 
						data-page-name="myAdmin-project-detail"><i class="icon-svg2-folder-plus" aria-hidden="true"></i>새 프로젝트 추가</button>`;
			
			article3.addEventListener("click", e => {
				const button = e.target.closest("button");
				console.log("article3 - ", article3, this)
				DispatchCustomEvent(button, 'mainsection-create-project', { action : button.dataset.action });
			})
				
			body.appendChild(article1) ;
			body.appendChild(article2) ;
			body.appendChild(article3) ;
		}

	}

	_uiClickHandler(e){
		console.log('clickElem - ', e.target);	

		const button = e.target.closest("button");
		if (!button || button.type ==="submit" ) return;

		const action = button.dataset.action;
		if (!action) return;

		
	}

}

customElements.define('main-section1', MainSection1);

// 마크업 함수 ===========================================
const MarkUp = {
	loading : () => {
		return 'loading'
	},
	header1 : () => {
		return  `
		<div class="title">
			<h3 class="text">참여</h3>
		</div>
		<div class="option-wrap">
			<div class="project-count">
				<strong class="font-bebas-neue">99</strong>개
			</div>
			
		</div>`
	},
	header2 : () => {
		return  `
		<div class="title">
			<h3 class="text">
				관심있는 
				<img class="AnimatedFE" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png" alt="Smiling Face with Sunglasses" width="25" height="25"  aria-hidden="true"/>
			</h3>
		</div>
		`
	}

}

function setCssStyle(){
	// CSS 파일 연결
	return `


:host {
      }
.section{ /* background-color: #fff; */ }
.section + .section{ margin-top: 30px;}
.section-header{ display: flex; gap: 8px; padding: 1em 0 16px; }
.section-header .title{ margin-right: auto }
.section-header .title .text{ 
	font-size: 24px; 
	font-weight: 900; 
	color: var(--font-color-default); 
	margin-bottom: 0; 

	font-family: 'KakaoBigSans';
	font-weight: 800;

	font-weight: 700;
  font-family: 'TheJamsil5Bold';
}
@media(max-width: 1280px){
	.section-header .title .text { font-size: 20px; }
}

.tCom001{ 
	display: grid;
	gap: var(--gap, 0);
	grid-template-columns: repeat(12, 1fr);
	gap: 30px 24px ;
}
.tCom001 .item:not(:has(.btn-add)){
	background-color: var(--section-background-color);
	padding: 30px 30px;
	border-radius: 16px;
	min-height: 264px;
}

.tCom001 .AnimatedFE{ 
	font-size: 18px;
	width: 2em;
	height: 2em;
}

.tCom001 .item .section-header{ align-items: center; padding-top: 0; }
.tCom001 .item .title .text{  }
.tCom001 .item .project-count{ 
	font-size: 16px; 
	font-weight: 800; 	
	color: var(--font-color-default);
}
.tCom001 .item .project-count strong{ 
	display: inline-block;
	font-size: 3.25em;
	line-height: 0;
	vertical-align: bottom;
}

.tCom001 .item .btn.btn-add{
	font-size: 16px;
	width: 100%;
	height: 100%;
	white-space: nowrap;
	border: 1px dashed var(--dark-300);
	background-color: var(--body-background-color);
	border-radius: var(--border-radius-default);
	color: var(--dark-700);

	flex-direction: column;
	
	justify-content: center;

}
.tCom001 .item .btn-add i{ font-size: 24px; }
@media(max-width: 1280px){
	.tCom001 .item:not(:has(.btn-add)) { padding: 24px 24px; min-height: 200px; }
	.tCom001 .item .simple-bar-chart { height: 130px ;  }
	.tCom001 .item .card-type2 .title { font-size: 16px; }
}
@media(max-width: 1024px){
	.tCom001 .item { grid-column: span 6; }
	.tCom001 .item:has(.btn-add){ /* display: none; 임시_보이게 */ }
}
@media(max-width: 768px){
	.tCom001 .item { grid-column: span 12; }
}

`
}
