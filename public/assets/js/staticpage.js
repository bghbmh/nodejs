import './web-components.js';

console.log("DOMContentLoaded - 999999999")

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
	if( path === '/wowAdmin' ) webComponent = 'main';
	else webComponent = path.replace(/^\/+/, '');
	
	initSetPage(webComponent);

});