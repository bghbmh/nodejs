
import { NO_ITEM_CONFIG } from './config.js';
import commonSheet from './styles/style-common.js';

import './section-header.js';

import * as DOM from './Utils-dom.js';
import { getFileUrl, CheckFilesInFolder } from './Utils-api.js';
import { DispatchCustomEvent } from './Utils-event.js';

import './cardType1.js';
import './list-item-type2.js';
import './list-item-type4.js';

import './complete-items.js';
import './ongoing-items.js';
import './simple-board-list.js';

class MainSection3 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._complete = {};
		this._ongoing = {};
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body =null;
		
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet]; 

		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
		this._initBody();
		
	}

	_initBody() {
		// 컴포넌트의 기본 HTML 구조 설정
		this._body = DOM.CreateElement({tag:"section", class:"section  cGrid tCom007"});
		this.shadowRoot.appendChild(this._body);
	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set data(data) {
		this._data = data;
		this._loadInitData(data);
	}
	get data() {
		return this._data;
	}

	static get observedAttributes() {
		return ['mode'];
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		this._render(); // 임시
	}
	
	disconnectedCallback() {// 컴포넌트가 DOM에서 제거될 때 호출
		this._body.removeEventListener('click', this._bindUiClickHandler );
	}

	attributeChangedCallback(name, oldValue, newValue) {
		//console.log("mainsection33 attributeChangedCallback mode - ", oldValue, newValue )
		if (name === 'mode' && oldValue !== newValue) {
            this._render();
        }
	}

	// --- 데이터 처리 ---
	async _loadInitData(items) {

		this.setAttribute('mode', 'loading'); 

		let dd = this._data.filter( d => d.projectState === "complete" );
		this._complete.all = dd.length;
		this._complete.data = dd.length > 2 ? dd.slice(0,2) : [...dd];
		
		//dd.forEach( (d, idx) => idx < 2 ? this._complete.data.push(d) : '' );

		let dd2 = this._data.filter( d => d.projectState === "ongoing" );
		this._ongoing.all = dd2.length;
		this._ongoing.data = dd2.length > 2 ? dd2.slice(0,2) : [...dd2];
		

		try {
			
			this._complete.files = await Promise.all(
				this._complete.data.map( d => ccccc([...d.mainimage, ...d.subimage]) )
			);

			this._ongoing.files = await Promise.all(
				this._ongoing.data.map( d => ccccc([...d.mainimage, ...d.subimage]) )
			);

			function ccccc(imgs){
				if( imgs.length > 0 ) {
					return getFileUrl('image', imgs);
				} else {
					return [{
						alt : '등록한 이미지가 없습니다', 
						webUrl: NO_ITEM_CONFIG.image,
						lastModified: 0,
						name: "",
						size: 0,
						type: ""
					}];
				}
			}

			this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
		} catch (error) {
			console.error('[InitialLoad] 데이터 로딩 오류 0000 :', error);
			this.setAttribute('mode', 'error');
		}
		
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
				tempView(this._body, this._complete, this._ongoing);
				break;
		}

		function tempView(body,complete, ongoing){

			console.log("mainsection33 tempView - ", complete )

			//
			let article1 = DOM.CreateElement({'tag' : "complete-items", class:'colg-6 item'});
			body.appendChild(article1) ;
			article1.data = complete;

			//
			let article2 = DOM.CreateElement({'tag' : "ongoing-items", class:'colg-3 item'});
			body.appendChild(article2) ;
			article2.data = null;//ongoing;

			//
			let article3 = DOM.CreateElement({'tag' : "article", class:'colg-3 item'});
			let header3 = DOM.CreateElement({'tag' : "section-header", class:'section-header'});
			let board = DOM.CreateElement({'tag' : "simple-board-list" });
			body.appendChild(article3) ;
			article3.appendChild(header3) ;
			article3.appendChild(board) ;
			
			header3.data = { title: '알림', count : 0, link:'bbb'}; 
			board.data = [
						// {
						// 	"keyword" : [ "새글"],
						// 	"description": "옅구름 포도 도담도담 아리아 감또개 그루잠 미리내 감사합니다 사과 노트북 노트북 가온누리 그루잠 아슬라 소솜 노트북 미리내 여우비 우리는 도서관 가온해 우리는 예그리나",
						// 	"time" : {
						// 		"first" : "",
						// 		"last" : ""
						// 	},
						// 	"author" : "miniBig",
						// 	"view" : 0,
						// 	"comment" : "파일로연결하기"
						// },
						// {
						// 	"keyword" : [ "공지", "중요"],
						// 	"description": "함초롱하다",
						// 	"time" : {
						// 		"first" : "",
						// 		"last" : ""
						// 	},
						// 	"author" : "miniBig",
						// 	"view" : 0,
						// 	"comment" : "파일로연결하기"
						// }
					];
		}

	}

	_uiClickHandler(e){
		console.log('MainSection3 - ', e.target.closest("button"));	

		const button = e.target.closest("button");
		if (!button || button.type ==="submit" ) return;

		const action = button.dataset.action;
		if (!action) return;
	}

}

customElements.define('main-section3', MainSection3);

// 마크업 함수 ===========================================
const MarkUp = {
	loading : () => {
		return 'loading'
	},
	header1 : () => {
		return  `
		test header1`
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



.tCom004{ 
	display: flex;
	flex-direction: column;
	gap: 12px;
	font-size: 18px;
	color: var(--dark-900);
}
.tCom004 list-item-type4{  flex:0 1 50%; }

@media(max-width: 1280px){
	.tCom004 { font-size: 16px; }
}




.tCom007{
	display: grid;
	gap: var(--gap, 0);
	grid-template-columns: repeat(12, 1fr);
	gap: 30px 24px ;
}
.tCom007 > .item{ display: flex; flex-direction: column; }

.tCom007 > .item .content-wrap{ flex: 1 }

.tCom007 .btn3.round{ padding: 1px; }
@media(max-width: 1024px){
	.tCom007 > .item{ grid-column: span 6;  }
	.tCom007 > complete-items.item{ grid-column: span 12;  }
}
@media(max-width: 768px){
	.tCom007 > .item{ grid-column: span 12;  }
	.tCom007 > .item:first-of-type{ grid-column: span 12 ;   }
}


.tCom005 { 
	padding: 16px 20px; 
	background-color: var(--section-background-color);
	border-radius : var(--border-radius-default) ;
}
.tCom005 list-item-type2{ 
	display: block;
	padding: 8px 0;
	min-height: 25%; 
	align-items: center;
}
.tCom005 list-item-type2 + list-item-type2{ border-top: 1px dashed var(--gray-e) }
.tCom005 list-item-type2 .title{ font-size: 18px; }


@media(max-width: 1280px){
	.tCom005 list-item-type2 .title{ font-size: 16px; }
}





`
}