let ct = {
	main : ["웹", "인쇄", "콘텐츠", "브랜딩", "UI"],
	sub :  ["제작", "구축","리뉴얼" ,"유지보수", "sample" ],
	hash : ["디자인",
		"마크업",
		"모바일",
		"데스크탑",
		"반응형",
		"마케팅",
		"웹",
		"콘텐츠",
		"인쇄",
		"브랜딩",
		"ui-test"
	],
	cIcon : ['icon-svg2-web', 'icon-svg2-print', 'icon-svg2-contents', 'icon-svg2-branding', 'icon-svg2-me']
};
import * as helper from './helper.js';

let noItem = {
	image : "/assets/img/common/icon-svg-no-image1.svg",
	sample : "/assets/img/common/icon-svg-double-paper.svg"
};

class ListItem extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		// 초기 상태 또는 내부 변수 설정
		this.setCssStyle();
    	this._item = null; // 컴포넌트에 전달될 데이터
		this._isLoading = false;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = helper.CreateElement({tag:"div", class:"list-item-type3"});
		this.shadowRoot.appendChild(this._body);
		

		this.Html = {
			view : viewMarkUp
		}
	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set item(itemData) {
		this._item = itemData;
	}
	get item() {
		return this._item;
	}

	setCssStyle(){
		// CSS 파일 연결
		let styles = [
			`/assets/css/myAdmin-reset.css`,
			'/components/styles/ListItemType3.css'
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

		if (!this._item) {
			// 데이터가 없으면 빈 상태 또는 로딩 상태 표시
			this._body.innerHTML = `<div class="list-item-type3">데이터 없음</div>`;
			return;
		}

		// ★ 로딩 시작 상태 설정 및 초기 렌더링 ★
		// item 데이터가 있을 때만 로딩을 시작합니다.
		if (this._item) { // 이 item 프로퍼티는 보통 appendChild 이전에 설정됩니다.
			this._isLoading = true; // ★ 이곳에 두는 것이 일반적입니다. ★
			//this._loadError = null;
			this._render(); // 로딩 UI를 보여주는 첫 렌더링 호출

			try {
				await this._setFilesData(this._item);
				console.log('[connectedCallback] 이미지 데이터 로딩 완료');
			} catch (error) {
				console.error('[connectedCallback] 이미지 데이터 로딩 오류:', error);
				this._loadError = error;
			} finally {
				// ★ 로딩 완료 상태로 설정 및 최종 렌더링 ★
				this._isLoading = false;
				this._render(); // 실제 데이터 또는 오류 UI를 보여주는 최종 렌더링 호출
				this._body.addEventListener('click', this.uiHandler.bind(this));
			}
	   } else {
			// item 데이터가 아예 없는 경우 (로딩할 것도 없음)
			// this._isLoading = false; // 로딩 아님
			// this._loadError = null; // 오류 아님
			// this._imageData = null; // 데이터 없음
			// this._render(); // 데이터 없음 UI 표시
	   }
	}	

	// 컴포넌트가 DOM에서 제거될 때 호출
	disconnectedCallback() {
		this._body.removeEventListener('click', this.uiHandler.bind(this));
	}	

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {
		if (!this._item) {
			// 데이터가 없으면 빈 상태 또는 로딩 상태 표시
			this._body.innerHTML = `<div class="list-item-type3">데이터 없음</div>`;
			return;
		}

		const item = this._item; // 데이터를 item 변수에 할당하여 사용

		if( this._isLoading ){
			console.log(`_render : isLoading ${this._isLoading} `);
			this._body.innerHTML = 'loading'
		} else {
			this._body.innerHTML = this.Html.view(item, this._fileItems) ;
			
		}
	}

	async _setFilesData(item) {
		this._fileItems.mainimage = await this.getFileUrl('image', [...this._item.mainimage]) ; 
		this._fileItems.subimage = await this.getFileUrl('image', [...this._item.subimage]) ;
		this._fileItems.samplePage = await this.getFileUrl('sample', [...this._item.samplePage]) ;
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
		const requestUrl = '/files/' + f.webUrl; // 서버의 전용 라우트 URL 구성
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

		let clickBtn = e.target.closest("button");
		if( !clickBtn ) return;

		console.log('list-item - ', clickBtn );
		switch( clickBtn.dataset.action ){
			case "view":
				
				
				break;
			case "edit":
				// 수정 모드 진입
				
				//this._isEditing = !this._isEditing;
				//this._render(); // 상태 변경 후 다시 렌더링
				

				break;
		}
	
		//if (clickBtn.dataset.action) {
			// 외부에 알릴 CustomEvent 생성 및 발생
			const listItemClicked = new CustomEvent('listItemClicked', {
				bubbles: true,      // 버블링 허용
				composed: true,     // 쉐도우 돔 경계 넘어 버블링 허용
				detail: {          // 이벤트와 함께 보낼 데이터
					action: clickBtn.dataset.action,
					// 기타 필요한 데이터 (예: project ID)
				}
			});
			this.dispatchEvent(listItemClicked); // 호스트 엘리먼트에서 이벤트 발생
		//}
		
	}

}
customElements.define('list-item', ListItem);


// 마크업 함수 ===========================================
function categories(category) {
	//if( !category || !category.length ) return;
	const iconClass = ct.cIcon[Number(category[0].type) - 1] || '';
	return `
		<div class="category">
			<i class="${iconClass}" aria-hidden="true"></i>
			<dl class="text">
				<dt data-type="${category[0].type}">${category[0].name}</dt>
				<dd data-type="${category[1].type}">${category[1].name}</dd>
			</dl>

		</div>`
}

function filePreview(c = '', files){
	//console.log(' filePreview :', files, files?.length);
	let more = 0;
	if (!files || files.length === 0) {

		if( !files ) files = [];
		if(  c === 'item' ) {
			c += ' no-item';
			files.push({
				"name": "미리보기가 없습니다",
				"size": 0,
				"type": "",
				"lastModified": 0,
				"webUrl": noItem.sample,
				"alt" : "미리보기가 없습니다"
			})
		} else if( c === 'image' ) {
			c += ' no-image';
			files.push({
				"name": "등록된 이미지가 없습니다",
				"size": 0,
				"type": "",
				"lastModified": 0,
				"webUrl": noItem.image,
				"alt" : "등록된 이미지가 없습니다"
			})
		}
	} else if ( files.length > 1 ) {
		more = files.length - 1
	}

	return previewMarkUp(c,files[0], more);
}

function previewMarkUp(c = '', f , more = 0){

	return `
		<figure class="image">
			<img src="${f.webUrl}" alt="${f.alt !== '' ? f.alt : f.name}" aria-hidden="true">
			<figcaption>
				<span class="option title">${f.name}</span>
				${ f.size > 0 ? '<span class="option">' + (f.size / 1024).toFixed(2) + 'KB</span>' : ''} 
			</figcaption>
		</figure>
		${ more > 0 ? `<span class="plus-more" aria-label="업로드된 전체 이미지 개수는 ${more}개 입니다"><i class="icon">+</i> ${more}</span>` : ''} `;
}

function viewMarkUp(item, fileItems){
	console.log("markup - ", fileItems)
	return  `
			<label aria-label="항목선택" class="cb"><input type="checkbox"></label>

			<div class="info">
				<div class="category">
					${categories(item.category)}
				</div>
				<div class="title">
					<div class="text">${item.title}</div>
					<small>2025.1.1 - 2025.2.1</small>
				</div>
			</div>

			<div class="option-wrap">
				<div class="option">
					<figure class="member">
						<img src="" alt="참여자이름">
						<figcaption><span>참여자이름</span></figcaption>
					</figure>
					<figure class="member">
						<img src="" alt="참여자 없음">
						<figcaption><span>참여자 없음</span></figcaption>
					</figure>
					<span class="plus-more">
						<i class="icon">+</i>2
					</span>
				</div>
				<div class="option">
					${filePreview('image',[...fileItems.mainimage, ...fileItems.subimage])}
					
				</div>
			</div>

			<div class="state">
				<div class="state-ongoing"><i class="icon-svg-state-ongoing"></i>진행중</div>
			</div>

			<div class="btn-wrap">
				<button type="button" class="btn view-btn"
					data-action="view"
					data-page-layout="sub"
					data-page-name="myAdmin-project-detail">상세보기</button>

				<button type="button" class="btn edit-btn"
					data-action="edit"
					data-page-layout="sub"
					data-page-name="myAdmin-project-detail">수정</button>
			</div>
	`;
}
