

let noItem = {
	image : "/assets/img/common/icon-svg-no-image1.svg",
	sample : "/assets/img/common/icon-svg-double-paper.svg"
};

class ListItemType3 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		// 초기 상태 또는 내부 변수 설정
    	this._item = null; // 컴포넌트에 전달될 데이터
		this._isLoading = false;
		this._fileItems = {}; // 비동기로 가져올 file 데이터 저장 변수
		this._body = null;

		this.setCssStyle();

		// this.Html = {
		// 	view : viewMarkUp
		// }
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
		this.setAttribute('mode', 'view'); // loading  초기 모드 설정

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

	static get observedAttributes() {
		return ['mode'];
	}

	// 속성 값이 변경될 때 호출 (observedAttributes에 등록된 속성만 해당)
	attributeChangedCallback(name, oldValue, newValue) {
		console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
		// 속성 변경에 따른 로직 수행 (예: 데이터 업데이트 및 리렌더링)
		// 주의: 속성으로 복잡한 객체나 배열을 전달하기는 어렵습니다.
		if (name === 'mode') {
			if (newValue === 'edit') {
				this._isEditing = true;
				this._render();
				
			} else {
				this._isEditing = false;
				this._render();
			}
		}
	}

	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {
		if (!this._item) {
			// 데이터가 없으면 빈 상태 또는 로딩 상태 표시
			this.shadowRoot.innerHTML = `<div class="list-item-type3">데이터 없음</div>`;
			return;
		}

		const item = this._item; // 데이터를 item 변수에 할당하여 사용

		// 기존 image, categories, state 헬퍼 함수 로직을 메서드로 옮김
		const categoryHtml = this._categories(item.category);
		const imageHtml = this._image([...item.mainimage, ...item.subimage]);
		const stateHtml = this._state('view', item.order);


		// Shadow DOM 내부에 HTML 구조 생성
		this.shadowRoot.innerHTML = `
			<style>
			:host{ }
			</style>
			<div class="list-item-type3" data-order="${item.order}">
				<label aria-label="항목선택" class="cb"><input type="checkbox"></label>

				<div class="info">
					<div class="category">
						${categoryHtml}
					</div>
					<div class="title">
						<div class="text">${item.title}</div>
						<small>2025.1.1 - 2025.2.1</small> </div>
				</div>
				<div class="option-wrap">
					<div class="option">
						<figure class="member">
							<img src="" alt="참여자이름"> <figcaption><span>참여자이름</span></figcaption>
						</figure>
						<span class="plus-more" class="추가 이미지 개수">
							<i class="icon">+</i>2 </span>
					</div>
					<div class="option">
						${imageHtml}
					</div>
				</div>

				<div class="state">
					${stateHtml}
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
			</div>
		`;

		// 렌더링 후 이벤트 리스너 연결
		const listItem = this.shadowRoot.querySelector('.list-item-type3');
		if (listItem) {
			listItem.addEventListener('click', this._itemClickHandler);
		}

		// 상세보기/수정 버튼에 개별 이벤트 리스너 연결이 필요할 수 있습니다.
		// const viewButton = this.shadowRoot.querySelector('.view-btn');
		// viewButton.addEventListener('click', this._handleViewClick.bind(this));
		// ... 유사하게 editButton
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







	// 기존 itemHandler 함수 로직을 클래스 메서드로 옮김
	uiHandler(e) {
		// 이벤트 위임으로 클릭된 요소가 버튼인지 체크해야 할 수 있습니다.
		// e.target 이나 e.currentTarget 을 확인하여 상세/수정 버튼 클릭은 별도로 처리하는게 좋음
		// 현재 코드는 항목 전체 클릭 시 발동하며, 버튼 클릭도 포함됩니다.

		// data-order는 컴포넌트 자체의 dataset에서 읽는 것이 좋습니다.
		const order = this.dataset.order; // <list-item-type3 data-order="..."> 로 설정했다면

		console.log('click order - ', order);

		const detailViewItem = { order: order };
		//sessionStorage.setItem('detailViewItem', JSON.stringify(detailViewItem));

		// 클릭된 요소(e.target)에서 data-action 등을 읽는 로직
		let h = e.target.dataset;
		

		// 이벤트 전파 중지 (옵션)
		// e.stopPropagation();
	}


	// 기존 categories 함수 로직을 클래스 메서드로 옮김
	_categories(category) {
		if (!category || !category.length ) return ''; // 데이터 없으면 빈 문자열 반환

		// ct 데이터 사용
		const iconClass = ct.cIcon[Number(category[0].type) - 1] || '';
		const ddContent = category[1] ? `<dd data-type="${category[1].type}">${category[1].name}</dd>` : `<dd data-type="확인필요">확인필요</dd>`;

		return `
        <i class="${iconClass}" aria-hidden="true"></i>
        <dl class="text">
            <dt data-type="${category[0].type}">${category[0].name}</dt>${ddContent}
        </dl>
    `;
	}

	// 기존 image 함수 로직을 클래스 메서드로 옮김
	_image(images) {
		// images는 배열로 가정
		if (!images || images.length === 0) {
			// 이미지가 없을 경우 대체 콘텐츠 반환
			return `<div class="image-placeholder">이미지 없음</div>`;
		}

		const mainImage = images[0];
		let more = '';

		if (images.length > 1) {
			more = `
				<span class="plus-more" aria-label="업로드된 전체 이미지 개수는 ${images.length}개 입니다">
					<i class="icon">+</i> ${images.length - 1}
				</span>
			`;
		}

		// imgfileurl과 이미지 파일 이름 조합하여 src URL 생성
		const imageUrl = `${imgfileurl}${mainImage.name}`;

		return `
			<figure class="image">
				<img src="${imageUrl}" alt="프로젝트이미지" aria-hidden="true">
				<figcaption><span>프로젝트이미지</span></figcaption>
			</figure>
			${more}
		`;
	}

	// 기존 state 함수 로직을 클래스 메서드로 옮김
	_state(act, temp) {
		// act는 'view'로 고정된 것으로 보이나, 필요하다면 활용
		let st = [`<div class="state-before"><i class="icon-svg-warning-circle-line"></i>진행전</div>`,
			`<div class="state-ongoing"><i class="icon-svg-state-ongoing"></i>진행중</div>`,
			`<div class="state-complete"><i class="icon-svg-check-circle-fill"></i>완료</div>`
		];

		// temp를 사용하여 상태 인덱스 계산
		let stateIndex = temp % 3;
		// 인덱스가 유효한 범위인지 확인 (선택 사항)
		if (stateIndex < 0 || stateIndex >= st.length) {
			stateIndex = 0; // 기본 상태로 폴백
		}

		return st[stateIndex];
	}	

}

// 2. 커스텀 엘리먼트 정의
// <list-item-type3> 태그와 ListItemType3Element 클래스를 연결
// 태그 이름은 항상 하이픈(-)을 포함해야 합니다.
customElements.define('list-item-type3', ListItemType3);

// 이제 이 파일은 <list-item-type3> 웹 컴포넌트를 정의하는 모듈이 됩니다.
// 이 파일을 HTML에서 <script type="module" src="..."> 로 불러오면
// <list-item-type3> 태그를 사용할 수 있게 됩니다.



// 마크업 함수 ===========================================
function state(act, s){
	let stepText = ['진행전','진행중','완료', '모름'];

	if( !s ) s = stepText.length-1;
	let wrap = '';

	if( act === 'view' ){
		wrap = stateMarkup(false, '', s);
	} else {
		wrap = `<div class="state">`
		wrap += stepText.map( (t, idx) => stateMarkup(idx === s, t) ).join('');
		wrap += `</div>`
	} 
	return wrap;
}

function stateMarkup(checked, text='', step = null){
	let tag = [`<div class="state-before"><i class="icon-svg-warning-circle-line"></i>진행전</div>`,
		`<div class="state-ongoing"><i class="icon-svg-state-ongoing"></i>진행중</div>`,
		`<div class="state-complete"><i class="icon-svg-check-circle-fill"></i>완료</div>`,
		`<div class="state-before"><i class="icon-svg-warning-circle-line"></i>모름</div>`
	];
	if( step ){
		return tag[step]
	}
	return `<label><input type="radio" name="state" ${checked ? 'checked' : ''}><span>${text}</span></label>`;
}

function filePreview(c = '', files){
	//console.log(' filePreview :', files, files?.length);
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
	}

	return files.map( f => previewMarkUp(c,f) ).join('');
}

function previewMarkUp(c = '', f ){
	return `<figure class="${c}">
			<img src="${f.webUrl}" alt="${f.alt !== '' ? f.alt : f.name}">
			<figcaption>
				<span class="option title">${f.name}</span>
				${ f.size > 0 ? '<span class="option">' + (f.size / 1024).toFixed(2) + 'KB</span>' : ''} 
			</figcaption>
		</figure>`;
}