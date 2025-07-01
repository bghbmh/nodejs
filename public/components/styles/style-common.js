// src/styles/common.js
import helperStyles from '../../assets/css/temp_helper.js';
import resetStyles from '../../assets/css/temp_myAdmin-reset.js'; // 빌드 도구의 특정 로더를 사용하여 CSS를 문자열로 가져옴

const commonSheet = new CSSStyleSheet();
commonSheet.replaceSync(`
	:root {
		/* 공통 CSS 변수 등 */
	}
	${helperStyles}
	${resetStyles} /* reset.css 내용이 여기에 포함됨   */
	/* 추가적인 공통 스타일 */
`);

export default commonSheet;