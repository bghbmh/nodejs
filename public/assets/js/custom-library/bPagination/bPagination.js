export class zPagination extends EventTarget { // <-- EventTarget 상속 추가
    constructor(pNav, args) {
		super(); // <-- 부모 클래스(EventTarget)의 constructor 호출

		if( !pNav ) {
			this.onMessage('페이지 이동 버튼들 박스 없음')
			return;
		}

		this.body = pNav;
		this.NavButtonsWrap = null;
		this.ctrlPrev = null;
		this.ctrlNext = null;
		this.ctrlLast = null;
		this.ctrlFirst = null;

		
		this.Options = this.setOptions();

		this.initOptions(args);

		this.navButtons = Math.ceil(this.Options.itemsAll / this.Options.itemsInPage); // 아이템 개수에 따른 버튼 전체 개수
		this.currentPage = 0; // 현재 페이지
	
		this.create(); // _ 언더바 넣으면내부에서만 쓰는 용도라는걸 알리는 관례?라고함
		this.renderPagination();

		console.log("constructor okokok");

    }

	// 기본 속성 설정
	setOptions() {
		return {
			itemsAll: 10, // 전체 아이템 수
			itemsInPage: 3, // 한 페이지당 아이템 수
			MaxNavButtons: 3, // 화면에 표시할 페이지 버튼 최대 개수
			onPageChange: null, // 기본은 null, 함수가 들어오면 실행
		};
	}

	// 사용자 정의 초기값 설정
	initOptions = (args) => {
		if (!args) return;
		for (let key in args) this.Options[key] = args[key];
	}

	create = () => {
		
		console.log("zPagination create - ");

		this.NavButtonsWrap = document.createElement("div");
		this.NavButtonsWrap.setAttribute("class", "page-item-wrap");

		this.ctrlPrev = document.createElement("button");
		this.ctrlPrev.setAttribute("type", "button");
		this.ctrlPrev.setAttribute("class", "page-link prev");
		this.ctrlPrev.dataset.href = "prev";

		this.ctrlNext = document.createElement("button");
		this.ctrlNext.setAttribute("type", "button");
		this.ctrlNext.setAttribute("class", "page-link next");
		this.ctrlNext.dataset.href = "next";

		this.ctrlLast = document.createElement("button");
		this.ctrlLast.setAttribute("type", "button");
		this.ctrlLast.setAttribute("class", "page-link last");
		this.ctrlLast.dataset.href = "last";

		this.ctrlFirst = document.createElement("button");
		this.ctrlFirst.setAttribute("type", "button");
		this.ctrlFirst.setAttribute("class", "page-link first");
		this.ctrlFirst.dataset.href = "first";

		if (this.body) {
			this.body.appendChild(this.ctrlFirst);
			this.body.appendChild(this.ctrlPrev);
			this.body.appendChild(this.NavButtonsWrap);
			this.body.appendChild(this.ctrlNext);
			this.body.appendChild(this.ctrlLast);
		}

		this.body.classList.add("zPagination");

		this.attachEvent();
		this.updateControlButtons(); // 초기 컨트롤 버튼 상태 설정

	}

	renderPagination(){ //console.log("renderPagination")

		if( this.currentPage === 0 ) this._goToPage(1);

        //console.log("zPagination _renderPagination 메소드 실행. 현재 페이지 블록 렌더링:", this.currentPage);
        if (!this.NavButtonsWrap) {
             console.error("_renderPagination: NavButtonsWrap이 초기화되지 않았습니다.");
             return;
        }

        this.NavButtonsWrap.innerHTML = ``; // 이전 버튼들 모두 제거하여 초기화

        // 현재 페이지 블록에 맞춰 보여줄 버튼 범위 계산
        const startButtonIndex = Math.floor((this.currentPage - 1) / this.Options.MaxNavButtons) * this.Options.MaxNavButtons;
        const endButtonIndex = Math.min(startButtonIndex + this.Options.MaxNavButtons, this.navButtons); // 전체 페이지 수 넘지 않도록 제한

        for (let i = startButtonIndex; i < endButtonIndex; i++) {
            const pageNumber = i + 1;

			const currentClass = (pageNumber === this.currentPage) ? 'current' : '';

			const btn = document.createElement("button");
			btn.setAttribute("type", "button");
			btn.setAttribute("class", `page-link ${currentClass}`);
			btn.dataset.href = pageNumber;
			btn.textContent = pageNumber;
            this.NavButtonsWrap.appendChild(btn);           
        }
        this.updateControlButtons(); // render 호출될 때마다 컨트롤 버튼 상태 업데이트
    }

	attachEvent = () => {
		this.body.addEventListener("click", (e) => { // 화살표 함수로 this를 인스턴스로 유지
			const targetHref = e.target.dataset.href;
			if (!targetHref) return; // data-href 없는 요소 클릭 무시

			if (targetHref === 'prev') this.goToPage(this.currentPage - 1);
			else if (targetHref === 'next') this.goToPage(this.currentPage + 1);
			else if (targetHref === 'first') this.goToPage(1);
			else if (targetHref === 'last') this.goToPage(this.navButtons);
	   });

	   // 페이지 숫자 버튼 클릭 처리
	   this.NavButtonsWrap.addEventListener("click", (e) => {  
			e.stopPropagation(); 
			this.goToPage(parseInt(e.target.dataset.href)); // 클릭한 페이지로 이동
		});
	}

	_goToPage(pageNumber) {  //
        const oldPage = this.currentPage; // 이동 전 현재 페이지 저장
        const newPage = parseInt(pageNumber); // 입력받은 페이지 번호를 정수로 변환
		
		console.log("_goToPage -- oldPage :", oldPage, " ,  oldPage : ", oldPage);

        // 숫자가 아니거나, 1보다 작거나, 전체 페이지 수보다 크거나, 이미 현재 페이지인 경우
        if (isNaN(newPage) || newPage < 1 || newPage > this.navButtons || newPage === oldPage) return;

		// (선택 사항) 외부에서 전달받은 페이지 변경 콜백 함수 실행 등
		if (typeof this.Options.onPageChange === 'function') {
			this.Options.onPageChange(this.Options, oldPage, newPage);
		}

        // 페이지 블록이 바뀌면 전체 버튼을 다시 그려야 함
        const oldBlock = Math.ceil(oldPage / this.Options.MaxNavButtons);
        const newBlock = Math.ceil(newPage / this.Options.MaxNavButtons);

        // 현재 페이지 상태 업데이트
        this.currentPage = newPage;

        if (newBlock !== oldBlock) {
            this.renderPagination(); 
        } else {
            this.updateActiveButton(); // 활성 버튼 클래스 업데이트
            this.updateControlButtons(); // 컨트롤 버튼 상태 업데이트
        }
	}

	updateActiveButton() {
		if (!this.NavButtonsWrap) return; 

		const oldBtn = this.NavButtonsWrap.querySelector('.current');
        if (oldBtn) oldBtn.classList.remove('current');
        
        const newBtn = this.NavButtonsWrap.querySelector(`[data-href="${this.currentPage}"]`);
        if (newBtn) newBtn.classList.add('current');
	}

	updateControlButtons() {
		if (!this.ctrlPrev || !this.ctrlNext) return;

		// 처음 , 이전 버튼 비활성화/활성화: 현재 페이지가 1 이하면 비활성화
        this.ctrlPrev.disabled = (this.currentPage <= 1);
		if (this.ctrlFirst) this.ctrlFirst.disabled = (this.currentPage <= 1);

		// 마지막 , 다음 버튼 비활성화/활성화: 현재 페이지가 전체 페이지 수 이상이면 비활성화
        this.ctrlNext.disabled = (this.currentPage >= this.navButtons);
		if (this.ctrlLast) this.ctrlLast.disabled = (this.currentPage >= this.navButtons); 
		
	}


	onMessage(msg){
		console.log("msg - ", msg)
	}

	goToPage(pageNumber) { // 표준 메소드 문법 (public)
        this._goToPage(pageNumber);
    }

	static init = function(pNav, args = null) {
        return new zPagination(pNav, args);
	}

}






// EventTarget을 상속받는 커스텀 클래스 정의
class DataManager extends EventTarget {
    constructor() {
        super(); // EventTarget의 constructor 호출
        this._data = null;
    }

    // 데이터 로드 완료 시 커스텀 이벤트 발송하는 메소드
    loadData(dataSource) {
        console.log(`데이터 로드 시작: ${dataSource}`);
        // 비동기 작업 등을 시뮬레이션
        setTimeout(() => {
            this._data = { id: 1, name: 'Sample Data', source: dataSource };
            console.log('데이터 로드 완료.');

            // 데이터 로드 완료 커스텀 이벤트 생성
            const loadCompleteEvent = new CustomEvent('data:loaded', {
                detail: {
                    loadedData: this._data,
                    source: dataSource,
                    timestamp: new Date()
                }
                // DOM 요소가 아니므로 bubbles/cancelable은 보통 의미 없음
            });

            // 현재 객체 (DataManager 인스턴스)에서 이벤트 발송
            this.dispatchEvent(loadCompleteEvent);
            console.log("'data:loaded' 커스텀 이벤트 발송됨.");

        }, 1000); // 1초 후 완료 시뮬레이션
    }

    getData() {
        return this._data;
    }
}
