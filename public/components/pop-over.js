
import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';

import { DispatchCustomEvent } from './Utils-event.js';


// CSS 파일 연결
const modalStyles = `


:host {
   display: none; /*  기본적으로 숨김 */
    position: fixed ; /* 뷰포트 기준으로 위치 고정 */
    top: 0 ;
    left: 0 ;
    width: auto ; /* 뷰포트 너비 전체 */
    height: auto ; /* 뷰포트 높이 전체 */
    z-index: 1000 ; /* 다른 콘텐츠보다 위에 오도록 */
    pointer-events: auto ; /* 호스트가 클릭 이벤트를 받도록 허용 */
}

:host(.show){
	display: block;
}

.btn-close{
	position: absolute;
	right: 1em;
	top: 1em;
}

.popover-dialog{
	--ui-heading-color : var(--text-dark-0, #333);
	--ui-popover-border-width : 0;
	--ui-popover-footer-bg : transparent;
	--ui-popover-footer-border-width : 0;

	pointer-events: auto;	
	
	display: flex ;
	justify-content: center;
	align-items: center;
	width: 100%;
  height: 100%;
  max-width: 100%;
}

.size-small{ --popover-width : 300px }
.size-medium{ --popover-width : 420px }
.size-default{ --popover-width : 640px }
.size-large{ --popover-width : 1024px }
.size-extra-large{ --popover-width : 1280px }
.size-full{ --popover-width : 100% }

.size-small .btn-wrap .btn{ min-height: 36px; }

.popover-content{ width: 100%  }


`;

class PopOver extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		 this.attachShadow({ mode: 'open' });

		const sheet = new CSSStyleSheet();
		sheet.replaceSync(modalStyles);
		this.shadowRoot.adoptedStyleSheets = [ commonSheet, sheet ];
		
		const templateHTML = `
		<div class="popover-dialog" part="popover-dialog" role="tooltip">
		
			<button type="button" class="btn-close" part="btn-close" data-action="popover-close" aria-label="툴팁 닫기 버튼"></button>

			<div class="popover-content" part="popover-content">
				<slot name="popover-content"></slot>
			</div>

		</div> `;

		const template = document.createElement('template');
		template.innerHTML = templateHTML;
    	this.shadowRoot.appendChild(template.content.cloneNode(true));

		this.dialog = this.shadowRoot.querySelector('.popover-dialog');
		this.content = this.shadowRoot.querySelector('.popover-content');

    	this.closeButton = this.shadowRoot.querySelector('.btn-close');

		this._bindHandleClickOutside = this._handleClickOutside.bind(this); 
		this._bindHandleKeyDown = this._handleKeyDown.bind(this); 
		this._bindHandleClose = this.close.bind(this); 
		
	}

	// 1. 관찰할 속성(attribute)을 정의합니다.
	static get observedAttributes() {
		return ['open', 'size']; // 'open'이라는 속성을 관찰하겠다.
	}

	connectedCallback() { console.log("connectedCallback called! ///////////// ", this.shadowRoot.host)
		
		this.dialog.addEventListener("click", this._bindHandleClickOutside );
		this.closeButton.addEventListener('click', this._bindHandleClose );
		this._updateModalState(this.hasAttribute('open'));

	}

	disconnectedCallback() {
		this.closeButton.removeEventListener('click', this._bindHandleClose );
		this.dialog.removeEventListener('click', this._bindHandleClickOutside  );

		document.removeEventListener('keydown', this._bindHandleKeyDown);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'open') {
			// 속성이 변경될 때마다 모달의 상태를 업데이트합니다.
			// newValue가 null이 아니면 'open' 속성이 존재한다는 의미입니다.
			const isOpen = newValue !== null;
			this._updateModalState(isOpen);
		}
	}

	// 4. 모달 상태 업데이트 로직을 캡슐화한 내부 메서드
	_updateModalState(isOpen) {
		// 현재 상태와 변경될 상태가 같으면 불필요한 작업 방지
		if (this._isOpen === isOpen) return;

		this._isOpen = isOpen; // 내부 상태 동기화

		if (isOpen) {
			//this.dialog.classList.add('active');
			this._disableScroll();
			this._trapFocus();
			document.addEventListener('keydown', this._bindHandleKeyDown);
			this.setAttribute('aria-hidden', 'false');
			// 모달이 열릴 때 focus를 위한 초기 요소 저장
			this.initialFocusElement = document.activeElement;
		} else {
			//this.dialog.classList.remove('active');
			this._enableScroll();
			this._restoreFocus();
			document.removeEventListener('keydown', this._bindHandleKeyDown);
			this.setAttribute('aria-hidden', 'true');
			
			// this.dispatchEvent(new CustomEvent('modalClosed', { bubbles: true, composed: true }));
			setTimeout(() => {
				//
			}, 400);

			DispatchCustomEvent( this.shadowRoot, 'popover-close', { action : 'popover-close'} )
		}
	}

	// 5. open/close 메서드는 이제 속성을 제어하는 역할로 변경됩니다.
	open() {
		if (!this.hasAttribute('open')) { // 이미 열려있지 않다면
			this.setAttribute('open', ''); // 'open' 속성 추가
			this.classList.add("show");
		}
	}

	close() {  console.log("popover-click ---- close")
		if (this.hasAttribute('open')) { // 이미 닫혀있지 않다면
			this.removeAttribute('open'); // 'open' 속성 제거
			this.classList.remove("show");
			this.remove(); 
		}
	}

	_disableScroll() {
		document.body.style.overflow = 'hidden';
	}

	_enableScroll() {
		document.body.style.overflow = '';
	}

	_handleKeyDown(event) {
		if (event.key === 'Escape') {
			this.close();
		}
		// TODO: Tab 키 포커스 트래핑 로직 추가
	}

	_handleClickOutside(event) {
		// 여기에 로그를 찍어봅니다.
		// console.log("DEBUG: _handleClickOutside called!");
		// console.log("event.target:", event.target);
		// console.log("event.currentTarget:", event.currentTarget);
		// console.log("this.dialog:", this.dialog);

		if (event.target === event.currentTarget) {
			this.close();
		}
		
	}

	_trapFocus() {
		const tag = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
		// Shadow DOM 내부에 직접 존재하는 포커스 가능한 요소들
		const shadowFocusable = this.shadowRoot.querySelectorAll( tag );

		// Light DOM (슬롯 콘텐츠) 내부에 존재하는 포커스 가능한 요소들
		// 컴포넌트 인스턴스 (this)를 기준으로 쿼리합니다.
		const lightFocusable = this.querySelectorAll( tag );

		// 두 리스트를 합칩니다.
		const focusableElements = [ ...lightFocusable, ...shadowFocusable ];

		console.log("modal _trapFocus ---- ", focusableElements, focusableElements[0]);

		if (focusableElements.length > 0) {
			focusableElements[0].focus();
		}
	}

	_restoreFocus() {
		if (this.initialFocusElement && typeof this.initialFocusElement.focus === 'function') {
			this.initialFocusElement.focus();
		}
	}	
}

customElements.define('pop-over', PopOver);

// 마크업 함수 ===========================================


