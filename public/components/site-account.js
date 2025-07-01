

import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { getFileUrl, CheckFilesInFolder } from './Utils-api.js';
import { DispatchCustomEvent } from './Utils-event.js';

import './section-header.js';
import { UploadFiles } from '/assets/js/custom-library/bUploadFile/export-bUploadFile.js';

import './modal-popup.js';

// CSS 파일 연결
const setCssStyle = `


:host {
      }

.section-header{ display: flex; gap: 8px; padding: 1em 0 16px; }
.section-header .title{ margin-right: auto }
.section-header .title .text{ font-size: 24px; font-weight: 700; color: var(--font-color-default); margin-bottom: 0; }

.section.type2{
	padding: 1em 2.5em 1.5em;
	border-radius: var(--border-radius-default);
	background-color: var(--section-background-color);
}
.section.type2 .section-header{ }
@media(max-width: 1280px){
	.section-header .title .text { font-size: 20px; }
}
@media(max-width: 768px){
	.section.type2 { padding: 1em 1.3em; }
	.section.type2 .section-header{ padding-top: 0em }
	.section + .section{ margin-top: 15px;}
}




.tCom013{
	display: flex;
  flex-wrap: wrap;
	align-items: flex-start;
	gap: 8px 3em;
}
.tCom013 .image-wrap{ width: 160px; height: 160px; flex: none; }
.tCom013 .member{
	width: 100%;
	height: 100%;
	background-color: var(--dark-50);
}
.tCom013 .member.no-user{ background-color: var(--gray-f9);  }
.tCom013 .member.no-user img{ transform: scale(.3); }

.tCom013 .info{ 
	flex: 1;
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
	font-size: 1em;
}
.tCom013 .info > dl { flex: 1 0 40%; min-width: 240px; }
.tCom013 .info dt{ font-size: 1em; font-weight: 400; padding-bottom: .7em; }
.tCom013 .info dd{ 
	padding: 1em; 
	background-color: var(--gray-f9); 
	color: var(--font-color-default); 
	border-radius: var(--border-radius-8px);
	font-size: 1em;
}


.tCom014{
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 8px 3em;
}
.tCom014 .image-wrap{  flex: 1 2; min-width: 200px  }

.tCom014 .upload-type2{ /* width: auto; height: auto; */ max-width: 160px;  }
.tCom014 .upload-type2 .upload-file-box .item{ background-color: transparent; }
.tCom014 .upload-type2 .upload-file-box img{  
	/* width: 160px; 
	height: 160px; 
	
	border-radius: 100em;
	border : 1px solid var(--dark-200);
	*/
}
.tCom014 .upload-type2 figcaption{ top: 0; right: 0; }
.tCom014 .upload-type2 figcaption span{ display: none; }
.tCom014 .upload-type2 .ctrl .btn{
	background-color: #009e97;
	border-radius: 100em;
	width: 2.5em;
	height: 2.5em;

}
.tCom014 .info{ 
	flex: 1;
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
	font-size: 1em;
}
.tCom014 .info > dl { flex: 1 0 40%; min-width: 240px; }
.tCom014 .info dt{ font-size: 1em; font-weight: 400; padding-bottom: .7em; }



.no-info{ flex: 1;
	display: flex;
	gap: 8px;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--dark-50);
	border: 1px dotted var(--dark-100);
	border-radius : var(--border-radius-default) ;
	color: var(--text-dark-3);
	min-height : 10em;
}
.no-info:before{
	content: "";
	background-image: url("https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20in%20Clouds.png");
	display: block;
	width: 3em;
	height: 3em;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;

}


.modal .items-wrap{
	display:flex: gap: 4px;
}
.modal .items-wrap .item{ display:flex: gap: 4px; flex-wrap: wrap }
.modal .items-wrap .item .title{ 
flex: none;
display: inline-block; min-width: 7em }
.modal .items-wrap .item + .item{ margin-top: 8px }



`;


class SiteAccount extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = null;

		// 생성자 내에서 한 번만 생성하여 재사용
        const sheet = new CSSStyleSheet();
    	sheet.replaceSync( setCssStyle );
		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet];

		this._bindUiClickHandler = this._uiClickHandler.bind(this); 

		this._initBody();
		

		this.temp = null;
	}

	_initBody() {  // 컴포넌트의 기본 HTML 구조 설정
		this._body = this.shadowRoot;
		
	}	

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
		this._loadInitData();
		this._body.addEventListener('click', this._bindUiClickHandler);
		//this.setAttribute('mode', 'loading');
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
	async _loadInitData(data = null) {

        if (!this._data) {
            this.setAttribute('mode', 'empty');
            return;
        }

       this.setAttribute('mode', 'loading');

		try {
			//await this._setFilesData(this._data);
			this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
		} catch (error) {
			console.error('[InitialLoad] 데이터 로딩 오류:', error);
			this.setAttribute('mode', 'error');
		}
    }

	async _setFilesData(item) { //console.log("_setFilesData - ", this._fileItems )
		this._fileItems.image = await getFileUrl('member', [item.image]) ;		
	}


	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {

		const mode = this.getAttribute('mode');
		
		switch (mode) {
			case 'empty':
				this._body.innerHTML = MarkUp.empty();
				break;
			case 'loading':
				this._body.innerHTML = MarkUp.loading();
				break;
			case 'view':
				this._body.innerHTML = MarkUp.view(this._data, this._fileItems);
				break;

		}

	}

	_uiClickHandler(e){
		
		console.log('clickElem - ', e.target.closest("button"));	

		const button = e.target.closest("button");
		if (!button || button.type ==="submit" ) return;

		const action = button.dataset.action;
		if (!action) return;

		e.preventDefault();

		if( action === 'modal-open'){
			let modal = DOM.CreateElement({
				tag: 'modal-popup',
				id: "modal1",
				class: "modal",
				tabindex: "-1",
				role: "dialog",
				size: 'small'
			});

			console.log("modal-open : id - ", modal)

			modal.innerHTML = MarkUp.modal1();
			document.body.appendChild(modal);
			modal.open();

			modal.addEventListener('modal-close', e => {
				console.log('modal.addEventListener ======= ', e.detail);
			});
		}


	}

}

customElements.define('site-account', SiteAccount);

// 마크업 함수 ===========================================


const MarkUp = {
	loading : () => {
		return 'loading'
	},
	empty : ( ) => {
		console.log("empty" )
		return `
		<section class="section type2">

			<!--섹션 헤더-->
			<header class="section-header padding-bottom-0">
				<div class="title">
					<h3 class="text margin-bottom-0">계정</h3>
				</div>
			</header>
			<!--//섹션 헤더-->

			<hr class="solid margin-top-0">

			<!--콘텐츠-->
			<div class="content-wrap">

				<div class="tCom013">

					<div class="info no-info">정보가 없습니다</div>

				</div>

			</div>
			<!--//콘텐츠-->	

		</section>
		`
	},
	view : (member, files) => {
		console.log("_render", member, files)
		return `
		<section class="section type2">

			<!--섹션 헤더-->
			<header class="section-header ">
				<div class="title">
					<h3 class="text margin-bottom-0">계정</h3>
				</div>
			</header>
			<!--//섹션 헤더-->

			<hr class="solid margin-top-0">

			<!--콘텐츠-->
			<div class="content-wrap">

				<div class="tCom013">

					<div class="info">
						<dl>
							<dt>아이디</dt>
							<dd>${member.id}</dd>
						</dl>
						<dl>
							<dt class="d-flex align-items-center">
								비밀번호
								<button class="btn2 margin-left-auto" type="button" data-action="modal-open" id="modal1">비밀번호 변경</button>
							</dt>
							<dd >
								${member.pw}
							</dd>
						</dl>
					</div>

					<!-- button type="button">기본 모달 열기</button>
					<button type="button" data-action="modal-open" id="modal2">경고 모달 열기</button>
					<button type="button" data-action="modal-open" id="modal3">긴 내용 모달 열기</button -->

				</div>

			</div>
			<!--//콘텐츠-->	

		</section>
		`
	},
	modal : () => {
		return `

		 <!-- <div class="modal" id="testid" data-modal-id="asd123" tabindex="-1" role="dialog">show 클래스가 있으면 화면에 보임 -->
			<div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable size-extra-large"> <!-- 사이즈 클래스 추가 -->
				<!--
				사이즈
				.size-small ---  300px
				.size-medium   ---  420px
				.size-default   ---  640px
				.size-large   ---  1024px
				.size-extra-large   ---  1280px
				.size-full   ---  100% , 화면에 가득참
				-->

				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">모달 test</h5>

						<button type="button" class="btn-close" data-action="modal-close" data-bs-dismiss="modal" aria-label="팝업 닫기 버튼"></button> <!-- 버튼 클릭 시 show 클래스 토글 -->
					</div>
					<div class="modal-body">
						<div class="items-wrap">
							<label class="item">
								<span class="title">새 비밀번호</span>
								<input type="password" value="">
							</label>
							<label class="item">
								<span class="title">새 비밀번호 확인</span>
								<input type="password" value="">
							</label>

						</div>

						<div class="btn-wrap d-flex gap-2 margin-top-3">
							<button type="button" class="btn default">취소</button>
							<button type="button" class="btn primary">수정</button>
						</div>
						
					</div>
				</div>
			</div>
		<!-- </div> -->

				
		`
	},
	modal1 : () => {
		return `
		<div slot="modal-header">
			<h5 class="modal-title">비밀번호 변경</h2>
		</div>
		

		<div class="tCom555">

			<label class="item">
				<span class="title">새 비밀번호</span>
				<input type="password" value="">
			</label>
			<label class="item">
				<span class="title">새 비밀번호 확인</span>
				<input type="password" value="">
			</label>

		</div>

		<div class="btn-wrap d-flex gap-2 justify-content-right margin-top-3">
			<button type="button" class="btn default">취소</button>
			<button type="button" class="btn primary">저장</button>
		</div>
		
		<footer class="modal-footer">modal : footer_tag</footer>

		`
	}

}


