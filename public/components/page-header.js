
import commonSheet from './styles/style-common.js';

import { DispatchCustomEvent } from './Utils-event.js';

const pageHeaderStyle = `

:host {  
	--x : 40px;
	position: sticky;
	display: flex;
	flex-direction: column;
	height: 120px;
	top: -4px;
	background-color: rgba(249, 251, 250, 0.8);
	
	gap: 1em 8px;
	z-index: 5;
	backdrop-filter: blur(10px);
	
	padding: 1.7rem var(--x) 1rem;
	margin-left: calc( -1 * var(--x) );
	margin-right: calc( -1 * var(--x) );
}

.page-header {
	flex: 0;
	display: flex;
	align-items: center;
  
}
.page-title{
	font-size: 28px;	  
	font-weight: 800;
	color: var(--font-color-default);
	margin: 0;
	margin-right: auto;
	font-weight: 700;
  font-family: 'TheJamsil5Bold';
}
.page-header .button-wrap .btn{ color: var(--font-color-default); }
.breadcrumb {
	flex:none;
	--ui-breadcrumb-padding-x : 4px;
	--ui-breadcrumb-font-size : 13px;
	--ui-breadcrumb-margin-bottom : 0;
}
.breadcrumb a{
	display : flex;
	align-items: center;
	gap: 4px;
	color: var(--font-color-default);
	opacity: .7;
}
.breadcrumb a.home{
	background-color: var(--dark-100);
	color: var(--dark-700);
	font-size: calc(1em - 1px);
	padding: 4px 7px;
	line-height: 1;
	border-radius: 1em;
	opacity: 1;
}
.breadcrumb a svg{ width: .9em; fill: currentColor }
.breadcrumb-item + .breadcrumb-item::before{ 
	font-size: .8em;
	margin-top: .2em;
	opacity: .3;
}
.breadcrumb a.home:hover{ background-color: var(--primary-500); color: var(--dark-900); }

@media(max-width : 1440px){
	:host {  --x :20px; }
	.page-title{ font-size: 24px;	 }
}
@media(max-width : 1280px){
	:host {  --x :20px; }
}
@media (max-width: 1024px) {
	.page-title{ padding-left : 3.5rem	 }

	.breadcrumb a.home{ 
		padding: 4px 0px;
		background-color: transparent; 
		font-size: calc(1em - 0px); 
		color :currentColor  
	}
	.breadcrumb a.home:hover{ background-color: transparent; }

	.btn.add {
		font-size: 24px;
		width: 1.5em;
		height: 1.5em;
		color: transparent;
		white-space: nowrap;
		overflow: hidden;
	}
}
@media(max-width : 768px){
	:host { height: auto; }
}

`;

class PageHeader extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		const sheet = new CSSStyleSheet();
        sheet.replaceSync( pageHeaderStyle );
        this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet];

		this._body = this.shadowRoot;

		this._title = '';
		
		this._clickHandler = this._onClick.bind(this);

	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set title(title) {
		this._loadInitData( title );
	}
	get title() {
		return this._title;
	}

	// 컴포넌트가 DOM에 추가될 때 호출
	connectedCallback() {
		
		this._body.addEventListener('click', this._clickHandler );
		this.setAttribute('title', this._title);
		this.setAttribute('mode', 'loading'); // loading  초기 모드 설정

	}	

	// 컴포넌트가 DOM에서 제거될 때 호출
	disconnectedCallback() {
		this._body.removeEventListener('click', this._clickHandler );
	}

	static get observedAttributes() {
		return ['mode','title'];
	}

	// 속성 값이 변경될 때 호출 (observedAttributes에 등록된 속성만 해당)
	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue !== newValue) {
            switch (name) {
                case 'title':
					this.setAttribute('title', newValue);
                case 'mode':
                    this._render();
                    break;
            }
        }
	}

	_loadInitData(data ) { 
		this._title = data ;
		

		if( this._title !== '' ) { 
			this.setAttribute('mode','view');
			this.setAttribute('title', this._title);
		}
		else {  console.log("?? - 22", this._title)
			this.setAttribute('mode', 'empty');
		}
    }

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {

		const mode = this.getAttribute('mode');

		switch(mode){
			case 'loading':
				this._body.innerHTML = `<div class="guide">페이지 제목을 찾고 있습니다</div>`;
			break;
			case 'view':
				this._body.innerHTML = MarkUp.view(this._title );
			break;
			case 'empty':
				this.classList.add("no-title");
				this._body.innerHTML = `<div class="guide">페이지 제목을 불러오지 못했습니다</div>`;
			break;
		}

	}	

	_onClick(e){
		
		console.log('clickElem - ', e.target.closest("button"));	

		const button = e.target.closest("button");
		if (!button ) return;
	
		DispatchCustomEvent(this._body, 'clicked-header', { action : button.dataset.action });
		
	}

}

customElements.define('page-header', PageHeader);


// 마크업 함수 ===========================================


// 마크업
const MarkUp = {
	view : (title) => {
		return  `
		<!--page-header 페이지 정보-->
		<div class="page-header"> 
				<!--//페이지 제목-->
				<h2 class="page-title">${title}</h2>
				<!--//페이지 제목-->

				<div class="button-wrap">
					<button type="button" class="btn create-project" 
						data-action="create-project" 
						data-page-layout="sub" 
						data-page-name="myAdmin-project-detail"><i class="icon-svg2-folder-plus" aria-hidden="true"></i>새 프로젝트 추가</button>
				</div> 
		</div>
		
		<nav class="breadcrumb" aria-label="breadcrumb">
				<ol class="d-flex">
					<li class="breadcrumb-item">
						<a href="/" class=" home">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg> 홈
						</a>
					</li>
					<li class="breadcrumb-item">
						<a href="/">
							2d
						</a>
					</li>
					<li class="breadcrumb-item current">
						<a href="/">
							2d_3d, 현재페이지
						</a>
					</li>
				</ol>
			</nav> <!-- -->
		<!--//page-header 페이지 정보-->`;
	}
}
