


class CategoryList extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._data = null;
		this._isEditing = false;
		this._isLoading = false;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = document.createElement("div");
		this._body.setAttribute("class", "wrap");

		this.setCssStyle();
	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set data(data) {
		this._data = data;
		// 데이터가 설정되면 렌더링 또는 업데이트 함수 호출
		//this._render();
	}
	get data() {
		return this._data;
	}

	setCssStyle(){
		// CSS 파일 연결
		let styles = [
			`/assets/css/myAdmin-reset.css`,
			'/components/styles/pageHeader.css'
		]		

		styles.forEach( href => {
			let cssLink = document.createElement('link');
			cssLink.setAttribute('rel', 'stylesheet');
			cssLink.setAttribute('href', href ); // 실제 CSS 파일 경로
			this.shadowRoot.appendChild(cssLink);
		});
	}

	// 컴포넌트가 DOM에 추가될 때 호출
	async connectedCallback() {
		this.shadowRoot.appendChild(this._body);
		this._render(); // 임시
	}
	
	disconnectedCallback() {// 컴포넌트가 DOM에서 제거될 때 호출
		this._body.removeEventListener('click', this.uiHandler.bind(this));
	}

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {
		this._body.innerHTML = MarkUp.view() ;
	}

	uiHandler(e){
		console.log('clickElem - ', e.currentTarget.dataset.registNum);	
		console.log('clickElem - ', e.target.closest("button"));	

		let clickBtn = e.target.closest("button");
		if( !clickBtn ) return;
	}

}

customElements.define('category-list', CategoryList);

// 마크업 함수 ===========================================


// projectDetail 전체 마크업
const MarkUp = {
	view: () => {
		return  `
		<!--섹션
		<section class="section tCom002">-->
			<!--섹션 헤더-->
			<header class="section-header">
				<div class="title margin-right-2">
					<h3 class="text">프로젝트 <span class="font-number fcPrimary">9</span></h3>
				</div>
				<div class="btn-wrap">
					<button type="button" class="btn3 round" aria-label="페이지 이동 버튼"><i class="icon-svg-chevron-right" aria-hidden="true"></i></button>
					
				</div>
			</header>
			<!--//섹션 헤더-->

			<!--콘텐츠-->
			<div class="content-wrap">

				<div class="items-wrap">
					<button class="item btn">
						<i class="icon-svg2-web" aria-hidden="true"></i>도담도담<span class="font-number fcPrimary">5</span>
					</button>

					<button class="item btn">
						<i class="icon-svg2-print" aria-hidden="true"></i>가온해<span class="font-number fcPrimary">5</span>
					</button>

					<button class="item btn">
						<i class="icon-svg2-branding" aria-hidden="true"></i>도서<span class="font-number fcPrimary">5</span>
					</button>

					<button class="item btn">
						<i class="icon-svg2-contents" aria-hidden="true"></i>함초롱하다<span class="font-number fcPrimary">5</span>
					</button>

					<button class="item btn">
						<i class="icon-svg2-me" aria-hidden="true"></i>초롱초롱<span class="font-number fcPrimary">5</span>
					</button>
				</div>

			</div>
			<!--//콘텐츠-->

		<!--</section>
		//섹션-->
		`;
	}
	
}
