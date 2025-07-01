class ListItemType3Element extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._item = null;
    this._isEditing = false; // 내부 상태: 보기 모드(false) vs 수정 모드(true)

    // 이벤트 핸들러 바인딩
    this._handleClick = this._handleClick.bind(this); // 예: 상세보기/수정 버튼 클릭 처리
    this._handleSave = this._handleSave.bind(this); // 예: 수정 폼 저장 버튼
    this._handleCancel = this._handleCancel.bind(this); // 예: 수정 폼 취소 버튼
  }

  set item(itemData) {
    this._item = itemData;
    this._render(); // 데이터가 설정되면 렌더링
  }

  get item() {
    return this._item;
  }

  connectedCallback() {
    // 초기 렌더링 (item이 미리 설정되지 않았다면 여기서 호출)
    if (!this.shadowRoot.innerHTML) { // Shadow DOM 내용이 비어있다면 (connectedCallback이 여러 번 호출될 수 있으므로 체크)
        this._render();
    }
    // 이벤트 리스너 연결 (Shadow DOM 내부 요소에 연결)
    this.shadowRoot.addEventListener('click', this._handleClick); // 예: 이벤트 위임 활용
  }

  disconnectedCallback() {
    // 이벤트 리스너 제거
    this.shadowRoot.removeEventListener('click', this._handleClick);
  }

  _render() {
    if (!this._item) {
       this.shadowRoot.innerHTML = `<style>...</style><div>데이터 없음</div>`;
       return;
    }

    // ★★ 상태에 따라 다른 HTML 구조 생성 ★★
    if (this._isEditing) {
      this.shadowRoot.innerHTML = `
        <style>/* 수정 모드 스타일 */</style>
        <div class="list-item-edit">
          <h2>${this._item.title} 수정</h2>
          <form id="edit-form">
            <div><label>제목:</label><input type="text" name="title" value="${this._item.title}"></div>
            <button type="button" class="save-btn">저장</button>
            <button type="button" class="cancel-btn">취소</button>
          </form>
        </div>
      `;
      // 폼 제출, 저장, 취소 버튼에 이벤트 리스너 연결
      this.shadowRoot.getElementById('edit-form').addEventListener('submit', (e) => { e.preventDefault(); this._handleSave(); });
      this.shadowRoot.querySelector('.save-btn').addEventListener('click', this._handleSave);
      this.shadowRoot.querySelector('.cancel-btn').addEventListener('click', this._handleCancel);

    } else { // 보기 모드
       this.shadowRoot.innerHTML = `
         <style>/* 보기 모드 스타일 */</style>
         <div class="list-item-view">
             <label class="cb"><input type="checkbox"></label>
             <div class="info">
                 <div class="category">${this._categories(this._item.category)}</div>
                 <div class="title">${this._item.title}</div>
                 </div>
             <div class="btn-wrap">
                 <button type="button" class="view-detail-btn" data-action="view-detail">상세보기</button>
                 <button type="button" class="edit-btn" data-action="edit">수정</button> // <-- 수정 버튼
             </div>
         </div>
       `;
       // 보기 모드에서 필요한 이벤트 리스너 연결 (예: 상세보기, 수정 버튼)
       // 이벤트 위임을 사용하거나 각 버튼에 직접 연결
    }
     // 공통 이벤트 리스너 (예: 항목 전체 클릭)는 connectedCallback에서 ShadowRoot에 연결
  }

  // 이벤트 핸들러 (보기 모드 버튼 클릭 등)
  _handleClick(event) {
     const target = event.target;
     if (target.matches('.edit-btn')) { // 수정 버튼 클릭 시
         event.stopPropagation(); // 이벤트 전파 중지
         this._enterEditMode();
     } else if (target.matches('.view-detail-btn')) { // 상세보기 버튼 클릭 시
         event.stopPropagation();
         // 기존 itemHandler 로직 중 페이지 이동 부분 수행 (this._item.order 등 사용)
         console.log('상세보기 클릭, order:', this._item.order);
         // window.location.href = ... ;
     }
     // 다른 클릭 이벤트 처리 (예: 체크박스, 항목 전체 클릭 등)
  }

  // 수정 모드 진입
  _enterEditMode() {
    this._isEditing = true;
    this._render(); // 상태 변경 후 다시 렌더링
  }

  // 수정 내용 저장
  _handleSave() {
    const form = this.shadowRoot.getElementById('edit-form');
    const formData = new FormData(form); // 폼 데이터 가져오기
    const updatedData = Object.fromEntries(formData.entries()); // 객체로 변환

    console.log('저장할 데이터:', updatedData);
    // TODO: 서버에 데이터 저장 로직 (fetch 등) 구현
    // 성공 시: this._item = updatedData; this._cancelEdit(false); // 저장 성공 후 보기 모드로 돌아가기
    // 실패 시: 오류 메시지 표시 등
    this._item = { ...this._item, ...updatedData }; // 저장 성공 시 데이터 업데이트 (임시)
    this._cancelEdit(false); // 저장 후 보기 모드로 돌아가기
  }

  // 수정 취소 또는 저장 완료 후 보기 모드로 복귀
  _cancelEdit(confirm = true) { // 취소 버튼 클릭 시 confirm 여부 확인 가능
    if (confirm && !window.confirm('수정을 취소하시겠습니까?')) {
      return; // 사용자가 취소하지 않으면 아무것도 안 함
    }
    this._isEditing = false;
    this._render(); // 상태 변경 후 다시 렌더링
  }

  // 기존 헬퍼 함수들을 클래스 메서드로 옮김 (예: _categories, _image, _state)
  _categories(category) { /* ... 로직 ... */ return '...'; }
  _image(images) { /* ... 로직 ... */ return '...'; }
  _state(act, temp) { /* ... 로직 ... */ return '...'; }

}

customElements.define('list-item-type3', ListItemType3Element);