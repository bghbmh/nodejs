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
import { UploadFiles } from '/assets/js/custom-library/bUploadFile/export-bUploadFile.js';

class ProjectDetail extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

    	this._item = null;
		this._isEditing = false;
		this._isLoading = false;
		this._fileItems = null; // 비동기로 가져올 file 데이터 저장 변수
		
    	 // 이벤트 핸들러 바인딩
		// this._handleClick = this._handleClick.bind(this); // 예: 상세보기/수정 버튼 클릭 처리
		// this._handleSave = this._handleSave.bind(this); // 예: 수정 폼 저장 버튼
		// this._handleCancel = this._handleCancel.bind(this); // 예: 수정 폼 취소 버튼

		// CSS 파일 연결
		const cssLink = document.createElement('link');
		cssLink.setAttribute('rel', 'stylesheet');
		cssLink.setAttribute('href', `/assets/css/myAdmin-reset.css`); // 실제 CSS 파일 경로
		this.shadowRoot.appendChild(cssLink);

		let styles = ['projectDetail' ]		

		styles.forEach( style => {
			const cssLink = document.createElement('link');
			cssLink.setAttribute('rel', 'stylesheet');
			cssLink.setAttribute('href', `/components/styles/${style}.css`); // 실제 CSS 파일 경로
			this.shadowRoot.appendChild(cssLink);
		});

	}

	// item 데이터를 설정하는 getter/setter (외부에서 컴포넌트 생성 후 데이터를 넘길 때 유용)
	set item(itemData) {
		this._item = itemData;
		// 데이터가 설정되면 렌더링 또는 업데이트 함수 호출
		//this._render();
	}
	get item() {
		return this._item;
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
				// 비동기 로딩 로직 시작 (await로 기다립니다)
				this._imageData = await this._loadFilesData(this._item);

				this._fileItems = await Promise.all([
					this.imagesView(this._item.mainimage, 'main'), // 첫 번째 호출 (Promise 반환)
					this.imagesView(this._item.subimage, ''),     // 두 번째 호출 (Promise 반환)
					this.filesView(item.samplePage, 'item')
				]);	

				console.log('[connectedCallback] 이미지 데이터 로딩 완료');
			} catch (error) {
				console.error('[connectedCallback] 이미지 데이터 로딩 오류:', error);
				this._loadError = error;
			} finally {
				// ★ 로딩 완료 상태로 설정 및 최종 렌더링 ★
				this._isLoading = false;
				this._render(); // 실제 데이터 또는 오류 UI를 보여주는 최종 렌더링 호출
			}
	   } else {
			// item 데이터가 아예 없는 경우 (로딩할 것도 없음)
			// this._isLoading = false; // 로딩 아님
			// this._loadError = null; // 오류 아님
			// this._imageData = null; // 데이터 없음
			// this._render(); // 데이터 없음 UI 표시
	   }

		let projectDetail = document.createElement("div");
		projectDetail.setAttribute("class", "project-detail");
		this.shadowRoot.appendChild(projectDetail);
		projectDetail.addEventListener('click', this.uiHandler.bind(this));

		// 데이터가 속성으로 전달된다면 여기서 속성 값을 읽고 렌더링
		// const order = this.getAttribute('data-order'); // 예시: 속성 읽기
		// ... 속성 값을 사용하여 _render 호출

		// 이벤트 리스너 연결 (Shadow DOM 내부 요소에 연결)
		//this.shadowRoot.addEventListener('click', this._handleClick); // 예: 이벤트 위임 활용


	}	

	async _loadImagesData(item) {
		// ... 기존 _loadImagesData 구현 (getFileUrl 호출 및 URL 객체 반환) ...
		// 이 함수는 Promise를 반환합니다. 오류 발생 시 throw 합니다.
		console.log('[_loadImagesData] 로딩 시작');
		try {
			// ... getFileUrl 호출 반복문 ...
			const resolvedUrls = { // 예시 결과 구조
			   mainImage: await this.getFileUrl({ webUrl: item.mainImage?.webUrl }),
			   subImages: await Promise.all(item.subimage?.map(subImg => this.getFileUrl({ webUrl: subImg.webUrl })) || []),
			   // ... 다른 이미지 필드 ...
			};

			this._fileItems = await Promise.all([
				this.imagesView(this._item.mainimage, 'main'), // 첫 번째 호출 (Promise 반환)
				this.imagesView(this._item.subimage, ''),     // 두 번째 호출 (Promise 반환)
				this.filesView(item.samplePage, 'item')
			]);	

			
			console.log('[_loadImagesData] 로딩 완료, URL:', resolvedUrls);
			return resolvedUrls; // 성공 결과 반환
		} catch (error) {
			console.error('[_loadImagesData] 오류 발생:', error);
			throw error; // 오류 다시 던지기
		}
  
	}

	// 컴포넌트가 DOM에서 제거될 때 호출
	disconnectedCallback() {
		// 이벤트 리스너 제거
		this.shadowRoot.removeEventListener('click', this._handleClick);
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
				this._initUploaders();
			} else {
				this._isEditing = false;
				this._render();
			}
		
        }
	}

	// --- 렌더링 및 내부 로직 메서드 ---
	async _render() {
		if (!this._item) {
			// 데이터가 없으면 빈 상태 또는 로딩 상태 표시
			this.shadowRoot.innerHTML += `<div class="project-detail">데이터 없음</div>`;
			return;
		}

		const item = this._item; // 데이터를 item 변수에 할당하여 사용
        let projectDetail = this.shadowRoot.querySelector('.project-detail');

        // 기존에 .project-detail이 없다면 새로 생성
        if (!projectDetail) {
            projectDetail = document.createElement("div");
            projectDetail.setAttribute("class", "project-detail");
            this.shadowRoot.appendChild(projectDetail);
			projectDetail.addEventListener('click', this.uiHandler.bind(this));
        }

		if( this._isLoading ){
			console.log(`_render : isLoading ${this._isLoading} `);
			projectDetail.innerHTML = 'loading'
		} else {
			if (this._isEditing) {
				projectDetail.innerHTML = this.editMarkUp(item);
				projectDetail.addEventListener('submit', this.updateProject.bind(this));
	
			} else {  // 보기 모드		
				
				projectDetail.innerHTML = this.viewMarkUp(item, this._fileItems);
			}
		}
		

		
	}

	async updateProject(e) {
		e.preventDefault();
		e.stopPropagation();
		
		const formData = new FormData();
		e.target.samplename.value ? formData.append('directoryName', e.target.samplename.value ) : '';
		
		formData.append('update', e.target.dataset.order);

		let nowProject =  this.setProjectDataInfo(e.target, formData);
		formData.append('myData', JSON.stringify(nowProject) );
		console.log( "nowProject : ", formData, nowProject )

		//return;

		try{
			const response = await fetch( origin + '/update', { 
				method: 'POST',
				mode: "cors",
				credentials: "same-origin",
				body:  formData//JSON.stringify(jfile) formData   body 부분에 폼데이터 변수를 할당
			});
			
			if (response.ok) {
				

			}
			//const result = await response.json();
		} catch (error){
			console.log("front error - ", error)
		}
	}

	setProjectDataInfo(np, formData){
		let projectData = {
			mainOpen : np.mainOpen.checked,
			mainOpenImages : setfile(np.mainOpenImages, "mainOpenImages") ,//
			category : [...np.maincategory, ...np.subcategory].filter( a => a.checked )
						.map( h => ({name : h.value, type : h.dataset.type, label : h.dataset.label }) ),
			'hash' : [...np.hash].filter( h =>  h.checked ).map( el => el.value ),
			title : np.title.value,
			description : np.description.value,
			'extraInfo': setExtra(np.extra),
			'externalLink': setExtra(np.externalLink),
			"mainimage" : setfile(np.mainimage.zuFile, "mainimage"),
			"subimage" : setfile(np.subimage.zuFile, "subimage"),
			"sampleName" : np.samplename.value,
			"samplePage" : setfile(np.samplePage.zuFile, "page", np.samplePagelabel),
		};
		
		function setfile(ff, label, options){
			if( !ff   ){
				console.log("파일없음", label)
				return [];
			}
			
			let files = [...ff.getSelectedFiles()];
			let arr ;
			let pLabel ;
			arr = files.map(function(f, idx){
				formData.append(label, f);
				if( label === "page" ){
					if( options.length ) pLabel = [...options].find(s => s.dataset.fileName === f.name );
					else pLabel = options;
					
					pLabel.value === '' ? pLabel.value = 'sample' + idx : '';
					return { label : pLabel.value, ...fileDataInfo(f)}
				} else {
					return fileDataInfo(f);
				}
			});
			
			return arr;
		}

		function fileDataInfo(f){
			return { name : f.name, size :  f.size, type: f.type, lastModified : f.lastModified }
		}

		function setExtra(exLinks, box={}){
			if( !exLinks ) return box;
			for( let i=0; i<exLinks.length; i+=2 ){
				if( exLinks[i].value) {
					//console.log("setExternalLink 22 - ",exLinks[i].value )
					box[exLinks[i].value] = exLinks[i+1].value ;
				}
			}
			return box;
		}

		return projectData;
	}


	// 기존 categories 함수 로직을 클래스 메서드로 옮김
	categories(act, category = null, label = '') {

		//if( !category || !category.length ) return;

		if (act === 'view') {
			return category.map(c => `<span data-type="${c.type}">${c.name}</span>`).join(' / ');
		} else if (act === 'edit') {
			let a = category.filter(o => o.label === label);
			return ct[label].map((c, idx) => this.ctMarkup(label, c, idx + 1, a.some(d => d.name === c))).join('');
		} else {
			return ct[label].map((c, idx) => this.ctMarkup(label, c, idx + 1, false)).join('');
		}
	}

	ctMarkup(label, value, num, checked) {
		return `
		<label>
			<input type="radio" name="${label}category" value="${value}" data-label="${label}" data-type="${num}" ${checked ? 'checked' : ''}>${value} 
			<i class="${ct.cIcon[num - 1]}" aria-hidden="true"></i>
		</label>`;
	}

	// 기존 image 함수 로직을 클래스 메서드로 옮김
    // imagesView 함수를 async 함수로 만듭니다.
    async imagesView(images, cName ){ // ★ async 키워드 추가 ★
        console.log("imagesView 함수 시작", images);
        let img = '';
        let noImageUrl = "/assets/img/common/icon-svg-no-image1.svg";
        let cc = 'image ' + cName;

        if (!images || images.length === 0) {
            console.log('imagesView: 이미지 없음');
            return this.itemViewMarkUp( cc + ' no-image', noImageUrl, '등록한 이미지가 없습니다', '등록한 이미지가 없습니다', 0 );
        }

        // ★ for...of 루프를 사용하여 각 비동기 작업의 완료를 기다립니다. ★
        for (const f of images) {
            let url;
            try {
                // ★ await 키워드를 사용하여 getFileUrl의 Promise가 해결될 때까지 기다립니다. ★
                // Promise가 해결되면 실제 URL 문자열이 url 변수에 담깁니다.
                url = await this.getFileUrl(f);
               

            } catch (error) {
                // getFileUrl 호출 중 또는 내부에서 오류 발생 시
                //console.error('imagesView: getFileUrl 오류 for file:', f, ':', error);
                url = noImageUrl; // 오류 발생 시 대체 이미지 URL 사용

				//console.log('imagesView: error, URL:', url);
            }
			
			console.log(' 최종 :', url);

            // ★ await가 완료된 후, 실제 URL 값(url 변수)을 사용하여 마크업을 생성합니다. ★
            img += this.itemViewMarkUp( cc, url, f.name, f.name, f.size );
        }

        console.log("imagesView 함수 완료");
        return img; // 완성된 HTML 문자열 (Promise 형태로 반환됨)
    }

    async getFileUrl(f){
        // f.webUrl이 실제 경로 파라미터를 담고 있다고 가정 (예: 'project1/preview/image.jpg')
        const requestUrl = '/files/' + f.webUrl; // 서버의 전용 라우트 URL 구성

        try {
            const response = await fetch(requestUrl, { method: 'GET' });

            // 응답 상태 확인
            if (!response.ok) {
                console.error(`getFileUrl: HTTP 오류! URL: ${requestUrl}, 상태: ${response.status}`);
                // HTTP 오류 발생 시, 응답 본문을 에러 메시지로 사용하거나 특정 에러 객체 throw
                const errorBody = await response.text(); // 오류 본문 읽기 시도
                throw new Error(`HTTP error! Status: ${response.status}, StatusText: ${response.statusText}, Body: ${errorBody}`);
            }

            // 응답 본문이 파일 데이터이므로, response.url은 요청 성공 시 최종 URL입니다.
            // 이 URL을 그대로 반환하면 됩니다.
            const finalUrl = response.url;
            console.log('getFileUrl: 성공, 최종 URL:', finalUrl);
            return finalUrl;

        } catch (error) {
            //console.error('getFileUrl: Fetch 중 또는 응답 처리 중 오류 발생:', error);
            // 오류를 다시 throw하여 imagesView의 catch 블록에서 처리하도록 합니다.
            throw error;
        }
    }

	async filesView(files, cName ){
		console.log("filesView - ", files )
		let fileBox = '';
		let noImageUrl = "/assets/img/common/icon-svg-double-paper.svg";
		let cc = 'item ' + cName;

		if (!files || files.length === 0) {
            return this.itemViewMarkUp( cc + ' no-item', noImageUrl, '미리보기가 없습니다', '미리보기가 없습니다', 0 );
        }

		// ★ for...of 루프를 사용하여 각 비동기 작업의 완료를 기다립니다. ★
        for (const f of files) {
            let url;
            try {
                url = await this.getFileUrl(f);
            } catch (error) {
                url = noImageUrl;
				console.log('imagesView: error, URL:', url);
            }
			//console.log(' 최종 :', url);
            // ★ await가 완료된 후, 실제 URL 값(url 변수)을 사용하여 마크업을 생성합니다. ★
            fileBox += this.itemViewMarkUp( cc, url, f.name, f.name, f.size );
        }
		return fileBox; // 완성된 HTML 문자열 (Promise 형태로 반환됨)
	}
	
	itemViewMarkUp(c = '', url, name, alt, size = 0){
		//console.log(' itemViewMarkUp :', url);
		return `
			<figure class="${c}">
				<img src="${url}" alt="${alt}">
				<figcaption>
					<span class="option title">${name}</span>
					${ size > 0 ? '<span class="option">' + (size / 1024).toFixed(2) + 'KB</span>' : ''} 
				</figcaption>
			</figure>
		`;
	}

	// 기존 state 함수 로직을 클래스 메서드로 옮김
	state(act, s){

		let stepText = ['진행전','진행중','완료', '모름'];
	
		if( !s ) s = stepText.length-1;
		let wrap = '';
	
		if( act === 'view' ){
			wrap = this.stateMarkup(false, '', s);
		} else {
			wrap = `<div class="state">`
			wrap += stepText.map( (t, idx) => this.stateMarkup(idx === s, t) ).join('');
			wrap += `</div>`
		} 
		return wrap;
	}
	stateMarkup(checked, text='', step = null){
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

	extraInfo(act, data = null) {

		console.log("asdasd - ", data);
		let wrap = '';
		if (act === 'view') {
			wrap = `<div class="extra-info-wrap">`;
			for (let key in data) {
				wrap += `<span class="extra-info-item" aria-label="${key}">${data[key]}</span>`;
			}
			if (Object.keys(data).length === 0) {
				wrap += `<div class="extra-info">추가 정보없음</div>`;
			}
			wrap += `</div>`
		} else {
			for (let key in data) {
				wrap += `<div class="extra-info">
				<label><span class="guide">라벨</span><input type="text" name="extrainfo" value="${key}" placeholder="라벨"></label>
				<label><span class="guide">내용</span><input type="text" name="extrainfo" value="${data[key]}" placeholder="내용"></label>
			</div>`
			}

			let aaa = data ? Object.keys(data).length === 0 : false;

			if (aaa || !data) {
				wrap += `<div class="extra-info">
					<label><span class="guide">라벨</span><input type="text" name="extrainfo" value="" placeholder="라벨"></label>
					<label><span class="guide">내용</span><input type="text" name="extrainfo" value="" placeholder="내용"></label>
				</div>
				<div class="extra-info">
					<label><span class="guide">라벨</span><input type="text" name="extrainfo" value="" placeholder="라벨"></label>
					<label><span class="guide">내용</span><input type="text" name="extrainfo" value="" placeholder="내용"></label>
				</div>`
			}
		}

		return wrap;
	}

	
	searchHash(act, data=null){
		let wrap = '';
		if( act === 'view' ){
			wrap = 'test ----';
		} else if( act === 'edit' ){
			wrap = `
				<div class="hash-wrap">
					${ct.hash.map( v => `<label><input type="checkbox" name="hash" value="${v}" ${data.includes(v) ? 'checked' : ''}>${v}</label>` ).join('')}
				</div>`;
		}else {
			wrap = `
				<div class="hash-wrap">
					${ct.hash.map( v => `<label><input type="checkbox" name="hash" value="${v}">${v}</label>` ).join('')}
				</div>`;
		}
		return wrap;
	}
	
	externalLink(act, links = null){
		let wrap = ''; 
		if( act === 'view' ){
			if( Object.keys(links).length === 0 ) wrap = `<div class="extra-info">링크없음</div>`
			for( let key in links ){
				wrap += `<div class="extra-info"><a target="_blank" href="${key}" >${links[key]}</a></div>`;
			}
		} else {
			
	
			if( !links || Object.keys(links).length === 0 ){ // 임시
				wrap =`<div class="extra-info">
				<label><span class="guide">라벨</span><input type="text" name="externalLink" value="" placeholder="외부 링크 라벨"></label>
				<label><span class="guide">내용</span><input type="text" name="externalLink" value=""  placeholder="외부 링크 url"></label>
				<div class="ctrl"><button type="button" data-action="delete" class="btn">삭제1</button></div></div>
				<div class="extra-info">
				<label><span class="guide">라벨</span><input type="text" name="externalLink" value="" placeholder="외부 링크 라벨"></label>
				<label><span class="guide">내용</span><input type="text" name="externalLink" value=""  placeholder="외부 링크 url"></label>
				<div class="ctrl"><button type="button" data-action="delete" class="btn">삭제1</button></div></div>` ;
			} else {
				wrap = Object.entries(links).map( arr => `<div class="extra-info">
				<label><span class="guide">라벨</span><input type="text" name="externalLink" value="${arr[1]}" placeholder="외부 링크 라벨"></label>
				<label><span class="guide">내용</span><input type="text" name="externalLink" value="${arr[0]}"  placeholder="외부 링크 url"></label>
				<div class="ctrl"><button type="button" data-action="delete" class="btn">삭제1</button></div></div>`).join('');
			}
				 
		} 
		return wrap;
	
	}



	viewMarkUp(item, fileItems){
		return `
		<div class="tCom010">
			<div class="info">
				<dl>
					<dt>현재 상황</dt>
					<dd>
						${this.state('view',item.state)}
					</dd>
				</dl>

				<dl>
					<dt>카테고리</dt>
					<dd>${this.categories('view',item.category)}</dd>
				</dl>
				<dl>
					<dt>기간</dt>
					<dd>2025.1.1 ~ test.11.13</dd>
				</dl>
				
				<dl>
					<dt>참여자</dt>
					<dd>
						<div class="member-wrap">
							<figure class="member circle no-user"><img src="/sample/dashboard02/assets/img/common/icon-svg-no-user.svg" alt="참여자이름"><figcaption><span>참여자이름</span></figcaption></figure>
							<figure class="member circle no-user"><img src="/sample/dashboard02/assets/img/common/icon-svg-no-user.svg" alt="참여자이름"><figcaption><span>참여자이름</span></figcaption></figure>
							<span class="plus-more" class="추가 이미지 개수">
								<i class="icon">+</i>2
							</span>
						</div>
						
					</dd>
				</dl>

				<dl class="flex-none w-100">
					<dt>추가 정보</dt>
					<dd>
						${this.extraInfo('view', item.extraInfo)}
					</dd>
				</dl>

				<dl class="flex-none w-100">
					<dt>미리보기<small>(샘플 파일 담을 폴더 이름)</small></dt>
					<dd>
						<div class="sample-file " >
							${fileItems[2] /* this.filesView(item.samplePage, 'item') */}
						</div>

						<!--item_기본 스타일
						<div class="sample-file " >
							<figure class="item">
								<img src="/sample/dashboard02/assets/img/common/test-sample22.png" alt="이미지">
								<figcaption>
									<span class="option title">첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 직접 선택해주세요. 한글파일_filename.png</span>
									<span class="option">1234kb</span>
								</figcaption>
								<div class="ctrl"><button type="button" class="btn delete-one" aria-label="삭제"></button></div>
							</figure>
						</div>-->
						<!--//item_기본 스타일-->
						
					</dd>
				</dl>

				<dl>
					<dt>외부링크 추가</dt>
					<dd>
						${this.externalLink('view',item.externalLink)}
					</dd>
				</dl>

				<dl class="flex-none w-100">
					<dt>설명</dt>
					<dd class="description">${item.description ? item.description : '입력없음' }</dd>
				</dl>
			</div>
			<div class="image-wrap"> <!--임시 안보이게 style="display:none"  -->
				${fileItems[0]  /* this.imagesView(item.mainimage, 'main' ) */}
				${fileItems[1]  /*this.imagesView(item.subimage, '' ) */}
			</div>
		</div>	
		
		<div class="bottom-btn-wrap">
			<button type="button" class="btn default margin-right-auto" 
				data-action="list" 
				data-page-layout="sub" 
				data-page-name="myAdmin-project-list">목록</button>

			<button type="button" class="btn default" 
				data-action="delete" 
				data-page-layout="sub" 
				data-page-name="myAdmin-project-list">삭제</button>

			<button type="button" class="btn dark" 
				data-action="edit" 
				data-page-layout="sub"
				data-page-name="myAdmin-project-detail">수정</button> 
		</div>`;
	}
	editMarkUp(item){
		return `
		<form class="tCom011" encType="multipart/form-data" data-order="${item.order}">
			<div class="info">
				<dl>
					<dt>제목</dt>
					<dd><label class="width-100per"><input type="text" name="title" value="${item.title}"></label></dd>
				</dl>
				<dl>
					<dt>카테고리</dt>
					<dd>
						<div class="option-wrap category">
							<div class="option">
								<b class="title">업무</b> <!--, 인쇄 등-->
								<div class="item">
									${this.categories('edit', item.category,'main')}
								</div>
							</div>

							<div class="option">
								<b class="title">작업</b> <!--구축, 유지보수 등-->
								<div class="item">
									${this.categories('edit', item.category,'sub')}
								</div>
							</div>
						</div>
						
					</dd>
				</dl>

				<dl>
					<dt>검색 키워드</dt>
					<dd>
						${this.searchHash('edit', item.hash)}
					</dd>
				</dl>

				<dl>
					<dt>참여자</dt>
					<dd>
						<div class="tCom012">
							<button type="button" class="btn dark round">추가</button>
							<div class="list-item-wrap">
								<div class="item">
									<figure class="member no-user ">
										<img src="/sample/dashboard02/assets/img/common/icon-svg-no-user.svg" alt="참여자사진"><figcaption><span>참여자가 없습니다</span></figcaption>
									</figure>
								</div>

								<div class="item">
									<label aria-label="참여자"><input name="member" type="checkbox" checked></label>
									<figure class="member ">
										<img src="" alt="참여자사진"><figcaption><span>참여자이름이 긴 경우</span></figcaption>
									</figure>
								</div>

								<div class="item">
									<label aria-label="참여자"><input name="member" type="checkbox" checked></label>
									<figure class="member">
										<img src="" alt="참여자사진"><figcaption><span>이름이</span></figcaption>
									</figure>
								</div>
							</div>
							
						</div>								
					</dd>
				</dl>

				<dl>
					<dt>추가 정보</dt>
					<dd>
						${this.extraInfo('edit', item.extraInfo)}
					</dd>
				</dl>
				
				<dl>
					<dt>wkrdjqrlrks_기간</dt>
					<dd>
						<div class="calendar-a">
							<label><input type="text" name="calendar-start" value="test value"></label>
							<label><input type="text" name="calendar-end" value="test value"></label>
						</div>
					</dd>
				</dl>
				<dl>
					<dt>현재 상황</dt>
					<dd>
						${this.state('edit',item.state)}
					</dd>
				</dl>
				<dl>
					<dt>미리보기</dt>
					<dd>
						<label class="width-100per margin-bottom-1">
							<input class="" name="samplename" type="text" value="${item.sampleName ? item.sampleName : ''}">
						</label>	
						
						<!--upload type1-->
						<div class=" upload-type1 example11">
							<button type="button" name="samplePage" class="upload-file-btn " title="파일 추가하기" aria-label="파일 추가하기">
								<span class="area">
									미리보기 할 목업 파일을 여기에 끌어다 놓거나,<br>
									파일 선택 버튼으로 직접 선택해주세요.
									<span class="btn primary">파일 선택</span>
								</span>
							</button>
							<div class="upload-file-box " ></div>
						</div>
						<!--//upload type1-->
					</dd>
				</dl>

				<dl>
					<dt>외부링크 추가</dt>
					<dd>
					${this.externalLink('edit',item.externalLink)}
					</dd>
				</dl>
				
				<dl>
					<dt>설명</dt>
					<dd class="description">
						<label class="width-100per"><textarea name="description" rows="6" class="resize-none">바나나 별하 아리아 소록소록 미리내 비나리 노트북 포도 소록소록 아련 노트북 미쁘다 감또개 </textarea></label>
					</dd>
				</dl>
			</div>

			<dl class="image-wrap">
				<dt>메인이미지</dt>
				<dd>
					<!-- upload type2 -->
					<div class="upload-type2 example22"> 
						<button type="button" name="mainimage" class="upload-file-btn " title="이미지 추가하기" aria-label="이미지 추가하기">
							<span class="area" aria-hidden="true">파일 선택</span>
						</button>
						<div class="upload-file-box"></div>
					</div>
					<!--//upload type2 -->
				</dd>
					

				<dt>서브이미지</dt>
				<dd>
					<!--upload type3-->
					<div class=" upload-type3 ">
						<button type="button" name="subimage" class="upload-file-btn " title="이미지 추가하기" aria-label="이미지 추가하기">
							<span class="area" aria-hidden="true">파일 선택</span>
						</button>
						<div class="upload-file-box example32"></div>
					</div>
					<!--//upload type3-->
				</dd>

				<dt>메인노출여부</dt>
				<dd>
					<label class="" title="메인에 보이게 할지말지 선택하는 버튼">
						<span class="">선택하기</span>
						<input type="checkbox" data-ui-action="toggle" name="mainOpen">
					</label>
				</dd>

			</dl>

			<div class="bottom-btn-wrap width-100per">
				<button type="button" class="btn default margin-right-auto" data-action="list" data-page-layout="sub" data-page-name="myAdmin-project-list">목록</button>



				<button type="button" class="btn default " 
					data-action="view" 
					data-page-layout="sub" 
					data-page-name="myAdmin-project-list">취소</button>

				<button type="submit" class="btn primary" data-action="update">저장</button> 
			</div>

		</form>
		`	
	}

	uiHandler(e){
		let clickBtn = e.target.closest("button");
		if( !clickBtn ) return;
	
		switch( clickBtn.dataset.action ){
			case "list":
				console.log(" action - ",clickBtn.dataset.action)
				let h = clickBtn.dataset;
				sessionStorage.removeItem('detailViewItem');
				//window.location.href = `/testAdmin?sub=${h.pageName}&action=${h.action}`;
				window.location.href = `/testAdmin?sub=myAdmin-project-list`;
				break;
			case "view":
				this.setAttribute('mode', 'view');
				break;
			case "edit":
				// 수정 모드 진입
				this.setAttribute('mode', 'edit');
				//this._isEditing = !this._isEditing;
				//this._render(); // 상태 변경 후 다시 렌더링

				break;
			case 'file':

				break;
		}
		console.log('clickElem - ', e.currentTarget.dataset.order);	
	}




	_initUploaders() {
        const projectDetail = this.shadowRoot.querySelector('.project-detail');
        if (!projectDetail) return;

		console.log("img path - ", this._item, this._item.subimagePath)

        // 미리보기 파일 업로드 초기화
        let samplepageBtn = projectDetail.querySelector(".example11 .upload-file-btn");
		samplepageBtn.zuFile = UploadFiles.init({
			loadBtn: projectDetail.querySelector(".example11 .upload-file-btn"),
			fileBox: projectDetail.querySelector(".example11 .upload-file-box"),
			onPreviewMarkUp: (file, objectURL) => { return this.upload1markup(file, objectURL) },
		});

		let mainimageBtn = projectDetail.querySelector(".example22 .upload-file-btn");
		mainimageBtn.zuFile = UploadFiles.init({
			loadBtn: projectDetail.querySelector(".example22 .upload-file-btn"),
			fileBox: projectDetail.querySelector(".example22 .upload-file-box"),
			multiple: false, //기본 true, 선택 사항: 단일 파일의 경우 false로 설정
			onPreviewMarkUp: this.upload2markup
		});

		let subimageBtn = projectDetail.querySelector(".upload-type3 .upload-file-btn");
		subimageBtn.zuFile = UploadFiles.init({
			loadBtn: projectDetail.querySelector(".upload-type3 .upload-file-btn"),
			fileBox: projectDetail.querySelector(".upload-type3 .upload-file-box"),
			onPreviewMarkUp: this.upload2markup,
			onSetFiles: () => { return { url : this._item.subimagePath, files : this._item.subimage } }
		});
	}

	upload1markup(file, objectURL, v=''){

		const image = file.type.startsWith('image/');
		const tempUrl = 'https://bghbmh.github.io/simple-ui-test/UploadFiles/icon-svg-double-paper.svg';

		let fileItemWrap = document.createElement("figure");
		fileItemWrap.setAttribute("class", "item");
		fileItemWrap.innerHTML = `
			<img src="${image ? objectURL : tempUrl}" alt="이미지">
			<figcaption>
				<label><span class="guide">라벨</span><input name="samplePagelabel" data-file-name="${file.name}" type="text" value="${v}" placeholder="라벨을 입력하세요"></label>
				<span class="option title">${file.name}</span>
				<span class="option">${(file.size / 1024).toFixed(2)} KB</span>
			</figcaption>
		`;
		return fileItemWrap;

	}

	upload2markup(file, objectURL){
		const image = file.type.startsWith('image/');
		const tempUrl = 'https://bghbmh.github.io/simple-ui-test/UploadFiles/icon-svg-double-paper.svg';
			
		let fileItemWrap = document.createElement("figure");
		fileItemWrap.setAttribute("class", "item");
		fileItemWrap.innerHTML = `
			<img src="${image ? objectURL : tempUrl}" alt="이미지">
			<figcaption>
				<span class="option title">${file.name}</span>
				<span class="option">${(file.size / 1024).toFixed(2)} KB</span>
			</figcaption>
		`;
		return fileItemWrap;
	}


}

// 2. 커스텀 엘리먼트 정의
// <list-item-type3> 태그와 ListItemType3Element 클래스를 연결
// 태그 이름은 항상 하이픈(-)을 포함해야 합니다.
customElements.define('project-detail', ProjectDetail);

// 이제 이 파일은 <list-item-type3> 웹 컴포넌트를 정의하는 모듈이 됩니다.
// 이 파일을 HTML에서 <script type="module" src="..."> 로 불러오면
// <list-item-type3> 태그를 사용할 수 있게 됩니다.