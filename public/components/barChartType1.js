

import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { MAIN_CATEGORY } from './config.js';
import { DispatchCustomEvent } from './Utils-event.js';
import { getFileUrl,CheckFilesInFolder } from './Utils-api.js';

class BarChartType1 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = null;

		this.shadowRoot.adoptedStyleSheets = [commonSheet, this.componentSheet]; // 컴포넌트별 스타일과 함께 적용
		this.loadStylesSheets([
            '../assets/js/custom-library/chart/simpleBarChart/simple-bar-chart.css'
		]);

		this._initBody();
		//this._bindUiClickHandler = this._uiClickHandler.bind(this); 
	}

	get componentSheet() {
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		return sheet;
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

	_initBody() { // 컴포넌트의 기본 HTML 구조 설정
		this._body = DOM.CreateElement({tag:"div", id : "chartContainer", class:"testBarChart simple-bar-chart"});
		this.shadowRoot.appendChild(this._body);
	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set data(data) {
		this._data = data;
		this._loadInitData();
	}
	get data() {
		return this._data;
	}

	static get observedAttributes() {
		return ['mode'];
	}

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출

	}
	
	disconnectedCallback() { // 컴포넌트가 DOM에서 제거될 때 호출
		this._body.removeEventListener('click', this._bindUiClickHandler );
	}

	// 속성 값이 변경될 때 호출 (observedAttributes에 등록된 속성만 해당)
	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'mode' && oldValue !== newValue) this._render(); 
	}

	// --- 데이터 처리 ---
	async _loadInitData() {
		if (!this._data) {
			this.setAttribute('mode', 'empty');
			return;
		}

		this.setAttribute('mode', 'loading');

		try {
			//await this._setChart(this._data);
			this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
		} catch (error) {
			console.error('[InitialLoad] 데이터 로딩 오류:', error);
			this.setAttribute('mode', 'error');
		}
	}

	async _setChart( zzz /* data */ ){

		// 1. 데이터 준비
		const labels = [...MAIN_CATEGORY];
		
		labels.forEach( (label, idx) =>  label.total = zzz.filter(z => z.category[0].name === label.name ).length  )
		
		// 2. 컨테이너 및 설정
		const chartContainer = this._body;
		// CSS에서 설정된 컨테이너 높이를 가져와 최대 막대 높이 계산

		setBody(this._body, zzz.length, labels);

		// 7. IntersectionObserver 설정
		const options = {
			root: null, // 뷰포트를 기준으로 관찰
			rootMargin: '0px', // 기본 마진 없음
			threshold: 0.3 // 타겟 요소의 10%가 보이면 콜백 실행
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				// 이 entry의 타겟 요소 (chartContainer) 안에 있는 모든 .bar-svg 요소를 찾습니다.
				const svgsToAnimate = entry.target.querySelectorAll('.simple-bar-svg');

				if (entry.isIntersecting) {
					// 타겟 요소가 뷰포트에 진입함
					svgsToAnimate.forEach(svg => {
						const finalHeight = svg.dataset.finalHeight;
						// requestAnimationFrame을 사용하여 높이 변경 예약 (애니메이션 시작)
						requestAnimationFrame(() => {
							svg.setAttribute("height", finalHeight);
						});
					});
					// 관찰 중지 코드를 제거하여 계속 관찰합니다.
				} else {
					// 타겟 요소가 뷰포트에서 벗어남
					svgsToAnimate.forEach(svg => {
						// 높이를 0으로 리셋 (다음 진입 시 애니메이션 준비)
						requestAnimationFrame(() => { // 리셋도 부드럽게 보이도록 rAF 사용
							svg.setAttribute("height", 0);
						});
					});
				}
			});
		}, options);

		// 8. chartContainer를 관찰 시작
		observer.observe(chartContainer);

	}


	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {
		if (!this._body) return;
		this._body.removeEventListener('click', this._bindUiClickHandler );

		const mode = this.getAttribute('mode');
		switch (mode) {
			case 'view':
				this._body.innerHTML = ''; //MarkUp.view(this._data);
				this._setChart(this._data);

				break;
			case 'empty':
				console.log("차트 mode", mode)
				this._body.innerHTML = MarkUp.empth();
				break;
		}

		// 렌더링 후 새롭게 이벤트 리스너 연결
		this._body.addEventListener('click', this._bindUiClickHandler);
	}

	uiHandler(e){
		console.log('clickElem - ', e.currentTarget.dataset.registNum);	
		console.log('clickElem - ', e.target.closest("button"));	

		let clickBtn = e.target.closest("button");
		if( !clickBtn ) return;
	
	}

}

customElements.define('bar-chart-type1', BarChartType1);

// 마크업 함수 ===========================================


const MarkUp = {
	empth : () => {
		return `
			<div class="no-item">No data available.</div>
		`;
	},
	view : (item) => {
		return  `
			<!-- JS로 막대들이 여기 추가됩니다. -->
			<div class="simple-bar-wrapper">
				<div class="value-label">30</div>
				<svg class="simple-bar-svg" width="50" height="40.5" data-final-height="40.5" viewBox="0 0 50 40.5" preserveAspectRatio="none">
					<defs>
						<clipPath id="clipPath-0">
							<path d="M 8 0 L 42 0 A 8 8 0 0 1 50 8 L 50 40.5 L 0 40.5 L 0 8 A 8 8 0 0 1 8 0 Z"></path>
						</clipPath>
					</defs>
					<rect class="simple-bar-rect" x="0" y="0" width="100%" height="100%" clip-path="url(#clipPath-0)"></rect>
				</svg>
				<div class="simple-bar-label">데이터 A</div>
			</div>

			<div class="simple-bar-wrapper">
				<div class="value-label">30</div>
				<svg class="simple-bar-svg" width="50" height="40.5" data-final-height="40.5" viewBox="0 0 50 40.5" preserveAspectRatio="none">
					<defs>
						<clipPath id="clipPath-0">
							<path d="M 8 0 L 42 0 A 8 8 0 0 1 50 8 L 50 40.5 L 0 40.5 L 0 8 A 8 8 0 0 1 8 0 Z"></path>
						</clipPath>
					</defs>
					<rect class="simple-bar-rect" x="0" y="0" width="100%" height="100%" clip-path="url(#clipPath-0)"></rect>
				</svg>
				<div class="simple-bar-label">데이터 A</div>
			</div>

			<div class="simple-bar-wrapper">
				<div class="value-label">30</div>
				<svg class="simple-bar-svg" width="50" height="40.5" data-final-height="40.5" viewBox="0 0 50 40.5" preserveAspectRatio="none">
					<defs>
						<clipPath id="clipPath-0">
							<path d="M 8 0 L 42 0 A 8 8 0 0 1 50 8 L 50 40.5 L 0 40.5 L 0 8 A 8 8 0 0 1 8 0 Z"></path>
						</clipPath>
					</defs>
					<rect class="simple-bar-rect" x="0" y="0" width="100%" height="100%" clip-path="url(#clipPath-0)"></rect>
				</svg>
				<div class="simple-bar-label">데이터 A</div>
			</div>

			<div class="simple-bar-wrapper">
				<div class="value-label">30</div>
				<svg class="simple-bar-svg" width="50" height="40.5" data-final-height="40.5" viewBox="0 0 50 40.5" preserveAspectRatio="none">
					<defs>
						<clipPath id="clipPath-0">
							<path d="M 8 0 L 42 0 A 8 8 0 0 1 50 8 L 50 40.5 L 0 40.5 L 0 8 A 8 8 0 0 1 8 0 Z"></path>
						</clipPath>
					</defs>
					<rect class="simple-bar-rect" x="0" y="0" width="100%" height="100%" clip-path="url(#clipPath-0)"></rect>
				</svg>
				<div class="simple-bar-label">데이터 A</div>
			</div>

			<div class="simple-bar-wrapper">
				<div class="value-label">30</div>
				<svg class="simple-bar-svg" width="50" height="40.5" data-final-height="40.5" viewBox="0 0 50 40.5" preserveAspectRatio="none">
					<defs>
						<clipPath id="clipPath-0">
							<path d="M 8 0 L 42 0 A 8 8 0 0 1 50 8 L 50 40.5 L 0 40.5 L 0 8 A 8 8 0 0 1 8 0 Z"></path>
						</clipPath>
					</defs>
					<rect class="simple-bar-rect" x="0" y="0" width="100%" height="100%" clip-path="url(#clipPath-0)"></rect>
				</svg>
				<div class="simple-bar-label">데이터 A</div>
			</div>
			`;
	}

}

function setCssStyle(){
	// CSS 파일 연결
	return `

.simple-bar-chart:has(.no-item){ border-bottom: 0; }
.simple-bar-chart .no-item{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height : 100%;
	border-radius : 6px;
	background-color: #f1f1f1;
	

}
`
}

function setBody(chartContainer, itemsAll, labels){

	const containerHeight = 150;//parseFloat(getComputedStyle(chartContainer).height);
	const maxBarHeight = containerHeight - 30; // 기준선 위로 막대가 올라갈 최대 높이

	// 3. 총합 계산
	//const total = data.reduce((sum, value) => sum + value, 0);

	// 4. 그래프 요소 설정
	const barWidth = 50;
	const barCornerRadius = 8; // 상단 모서리 둥글기 반지름

	// 상단 모서리만 둥근 사각형의 경로 데이터를 생성하는 헬퍼 함수 (위와 동일)
	function getRoundedTopRectPath(width, height, radius) {
		// ... (경로 데이터 생성 로직 동일) ...
		const r = Math.min(radius, width / 2, height / 2);
		const pathData = `M ${r} 0 L ${width - r} 0 A ${r} ${r} 0 0 1 ${width} ${r} L ${width} ${height} L 0 ${height} L 0 ${r} A ${r} ${r} 0 0 1 ${r} 0 Z`;
		return pathData.trim();
	}


	labels.forEach((label, index) => {
		const proportion = label.total / itemsAll;
		
		const finalBarHeight = proportion * maxBarHeight;

		const barWrapper = document.createElement('div');
		barWrapper.classList.add('simple-bar-wrapper');

		const valueLabel = document.createElement('div');
		valueLabel.classList.add('simple-value-label');
		// 값 라벨은 항상 최종 값 표시
		valueLabel.textContent = `${ parseInt(proportion * 100)}%`;
		barWrapper.appendChild(valueLabel);

		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.classList.add('simple-bar-svg');
		svg.setAttribute("width", barWidth);
		
		svg.setAttribute("height", 0);// 초기 높이 0으로 설정				
		svg.dataset.finalHeight = finalBarHeight;// 최종 높이 값을 data 속성으로 저장				
		svg.setAttribute("viewBox", `0 0 ${barWidth} ${finalBarHeight}`);// viewBox는 최종 크기 한 번만 설정
		svg.setAttribute("preserveAspectRatio", "none"); // 가로세로 비율 유지 안함 

		// *** svg 안에 defs와 clipPath 정의 ***
		const svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
		svg.appendChild(svgDefs);

		const clipPathId = `clipPath-${index}`; // 각 막대마다 고유 ID
		const clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
		clipPath.setAttribute("id", clipPathId);
		svgDefs.appendChild(clipPath);

		// clipPath로 사용할 모양 정의: 상단 모서리만 둥근 사각형 path
		// 이 path의 크기는 viewBox와 동일해야 합니다.
		const clipShapePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
		const clipPathData = getRoundedTopRectPath(barWidth, finalBarHeight, barCornerRadius);
		clipShapePath.setAttribute("d", clipPathData);
		clipPath.appendChild(clipShapePath);

		const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		rect.classList.add('simple-bar-rect');
		rect.setAttribute("x", 0);
		rect.setAttribute("y", 0);
		rect.setAttribute("width", "100%");
		rect.setAttribute("height", "100%");
		rect.setAttribute("clip-path", `url(#${clipPathId})`); // rect에 clip-path 속성 적용

		svg.appendChild(rect);
		barWrapper.appendChild(svg);

		const categoryLabel = document.createElement('div');
		categoryLabel.classList.add('simple-bar-label');
		categoryLabel.textContent = label.name;
		barWrapper.appendChild(categoryLabel);

		chartContainer.appendChild(barWrapper);
	});
}
