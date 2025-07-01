import * as DOM from './Utils-dom.js';


function setCssStyle(){
	// CSS 파일 연결
	return `

:host {
display: flex;
  gap: 12px;
  flex-wrap:wrap;

}

:host .item{
	background-color: var(--section-background-color);
	border-radius: var(--border-radius-default);
	padding: 1em ;
	flex: 1 1 130px;
	column-gap: 1em;
	/* min-width: 130px; */
	max-width: 30%;
	box-sizing: border-box;
	cursor: pointer;
}

@media(max-width: 1190px){
.item{
	}
}
@media(max-width: 1024px){
	:host .item{
		padding: .5em 1em ;
		flex: 0 1 33%;
		max-width: calc( ( 100% - ( 24px * 2 ) ) / 3 );
	}
}
@media(max-width: 768px){
	:host{ 
		flex-wrap:nowrap;
		overflow: auto; 
		margin-left: -20px;
		margin-right: -20px;
		padding-left: 20px;
		padding-right: 20px;
	}
	:host .item{
		min-width: 280px;
		max-width: none;
	}
}

:host(.tab) .item{ flex: 0 1 auto }

`
}

class CategoryList extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._body = this.shadowRoot;

		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		this.shadowRoot.adoptedStyleSheets = [sheet];

		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
		this._body.addEventListener('click', this._bindUiClickHandler);
	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set data(data) {
		this._data = data;
		this._init();
	}
	get data() {
		return this._data;
	}

	// 컴포넌트가 DOM에 추가될 때 호출
	connectedCallback() {
		this._init();
	}
	
	disconnectedCallback() {// 컴포넌트가 DOM에서 제거될 때 호출
		this._body.removeEventListener('click', this._bindUiClickHandler);
	}

	// --- 렌더링 및 내부 로직 메서드 ---
	_init(){
		console.log('CategoryList - ', this._data);	

		if( ! this._data ){
			this._body.appendChild( DOM.CreateElement({tag:"list-item-type1", class:'item no-item'}) );
			return;
		}
		
		this._body.innerHTML = '';
		this._data.value.forEach( (value, idx) => {
			let c = DOM.CreateElement({
				tag:"list-item-type1", 
				class:'item',
				"data-action" : "view",
				"data-page-layout" : "sub" 
			});
			this._body.appendChild(c);
			c.data = { order:idx, title:value, icon : this._data.icon[idx], num : this._data.num[value] }
			
		} );

	}
	_render() {
	}

	_uiClickHandler(e){
		
		console.log('clickElem - ', e.target.closest("button"));	

		let clickBtn = e.target.closest("button");
		if( !clickBtn ) return;
	}

}

customElements.define('category-list', CategoryList);

// 마크업 함수 ===========================================


// projectDetail 전체 마크업
const MarkUp = {

	
}
