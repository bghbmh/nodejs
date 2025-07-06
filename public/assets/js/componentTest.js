import './web-components.js'
import { zPagination } from './custom-library/bPagination/bPagination.js';
// import { UploadFiles } from '/assets/js/custom-library/bUploadFile/export-bUploadFile.js';



const commonHeader = document.querySelector("header.common");
const commonMain = document.querySelector("main.common");
let gnb = null;
let cntWrap = null;
let pageHeader = null;


const globalNavList = [
	{
		href: '/',
		icon: 'icon-svg-home1',
		text : '대시보드'
	},
	{
		href: '/project-list',
		icon: 'icon-svg2-spark',
		text : '프로젝트'
	},
	{
		href: '/todo',
		icon: 'icon-svg2-calendar2',
		text : '할 일'
	},
	{
		href: '/profile',
		icon: 'icon-svg-user1',
		text : '내 정보'
	},
	{
		href: '/setting',
		icon: 'icon-svg-gear-settings',
		text : '설정'
	},
	{
		href: '/layout',
		icon: 'icon-svg-gear-settings',
		text : '기본 UI'
	}
];


document.addEventListener('DOMContentLoaded', () => {
	console.log("DOMContentLoaded - ");
	// const path = window.location.pathname;
	// const uurl = new URL(location.href);
	// const params = uurl.searchParams;
	// const params = new URLSearchParams(location.href);
	// let parList = params.get("list");
	// console.log(" pathname - ",path, uurl) ;

	//window.location.href = '/';
	console.log('URL ', window.location.pathname);

	const path = window.location.pathname;
	let webComponent;
	if( path === '/' ) webComponent = 'main';
	else webComponent = path.replace(/^\/+/, '');
	
	initSetPage(webComponent);

});

window.addEventListener('popstate', (event) => {
	console.log('URL이 변경되었습니다 (popstate 이벤트 발생)', window.location.pathname);
	// 이곳에서 현재 window.location.pathname 또는 window.location.search 등을 읽어와
	// 해당 URL에 맞는 컴포넌트 또는 내용을 로드하는 함수를 호출합니다.
	//loadComponents(); // 아까 예시로 든 함수
});

async function initSetPage(webComponent){

	try {
		// 동적으로 부를 때 이렇게 사용한다고 함
		// await Promise.all([
		// 	await userInfoElem,
		// 	await gnbElem,
		// 	await pageHeaderElem
		// ]);
		
		let testUser = { id: 1728845897477 };
		const memberDB = await jsonDB('/memberDB');
		const [profile] = memberDB.filter(m => m.id === testUser.id);

		//document.body.dataset.theme = profile.mode;


		if (customElements.get('header-user-info')) { console.log("header-user-info", profile);	
			const headerUserinfo = document.createElement('header-user-info');
			commonHeader.appendChild(headerUserinfo);
			headerUserinfo.profile = profile; // 임시			
		}

		if (customElements.get('global-nav')) { console.log("global-nav");
			gnb = document.createElement('global-nav');
			gnb.list = globalNavList;
			
			gnb.addEventListener("gnb-clicked", e => {
				
				const { link } = e.detail; // 커스텀 이벤트에 담긴 데이터
				console.log('Custom event received:', e.detail, link );

				history.pushState(null, '목록', link);

				const path = window.location.pathname;

				// const params = new URL(window.location.href).searchParams;
				// let sub = params.get("sub");
				// console.log("gnb-clicked : ",location.href,' === ', path, params, sub);

				let webComponent = 'main';
				if( path === '/' ) webComponent = 'main';
				else webComponent = path.replace(/^\/+/, '');

				let cur = globalNavList.find( g => g.href === path );
				pageHeader.title =  cur.text;
				loadComponents( webComponent );
			});
			commonHeader.appendChild(gnb);
		}
		

		if (customElements.get('page-header')) { 
			pageHeader = zCreateElement({tag: 'page-header', class:"common"});
			commonMain.appendChild(pageHeader);
			let cur = globalNavList.find( g => g.href === '/'+webComponent );
			
			pageHeader.title = webComponent === "main" ? "대시보드" : cur.text;

			pageHeader.addEventListener('clicked-header', e => {
				console.log('clicked-header --- Custom event received:', e.detail );
				if( e.detail.action = "create-project" ){
					loadComponents( 'project-detail', e.detail );
				}
			});

			cntWrap = document.createElement('div'); 
			cntWrap.setAttribute("class", 'contents');
			commonMain.appendChild(cntWrap);
			
			loadComponents(webComponent);
		}
		
	} catch (error) {
		console.error("웹 컴포넌트 파일을 로드하는 데 실패했습니다:", error);
	}
}

// 웹 컴포넌트 불러옴
async function loadComponents(component, details = null) {

	console.log("setupComponents 함수 실행 시작", component );
	// 컴포넌트 파일 로딩 및 정의가 완료될 때까지 기다립니다.
	try {
		if( cntWrap ) cntWrap.innerHTML = ''; 

		// 임시, 모바일 메뉴 닫기
		document.querySelector("Header.common").classList.remove("expanded");
		
		console.log("components load 시작", component );

		if ( component === 'main' ){
			
			const itemsData = await jsonDB('/projects/jsonDB'); 
			
			//'main-section1 
			const ms1 = zCreateElement({ tag:'main-section1', class:'section'});
			ms1.data = itemsData;
			ms1.addEventListener("mainsection-create-project", e => { console.log('mainsection-create-project ///////////////// Custom event received:', e.detail);
				const { action } = e.detail; // 커스텀 이벤트에 담긴 데이터
				if( e.detail.action = "create-project" ){
					loadComponents( 'project-detail', e.detail );
				}
		
			})
			ms1.addEventListener("project-detail", e => { 
				let nextUrl = `/project-detail?action=${e.detail.action}`;
				gnb.menu = 1;
				history.pushState(null, e.detail.des , nextUrl );
				loadComponents('project-detail', e.detail);
			})
			cntWrap.appendChild(ms1);

			//'main-section2
			const ms2 = zCreateElement({ tag:'main-section2', class:'section'});
			cntWrap.appendChild(ms2);
			ms2.data = itemsData;
			

			// main-section3/
			const ms3 = zCreateElement({ tag:'main-section3', class:'section'});
			ms3.data = itemsData;
			cntWrap.appendChild(ms3);
			ms3.addEventListener("project-detail", e => { 
				let nextUrl = `/project-detail?action=${e.detail.action}`;
				gnb.menu = 1;
				history.pushState(null, e.detail.des , nextUrl );
				loadComponents('project-detail', e.detail);
			})

			document.addEventListener("section-header-clicked", e => {
				console.log('section-header-clicked:', e.detail);
				const { teststr } = e.detail; // 커스텀 이벤트에 담긴 데이터
				alert("section-header-clicked : ", teststr)
			});

			document.addEventListener("border-item-selected", e => {
				const { id } = e.detail; // 커스텀 이벤트에 담긴 데이터
				console.log('border-item-clicked :', e.detail, id);
				alert("border-item-clicked : " + id)
			});


		} else if( component === 'project-list' ) {
			
			const itemsData = await jsonDB('/projects/jsonDB'); 

			const projectList = zCreateElement({ tag:'project-list' });
			//
			cntWrap.appendChild(projectList);
			projectList.data = itemsData;

			projectList.addEventListener("listItemClicked", e => {
				const detail = e.detail; // 커스텀 이벤트에 담긴 데이터
				console.log('listItemClicked :',detail.action, detail.order);
				history.pushState(null, '상세보기', `/project-detail?action=view`);
				loadComponents('project-detail', detail);
			});

			projectList.addEventListener("item-checked", e => {
				const detail = e.detail; // 커스텀 이벤트에 담긴 데이터
				console.log('item-checked :',detail );
			});

		} else if( component === 'project-detail' ){
			
			// 이제 안전하게 커스텀 엘리먼트를 사용할 수 있습니다.
			if (customElements.get('project-detail')) {

				console.log("project-detail --view--", details )
				
				const projectDetail = document.createElement('project-detail');
				cntWrap.appendChild(projectDetail);

				if( details && details.action === "create-project" ){
					console.log("create project /////");
					projectDetail.create();
					history.pushState(null, '새 프로젝트 만들기', `/project-detail?action=edit`);
				} else {
					const itemsData = await jsonDB('/projects/jsonDB'); 
					if (Array.isArray(itemsData)) {
						let [item] = itemsData.filter( i => i.projectNum === Number(details.order) );
						projectDetail.item = item; // 임시
						
					} else {
						console.error('jsonDB로부터 배열 형태의 데이터를 받지 못했습니다.');
					}
				}
				
				
				projectDetail.addEventListener("project-detail-clicked", e => {
					const { action } = e.detail; // 커스텀 이벤트에 담긴 데이터

					if (action === 'view') {
						history.pushState(null, '상세보기', `/project-detail?action=view`);
					} else if (action === 'edit') {
						// ... 다른 history.pushState 호출
					} else if (action === 'list') {
						console.log('projectDetail list', e.detail);
						history.pushState(null, '목록보기', `/project-list`);
						loadComponents('project-list', e.detail.order);
					}
				})
		

			} else {
				console.error("웹 컴포넌트 정의를 찾을 수 없습니다. define 코드를 확인하세요.");
			}
		} else if( component === 'profile' ){
			let testUser = {id: 1728845897477 }

			const memberDB = await jsonDB('/memberDB'); 
			const [profile] = memberDB.filter( m => m.id === testUser.id );

			const pp = zCreateElement({ tag:'profile-info'});
			cntWrap.appendChild(pp);
			pp.data= profile;
			

		} else if( component === 'layout' ) {
			const pp = zCreateElement({ tag:'layout-components'});
			cntWrap.appendChild(pp);
		}

	} catch (error) {
		console.error("웹 컴포넌트 파일을 로드하는 데 실패했습니다  : ", error);
	}
}



async function jsonDB(router) {

	try {  console.log('componetnTest --- jsonDB :',router);
		const response = await fetch( router, { method: 'GET' });

		// 응답 상태 확인
		if (!response.ok) { // HTTP 상태 코드가 200-299 범위가 아니면 오류
			const errorText = await response.text(); // 오류 응답 본문을 텍스트로 읽기
			throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
		}

		// 응답 본문을 JSON으로 파싱 (서버에서 JSON으로 응답을 보냈을 경우)
    	const result = await response.json();
		console.log('서버로부터 받은 데이터 (성공):', result);
		return result; // 받은 데이터를 반환

	} catch (error) {
		console.error('전송 중 오류 발생:', error);
    	throw error; // 에러를 다시 throw하여 호출자에게 알림
	}
}


function zCreateElement(attributes = {}) { // { tag : "div", class: "sample", ...} 
	if (!attributes.hasOwnProperty("tag")) return alert("no Tag, require the Tag");

	let tag = document.createElement(attributes.tag);
	for (let prop in attributes) {
		if (prop == "tag") continue;
		if( prop == "textContent" || prop == "innerHTML" ){
			tag[prop] = attributes[prop];
			continue;
		}
		tag.setAttribute(prop, attributes[prop]);
	}
	return tag;
}