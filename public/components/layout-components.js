

import commonSheet from './styles/style-common.js';

import * as DOM from './Utils-dom.js';
import { getFileUrl, CheckFilesInFolder } from './Utils-api.js';
import { DispatchCustomEvent } from './Utils-event.js';


class LayoutComponents extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._body = null;
		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet]; // 컴포넌트별 스타일과 함께 적용

		this._initBody();
		this._bindUiClickHandler = this._uiClickHandler.bind(this); 
		this._body.addEventListener('click', this._bindUiClickHandler);
	}

	_initBody() {
		// 컴포넌트의 기본 HTML 구조 설정
		this._body = DOM.CreateElement({tag:"main", class:"common"});
		this.shadowRoot.appendChild(this._body);
	}	

	// --- 라이프사이클 콜백 ---
	connectedCallback() {// 컴포넌트가 DOM에 추가될 때 호출
		this._render()
	}
	
	disconnectedCallback() { // 컴포넌트가 DOM에서 제거될 때 호출
		this._body.removeEventListener('click', this._bindUiClickHandler );
	}

	// --- 데이터 처리 ---
	async _loadInitData(items) {

		this._item = items[1]; // 임시

        if (!this._item) {
            this.setAttribute('mode', 'empty');
            return;
        }

        this.setAttribute('mode', 'loading');

		try {
			await this._setFilesData(this._item);
			this.setAttribute('mode', 'view'); // 데이터 로드 완료 후 'view' 모드로 변경
		} catch (error) {
			console.error('[InitialLoad] 데이터 로딩 오류:', error);
			this.setAttribute('mode', 'error');
		}
    }

	async _setFilesData(item) { 
		this._fileItems.mainimage = await getFileUrl('image', [...item.mainimage]) ; 
		this._fileItems.subimage = await getFileUrl('image', [...item.subimage]) ;
		this._fileItems.samplePage = await getFileUrl('sample', [...item.samplePage]) ;
		
		//console.log("_setFilesData - ", this._fileItems )
	}


	// --- 렌더링 및 내부 로직 메서드 ---
	_render() {

		if (!this._body) return;

		this._body.innerHTML = MarkUp.view();

	}

	_uiClickHandler(e){
		console.log('clickElem - ', e.target.closest("button"));	

		const button = e.target.closest("button");
		if (!button || button.type ==="submit" ) return;

		const action = button.dataset.action;
		if (!action) return;
	}

}

customElements.define('layout-components', LayoutComponents);

// 마크업 함수 ===========================================
const MarkUp = {
	loading : () => {
		return 'loading'
	},
	view : () => {
		return  `



	<!--page-header 페이지 정보-->
	<div class="page-header">
		<!--버튼 클릭시 <aside id="gnb" ~> 태그에 expanded 클래스가 토글돼야함 -->
		<button type="button" class="btn ctrl-gnb" aria-label="모바일 메뉴 전체 펼쳐보기 버튼"><i class="icon-svg-menu fs-18px" aria-hidden="true"></i></button>
		<!-- <nav class="breadcrumb" aria-label="breadcrumb">
			<ol>
				<li class="breadcrumb-item"><i class="bi bi-house-door-fill padding-right-1" aria-hidden="true"></i> 홈</li>
				<li class="breadcrumb-item">2d</li>
				<li class="breadcrumb-item current">현재페이지_3d</li>
			</ol>
		</nav> -->

		<!--//페이지 제목-->
		<h2 class="page-title">페이지 제목</h2>
		<!--//페이지 제목-->

		<div class="button-wrap">
			<button type="button" class="btn add" data-ui-action="add-priject"><i class="icon-svg2-folder-plus"></i>옵션 버튼</button>
		</div>
	</div>
	<!--//page-header 페이지 정보-->

	<!--common container-->
	<div id="container" class="common ">

		<!--CONTENT-->

		<!--섹션-->
		<section class="section ">

			<!--섹션 헤더-->
			<header class="section-header">
				<div class="title">
					<h3 class="text">제목_ class="section " </h3>
				</div>
				<div class="btn-wrap">
					<a href="#0" class="btn dark">버튼 class="btn dark"</a>
					<label class="">
						<select>
							<option selected>test-select</option>
							<option>test select</option>
						</select>
					</label>
				</div>
			</header>
			<!--//섹션 헤더-->

			내용

		</section>
		<!--//섹션-->

		<!--섹션-->
		<section class="section type2">

			<!--섹션 헤더-->
			<header class="section-header">
				<div class="title">
					<h3 class="text">제목_ class="section type2" </h3>
				</div>
				<div class="btn-wrap">
					<a href="#0" class="btn dark">버튼 class="btn dark"</a>
					<button type="button" class="btn primary">primary 버튼</button>
				</div>
			</header>
			<!--//섹션 헤더-->

			여백 및 배경 색상 추가

		</section>
		<!--//섹션-->


		<!--버튼-->
		<section class="section type2">

			<!--섹션 헤더-->
			<header class="section-header">
				<div class="title">
					<h3 class="text">버튼 </h3>
				</div>
				<div class="option-wrap">
					<div class="project-count">
						<strong class="font-bebas-neue">99</strong>개
					</div>
					
				</div>
			</header>
			<!--//섹션 헤더-->

			
			<u>버튼 타입1</u>
			<div class="d-flex flex-wrap gap-4 align-items-start margin-bottom-3">
				
				<button type="button" class="btn"><i class="bi bi-chat-dots-fill"></i>버튼 class="btn"</button>
				<button type="button" class="btn default">버튼 class="btn default"</button>

				<a href="#0" class="btn primary"><i class="bi bi-chat-dots-fill"></i>버튼 class="btn primary"</a>

				<button type="button" class="btn secondary">버튼 class="btn secondary"</button>

				<a href="#0" class="btn dark">버튼 class="btn dark"</a>

				<a href="#0" class="btn dark round">둥근 버튼 class="btn dark"</a>
			</div>

			<div class="d-flex flex-wrap gap-4 align-items-start margin-bottom-5">
				<button type="button" class="btn" disabled>button - disabled 버튼</button>

				<button type="button" class="btn disabled" >button - disabled 버튼</button>

				<a href="#0" class="btn disabled" >a 태그 - disabled 버튼</a>
			</div>


			<u>버튼 타입2_오른쪽에 꺽쇠 모양이 기본으로 들어감</u>
			<div class="d-flex flex-wrap  gap-4 align-items-start margin-bottom-3">
			
				<button type="button" class="btn2"><i class="bi bi-chat-dots-fill"></i>버튼 class="btn2"</button>
				<button type="button" class="btn2 default">버튼 class="btn2 default"</button>

				<a href="#0" class="btn2 primary"><i class="bi bi-chat-dots-fill"></i>버튼 class="btn2 primary"</a>

				<button type="button" class="btn2 secondary">버튼 class="btn2 secondary"</button>

				<a href="#0" class="btn2 dark round">버튼 class="btn2 dark"</a>
			</div>
			<div class="d-flex flex-wrap  gap-4 align-items-start margin-bottom-5">
				<button type="button" class="btn2" disabled>button - disabled 버튼</button>

				<button type="button" class="btn2 disabled" >button - disabled 버튼</button>

				<a href="#00" class="btn2 disabled" >a 태그 - disabled 버튼</a>
			</div>

			<!--bottom-btn-wrap 영역 하단에 들어가는 버튼 모음, 기본 버튼 크기보다 약간 크기 들어감-->
			<u>btn-wrap 버튼 여러 개 있을 때 묶음</u>
			<div class="btn-wrap">
				<button type="button" class="btn">버튼_글자만있음</button>
				<button type="button" class="btn default">버튼 default</button>
				<button type="button" class="btn primary round">버튼 primary</button>
			</div>
			<!--//bottom-btn-wrap-->

			<br><br>

			<!--bottom-btn-wrap 영역 하단에 들어가는 버튼 모음, 기본 버튼 크기보다 약간 크기 들어감-->
			<u>bottom-btn-wrap 기본 버튼 크기보다 약간 크기 들어감, 모바일에서 버튼이 2개만 있고, primary 버튼이 있으면 primary 버튼 길이만 늘어남</u>
			<!--bottom-btn-wrap-->
			<div class="bottom-btn-wrap">
				<button type="button" class="btn">버튼_글자만있음</button>
				<button type="button" class="btn default">버튼 default</button>
				<button type="button" class="btn primary">버튼 primary</button>
			</div>
			<!--//bottom-btn-wrap-->


			<!--bottom-btn-wrap-->
			<div class="bottom-btn-wrap">
				<button type="button" class="btn default">버튼default</button>
				<button type="button" class="btn dark">버튼 dark</button>
			</div>
			<!--//bottom-btn-wrap-->

			<!--bottom-btn-wrap-->
			<div class="bottom-btn-wrap">
				<button type="button" class="btn default">버튼</button>
				<button type="button" class="btn primary">버튼 primary</button>
			</div>
			<!--//bottom-btn-wrap-->

		</section>
		<!--//버튼-->


		<div class="mockup"  style="max-width: 283px; margin-top: 3em;">
			<u class="d-inline-block padding-bottom-2">GNB</u>
		
			<!--gnb-->
			<nav id="gnb" class="gnb">
				<div class="gnb-item">
					<a href="/dashboard02?sub=layout" class="active"><i class="icon-svg-home1" aria-hidden="true"></i><span>메뉴_ class="active"</span></a>
				</div>

				<div class="gnb-item">
					<a href="/dashboard02?sub=project-list"><i class="icon-svg2-spark" aria-hidden="true"></i><span>메뉴_기본</span></a>
				</div>

			</nav>
			<!--//gnb-->

		</div>

		<div class="mockup a margin-top-3">
			<u class="d-inline-block padding-bottom-2">멤버</u><br><br>
		
			<!--member-->
			<figure class="member "> <!-- bcTeal -->
				<img src="/sample/dashboard02/assets/img/common/test-user.png">
				<figcaption class="d-none">참여자 이름 등등</figcaption>
			</figure>
			<!--//member-->

			<!--member-->
			<figure class="member circle"> <!-- bcTeal -->
				<img src="/sample/dashboard02/assets/img/common/icon-svg-user1.svg">
				<figcaption class="d-none">참여자 이름 등등</figcaption>
			</figure>
			<!--//member-->

			<!--member-->
			<figure class="member none"> <!-- bcTeal -->
				<img src="/sample/dashboard02/assets/img/common/icon-svg-no-user.svg">
				<figcaption class="d-none">참여자 없음</figcaption>
			</figure>
			<!--//member-->

			<br><br>

			<div class="option member-wrap">
				<figure class="member">
					<img src="" alt="참여자이름">
					<figcaption><span>참여자이름</span></figcaption>
				</figure>
				<figure class="member">
					<img src="" alt="참여자 없음">
					<figcaption><span>참여자 없음</span></figcaption>
				</figure>
				<span class="plus-more" class="추가 이미지 개수">
					<i class="icon">+</i>2
				</span>
			</div>

		

			<br><br><br>
			<!--member-wrap-->
			<div class="member-wrap">
				<figure class="member circle bcYellow"> <!-- bcTeal -->
					<img src="/sample/dashboard02/assets/img/common/test-user.png">
					<figcaption class="d-none">참여자 이름 등등</figcaption>
				</figure>
				<figure class="member circle bcTeal">
					<img src="/sample/dashboard02/assets/img/common/test-user.png">
					<figcaption class="d-none">참여자 이름 등등</figcaption>
				</figure>
			</div>
			<!--//member-wrap-->

		</div>


		<br><br><br>
		<div class="tCom002">

			<div class="items-wrap">
				<button class="item btn">
					<i class="icon-svg2-web" aria-hidden="true"></i>도담도담<span class="font-number fcPrimary">5</span>
				</button>
			</div>

		</div>


		<div class="mockup b" style="max-width: 283px; margin-top: 3em;">
			card-type1<br>
			<!--card-type1-->
			<div class="card-type1">
				<div class="card-contents">
					<div class="badge-wrap">
						<span class="badge">test1</span>
						<span class="badge">test2</span>
					</div>

					<div class="title text-truncate">
						소록소록 감또개 소솜 그루잠 나비잠 이플 함초롱하다 아련 바람꽃 바람꽃 나래 도서
					</div>
					<small>2025.4.17 - 2025.4.18</small>
				</div>
				
				<img src="/sample/dashboard02/assets/img/common/test-img1.png" alt="이미지" class="bg" aria-hidden="true">
			</div>
			<!--//card-type1-->
		</div>

		<div class="mockup" style="max-width: 400px;">
			<br><br>card-type2<br>
			<!--card-type2-->
			<div class="card-type2">
				<div class="image-wrap">
					<img src="/sample/dashboard02/assets/img/common/icon-svg-no-image1.svg" alt="image">
				</div>
				<div class="card-contents">
					<div class="title">
						함초롱하다 감사합니다 도서관 가온해 노트북 도담도담 함초롱하다 감사합니다
					</div>
					<div class="tCom006">
						<figure class="member bcTeal">
							<img src="/sample/dashboard02/assets/img/common/test-user.png">
							<figcaption class="d-none">참여자 이름 등등</figcaption>
						</figure>
						<figure class="member bcYellow">
							<img src="/sample/dashboard02/assets/img/common/test-user.png">
							<figcaption class="d-none">참여자 이름 등등</figcaption>
						</figure>
					</div>
					<div class="btn-wrap">
						<button type="button" class="btn2">프로젝트</button>
					</div>
			
				</div>
			</div>
			<!--//card-type2-->
		</div>

		<div class="mockup b" style="max-width: 400px;">
			<br><br>list-item-type1<br>
			<!--list-item-type1-->
			<div class="list-item-type1">
				<i class="icon-svg2-web" aria-hidden="true"></i>
				<div class="title">test_list item</div>
			</div>
			<!--//list-item-type1-->


			<br><br>list-item-type2<br>
			<!--list-item-->
			<div class="list-item-type2">
				<div class="title">list-item-type2, 화면에 1줄만 나오는 요소입니다</div>
				<i class="icon-text-new">새글</i> <!-- 웬만하면 짧은 단어, 6자 이하로 구성-->
			</div>
			<!--//list-item-->
		</div>



		<div class="mockup b" style="margin-top: 2em;">
			<br><br>list-item-type3<br>
			<!--list-item-type3-->
			<div class="list-item-type3">
				<label aria-label="항목선택" class="cb"><input type="checkbox"></label>

				<div class="info">
					<div class="category">
						<i class="icon-svg2-web" aria-hidden="true"></i>
						<dl class="text">
							<dt>이름</dt><dd>분류</dd>
						</dl>
					</div>
					<div class="title">
						<div class="text">그루잠 소록소록 곰다시 나비잠 그루잠 소록소록 곰다시 나비잠 그루잠 소록소록 곰다시 나비잠 그루잠 소록소록 곰다시 나비잠 그루잠 소록소록 곰다시 나비잠 그루잠 소록소록 곰다시 나비잠 그루잠 소록소록 곰다시 나비잠 그루잠 소록소록 곰다시 나비잠</div>
						<small>2025.1.1 - 2025.2.1</small>
					</div>
				</div>
				<div class="option-wrap">
					<div class="option member-wrap">
						<figure class="member">
							<img src="" alt="참여자이름">
							<figcaption><span>참여자이름</span></figcaption>
						</figure>
						<figure class="member">
							<img src="" alt="참여자 없음">
							<figcaption><span>참여자 없음</span></figcaption>
						</figure>
						<span class="plus-more" class="추가 이미지 개수">
							<i class="icon">+</i>2
						</span>
					</div>
					<div class="option">
						<figure class="image">
							<img src="" alt="프로젝트이미지">
							<figcaption><span>이미지이름</span></figcaption>
						</figure>
						<span class="plus-more" class="추가 이미지 개수">
							<i class="icon">+</i>2
						</span>
					</div>
				</div>

				<div class="state">
					<div class="state-before">
						<i class="icon-svg-"></i>진행전
					</div>
				</div>

				<div class="btn-wrap">
					<a href="/dashboard02?sub=project-list-item&current=view" class="btn default round">상세보기<i class="icon-svg-"></i></a>
					<a href="/dashboard02?sub=project-list-item&current=edit" class="btn default round">수정<i class="icon-svg-"></i></a>
				</div>
			</div>
			<!--//list-item-type3-->
		</div>
			






			
		<div class="mockup">
			<!--심플 차트-->
			<link rel="stylesheet" type="text/css" href="sample/libraryTest/simpleBarChart/simple-bar-chart.css" />
			<div id="chartContainer" class="testBarChart simple-bar-chart ">

				<!-- JS로 막대들이 여기 추가됩니다.
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
					-->

			</div>
			<!--//심플 차트-->
		</div>


		상태<br>
		<div class="state-wrap">
			<div class="state-before">
				<i class="icon-svg-warning-circle-line"></i>진행전
			</div>
			<div class="state-ongoing">
				<i class="icon-svg-state-ongoing"></i>진행중
			</div>
			<div class="state-complete">
				<i class="icon-svg-check-circle-fill"></i>완료
			</div>
		</div>

		<br><br>

		<br><br><br><u>upload-type2_파일업로드 스타일2</u><br>
		<!-- upload type2 -->
		<div class="upload-type2"> 
			<button type="button" data-action="add" data-label="mainimage" data-markup="imagepreview" class="upload-file-btn" title="이미지 추가하기" aria-label="이미지 추가하기">
				<span class="area" aria-hidden="true"><i class="icon-svg-" aria-hidden="true"></i></span>
				추가
			</button>
			<div class="upload-file-box">
				<!--item-->
				<figure class="item">
					<!-- https://design6.hullaro.com/resource/files/0/template/202407/CTnHoiDHoulujICArSfbFlIvwwbqhHZR  -->
					<img src="/sample/dashboard02/assets/img/common/test-sample22.png" alt="이미지">
					<figcaption>
						<span class="title">filename.png</span>
						<span>1234kb</span>
						<div class="ctrl">
							<button type="button" data-action="delete" class="btn" aria-label="이미지 삭제하기">삭제
							</button>
							<button type="button" data-action="delete" class="btn" aria-label="다른 이미지로 변경하기">변경</button>
						</div>	
					</figcaption>
					<input type="file" name="uploadimages">
				</figure>
				<!--//item-->
			</div>
		</div>
		<!--//upload type2 -->

		<br><br><br><u>upload-type3_파일업로드 스타일3</u><br>
		<!-- upload type3 -->
		<div class=" upload-type3 ">
			<button type="button" data-action="add" data-name="uploadimage" data-markup="uploadpreview" class="upload-file-btn example31" title="이미지 추가하기" aria-label="이미지 추가하기">
				<span class="area" aria-hidden="true">추가</span>
			</button>
			<div class="upload-file-box example32" data-label="uploadimages">
	
				<!--item
				<figure class="item">
					<img src="/sample/dashboard02/assets/img/common/test-sample22.png" alt="이미지">
					<figcaption>
						<span class="title">filename.png</span>
						<span>1234kb</span>
						<div class="ctrl">
							<button type="button" data-action="delete" class="btn" title="이미지 삭제하기" aria-label="이미지 삭제하기">
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" aria-hidden="true"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
							</button>
						</div>	
					</figcaption>
					<input type="file" name="uploadimages">
				</figure>-->
				<!--//item-->

				<!--item
				<figure class="item">
					<img src="/sample/dashboard02/assets/img/common/test-sample22.png" alt="이미지">
					<figcaption>
						<span class="title">filename.png</span>
						<span>1234kb</span>
						<div class="ctrl">
							<button type="button" data-action="delete" class="btn" title="이미지 삭제하기" aria-label="이미지 삭제하기">
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" aria-hidden="true"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
							</button>
						</div>	
					</figcaption>
					<input type="file" name="uploadimages">
				</figure>-->
				<!--//item-->

				<!--item
				<figure class="item">
					<img src="/sample/dashboard02/assets/img/common/test-sample22.png" alt="이미지">
					<figcaption>
						<span class="title">filename.png</span>
						<span>1234kb</span>
						<div class="ctrl">
							<button type="button" data-action="delete" class="btn" title="이미지 삭제하기" aria-label="이미지 삭제하기">
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" aria-hidden="true"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
							</button>
						</div>	
					</figcaption>
					<input type="file" name="uploadimages">
				</figure>-->
				<!--//item-->
	
			</div>
		</div>
		<!--//upload type3-->

		<script>
			console.log("test layout");
			//alert("test layout 1111111")
		</script>


		<br><br>

		주요 카테고리 아이콘<br>기본 여백 있음 <br>
		<div class="d-flex gap-2">
			<div class="d-inline-flex flex-direction-column gap-2">
				<i class="icon-svg2-web" aria-hidden="true"></i>도담도담
			</div>
			<div class="d-inline-flex flex-direction-column gap-2">
				<i class="icon-svg2-print" aria-hidden="true"></i>가온해
			</div>
			<div class="d-inline-flex flex-direction-column gap-2">
				<i class="icon-svg2-branding" aria-hidden="true"></i>도서
			</div>
			<div class="d-inline-flex flex-direction-column gap-2">
				<i class="icon-svg2-contents" aria-hidden="true"></i>함초롱하다
			</div>
			<div class="d-inline-flex flex-direction-column gap-2">
				<i class="icon-svg2-me" aria-hidden="true"></i>초롱초롱
			</div>
		</div>
		
	
		



		<br><br>
		탭메뉴
		<!--tab-menu-->
		<div class="tab">
			<a href="#tab1" class="btn tab-menu active">
				<i class="icon-svg2-folder-plus" aria-hidden="true"></i>모두<em class="font-number">99</em>
			</a>
			<a href="#tab2" class="btn tab-menu">
				<i class="icon-svg2-web" aria-hidden="true"></i>도담도담<em class="font-number">99</em>
			</a>
			<a href="#tab3" class="btn tab-menu">
				<i class="icon-svg2-print" aria-hidden="true"></i>가온해<em class="font-number">99</em>
			</a>
		</div>
		<!--//tab-menu-->


		<br><br>
		


		<div style="height: 600px;">

			json 및 폼 태그 추가할 항목 : 작업 기간, 작업 결과물이 서브페이지 목록에 보이게 표시할 건지 선택, 프로젝트 참여자
			사용자 정보 입력 창[
				이름, 별명, 이름대신 별명을 화면에 보이게 할건지 선택(기본은 안보이게 ), 생년월일, 사용자 사진,
				전화번호, 직장번호, 직장, 소속, 직급
			]
		</div>







		<!--//CONTENT-->
	</div>
	<!--//common container-->




		`
	}
}

function setCssStyle(){
	// CSS 파일 연결
	return `


:host {
      }
.section{ /* background-color: #fff; */ }
.section + .section{ margin-top: 30px;}
.section-header{ display: flex; gap: 8px; padding: 1em 0 16px; }
.section-header .title{ margin-right: auto }
.section-header .title .text{ font-size: 24px; font-weight: 700; color: var(--font-color-default); margin-bottom: 0; }
@media(max-width: 1280px){
	.section-header .title .text { font-size: 20px; }
}

.tCom001{ 
	display: grid;
	gap: var(--gap, 0);
	grid-template-columns: repeat(12, 1fr);
	gap: 30px 24px ;
}
.tCom001 .item:not(:has(.btn-add)){
	background-color: var(--section-background-color);
	padding: 30px 46px;
	border-radius: 16px;
	min-height: 264px;
}

.tCom001 .AnimatedFE{ 
	font-size: 18px;
	width: 2em;
	height: 2em;
}

.tCom001 .item .section-header{ align-items: center; padding-top: 0; }
.tCom001 .item .title .text{  }
.tCom001 .item .project-count{ 
	font-size: 16px; 
	font-weight: 800; 	
	color: var(--font-color-default);
}
.tCom001 .item .project-count strong{ 
	display: inline-block;
	font-size: 3.25em;
	line-height: 0;
	vertical-align: bottom;
}

.tCom001 .item .btn.btn-add{
	font-size: 16px;
	width: 100%;
	height: 100%;
	white-space: nowrap;
	border: 1px dashed var(--dark-300);
	background-color: var(--body-background-color);
	border-radius: var(--border-radius-default);
	color: var(--dark-700);

	flex-direction: column;
	
	justify-content: center;

}
.tCom001 .item .btn-add i{ font-size: 24px; }
@media(max-width: 1280px){
	.tCom001 .item:not(:has(.btn-add)) { padding: 24px 24px; min-height: 200px; }
	.tCom001 .item .simple-bar-chart { height: 130px ;  }
	.tCom001 .item .card-type2 .title { font-size: 16px; }
}
@media(max-width: 1024px){
	.tCom001 .item { grid-column: span 6; }
	.tCom001 .item:has(.btn-add){ display: none; }
}
@media(max-width: 768px){
	.tCom001 .item { grid-column: span 12; }
}

`
}
