// src/styles/common.js
// import helperStyles from '../../assets/css/temp_helper.js';
// import resetStyles from '../../assets/css/temp_myAdmin-reset.js'; // 빌드 도구의 특정 로더를 사용하여 CSS를 문자열로 가져옴


const cssFilePaths = [
	'../../assets/css/helper.css',
	'../../assets/css/myAdmin-reset.css', 
	'../../assets/css/myAdmin-common.css',
	'./skeleton-style.css'
];

const commonSheet = new CSSStyleSheet();
// ⭐ 중요 수정 ⭐
// this.styleSheet(cssFilePaths)는 Promise를 반환합니다.
// Shadow DOM에 스타일을 적용하려면 이 Promise가 완료될 때까지 기다려야 합니다.
loadMultipleStylesheets(cssFilePaths).then(sheets => {
	commonSheet.replaceSync(` ${sheets} `);

}).catch(error => {
	console.error("Failed to adopt stylesheets in CommonHeader:", error);
});


export default commonSheet;



async function GetCssText(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const cssText = await response.text();
		
		return cssText;
	} catch (error) {
		console.error('Failed to load CSS stylesheet:', error);
		return null;
	}
}

async function loadMultipleStylesheets(urls) {
    try {
        const sheets = await Promise.all(
            urls.map(url => GetCssText(url))
        );

		
        // 모든 Promise가 성공적으로 완료된 경우에만 유효한 시트만 필터링합니다.

        return sheets.join(' /* css 구분용 주석 */ ') ;//sheets.filter(sheet => sheet instanceof CSSStyleSheet);
    } catch (error) {
        console.error("Error loading multiple stylesheets:", error);
        return []; // 에러 발생 시 빈 배열 반환
    }
}




