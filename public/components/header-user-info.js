

import * as DOM from './Utils-dom.js';
import { getFileUrl, jsonDB } from './Utils-api.js';

import commonSheet from './styles/style-common.js';


class HeaderUserInfo extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._profile = null;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body =  null;

		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );

		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet]; // 컴포넌트별 스타일과 함께 적용
		
		this._clickHandler = this._onClick.bind(this); 
		this._initBody();
	}

	_initBody() { // 컴포넌트의 기본 HTML 구조 설정
		this._body = DOM.CreateElement({tag:"div", class:"wrap"});
		this.shadowRoot.appendChild(this._body);
		this._body.addEventListener('click', this._clickHandler );
	}	

	set profile(profile) {
		this._profile = profile;
		this._loadInitData();
	}
	get profile() {
		return this._profile;
	}
	
	static get observedAttributes() {
		return ['mode'];
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출

	}

	// 컴포넌트가 DOM에서 제거될 때 호출
	disconnectedCallback() { // 이벤트 리스너 제거
		this._body.removeEventListener('click', this._clickHandler );
	}

	// 속성 값이 변경될 때 호출 (observedAttributes에 등록된 속성만 해당)
	attributeChangedCallback(name, oldValue, newValue) {
		//console.log(`project-detail ---- Attribute ${name} changed from ${oldValue} to ${newValue}`);
		if (name === 'mode' && oldValue !== newValue) {
            this._render(newValue);
        }
	}
	
	// --- 데이터 처리 ---
	async _loadInitData() {
        if (!this._profile) {
            this.setAttribute('mode', 'empty');
            return;
        }

        this.setAttribute('mode', 'loading');

		try {

			document.body.dataset.theme = this._profile.mode;

			await this._setFilesData(this._profile.image.main);
			this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
		} catch (error) {
			console.error('[InitialLoad] 데이터 로딩 오류:', error);
			this.setAttribute('mode', 'error');
		}
    }

	async _setFilesData(data) { 
		this._fileItems.image = await getFileUrl('member', [data]) ; 
	}


	// --- 렌더링 및 내부 로직 메서드 ---
	_render(mode) {
		//const mode = this.getAttribute('mode');
		switch (mode) {
			case 'loading':
				this._body.innerHTML = 'loading';
				break;
			case 'view':
				this._body.innerHTML = MarkUp.view(this._profile, this._fileItems) ;
				break;
			case 'empty':
				this._body.innerHTML += `<div >데이터 없음</div>`;
			break;
		}
	}

	_onClick(e){
		
		const button = e.target.closest("button");
		if (!button) return;

		const action = button.dataset.action;
		if (!action) return;

		switch(action){
			case "modal":
				const slot = DOM.CreateElement({ tag:'div', slot:'popover-content' });
				
				const a = DOM.CreateElement({ tag:'div', class:'popover-header', textContent:' 내 정보' });
				const originalNode = this._body.querySelector('.user .info');
				const clonedNode = originalNode.cloneNode(true); 
				//clonedNode.setAttribute("slot", 'popover-content');

				slot.appendChild(a);
				slot.appendChild(clonedNode);

				console.log('clickElem - ', clonedNode);
				const popover = DOM.CreateElement({ tag:'pop-over', class:'popover popover-user-info' });

				popover.appendChild(slot);
				document.body.appendChild(popover)
				popover.open();
			break;
			case "theme":
				jsonDB('memberDB').then( members => {
					const [profile] = members.filter(m => m.id === this._profile.id);
					document.body.dataset.theme = this._profile.mode;
				}).catch( err => {

				});
				//const [profile] = memberDB.filter(m => m.id === testUser.id);
			break;
		}


	}

}

customElements.define('header-user-info', HeaderUserInfo);

// 마크업 ===========================================

const MarkUp = {
	view : (profile, files) => {
		
		return  `
			<div class="svg-defs-box" aria-hidden="true">
				<svg width="189" height="209" viewBox="0 0 189 209" fill="none">
					<defs>
						<path id="gShape" d="M17.5446 94.2634C92.199 53.7388 136.89 -28.0779 175.525 10.7355C214.16 49.5489 158.125 209.96 107.447 208.018C46.1097 205.668 -36.4023 123.547 17.5446 94.2634Z" /> <!-- fill="currentColor" #00B69B -->
					</defs>
				</svg>
				<svg width="192" height="211" viewBox="0 0 192 211" fill="none">
					<defs>
						<clipPath id="userImageClip">
							<path id="userClip" d="M2.3381 2.38196C38.992 2.38198 23.0594 2.3816 79.785 2.38145C136.511 2.3813 215.147 -23.6452 184.094 102.616C170.949 156.061 139.266 211.159 109.439 210.016C63.9646 208.274 6.85215 162.687 2.33518 127.29C-0.81356 102.616 2.33818 43.8108 2.3381 2.38196Z" fill="#D9D9D9" />
						</clipPath>
					</defs>
				</svg>
			</div>

			<!--사용자 정보-->
			<div class="user">
				<button type="button" class="ctrl-modal" data-action="modal">
					<i class="icon-svg-chevron-right" aria-hidden="true"></i>
				</button>
				<div class="info">
					<div class="option-wrap d-flex">
						${profile.nickname.check ? '<small class="option margin-right-auto">별명 사용 중 <i class="icon-svg-check-circle-fill primary" aria-hidden="true"></i></small>' : '<small class="option margin-right-auto">별명 사용 안함 <i class="icon-svg-check-circle-fill" aria-hidden="true"></i></small>'}
						
						<label class="toggle mode">
							<input type="checkbox" ${profile.mode === 'dark' ? 'checked' : ''} data-action="theme">
						</label>
					</div>
			
					<div class="main">
						${profile.nickname.check ? `<strong class="name" aria-label="별명">${profile.nickname.value || '별명없음'}</strong>` : `<strong class="name" aria-label="실제이름">${profile.name}</strong>`}
						<div class="extra-info">
							${profile.nickname.check ? `<strong class="item" aria-label="실제이름">${profile.name}</strong>` : `<strong class="item" aria-label="별명">${profile.nickname.value || '별명없음'}</strong>`}
							<span class="item" aria-label="직급">${profile.business.position}</span>
							<span class="item" aria-label="팀">${profile.business.team} </span>
							<span class="item" aria-label="회사">${profile.business.company}</span>
						</div>
					</div>
			
					<div class="btn-wrap">
						<button type="button" class="btn " ><i class="icon-svg-user1" aria-hidden="true"></i>내정보</button> <!-- data-link -->
					</div>
				</div>

				<div class="user-image-wrap" aria-hidden="true">			
					<img class="img" src="${files.image[0].webUrl}" alt="test 이미지" aria-hidden="true" />
					<svg class="bg" aria-hidden="true"><use href="#gShape" clip-path="url(#userbgClip)" /></svg>	
					
					<svg class="bg bg22" aria-hidden="true"><use href="#gShape" clip-path="url(#userbgClip)" /></svg>	
				</div>

			</div>
			<!--//사용자 정보-->
			`;
	}
}


function setCssStyle(){
	// CSS 파일 연결
	return `


:host {
      }
/* svg defs 박스  */
.svg-defs-box {
	position: absolute;
	width: 0px;
	height: 0px;
	overflow: hidden;
	left: 0;
	top: 0;
} 
/* 로고 */
h1.logo{  /* background-color: #f5f8f9; */
	display: inline-block;
	margin: 0;
	padding: 0;
	max-width: 240px;
	width: 100%;
	height: 97px;
}
h1.logo a{
	display: flex;
	justify-content: left;
	align-items: center;
	height: 100%;
	line-height: 0;
}
h1.logo a img{ max-width: 100%;}


:root{
	--common-header-height : 68px;
}




/* 공통 헤더 */
.wrap{
	
	display: flex;
	flex-direction: column;
	width: 100%;
	box-sizing: border-box;
	vertical-align: top;

	padding : 0 30px 0 20px;
	overflow: hidden;
	transition: all .3s ;
}
.logo{

}
.user{
	flex: none;
	position: relative;
	z-index: 0;
	margin-bottom: 40px;
	height: 280px;
	padding: 26px 0 26px 0px;
	box-sizing: content-box;
}
.info{
	display: flex;
	flex-direction: column;
	height: 100%;
}
.user .option-wrap{ }
.user .option-wrap .option{ 

	font-size: 12px;
	font-weight: 500;
  
	line-height: 1;
	color: var(--dark-500);
	display: inline-flex;
	align-items: center;
}
.user .option-wrap i{ font-size: 16px;}

.user .name{
	font-size: 36px;
	font-weight: 800;
	line-height: 1.3;
	letter-spacing: 1.08px;
	color: var(--dark-600); /* var(--primary-600);  #696969 */
}
.user .main{
	margin-bottom: auto;
}
.user .extra-info{
	display: flex;
	flex-direction: column;
	font-size: 14px;
  line-height: 1.5;
  margin-top: 8px;


}
.user .extra-info .item{  display: flex;  gap: 8px }
.user .extra-info span.item::before{
	content: '';
	display: inline-block;
	width: 4px; height: 4px;
	border-radius: 100em;
	background-color: var(--dark-200);
	margin-top: calc( (.5em * 1.5) - 2px);
}
.user  .btn-wrap{ }
.btn-wrap .btn{
	font-size: 14px;
	color: var(--dark-500);
	
}
.btn-wrap { margin-top: 40px; margin-bottom: 2em; }



.ctrl-modal{ display: none }
@media (min-width: 1024px) and ( max-width: 1440px ){
	.ctrl-modal{
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		z-index: 2;

		-moz-appearance: none;
		appearance: none;
		
		background-color: transparent;
		border: 0;
	}
	.ctrl-modal i{
		background-color: rgb(255, 255, 255);
		border-radius: 100em;
		width: 2.5em;
		position: absolute;
		bottom: 1em;
		left: 50%;
		transform: translateX(-50%);
		transition: all .3s;
	}
	.ctrl-modal:hover i{
		background-color: var(--primary-500);
	}
}


/* 사용자 정보 */
.user-image-wrap {
	position: absolute;
	/* width: 100%;
	height: 100%; */
	width: 189px;
	height: 209px;
	z-index: 0;
	right: -10px;
	bottom: 16px;
	transform: scale(1);
	overflow: visible; 

}

.user-image-wrap .img{
	position: absolute; /* 부모 요소를 기준으로 위치 설정 */

	display: block; /* 이미지 아래 여백 제거 */
	width: 100%;
	height: 100%;
	
	object-fit: cover;
	clip-path: url(#userImageClip);
	left: -2px;
}

.user-image-wrap .img[src*="-no-user"]{ clip-path: none; transform: scale(0.3); }

.user-image-wrap > svg {
	position: absolute; /* 부모 요소를 기준으로 위치 설정 */
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	max-height: 209px;
	/* 필요하다면 SVG를 보이게 하거나 z-index를 조정 */
	/* pointer-events: none; /* SVG가 마우스 이벤트를 가로채지 않도록 설정 */
}
.user-image-wrap .bg{ z-index: -1;  }
.user-image-wrap .bg use{ fill :hsl(48 91.30% 49.40%)  /* hsl(171 100.00% 35.70%)  */   }

.user-image-wrap .bg22{  z-index: -2; rotate: 0deg; opacity: 1; transition: all .7s;  }
.user-image-wrap .bg22 use{ 
	fill : hsl(48 91.30% 49.40%); 
	transition: all 1s; 
	-moz-transition: all 1s;
}

.user:hover .user-image-wrap .bg22{ rotate: -50deg;  opacity: 1;  }
.user:hover .user-image-wrap .bg22 use{ 
	fill: hsl(171 100.00% 35.70%); 
	transition: all .7s;  
	-moz-transition: all .7s;
}


@media(max-width: 1440px){
	.wrap{ /* max-width: 64px; */ }
	.logo { /* height: 64px; */ padding : 30px 0; margin-bottom: auto; }
	.logo img{ margin: auto; max-width: 60%; }
	.user{ height: 100px; margin-bottom: 0;  margin-top: 0em;   }
	.user-image-wrap { transform: scale(.3) translate( 100%, 100%) }
	.user .info{ display: none }

}
@media (max-width: 1024px) {
	.wrap {
		/* position: fixed;
		top: 0px; */
		max-width: 440px;
		/* background-color: var(--body-background-color);
		box-shadow: 2px 0 30px hsl(0 0% 0% / .2);
		transform: translateX(-100%); */
		box-sizing: border-box;
	}
	.logo {height: 64px; padding: 13px 0;  margin-bottom: 0; }
	.logo img{ margin: 0; }
	.user { height: 240px; margin-top: 0em; }

	.user .info { display: flex }

	.user-image-wrap { transform: scale(0.7) translate(13%, 13%); }

}
	
	`;
}