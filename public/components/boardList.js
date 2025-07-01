
let noItem = {
	image : "/assets/img/common/icon-svg-no-image1.svg",
	sample : "/assets/img/common/icon-svg-double-paper.svg",
	user : "/assets/img/common/test-user2.png"
};

class BoardList extends HTMLElement {

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

customElements.define('board-list', BoardList);

// 마크업 함수 ===========================================


//  마크업
const MarkUp = {
	view : () => {
		return  `
			<!--item-->
			<article class="colg-3 item">

				<!--섹션 헤더-->
				<header class="section-header">
					<div class="title margin-right-2">
						<h3 class="text">초롱<span class="font-number fcPrimary">9</span></h3>
					</div>
					<div class="option-wrap">
						<button type="button" class="btn3 round" aria-label="페이지 이동 버튼"><i class="icon-svg-chevron-right" aria-hidden="true"></i></button>
					</div>
				</header>
				<!--//섹션 헤더-->

				<!--콘텐츠-->
				<div class="content-wrap tCom005">
					
					<!--list-item-->
					<div class="list-item-type2">
						<div class="title">list-item-type2, 화면에 1줄만 나오는 요소입니다</div>
						<i class="icon-text-new">새글</i> <!-- 웬만하면 짧은 단어, 6자 이하로 구성-->
					</div>
					<!--//list-item-->

					<!--list-item-->
					<div class="list-item-type2">
						<div class="title">화면에 1줄만 나오는 요소입니다</div>
						<i class="icon-text-new">새글</i>
					</div>
					<!--//list-item-->

					<!--list-item-->
					<div class="list-item-type2">
						<div class="title">test_list item 소록소록 가온해 여우별 컴퓨터 로운 별빛 바나나 노트북 나비잠 안녕 아련 미쁘다 별빛 우리는</div>
						<i class="icon-text-new">다른글자아이콘</i>
					</div>
					<!--//list-item-->

					<!--list-item-->
					<div class="list-item-type2">
						<div class="title">test_list item</div>
						<i class="icon-text-new">다른글자아이콘</i>
					</div>
					<!--//list-item-->
				</div>
				<!--//콘텐츠-->

			</article>
			<!--//item-->
		`;
	}
	
}
