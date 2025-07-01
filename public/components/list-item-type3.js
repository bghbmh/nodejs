

import commonSheet from './styles/style-common.js';
import * as DOM from './Utils-dom.js';
import { getFileUrl, CheckFilesInFolder } from './Utils-api.js';
import { DispatchCustomEvent } from './Utils-event.js';
import { NO_ITEM_CONFIG } from './config.js';

import './current-state.js';
import './project-category.js';
import './category-type1.js';

class ListItemType3 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

    	this._item = null; // 컴포넌트에 전달될 데이터
		this._body = null;
		
		this.shadowRoot.adoptedStyleSheets = [ commonSheet ];
		this.loadStylesSheets([
            '/components/styles/ListItemType3.css',
			'/components/styles/skeleton-style.css'
		]);
		
		this._clickHandler = this._onClick.bind(this);
		this._changeHandler = this._onChange.bind(this);

		this._initBody();
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
		this._body = DOM.CreateElement({tag:"div", class:"list-item-type3"});
		this.shadowRoot.appendChild(this._body);
		this._body.addEventListener('click', this._clickHandler );
    }

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set item(item) {
		this._item = item;  
		this._loadInitData();
	}

	get item() {
		return this._item;
	}

	static get observedAttributes() {
		return ['mode'];
	}

	set mode(m) {
		this.setAttribute('mode', m);
	}

	get mode() {
		return this.getAttribute('mode');
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		this.setAttribute('mode', 'loading');
	}
	
	disconnectedCallback() { // 컴포넌트가 DOM에서 제거될 때 호출
		this._body.removeEventListener('click', this._clickHandler );
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'mode' && oldValue !== newValue) {
            this._render();
        }
	}
	

	// --- 데이터 처리 ---
	async _loadInitData() {
        if (!this._item) {console.log("loading list item type33  item - ", this._item)
            this.setAttribute('mode', 'loading');
            return;
        }
		this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
    }

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {
		const mode = this.getAttribute('mode');
		switch (mode) {
			case 'loading':

				console.log("loading list item type33 - ", this._item)
				this._body.innerHTML = MarkUp.loading();
				break;
			case 'view':
				this._body.dataset.pn = this._item.projectNum;
				this._body.innerHTML = MarkUp.view(this._item );
				this._body.querySelector("#cb").addEventListener("change", this._changeHandler);
				break;
			case 'error':
				this._body.innerHTML = '<div>Error loading data.</div>';
				break;
		}
	}

	_onClick(e){
		const button = e.target.closest("button");
		const action = button.dataset.action;
		if (!action) return;

		e.preventDefault();
		console.log('list-item - ', button );
		switch( action ){
			case "view":
				this.setAttribute('mode', 'view');
				
				// 외부로 이벤트를 보내 상위 컴포넌트가 처리하도록 함
				DispatchCustomEvent(this._body, 'listItemClicked', { action : action, order: Number(this._body.dataset.pn) });
				break;
		}	
	}

	_onChange(e){
		DispatchCustomEvent(this._body, 'item-checked', { value : 'checkbox 클릭여부 확인' });
	}

}
customElements.define('list-item-type3', ListItemType3);


// 마크업 함수 ===========================================
function setFiles(c = '', files){
	
	let more = 0;
	let folder = CheckFilesInFolder(c, [...files]);
	
	//console.log(' filePreview :', files, files?.length, folder);

	if( folder.empth ){
		if(  c === 'item' ) c += ' no-item';
		if( c === 'image' ) c += ' no-image';
	}

	if ( files.length > 1 ) more = files.length - 1

	return MarkUp.previewFile(c,folder.files[0], more);
}

const MarkUp = {
	loading : () => {
		return `
		<div class="info">
			<div class="category skeleton-image"">
			</div>
			<div class="title">
				<div class="text skeleton-text"></div>
				<small class=" skeleton-text"></small>
			</div>
		</div>

		<div class="option-wrap">
			<div class="option">
				<figure class="member skeleton-image"> </figure>
			</div>
			<div class="option">
				<figure class="image skeleton-image"> </figure>
			</div>
		</div>

		<div class="state">
			<div class="state-ongoing skeleton-image"></div>
		</div>

		<div class="btn-wrap">
			<div class="btn edit-btn skeleton-image"></div>
			<div class="btn edit-btn skeleton-image"></div>
		</div>
			`
	},
	view : ( item ) => {
		return `
		<label aria-label="항목선택" id="cb" class="cb"><input type="checkbox"></label>

		<div class="info">
			<div class="category">
				<category-type1 data-main='${item.category[0].type}' data-sub='${item.category[1].type}'></category-type1>
			</div>
			<div class="title">
				<div class="text">${item.title}</div>
				<small>2025.1.1 - 2025.2.1</small>
			</div>
		</div>

		<div class="option-wrap">
			<div class="option">
				<figure class="member">
					<img src="" alt="참여자이름">
					<figcaption><span>참여자이름</span></figcaption>
				</figure>
				<figure class="member">
					<img src="" alt="참여자 없음">
					<figcaption><span>참여자 없음</span></figcaption>
				</figure>
				<span class="plus-more">
					<i class="icon">+</i>2
				</span>
			</div>
			<div class="option">
				${setFiles('image',[...item.mainimage, ...item.subimage])}
				
			</div>
		</div>

		<div class="state">
			<current-state type="view" state="${item.projectState}"></current-state>
		</div>

		<div class="btn-wrap">
			<button type="button" class="btn view-btn"
				data-action="view"
				data-page-layout="sub"
				data-page-name="myAdmin-project-detail">상세보기</button>

			<button type="button" class="btn edit-btn"
				data-action="edit"
				data-page-layout="sub"
				data-page-name="myAdmin-project-detail">수정</button>
		</div> `
	},
	previewFile : (c = '', f , more = 0) => {
		return `
			<figure class="image">
				<img src="${f.webUrl}" alt="${f.alt !== '' ? f.alt : f.name}" aria-hidden="true">
				<figcaption>
					<span class="option title">${f.name}</span>
					${ f.size > 0 ? '<span class="option">' + (f.size / 1024).toFixed(2) + 'KB</span>' : ''} 
				</figcaption>
			</figure>
			${ more > 0 ? `<span class="plus-more" aria-label="업로드된 전체 이미지 개수는 ${more}개 입니다"><i class="icon">+</i>${more}</span>` : ''} `
	},
}
