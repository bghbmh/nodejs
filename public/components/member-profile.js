

import commonSheet from './styles/style-common.js';

function setCssStyle(){
	return `
	
:host([type="view"]) {
	position: relative;
	display: inline-block;
	min-width: 1em;
	min-height: 1em;
	width: 100%;
	height: 100%;
	overflow: hidden;
	margin: 0;
	background-color: var(--gray-f1);
	line-height: 0;
}


:host([type="view"]) figcaption{ display: none; line-height: 1.2; }
:host([type="view"]) img{
	display: block;
	width: 100%;; height: 100%;
	object-fit: cover;
	object-position: center;
}
:host([type="view"]) img[src*="icon-svg-"]{ transform: scale(0.7) }



:host([type="edit"]){
	position: relative;
	display: inline-flex;
	align-items: center;
	gap: 8px;
	height: 3em;
	border-radius: 100em;
	background-color: transparent;
	border: 1px solid var(--dark-100);
	padding: 0px 1em 0px 0.8em;
	padding-left: 0.8em;
	font-size: 15px;
}
label:before{
	content : '';
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	align-items: center;
	padding-left: 0.8em;
	z-index: 2;
}
label input {	border-radius: 100em !important;  }

figure{
	display: inline-flex;
	align-items: center;
	gap: 8px;
	width: auto;
	height: 100%;
	max-width: 10em;
	background-color: transparent;
	margin : 0;
}
figure img {  width: 4em;  flex: 0 0 auto;  }
figure img[src*="icon-svg-"] {  transform: scale(0.7); }
figure figcaption {
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

figure.no-user {
  max-width: none;
  padding-left: 0.5em;
}

	`;
}

class MemberProfile extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._body = this.shadowRoot;
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		
		this.shadowRoot.adoptedStyleSheets = [ commonSheet, sheet ];
	}

	// 컴포넌트가 DOM에 추가될 때 호출
	async connectedCallback() {
		this._render(); // 임시
	}
	
	disconnectedCallback() {
	}

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {

		const type = this.getAttribute('type');

		switch (type) {
			case 'loading':
				console.log("loading - ", this._items)
				this._body.innerHTML = 'loading';
				break;
			case 'view': console.log("view - ", this._items);
				this._body.innerHTML = `
				<img src="/assets/img/common/icon-svg-no-user.svg">
				<figcaption class="d-none">참여자 이름 등등</figcaption>
				`;
				break;
			case 'edit':

				let test = this.getAttribute('test');

				if( test === '2' ){
					this._body.innerHTML = `
					<label aria-label="참여자"><input name="member" type="checkbox" checked></label>
					<figure class="member ">						
						<figcaption><span>참여자이름이 긴 경우</span></figcaption>
						<img src="/assets/img/common/icon-svg-no-user.svg" alt="참여자사진">
					</figure>
					`;
				} else if( test === '3' ){
					this._body.innerHTML = `<figure class="member no-user ">
						<figcaption><span>참여자가 없습니다</span></figcaption>
						<img src="/assets/img/common/icon-svg-folder-empth-member.svg" alt="참여자가 없습니다">
					</figure>					
					`
				} else {
					this._body.innerHTML = `
					<label aria-label="참여자"><input name="member" type="checkbox" checked></label>
					<figure class="member">
						<figcaption><span>이름이</span></figcaption>
						<img src="/assets/img/common/icon-svg-no-user.svg" alt="참여자사진">
					</figure>
					`;
				}

				
				break;
		}


	}

}

customElements.define('member-profile', MemberProfile);

// 마크업 함수 ===========================================


// projectDetail 전체 마크업

const MarkUp = {

	view : (item) => {
		return  `
		<img src="/sample/dashboard02/assets/img/common/test-user.png">
		<figcaption class="d-none">참여자 이름 등등</figcaption>`
	},
	
}
