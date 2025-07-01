
class LoadingSkeleton extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );

		this.shadowRoot.adoptedStyleSheets = [ sheet]; // 컴포넌트별 스타일과 함께 적용

		this.shadowRoot.innerHTML = `<div>
			<span class="screen-reader">데이를 가져오고 있습니다</span>
		</div>`;
	}

}

customElements.define('loading-skeleton', LoadingSkeleton );



function setCssStyle(){
	// CSS 파일 연결
	return `
:host{
	display: block;
	min-height: 1em;
	min-width: 1em;
	background-color: var(--gray-e, #eee);
	overflow: hidden;

}

.screen-reader{
	display: block;
	width: 0; height: 0;
	overflow: hidden;
	color: transparent;
}

div{ position: relative; width: 100%; min-height: 1em; height: 100%; }
div::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0%; /* 시작 위치 (왼쪽 밖) */
    width: 50%; /* 반짝이는 빛의 너비 */
    height: 100%;
    background: linear-gradient(to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 50%, /* 반짝이는 빛 */
        rgba(255, 255, 255, 0) 100%
    );
	
	transform: translateX(-100%); /* 시작 위치 (왼쪽 밖) */
    animation: shimmer 1.5s infinite linear; /* 애니메이션 적용 */	
}

/* Pulse 애니메이션 정의 */
@keyframes pulse {
    0% {
        background-color: #e0e0e0; /* 시작 색상 */
    }
    50% {
        background-color: #f0f0f0; /* 밝아지는 색상 */
    }
    100% {
        background-color: #e0e0e0; /* 다시 시작 색상 */
    }
}

/* Shimmer 애니메이션 정의 */
@keyframes shimmer {
    0% {
        transform: translateX(-100%); /* 왼쪽 밖에서 시작 */
    }
    100% {
        transform: translateX(200%); /* 오른쪽 밖으로 이동 */
        /* width: 50% 일 때, 200%로 이동하면 전체 영역을 커버함 */
    }
}
`
}
