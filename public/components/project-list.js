

import commonSheet from './styles/style-common.js';
import * as DOM from './Utils-dom.js';
import { getFileUrl, CheckFilesInFolder } from './Utils-api.js';
import { DispatchCustomEvent } from './Utils-event.js';
import { NO_ITEM_CONFIG, MAIN_CATEGORY } from './config.js';

import { zPagination } from '../assets/js/custom-library/bPagination/bPagination.js';

import './list-item-type3.js';
import './tab-type2.js';

function setCssStyle(){
	return `

:host{
	flex:1;
	display: flex;
	flex-direction: column; 


}
.zPagination {
	--ui-pagination-active-color : var(--primary-900);
	--ui-pagination-active-bg : var(--primary-500);
	--ui-pagination-hover-bg : var(--primary-100);
	--ui-pagination-hover-color : var(--primary-700);
}
tab-type2, nav{ flex: none }
.items-wrap { flex: 1 }
list-item-type3{ display: block }
list-item-type3 + list-item-type3{ margin-top: 1em; }

.items-wrap:has( .no-item){ display: flex; flex-direction: column;    }
.no-item {
	display: flex;
	gap: 8px;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--dark-50);
	border: 1px dotted var(--dark-100);
	border-radius : var(--border-radius-default) ;
	
}
.no-item:before{
	content: "";
	background-image: url("https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Hamsa.png");
	display: block;
	width: 3em;
	height: 3em;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;

}


	`
}

class ProjectList extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		// 초기 상태 또는 내부 변수 설정
		//this.setCssStyle();
    	this._items = []; 
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._rawData = null;
		this._body = null;
		this._nav = null;
		this._tab = null;

		const styles = new CSSStyleSheet();
		styles.replaceSync(setCssStyle());
		
		this.shadowRoot.adoptedStyleSheets = [ commonSheet, styles ];
		this.loadStylesSheets([
            '../assets/js/custom-library/bPagination/bPagination.css'
		]);
		
		this._clickHandler = this._onClick.bind(this); 
		
		this._initBody();
		this._body.addEventListener('click', this._clickHandler);
	}

	async loadStylesSheets( cssFilePaths ) {
        try {
			const loadedSheets = await Promise.all(
				cssFilePaths.map(path => this.getStyleSheet(path))
			);

			this.shadowRoot.adoptedStyleSheets = [
				...loadedSheets,
				...this.shadowRoot.adoptedStyleSheets,
				
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

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set items(items) {
		this._items = items;  
		this._loadInitData(this._items);
	}

	get items() {
		return this._items;
	}

	set data(data) {
		this._rawData = data;  
		this._loadInitData(this._rawData);
		this._init();
	}

	get data() {
		return this._rawData;
	}

	static get observedAttributes() {
		return ['mode', 'order'];
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		console.log('project-list :connectedCallback--- ', this._rawData);
		this._loadInitData();
	}
	
	disconnectedCallback() { // 컴포넌트가 DOM에서 제거될 때 호출
		this._body.removeEventListener('click', this._clickHandler );
	}

	// 속성 값이 변경될 때 호출 (observedAttributes에 등록된 속성만 해당)
	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'mode' && oldValue !== newValue) {
            this._render();
        }

		if (name === 'order' && oldValue !== newValue) {
            console.log('attributeChangedCallback --- ',oldValue, newValue );
			let aaa = this._rawData.filter( d => Number(d.category[0].type) === Number(newValue) );

			this._nav.innerHTML='';
			this._loadInitData(aaa);
        }
	}

	//초기화
	_initBody() {
        // 컴포넌트의 기본 HTML 구조 설정
		this._tab = DOM.CreateElement({tag:"tab-type2"  });
		this._body = DOM.CreateElement({tag:"div", class:"items-wrap tCom008"});
		this._nav = DOM.CreateElement({tag:"nav", class:'d-flex'});
		
		this.shadowRoot.appendChild(this._tab);
		this.shadowRoot.appendChild(this._body);
		this.shadowRoot.appendChild(this._nav);

		this._tab.addEventListener("tab-menu-selected", e => {
			console.log('project-list : tab-menu-selected --- ', e.detail);
			this.setAttribute('order', e.detail.order);
		});

    }

	_init(){
		let category =[...MAIN_CATEGORY];
		category.forEach( (ca, idx) => {
			ca.total = this._rawData.filter( d => d.category[0].name === ca.name ).length;
		} );	
		this._tab.data = { action: "list",  list : category, all :this._rawData.length };

	}
	
	// --- 데이터 처리 ---
	async _loadInitData(data = null) {
        if (!data) { 
            this.setAttribute('mode', 'empty');
            return;
        }

        this.setAttribute('mode', 'loading');
		try {  
			this._items = await this._setFilesData(data);
			this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
		} catch (error) {
			console.error('[InitialLoad] 데이터 로딩 오류:', error);
			this.setAttribute('mode', 'error');
		}
    }

	async _setFilesData(data) { 

		const tempData = data.map( async (item) => {
			const mainimage = await getFileUrl('image', [...item.mainimage]) ; 
			const subimage = await getFileUrl('image', [...item.subimage]) ;
			const samplePage = await getFileUrl('sample', [...item.samplePage]) ;

			return { ...item, mainimage, subimage, samplePage }
		});

		return Promise.all( tempData );
	}

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {
		if (!this._body) return;

		const mode = this.getAttribute('mode');
		switch (mode) {
			case 'loading':

				console.log("project-list loading - ", this._items)
				this._body.innerHTML = MarkUp.loading();
				break;
			case 'view': console.log("view - ", this._items);
				this._body.innerHTML ='';
				MarkUp.view( this._body, this._items, this._nav);
				break;
			case 'error':
				this._body.innerHTML = '<div class="no-item">등록된 항목이 없습니다</div>';
				break;
			case 'empty':
			default:
				this._body.innerHTML = '<div>No data available.</div>';
				break;
		}
		
		// 렌더링 후 새롭게 이벤트 리스너 연결
	}

	_onClick(e){

		const button = e.target.closest("[data-action]");

		const action = button.dataset.action;
		if (!action) return;

		e.preventDefault();
		//console.log('list-item - ', clickBtn );
		switch( action ){
			case "view":
				this.setAttribute('mode', 'view');
				
				// 외부로 이벤트를 보내 상위 컴포넌트가 처리하도록 함
				DispatchCustomEvent(this._body, 'listItemClicked', { action : action, order: Number(this._body.dataset.pn) });
				break;
			case "edit":
				this.setAttribute('mode', 'edit');
				break;
			case "delete-field":
			case "add-field":
				this._handleDynamicField(button);
				break;
			case "list":
			case "delete":
				
				
				break;
		}	
	}

}
customElements.define('project-list', ProjectList);


// 마크업 함수 ===========================================

const MarkUp = {
	loading : () => {
		return `
		<list-item-type3></list-item-type3>
		<list-item-type3></list-item-type3>
		<list-item-type3></list-item-type3>
		<list-item-type3></list-item-type3>
		<list-item-type3></list-item-type3>
			`
	},
	view : ( body, items, nav ) => {

		let opt1 = {
			itemsAll : items.length, // 전체 아이템 수
			itemsInPage : 5, // 한 페이지당 아이템 수
			MaxNavButtons : 3, // 화면에 표시할 페이지 버튼 최대 개수
			onPageChange : function (options, selectedPage, clickedPage){
				console.log("currentPage - ",selectedPage,clickedPage );
				if( selectedPage === clickedPage ) return;

				//1 : 0->2, 2 : 3->5, 3 : 6->8, 4 : 9->11
				let startIdx =  (clickedPage - 1) * options.itemsInPage ;
				let endIdx = clickedPage * options.itemsInPage ; 

				if( endIdx >= options.itemsAll ) endIdx = options.itemsAll;
			
				body.innerHTML = '';
				for (let i = startIdx; i < endIdx; i++) {
					const listItem = document.createElement('list-item-type3');
					body.appendChild(listItem);
					listItem.item = items[i];
					
				}	
			}
		}

		let t1 = zPagination.init( nav, opt1);
		//t1.goToPage(1);


		return `
sdf `
	}

}
