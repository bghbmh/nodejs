

let noItem = {
	image : "/assets/img/common/icon-svg-no-image1.svg",
	sample : "/assets/img/common/icon-svg-double-paper.svg",
	user : "/assets/img/common/test-user2.png"
};

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
		
		this.Html = {
			view : viewMarkUp
		}

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
		this._render(); // 임시
	}
	
	disconnectedCallback() {	}

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {
		this._body.innerHTML = this.Html.view() ;
	}
}

customElements.define('category-list', CategoryList);

// 마크업 함수 ===========================================


// projectDetail 전체 마크업
function viewMarkUp(){
	return  `
		<button class="item btn">
			<i class="icon-svg2-web" aria-hidden="true"></i>도담도담<span class="font-number fcPrimary">5</span>
		</button>
		`;
}
