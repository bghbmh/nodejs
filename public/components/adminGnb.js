

let noItem = {
	image : "/assets/img/common/icon-svg-no-image1.svg",
	sample : "/assets/img/common/icon-svg-double-paper.svg",
	user : "/assets/img/common/test-user2.png"
};

class GlobalNav extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._profile = null;
		this._isEditing = false;
		this._isLoading = false;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = null;
		
		 // 이벤트 핸들러 바인딩
		// this._handleClick = this._handleClick.bind(this); // 예: 상세보기/수정 버튼 클릭 처리
		// this._handleSave = this._handleSave.bind(this); // 예: 수정 폼 저장 버튼
		// this._handleCancel = this._handleCancel.bind(this); // 예: 수정 폼 취소 버튼

		this.setCssStyle();

	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set user(profile) {
		this._profile = profile;
		// 데이터가 설정되면 렌더링 또는 업데이트 함수 호출
		//this._render();
	}
	get user() {
		return this._profile;
	}

	setCssStyle(){
		// CSS 파일 연결
		let styles = [
			`/assets/css/myAdmin-reset.css`,
			'/components/styles/adminHeader.css'
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
		
		this._body = document.createElement("nav");
		this._body.setAttribute("id", "gnb");
		this._body.setAttribute("class", "gnb");
		this._body.addEventListener("click", this.uiHandler.bind(this));
		this.shadowRoot.appendChild(this._body);
		
		this.setAttribute('mode', 'view'); // loading  초기 모드 설정

	}	

	// 컴포넌트가 DOM에서 제거될 때 호출
	disconnectedCallback() {
		// 이벤트 리스너 제거
		this._body.removeEventListener('click', this.uiHandler.bind(this));
	}

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {
		// if (!this._profile) {
		// 	// 데이터가 없으면 빈 상태 또는 로딩 상태 표시
		// 	this._body.innerHTML += `<div class="project-detail">데이터 없음</div>`;
		// 	return;
		// }

		const profile = this._profile; // 데이터를 item 변수에 할당하여 사용

		if( this._isLoading ){
			console.log(`_render : isLoading ${this._isLoading} `);
			this._body.innerHTML = 'loading'
		} else {
			//this._body.dataset.registNum = this._profile.registNum;
			this._body.innerHTML = MarkUp.view(profile) ;
		}
	}

	async _setFilesData(item) {
		this._fileItems.image = await this.getFileUrl('user', [this._profile.image]) ; 
	}

	async getFileUrl(kind, files){ // kind : 이미지 iamge, 문서 file, page 종류
		let reFiles = [];
		for (const f of files ) {
			try {
				f.webUrl = await this.checkFile(f)
				reFiles.push( f );
			} catch (error) { // 대체 이미지 URL
				// noItem = { image : "url-파일 없음에 사용할 이미지" , file / page ... : 'url'}
				f.webUrl = noItem[kind] ;// noImageUrl 
				reFiles.push( f );
			}
		}
		return reFiles;
	}

	async checkFile(f){
		const requestUrl = '/images/' + f.webUrl; // 서버의 전용 라우트 URL 구성
		try {
			const response = await fetch(requestUrl, { method: 'GET' });

			if (!response.ok) {
				console.error(`checkFile: HTTP 오류! URL: ${requestUrl}, 상태: ${response.status}`);
				const errorBody = await response.text(); // 오류 본문 읽기 시도
				throw new Error(`HTTP error! Status: ${response.status}, StatusText: ${response.statusText}, Body: ${errorBody}`);
			}
			const finalUrl = response.url;
			return finalUrl;

		} catch (error) {
			throw error;
		}
	}

	uiHandler(e){
		console.log('clickElem - ', e.currentTarget);	
		console.log('clickElem - ', e.target.closest("button"));	
		
	}
}

customElements.define('global-nav', GlobalNav);


// 마크업 함수 ===========================================


// projectDetail 전체 마크업
const MarkUp = {

	view : (profile) => {
		return  `
		<!--gnb-->
			<div class="gnb-item">
				<a href="/testAdmin" class="active"><i class="icon-svg-home1" aria-hidden="true"></i><span>대시보드</span></a>
			</div>

			<div class="gnb-item">
				<a href="/testAdmin?sub=myAdmin-project-list"><i class="icon-svg2-spark" aria-hidden="true"></i><span>프로젝트</span></a>
			</div>

			<div class="gnb-item">
				<a href="#0"><i class="icon-svg2-calendar2" aria-hidden="true"></i><span>할 일</span></a>
			</div>

			<div class="gnb-item">
				<a href="#0"><i class="icon-svg-user1" aria-hidden="true"></i><span>내 정보</span></a>
			</div>

			<div class="gnb-item">
				<a href="#0"><i class="icon-svg-gear-settings" aria-hidden="true"></i><span>설정</span></a>
			</div>

			<div class="gnb-item">
				<a href="/testAdmin?sub=layout"><i class="icon-svg-gear-settings" aria-hidden="true"></i><span>기본 UI</span></a>
			</div>
		<!--//gnb--> `;
	}
	
}
