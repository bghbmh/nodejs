
import commonSheet from './styles/style-common.js';



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



function setCssStyle(){
	// CSS 파일 연결
	return `

:host {  /* ... */
flex: 0 0 auto;
  display: inline-flex;
  width: calc(8em);
  gap: 12px;
  font-size: 1em;
  line-height: 1.3;
  align-items: center;
  margin-right: 1em;

}

i[class*="-svg2-"] {
  box-sizing: content-box;
  padding: 18px;
  border-radius: var(--border-radius-default);
}

dl{   }
dl > *{ margin: 0; }

.icon-svg2-web + dl dt{ color: #FAA329; }
.icon-svg2-print + dl dt{ color: #0EA9CF; }
.icon-svg2-contents + dl dt{ color: #FF6632; }
.icon-svg2-branding + dl dt{ color: #44C800; }
.icon-svg2-me + dl dt{ color: #0EA9CF; }

@media(max-width: 768px){
	i[class*="-svg2-"] { padding: 0 }
	.text{ display: flex; gap: 4px }
}

`
}

class CategoryType1 extends HTMLElement {

	constructor() {
		super(); // HTMLElement의 constructor 호출
		this.attachShadow({ mode: 'open' });

		this._body = this.shadowRoot;
		this._data = {
				main : Number(this.dataset.main),
				sub : Number(this.dataset.sub)
			};

		const sheet = new CSSStyleSheet();
		sheet.replaceSync( setCssStyle() );
		this.shadowRoot.adoptedStyleSheets = [commonSheet, sheet];

		const iconClass = ct.cIcon[this._data.main - 1] || '';
		this._body.innerHTML = `
			<i class="${iconClass}" aria-hidden="true"></i>
			<dl class="text">
				<dt data-type="${this._data.main}">${ct.main[this._data.main - 1]}</dt>
				<dd data-type="${this._data.sub}">${ct.sub[this._data.sub - 1]}</dd>
			</dl>
		`;

	}
}

customElements.define('category-type1', CategoryType1);

// 마크업 함수 ===========================================



