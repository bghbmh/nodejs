
const helperStyles = `
@charset "UTF-8";
/* CSS Document */
/*!
 * Bootstrap  v5.3.6 (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root,
[data-bs-theme=light] {
  --ui-blue: #0d6efd;
  --ui-indigo: #6610f2;
  --ui-purple: #6f42c1;
  --ui-pink: #d63384;
  --ui-red: #dc3545;
  --ui-orange: #fd7e14;
  --ui-yellow: #ffc107;
  --ui-green: #198754;
  --ui-teal: #20c997;
  --ui-cyan: #0dcaf0;
  --ui-black: #000;
  --ui-white: #fff;
  --ui-gray: #6c757d;
  --ui-gray-dark: #343a40;
  --ui-gray-100: #f8f9fa;
  --ui-gray-200: #e9ecef;
  --ui-gray-300: #dee2e6;
  --ui-gray-400: #ced4da;
  --ui-gray-500: #adb5bd;
  --ui-gray-600: #6c757d;
  --ui-gray-700: #495057;
  --ui-gray-800: #343a40;
  --ui-gray-900: #212529;
  --ui-primary: hsl(140, 56%, 49%);
  --ui-secondary: hsl(181, 45%, 57%);
  --ui-success: #198754;
  --ui-info: #0dcaf0;
  --ui-warning: #ffc107;
  --ui-danger: #dc3545;
  --ui-light: #f8f9fa;
  --ui-dark: #212529;
  --ui-primary-rgb: 55, 195, 102;
  --ui-secondary-rgb: 96, 193, 195;
  --ui-success-rgb: 25, 135, 84;
  --ui-info-rgb: 13, 202, 240;
  --ui-warning-rgb: 255, 193, 7;
  --ui-danger-rgb: 220, 53, 69;
  --ui-light-rgb: 248, 249, 250;
  --ui-dark-rgb: 33, 37, 41;
  --ui-primary-text-emphasis: rgb(21.9912, 77.9688, 40.6504);
  --ui-secondary-text-emphasis: rgb(38.403, 77.2191, 77.877);
  --ui-success-text-emphasis: rgb(10, 54, 33.6);
  --ui-info-text-emphasis: rgb(5.2, 80.8, 96);
  --ui-warning-text-emphasis: rgb(102, 77.2, 2.8);
  --ui-danger-text-emphasis: rgb(88, 21.2, 27.6);
  --ui-light-text-emphasis: #495057;
  --ui-dark-text-emphasis: #495057;
  --ui-primary-bg-subtle: rgb(214.9956, 242.9844, 224.3252);
  --ui-secondary-bg-subtle: rgb(223.2015, 242.60955, 242.9385);
  --ui-success-bg-subtle: rgb(209, 231, 220.8);
  --ui-info-bg-subtle: rgb(206.6, 244.4, 252);
  --ui-warning-bg-subtle: rgb(255, 242.6, 205.4);
  --ui-danger-bg-subtle: rgb(248, 214.6, 217.8);
  --ui-light-bg-subtle: rgb(251.5, 252, 252.5);
  --ui-dark-bg-subtle: #ced4da;
  --ui-primary-border-subtle: rgb(174.9912, 230.9688, 193.6504);
  --ui-secondary-border-subtle: rgb(191.403, 230.2191, 230.877);
  --ui-success-border-subtle: rgb(163, 207, 186.6);
  --ui-info-border-subtle: rgb(158.2, 233.8, 249);
  --ui-warning-border-subtle: rgb(255, 230.2, 155.8);
  --ui-danger-border-subtle: rgb(241, 174.2, 180.6);
  --ui-light-border-subtle: #e9ecef;
  --ui-dark-border-subtle: #adb5bd;
  --ui-white-rgb: 255, 255, 255;
  --ui-black-rgb: 0, 0, 0;
  --ui-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --ui-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --ui-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --ui-body-font-family: var(--ui-font-sans-serif);
  --ui-body-font-size: 1rem;
  --ui-body-font-weight: 400;
  --ui-body-line-height: 1.5;
  --ui-body-color: #212529;
  --ui-body-color-rgb: 33, 37, 41;
  --ui-body-bg: #fff;
  --ui-body-bg-rgb: 255, 255, 255;
  --ui-emphasis-color: #000;
  --ui-emphasis-color-rgb: 0, 0, 0;
  --ui-secondary-color: rgba(33, 37, 41, 0.75);
  --ui-secondary-color-rgb: 33, 37, 41;
  --ui-secondary-bg: #e9ecef;
  --ui-secondary-bg-rgb: 233, 236, 239;
  --ui-tertiary-color: rgba(33, 37, 41, 0.5);
  --ui-tertiary-color-rgb: 33, 37, 41;
  --ui-tertiary-bg: #f8f9fa;
  --ui-tertiary-bg-rgb: 248, 249, 250;
  --ui-heading-color: inherit;
  --ui-link-color: hsl(140, 56%, 49%);
  --ui-link-color-rgb: 55, 195, 102;
  --ui-link-decoration: underline;
  --ui-link-hover-color: rgb(43.9824, 155.9376, 81.3008);
  --ui-link-hover-color-rgb: 44, 156, 81;
  --ui-code-color: #d63384;
  --ui-highlight-color: #212529;
  --ui-highlight-bg: rgb(255, 242.6, 205.4);
  --ui-border-width: 1px;
  --ui-border-style: solid;
  --ui-border-color: #dee2e6;
  --ui-border-color-translucent: rgba(0, 0, 0, 0.175);
  --ui-border-radius: 0.375rem;
  --ui-border-radius-sm: 0.25rem;
  --ui-border-radius-lg: 0.5rem;
  --ui-border-radius-xl: 1rem;
  --ui-border-radius-xxl: 2rem;
  --ui-border-radius-2xl: var(--ui-border-radius-xxl);
  --ui-border-radius-pill: 50rem;
  --ui-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --ui-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --ui-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  --ui-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --ui-focus-ring-width: 0.25rem;
  --ui-focus-ring-opacity: 0.25;
  --ui-focus-ring-color: rgba(54.978, 194.922, 101.626, 0.25);
  --ui-form-valid-color: #198754;
  --ui-form-valid-border-color: #198754;
  --ui-form-invalid-color: #dc3545;
  --ui-form-invalid-border-color: #dc3545;
}

[data-bs-theme=dark] {
  color-scheme: dark;
  --ui-body-color: #dee2e6;
  --ui-body-color-rgb: 222, 226, 230;
  --ui-body-bg: #212529;
  --ui-body-bg-rgb: 33, 37, 41;
  --ui-emphasis-color: #fff;
  --ui-emphasis-color-rgb: 255, 255, 255;
  --ui-secondary-color: rgba(222, 226, 230, 0.75);
  --ui-secondary-color-rgb: 222, 226, 230;
  --ui-secondary-bg: #343a40;
  --ui-secondary-bg-rgb: 52, 58, 64;
  --ui-tertiary-color: rgba(222, 226, 230, 0.5);
  --ui-tertiary-color-rgb: 222, 226, 230;
  --ui-tertiary-bg: rgb(42.5, 47.5, 52.5);
  --ui-tertiary-bg-rgb: 43, 48, 53;
  --ui-primary-text-emphasis: rgb(134.9868, 218.9532, 162.9756);
  --ui-secondary-text-emphasis: rgb(159.6045, 217.82865, 218.8155);
  --ui-success-text-emphasis: rgb(117, 183, 152.4);
  --ui-info-text-emphasis: rgb(109.8, 223.2, 246);
  --ui-warning-text-emphasis: rgb(255, 217.8, 106.2);
  --ui-danger-text-emphasis: rgb(234, 133.8, 143.4);
  --ui-light-text-emphasis: #f8f9fa;
  --ui-dark-text-emphasis: #dee2e6;
  --ui-primary-bg-subtle: rgb(10.9956, 38.9844, 20.3252);
  --ui-secondary-bg-subtle: rgb(19.2015, 38.60955, 38.9385);
  --ui-success-bg-subtle: rgb(5, 27, 16.8);
  --ui-info-bg-subtle: rgb(2.6, 40.4, 48);
  --ui-warning-bg-subtle: rgb(51, 38.6, 1.4);
  --ui-danger-bg-subtle: rgb(44, 10.6, 13.8);
  --ui-light-bg-subtle: #343a40;
  --ui-dark-bg-subtle: #1a1d20;
  --ui-primary-border-subtle: rgb(32.9868, 116.9532, 60.9756);
  --ui-secondary-border-subtle: rgb(57.6045, 115.82865, 116.8155);
  --ui-success-border-subtle: rgb(15, 81, 50.4);
  --ui-info-border-subtle: rgb(7.8, 121.2, 144);
  --ui-warning-border-subtle: rgb(153, 115.8, 4.2);
  --ui-danger-border-subtle: rgb(132, 31.8, 41.4);
  --ui-light-border-subtle: #495057;
  --ui-dark-border-subtle: #343a40;
  --ui-heading-color: inherit;
  --ui-link-color: rgb(134.9868, 218.9532, 162.9756);
  --ui-link-hover-color: rgb(158.98944, 226.16256, 181.38048);
  --ui-link-color-rgb: 135, 219, 163;
  --ui-link-hover-color-rgb: 159, 226, 181;
  --ui-code-color: rgb(230.4, 132.6, 181.2);
  --ui-highlight-color: #dee2e6;
  --ui-highlight-bg: rgb(102, 77.2, 2.8);
  --ui-border-color: #495057;
  --ui-border-color-translucent: rgba(255, 255, 255, 0.15);
  --ui-form-valid-color: rgb(117, 183, 152.4);
  --ui-form-valid-border-color: rgb(117, 183, 152.4);
  --ui-form-invalid-color: rgb(234, 133.8, 143.4);
  --ui-form-invalid-border-color: rgb(234, 133.8, 143.4);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--ui-body-font-family);
  font-size: var(--ui-body-font-size);
  font-weight: var(--ui-body-font-weight);
  line-height: var(--ui-body-line-height);
  color: var(--ui-body-color);
  text-align: var(--ui-body-text-align);
  background-color: var(--ui-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  border: 0;
  border-top: var(--ui-border-width) solid;
  opacity: 0.25;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--ui-heading-color);
}

h1, .h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 2.5rem;
  }
}

h2, .h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 2rem;
  }
}

h3, .h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 1.75rem;
  }
}

h4, .h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 1.5rem;
  }
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title] {
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small, .small {
  font-size: 0.875em;
}

mark, .mark {
  padding: 0.1875em;
  color: var(--ui-highlight-color);
  background-color: var(--ui-highlight-bg);
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: rgba(var(--ui-link-color-rgb), var(--ui-link-opacity, 1));
  text-decoration: underline;
}
a:hover {
  --ui-link-color-rgb: var(--ui-link-hover-color-rgb);
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--ui-font-monospace);
  font-size: 1em;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: var(--ui-code-color);
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.1875rem 0.375rem;
  font-size: 0.875em;
  color: var(--ui-body-bg);
  background-color: var(--ui-body-color);
  border-radius: 0.25rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--ui-secondary-color);
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
  display: none !important;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  line-height: inherit;
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-weight: 300;
  line-height: 1.2;
  font-size: calc(1.625rem + 4.5vw);
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-weight: 300;
  line-height: 1.2;
  font-size: calc(1.575rem + 3.9vw);
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-weight: 300;
  line-height: 1.2;
  font-size: calc(1.525rem + 3.3vw);
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-weight: 300;
  line-height: 1.2;
  font-size: calc(1.475rem + 2.7vw);
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-weight: 300;
  line-height: 1.2;
  font-size: calc(1.425rem + 2.1vw);
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-weight: 300;
  line-height: 1.2;
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.blockquote > :last-child {
  margin-bottom: 0;
}

.blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #6c757d;
}
.blockquote-footer::before {
  content: "— ";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: var(--ui-body-bg);
  border: var(--ui-border-width) solid var(--ui-border-color);
  border-radius: var(--ui-border-radius);
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.875em;
  color: var(--ui-secondary-color);
}

.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  --ui-gutter-x: 1.5rem;
  --ui-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--ui-gutter-x) * 0.5);
  padding-left: calc(var(--ui-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
:root {
  --ui-breakpoint-xs: 0;
  --ui-breakpoint-sm: 576px;
  --ui-breakpoint-md: 768px;
  --ui-breakpoint-lg: 992px;
  --ui-breakpoint-xl: 1200px;
  --ui-breakpoint-xxl: 1400px;
}

.row {
  --ui-gutter-x: 1.5rem;
  --ui-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--ui-gutter-y));
  margin-right: calc(-0.5 * var(--ui-gutter-x));
  margin-left: calc(-0.5 * var(--ui-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--ui-gutter-x) * 0.5);
  padding-left: calc(var(--ui-gutter-x) * 0.5);
  margin-top: var(--ui-gutter-y);
}

.col {
  flex: 1 0 0;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --ui-gutter-x: 0;
}

.g-0,
.gy-0 {
  --ui-gutter-y: 0;
}

.g-1,
.gx-1 {
  --ui-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --ui-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --ui-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --ui-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --ui-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --ui-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --ui-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --ui-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --ui-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --ui-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0;
  }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --ui-gutter-x: 0;
  }
  .g-sm-0,
  .gy-sm-0 {
    --ui-gutter-y: 0;
  }
  .g-sm-1,
  .gx-sm-1 {
    --ui-gutter-x: 0.25rem;
  }
  .g-sm-1,
  .gy-sm-1 {
    --ui-gutter-y: 0.25rem;
  }
  .g-sm-2,
  .gx-sm-2 {
    --ui-gutter-x: 0.5rem;
  }
  .g-sm-2,
  .gy-sm-2 {
    --ui-gutter-y: 0.5rem;
  }
  .g-sm-3,
  .gx-sm-3 {
    --ui-gutter-x: 1rem;
  }
  .g-sm-3,
  .gy-sm-3 {
    --ui-gutter-y: 1rem;
  }
  .g-sm-4,
  .gx-sm-4 {
    --ui-gutter-x: 1.5rem;
  }
  .g-sm-4,
  .gy-sm-4 {
    --ui-gutter-y: 1.5rem;
  }
  .g-sm-5,
  .gx-sm-5 {
    --ui-gutter-x: 3rem;
  }
  .g-sm-5,
  .gy-sm-5 {
    --ui-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0;
  }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .g-md-0,
  .gx-md-0 {
    --ui-gutter-x: 0;
  }
  .g-md-0,
  .gy-md-0 {
    --ui-gutter-y: 0;
  }
  .g-md-1,
  .gx-md-1 {
    --ui-gutter-x: 0.25rem;
  }
  .g-md-1,
  .gy-md-1 {
    --ui-gutter-y: 0.25rem;
  }
  .g-md-2,
  .gx-md-2 {
    --ui-gutter-x: 0.5rem;
  }
  .g-md-2,
  .gy-md-2 {
    --ui-gutter-y: 0.5rem;
  }
  .g-md-3,
  .gx-md-3 {
    --ui-gutter-x: 1rem;
  }
  .g-md-3,
  .gy-md-3 {
    --ui-gutter-y: 1rem;
  }
  .g-md-4,
  .gx-md-4 {
    --ui-gutter-x: 1.5rem;
  }
  .g-md-4,
  .gy-md-4 {
    --ui-gutter-y: 1.5rem;
  }
  .g-md-5,
  .gx-md-5 {
    --ui-gutter-x: 3rem;
  }
  .g-md-5,
  .gy-md-5 {
    --ui-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0;
  }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --ui-gutter-x: 0;
  }
  .g-lg-0,
  .gy-lg-0 {
    --ui-gutter-y: 0;
  }
  .g-lg-1,
  .gx-lg-1 {
    --ui-gutter-x: 0.25rem;
  }
  .g-lg-1,
  .gy-lg-1 {
    --ui-gutter-y: 0.25rem;
  }
  .g-lg-2,
  .gx-lg-2 {
    --ui-gutter-x: 0.5rem;
  }
  .g-lg-2,
  .gy-lg-2 {
    --ui-gutter-y: 0.5rem;
  }
  .g-lg-3,
  .gx-lg-3 {
    --ui-gutter-x: 1rem;
  }
  .g-lg-3,
  .gy-lg-3 {
    --ui-gutter-y: 1rem;
  }
  .g-lg-4,
  .gx-lg-4 {
    --ui-gutter-x: 1.5rem;
  }
  .g-lg-4,
  .gy-lg-4 {
    --ui-gutter-y: 1.5rem;
  }
  .g-lg-5,
  .gx-lg-5 {
    --ui-gutter-x: 3rem;
  }
  .g-lg-5,
  .gy-lg-5 {
    --ui-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0;
  }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --ui-gutter-x: 0;
  }
  .g-xl-0,
  .gy-xl-0 {
    --ui-gutter-y: 0;
  }
  .g-xl-1,
  .gx-xl-1 {
    --ui-gutter-x: 0.25rem;
  }
  .g-xl-1,
  .gy-xl-1 {
    --ui-gutter-y: 0.25rem;
  }
  .g-xl-2,
  .gx-xl-2 {
    --ui-gutter-x: 0.5rem;
  }
  .g-xl-2,
  .gy-xl-2 {
    --ui-gutter-y: 0.5rem;
  }
  .g-xl-3,
  .gx-xl-3 {
    --ui-gutter-x: 1rem;
  }
  .g-xl-3,
  .gy-xl-3 {
    --ui-gutter-y: 1rem;
  }
  .g-xl-4,
  .gx-xl-4 {
    --ui-gutter-x: 1.5rem;
  }
  .g-xl-4,
  .gy-xl-4 {
    --ui-gutter-y: 1.5rem;
  }
  .g-xl-5,
  .gx-xl-5 {
    --ui-gutter-x: 3rem;
  }
  .g-xl-5,
  .gy-xl-5 {
    --ui-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0;
  }
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .g-xxl-0,
  .gx-xxl-0 {
    --ui-gutter-x: 0;
  }
  .g-xxl-0,
  .gy-xxl-0 {
    --ui-gutter-y: 0;
  }
  .g-xxl-1,
  .gx-xxl-1 {
    --ui-gutter-x: 0.25rem;
  }
  .g-xxl-1,
  .gy-xxl-1 {
    --ui-gutter-y: 0.25rem;
  }
  .g-xxl-2,
  .gx-xxl-2 {
    --ui-gutter-x: 0.5rem;
  }
  .g-xxl-2,
  .gy-xxl-2 {
    --ui-gutter-y: 0.5rem;
  }
  .g-xxl-3,
  .gx-xxl-3 {
    --ui-gutter-x: 1rem;
  }
  .g-xxl-3,
  .gy-xxl-3 {
    --ui-gutter-y: 1rem;
  }
  .g-xxl-4,
  .gx-xxl-4 {
    --ui-gutter-x: 1.5rem;
  }
  .g-xxl-4,
  .gy-xxl-4 {
    --ui-gutter-y: 1.5rem;
  }
  .g-xxl-5,
  .gx-xxl-5 {
    --ui-gutter-x: 3rem;
  }
  .g-xxl-5,
  .gy-xxl-5 {
    --ui-gutter-y: 3rem;
  }
}
.table {
  --ui-table-color-type: initial;
  --ui-table-bg-type: initial;
  --ui-table-color-state: initial;
  --ui-table-bg-state: initial;
  --ui-table-color: var(--ui-emphasis-color);
  --ui-table-bg: var(--ui-body-bg);
  --ui-table-border-color: var(--ui-border-color);
  --ui-table-accent-bg: transparent;
  --ui-table-striped-color: var(--ui-emphasis-color);
  --ui-table-striped-bg: rgba(var(--ui-emphasis-color-rgb), 0.05);
  --ui-table-active-color: var(--ui-emphasis-color);
  --ui-table-active-bg: rgba(var(--ui-emphasis-color-rgb), 0.1);
  --ui-table-hover-color: var(--ui-emphasis-color);
  --ui-table-hover-bg: rgba(var(--ui-emphasis-color-rgb), 0.075);
  width: 100%;
  margin-bottom: 1rem;
  vertical-align: top;
  border-color: var(--ui-table-border-color);
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  color: var(--ui-table-color-state, var(--ui-table-color-type, var(--ui-table-color)));
  background-color: var(--ui-table-bg);
  border-bottom-width: var(--ui-border-width);
  box-shadow: inset 0 0 0 9999px var(--ui-table-bg-state, var(--ui-table-bg-type, var(--ui-table-accent-bg)));
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}

.table-group-divider {
  border-top: calc(var(--ui-border-width) * 2) solid currentcolor;
}

.caption-top {
  caption-side: top;
}

.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

.table-bordered > :not(caption) > * {
  border-width: var(--ui-border-width) 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 var(--ui-border-width);
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}
.table-borderless > :not(:first-child) {
  border-top-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) > * {
  --ui-table-color-type: var(--ui-table-striped-color);
  --ui-table-bg-type: var(--ui-table-striped-bg);
}

.table-striped-columns > :not(caption) > tr > :nth-child(even) {
  --ui-table-color-type: var(--ui-table-striped-color);
  --ui-table-bg-type: var(--ui-table-striped-bg);
}

.table-active {
  --ui-table-color-state: var(--ui-table-active-color);
  --ui-table-bg-state: var(--ui-table-active-bg);
}

.table-hover > tbody > tr:hover > * {
  --ui-table-color-state: var(--ui-table-hover-color);
  --ui-table-bg-state: var(--ui-table-hover-bg);
}

.table-primary {
  --ui-table-color: #000;
  --ui-table-bg: rgb(214.9956, 242.9844, 224.3252);
  --ui-table-border-color: rgb(171.99648, 194.38752, 179.46016);
  --ui-table-striped-bg: rgb(204.24582, 230.83518, 213.10894);
  --ui-table-striped-color: #000;
  --ui-table-active-bg: rgb(193.49604, 218.68596, 201.89268);
  --ui-table-active-color: #000;
  --ui-table-hover-bg: rgb(198.87093, 224.76057, 207.50081);
  --ui-table-hover-color: #000;
  color: var(--ui-table-color);
  border-color: var(--ui-table-border-color);
}

.table-secondary {
  --ui-table-color: #000;
  --ui-table-bg: rgb(223.2015, 242.60955, 242.9385);
  --ui-table-border-color: rgb(178.5612, 194.08764, 194.3508);
  --ui-table-striped-bg: rgb(212.041425, 230.4790725, 230.791575);
  --ui-table-striped-color: #000;
  --ui-table-active-bg: rgb(200.88135, 218.348595, 218.64465);
  --ui-table-active-color: #000;
  --ui-table-hover-bg: rgb(206.4613875, 224.41383375, 224.7181125);
  --ui-table-hover-color: #000;
  color: var(--ui-table-color);
  border-color: var(--ui-table-border-color);
}

.table-success {
  --ui-table-color: #000;
  --ui-table-bg: rgb(209, 231, 220.8);
  --ui-table-border-color: rgb(167.2, 184.8, 176.64);
  --ui-table-striped-bg: rgb(198.55, 219.45, 209.76);
  --ui-table-striped-color: #000;
  --ui-table-active-bg: rgb(188.1, 207.9, 198.72);
  --ui-table-active-color: #000;
  --ui-table-hover-bg: rgb(193.325, 213.675, 204.24);
  --ui-table-hover-color: #000;
  color: var(--ui-table-color);
  border-color: var(--ui-table-border-color);
}

.table-info {
  --ui-table-color: #000;
  --ui-table-bg: rgb(206.6, 244.4, 252);
  --ui-table-border-color: rgb(165.28, 195.52, 201.6);
  --ui-table-striped-bg: rgb(196.27, 232.18, 239.4);
  --ui-table-striped-color: #000;
  --ui-table-active-bg: rgb(185.94, 219.96, 226.8);
  --ui-table-active-color: #000;
  --ui-table-hover-bg: rgb(191.105, 226.07, 233.1);
  --ui-table-hover-color: #000;
  color: var(--ui-table-color);
  border-color: var(--ui-table-border-color);
}

.table-warning {
  --ui-table-color: #000;
  --ui-table-bg: rgb(255, 242.6, 205.4);
  --ui-table-border-color: rgb(204, 194.08, 164.32);
  --ui-table-striped-bg: rgb(242.25, 230.47, 195.13);
  --ui-table-striped-color: #000;
  --ui-table-active-bg: rgb(229.5, 218.34, 184.86);
  --ui-table-active-color: #000;
  --ui-table-hover-bg: rgb(235.875, 224.405, 189.995);
  --ui-table-hover-color: #000;
  color: var(--ui-table-color);
  border-color: var(--ui-table-border-color);
}

.table-danger {
  --ui-table-color: #000;
  --ui-table-bg: rgb(248, 214.6, 217.8);
  --ui-table-border-color: rgb(198.4, 171.68, 174.24);
  --ui-table-striped-bg: rgb(235.6, 203.87, 206.91);
  --ui-table-striped-color: #000;
  --ui-table-active-bg: rgb(223.2, 193.14, 196.02);
  --ui-table-active-color: #000;
  --ui-table-hover-bg: rgb(229.4, 198.505, 201.465);
  --ui-table-hover-color: #000;
  color: var(--ui-table-color);
  border-color: var(--ui-table-border-color);
}

.table-light {
  --ui-table-color: #000;
  --ui-table-bg: #f8f9fa;
  --ui-table-border-color: rgb(198.4, 199.2, 200);
  --ui-table-striped-bg: rgb(235.6, 236.55, 237.5);
  --ui-table-striped-color: #000;
  --ui-table-active-bg: rgb(223.2, 224.1, 225);
  --ui-table-active-color: #000;
  --ui-table-hover-bg: rgb(229.4, 230.325, 231.25);
  --ui-table-hover-color: #000;
  color: var(--ui-table-color);
  border-color: var(--ui-table-border-color);
}

.table-dark {
  --ui-table-color: #fff;
  --ui-table-bg: #212529;
  --ui-table-border-color: rgb(77.4, 80.6, 83.8);
  --ui-table-striped-bg: rgb(44.1, 47.9, 51.7);
  --ui-table-striped-color: #fff;
  --ui-table-active-bg: rgb(55.2, 58.8, 62.4);
  --ui-table-active-color: #fff;
  --ui-table-hover-bg: rgb(49.65, 53.35, 57.05);
  --ui-table-hover-color: #fff;
  color: var(--ui-table-color);
  border-color: var(--ui-table-border-color);
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.form-label {
  margin-bottom: 0.5rem;
}

.col-form-label {
  padding-top: calc(0.375rem + var(--ui-border-width));
  padding-bottom: calc(0.375rem + var(--ui-border-width));
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + var(--ui-border-width));
  padding-bottom: calc(0.5rem + var(--ui-border-width));
  font-size: 1.25rem;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + var(--ui-border-width));
  padding-bottom: calc(0.25rem + var(--ui-border-width));
  font-size: 0.875rem;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--ui-secondary-color);
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--ui-body-color);
  appearance: none;
  background-color: var(--ui-body-bg);
  background-clip: padding-box;
  border: var(--ui-border-width) solid var(--ui-border-color);
  border-radius: var(--ui-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: var(--ui-body-color);
  background-color: var(--ui-body-bg);
  border-color: rgb(154.989, 224.961, 178.313);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(54.978, 194.922, 101.626, 0.25);
}
.form-control::-webkit-date-and-time-value {
  min-width: 85px;
  height: 1.5em;
  margin: 0;
}
.form-control::-webkit-datetime-edit {
  display: block;
  padding: 0;
}
.form-control::placeholder {
  color: var(--ui-secondary-color);
  opacity: 1;
}
.form-control:disabled {
  background-color: var(--ui-secondary-bg);
  opacity: 1;
}
.form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  margin-inline-end: 0.75rem;
  color: var(--ui-body-color);
  background-color: var(--ui-tertiary-bg);
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: var(--ui-border-width);
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: var(--ui-secondary-bg);
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: var(--ui-body-color);
  background-color: transparent;
  border: solid transparent;
  border-width: var(--ui-border-width) 0;
}
.form-control-plaintext:focus {
  outline: 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1.5em + 0.5rem + calc(var(--ui-border-width) * 2));
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: var(--ui-border-radius-sm);
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  min-height: calc(1.5em + 1rem + calc(var(--ui-border-width) * 2));
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: var(--ui-border-radius-lg);
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: calc(1.5em + 0.75rem + calc(var(--ui-border-width) * 2));
}
textarea.form-control-sm {
  min-height: calc(1.5em + 0.5rem + calc(var(--ui-border-width) * 2));
}
textarea.form-control-lg {
  min-height: calc(1.5em + 1rem + calc(var(--ui-border-width) * 2));
}

.form-control-color {
  width: 3rem;
  height: calc(1.5em + 0.75rem + calc(var(--ui-border-width) * 2));
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  border: 0 !important;
  border-radius: var(--ui-border-radius);
}
.form-control-color::-webkit-color-swatch {
  border: 0 !important;
  border-radius: var(--ui-border-radius);
}
.form-control-color.form-control-sm {
  height: calc(1.5em + 0.5rem + calc(var(--ui-border-width) * 2));
}
.form-control-color.form-control-lg {
  height: calc(1.5em + 1rem + calc(var(--ui-border-width) * 2));
}

.form-select {
  --ui-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--ui-body-color);
  appearance: none;
  background-color: var(--ui-body-bg);
  background-image: var(--ui-form-select-bg-img), var(--ui-form-select-bg-icon, none);
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: var(--ui-border-width) solid var(--ui-border-color);
  border-radius: var(--ui-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: rgb(154.989, 224.961, 178.313);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(54.978, 194.922, 101.626, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.form-select:disabled {
  background-color: var(--ui-secondary-bg);
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 var(--ui-body-color);
}

.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  border-radius: var(--ui-border-radius-sm);
}

.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
  border-radius: var(--ui-border-radius-lg);
}

[data-bs-theme=dark] .form-select {
  --ui-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23dee2e6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-reverse {
  padding-right: 1.5em;
  padding-left: 0;
  text-align: right;
}
.form-check-reverse .form-check-input {
  float: right;
  margin-right: -1.5em;
  margin-left: 0;
}

.form-check-input {
  --ui-form-check-bg: var(--ui-body-bg);
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  appearance: none;
  background-color: var(--ui-form-check-bg);
  background-image: var(--ui-form-check-bg-image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: var(--ui-border-width) solid var(--ui-border-color);
  print-color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: rgb(154.989, 224.961, 178.313);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(54.978, 194.922, 101.626, 0.25);
}
.form-check-input:checked {
  background-color: hsl(140, 56%, 49%);
  border-color: hsl(140, 56%, 49%);
}
.form-check-input:checked[type=checkbox] {
  --ui-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  --ui-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: hsl(140, 56%, 49%);
  border-color: hsl(140, 56%, 49%);
  --ui-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  cursor: default;
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  --ui-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  width: 2em;
  margin-left: -2.5em;
  background-image: var(--ui-form-switch-bg);
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  --ui-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgb%28154.989, 224.961, 178.313%29'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  --ui-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.form-switch.form-check-reverse {
  padding-right: 2.5em;
  padding-left: 0;
}
.form-switch.form-check-reverse .form-check-input {
  margin-right: -2.5em;
  margin-left: 0;
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus) {
  --ui-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e");
}

.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  appearance: none;
  background-color: transparent;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(54.978, 194.922, 101.626, 0.25);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(54.978, 194.922, 101.626, 0.25);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  appearance: none;
  background-color: hsl(140, 56%, 49%);
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: rgb(194.9934, 236.9766, 208.9878);
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--ui-secondary-bg);
  border-color: transparent;
  border-radius: 1rem;
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  appearance: none;
  background-color: hsl(140, 56%, 49%);
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: rgb(194.9934, 236.9766, 208.9878);
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--ui-secondary-bg);
  border-color: transparent;
  border-radius: 1rem;
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: var(--ui-secondary-color);
}
.form-range:disabled::-moz-range-thumb {
  background-color: var(--ui-secondary-color);
}

.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext,
.form-floating > .form-select {
  height: calc(3.5rem + calc(var(--ui-border-width) * 2));
  min-height: calc(3.5rem + calc(var(--ui-border-width) * 2));
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  max-width: 100%;
  height: 100%;
  padding: 1rem 0.75rem;
  overflow: hidden;
  color: rgba(var(--ui-body-color-rgb), 0.65);
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  border: var(--ui-border-width) solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext {
  padding: 1rem 0.75rem;
}
.form-floating > .form-control::placeholder,
.form-floating > .form-control-plaintext::placeholder {
  color: transparent;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown),
.form-floating > .form-control-plaintext:focus,
.form-floating > .form-control-plaintext:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill,
.form-floating > .form-control-plaintext:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.75rem;
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-control-plaintext ~ label,
.form-floating > .form-select ~ label {
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > textarea:focus ~ label::after,
.form-floating > textarea:not(:placeholder-shown) ~ label::after {
  position: absolute;
  inset: 1rem 0.375rem;
  z-index: -1;
  height: 1.5em;
  content: "";
  background-color: var(--ui-body-bg);
  border-radius: var(--ui-border-radius);
}
.form-floating > textarea:disabled ~ label::after {
  background-color: var(--ui-secondary-bg);
}
.form-floating > .form-control-plaintext ~ label {
  border-width: var(--ui-border-width) 0;
}
.form-floating > :disabled ~ label,
.form-floating > .form-control:disabled ~ label {
  color: #6c757d;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select,
.input-group > .form-floating {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus,
.input-group > .form-floating:focus-within {
  z-index: 5;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 5;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--ui-body-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--ui-tertiary-bg);
  border: var(--ui-border-width) solid var(--ui-border-color);
  border-radius: var(--ui-border-radius);
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: var(--ui-border-radius-lg);
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: var(--ui-border-radius-sm);
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 3rem;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: calc(-1 * var(--ui-border-width));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .form-floating:not(:first-child) > .form-control,
.input-group > .form-floating:not(:first-child) > .form-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--ui-form-valid-color);
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: var(--ui-success);
  border-radius: var(--ui-border-radius);
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: var(--ui-form-valid-border-color);
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: var(--ui-form-valid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--ui-success-rgb), 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: var(--ui-form-valid-border-color);
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  --ui-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e");
  padding-right: 4.125rem;
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: var(--ui-form-valid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--ui-success-rgb), 0.25);
}

.was-validated .form-control-color:valid, .form-control-color.is-valid {
  width: calc(3rem + calc(1.5em + 0.75rem));
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: var(--ui-form-valid-border-color);
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: var(--ui-form-valid-color);
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(var(--ui-success-rgb), 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: var(--ui-form-valid-color);
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group > .form-control:not(:focus):valid, .input-group > .form-control:not(:focus).is-valid,
.was-validated .input-group > .form-select:not(:focus):valid,
.input-group > .form-select:not(:focus).is-valid,
.was-validated .input-group > .form-floating:not(:focus-within):valid,
.input-group > .form-floating:not(:focus-within).is-valid {
  z-index: 3;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--ui-form-invalid-color);
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: var(--ui-danger);
  border-radius: var(--ui-border-radius);
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: var(--ui-form-invalid-border-color);
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: var(--ui-form-invalid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--ui-danger-rgb), 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: var(--ui-form-invalid-border-color);
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  --ui-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  padding-right: 4.125rem;
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: var(--ui-form-invalid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--ui-danger-rgb), 0.25);
}

.was-validated .form-control-color:invalid, .form-control-color.is-invalid {
  width: calc(3rem + calc(1.5em + 0.75rem));
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: var(--ui-form-invalid-border-color);
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: var(--ui-form-invalid-color);
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(var(--ui-danger-rgb), 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: var(--ui-form-invalid-color);
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group > .form-control:not(:focus):invalid, .input-group > .form-control:not(:focus).is-invalid,
.was-validated .input-group > .form-select:not(:focus):invalid,
.input-group > .form-select:not(:focus).is-invalid,
.was-validated .input-group > .form-floating:not(:focus-within):invalid,
.input-group > .form-floating:not(:focus-within).is-invalid {
  z-index: 4;
}

.btn {
  --ui-btn-padding-x: 0.75rem;
  --ui-btn-padding-y: 0.375rem;
  --ui-btn-font-family: ;
  --ui-btn-font-size: 1rem;
  --ui-btn-font-weight: 400;
  --ui-btn-line-height: 1.5;
  --ui-btn-color: var(--ui-body-color);
  --ui-btn-bg: transparent;
  --ui-btn-border-width: var(--ui-border-width);
  --ui-btn-border-color: transparent;
  --ui-btn-border-radius: var(--ui-border-radius);
  --ui-btn-hover-border-color: transparent;
  --ui-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  --ui-btn-disabled-opacity: 0.65;
  --ui-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--ui-btn-focus-shadow-rgb), .5);
  display: inline-block;
  padding: var(--ui-btn-padding-y) var(--ui-btn-padding-x);
  font-family: var(--ui-btn-font-family);
  font-size: var(--ui-btn-font-size);
  font-weight: var(--ui-btn-font-weight);
  line-height: var(--ui-btn-line-height);
  color: var(--ui-btn-color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: var(--ui-btn-border-width) solid var(--ui-btn-border-color);
  border-radius: var(--ui-btn-border-radius);
  background-color: var(--ui-btn-bg);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: var(--ui-btn-hover-color);
  background-color: var(--ui-btn-hover-bg);
  border-color: var(--ui-btn-hover-border-color);
}
.btn-check + .btn:hover {
  color: var(--ui-btn-color);
  background-color: var(--ui-btn-bg);
  border-color: var(--ui-btn-border-color);
}
.btn:focus-visible {
  color: var(--ui-btn-hover-color);
  background-color: var(--ui-btn-hover-bg);
  border-color: var(--ui-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--ui-btn-focus-box-shadow);
}
.btn-check:focus-visible + .btn {
  border-color: var(--ui-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--ui-btn-focus-box-shadow);
}
.btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show {
  color: var(--ui-btn-active-color);
  background-color: var(--ui-btn-active-bg);
  border-color: var(--ui-btn-active-border-color);
}
.btn-check:checked + .btn:focus-visible, :not(.btn-check) + .btn:active:focus-visible, .btn:first-child:active:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible {
  box-shadow: var(--ui-btn-focus-box-shadow);
}
.btn-check:checked:focus-visible + .btn {
  box-shadow: var(--ui-btn-focus-box-shadow);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  color: var(--ui-btn-disabled-color);
  pointer-events: none;
  background-color: var(--ui-btn-disabled-bg);
  border-color: var(--ui-btn-disabled-border-color);
  opacity: var(--ui-btn-disabled-opacity);
}

.btn-primary {
  --ui-btn-color: #000;
  --ui-btn-bg: hsl(140, 56%, 49%);
  --ui-btn-border-color: hsl(140, 56%, 49%);
  --ui-btn-hover-color: #000;
  --ui-btn-hover-bg: rgb(84.9813, 203.9337, 124.6321);
  --ui-btn-hover-border-color: rgb(74.9802, 200.9298, 116.9634);
  --ui-btn-focus-shadow-rgb: 47, 166, 86;
  --ui-btn-active-color: #000;
  --ui-btn-active-bg: rgb(94.9824, 206.9376, 132.3008);
  --ui-btn-active-border-color: rgb(74.9802, 200.9298, 116.9634);
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #000;
  --ui-btn-disabled-bg: hsl(140, 56%, 49%);
  --ui-btn-disabled-border-color: hsl(140, 56%, 49%);
}

.btn-secondary {
  --ui-btn-color: #000;
  --ui-btn-bg: hsl(181, 45%, 57%);
  --ui-btn-border-color: hsl(181, 45%, 57%);
  --ui-btn-hover-color: #000;
  --ui-btn-hover-bg: rgb(119.856375, 202.3405875, 203.738625);
  --ui-btn-hover-border-color: rgb(111.90675, 199.242975, 200.72325);
  --ui-btn-focus-shadow-rgb: 82, 164, 165;
  --ui-btn-active-color: #000;
  --ui-btn-active-bg: rgb(127.806, 205.4382, 206.754);
  --ui-btn-active-border-color: rgb(111.90675, 199.242975, 200.72325);
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #000;
  --ui-btn-disabled-bg: hsl(181, 45%, 57%);
  --ui-btn-disabled-border-color: hsl(181, 45%, 57%);
}

.btn-success {
  --ui-btn-color: #fff;
  --ui-btn-bg: #198754;
  --ui-btn-border-color: #198754;
  --ui-btn-hover-color: #fff;
  --ui-btn-hover-bg: rgb(21.25, 114.75, 71.4);
  --ui-btn-hover-border-color: rgb(20, 108, 67.2);
  --ui-btn-focus-shadow-rgb: 60, 153, 110;
  --ui-btn-active-color: #fff;
  --ui-btn-active-bg: rgb(20, 108, 67.2);
  --ui-btn-active-border-color: rgb(18.75, 101.25, 63);
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #fff;
  --ui-btn-disabled-bg: #198754;
  --ui-btn-disabled-border-color: #198754;
}

.btn-info {
  --ui-btn-color: #000;
  --ui-btn-bg: #0dcaf0;
  --ui-btn-border-color: #0dcaf0;
  --ui-btn-hover-color: #000;
  --ui-btn-hover-bg: rgb(49.3, 209.95, 242.25);
  --ui-btn-hover-border-color: rgb(37.2, 207.3, 241.5);
  --ui-btn-focus-shadow-rgb: 11, 172, 204;
  --ui-btn-active-color: #000;
  --ui-btn-active-bg: rgb(61.4, 212.6, 243);
  --ui-btn-active-border-color: rgb(37.2, 207.3, 241.5);
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #000;
  --ui-btn-disabled-bg: #0dcaf0;
  --ui-btn-disabled-border-color: #0dcaf0;
}

.btn-warning {
  --ui-btn-color: #000;
  --ui-btn-bg: #ffc107;
  --ui-btn-border-color: #ffc107;
  --ui-btn-hover-color: #000;
  --ui-btn-hover-bg: rgb(255, 202.3, 44.2);
  --ui-btn-hover-border-color: rgb(255, 199.2, 31.8);
  --ui-btn-focus-shadow-rgb: 217, 164, 6;
  --ui-btn-active-color: #000;
  --ui-btn-active-bg: rgb(255, 205.4, 56.6);
  --ui-btn-active-border-color: rgb(255, 199.2, 31.8);
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #000;
  --ui-btn-disabled-bg: #ffc107;
  --ui-btn-disabled-border-color: #ffc107;
}

.btn-danger {
  --ui-btn-color: #fff;
  --ui-btn-bg: #dc3545;
  --ui-btn-border-color: #dc3545;
  --ui-btn-hover-color: #fff;
  --ui-btn-hover-bg: rgb(187, 45.05, 58.65);
  --ui-btn-hover-border-color: rgb(176, 42.4, 55.2);
  --ui-btn-focus-shadow-rgb: 225, 83, 97;
  --ui-btn-active-color: #fff;
  --ui-btn-active-bg: rgb(176, 42.4, 55.2);
  --ui-btn-active-border-color: rgb(165, 39.75, 51.75);
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #fff;
  --ui-btn-disabled-bg: #dc3545;
  --ui-btn-disabled-border-color: #dc3545;
}

.btn-light {
  --ui-btn-color: #000;
  --ui-btn-bg: #f8f9fa;
  --ui-btn-border-color: #f8f9fa;
  --ui-btn-hover-color: #000;
  --ui-btn-hover-bg: rgb(210.8, 211.65, 212.5);
  --ui-btn-hover-border-color: rgb(198.4, 199.2, 200);
  --ui-btn-focus-shadow-rgb: 211, 212, 213;
  --ui-btn-active-color: #000;
  --ui-btn-active-bg: rgb(198.4, 199.2, 200);
  --ui-btn-active-border-color: rgb(186, 186.75, 187.5);
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #000;
  --ui-btn-disabled-bg: #f8f9fa;
  --ui-btn-disabled-border-color: #f8f9fa;
}

.btn-dark {
  --ui-btn-color: #fff;
  --ui-btn-bg: #212529;
  --ui-btn-border-color: #212529;
  --ui-btn-hover-color: #fff;
  --ui-btn-hover-bg: rgb(66.3, 69.7, 73.1);
  --ui-btn-hover-border-color: rgb(55.2, 58.8, 62.4);
  --ui-btn-focus-shadow-rgb: 66, 70, 73;
  --ui-btn-active-color: #fff;
  --ui-btn-active-bg: rgb(77.4, 80.6, 83.8);
  --ui-btn-active-border-color: rgb(55.2, 58.8, 62.4);
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #fff;
  --ui-btn-disabled-bg: #212529;
  --ui-btn-disabled-border-color: #212529;
}

.btn-outline-primary {
  --ui-btn-color: hsl(140, 56%, 49%);
  --ui-btn-border-color: hsl(140, 56%, 49%);
  --ui-btn-hover-color: #000;
  --ui-btn-hover-bg: hsl(140, 56%, 49%);
  --ui-btn-hover-border-color: hsl(140, 56%, 49%);
  --ui-btn-focus-shadow-rgb: 55, 195, 102;
  --ui-btn-active-color: #000;
  --ui-btn-active-bg: hsl(140, 56%, 49%);
  --ui-btn-active-border-color: hsl(140, 56%, 49%);
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: hsl(140, 56%, 49%);
  --ui-btn-disabled-bg: transparent;
  --ui-btn-disabled-border-color: hsl(140, 56%, 49%);
  --ui-gradient: none;
}

.btn-outline-secondary {
  --ui-btn-color: hsl(181, 45%, 57%);
  --ui-btn-border-color: hsl(181, 45%, 57%);
  --ui-btn-hover-color: #000;
  --ui-btn-hover-bg: hsl(181, 45%, 57%);
  --ui-btn-hover-border-color: hsl(181, 45%, 57%);
  --ui-btn-focus-shadow-rgb: 96, 193, 195;
  --ui-btn-active-color: #000;
  --ui-btn-active-bg: hsl(181, 45%, 57%);
  --ui-btn-active-border-color: hsl(181, 45%, 57%);
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: hsl(181, 45%, 57%);
  --ui-btn-disabled-bg: transparent;
  --ui-btn-disabled-border-color: hsl(181, 45%, 57%);
  --ui-gradient: none;
}

.btn-outline-success {
  --ui-btn-color: #198754;
  --ui-btn-border-color: #198754;
  --ui-btn-hover-color: #fff;
  --ui-btn-hover-bg: #198754;
  --ui-btn-hover-border-color: #198754;
  --ui-btn-focus-shadow-rgb: 25, 135, 84;
  --ui-btn-active-color: #fff;
  --ui-btn-active-bg: #198754;
  --ui-btn-active-border-color: #198754;
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #198754;
  --ui-btn-disabled-bg: transparent;
  --ui-btn-disabled-border-color: #198754;
  --ui-gradient: none;
}

.btn-outline-info {
  --ui-btn-color: #0dcaf0;
  --ui-btn-border-color: #0dcaf0;
  --ui-btn-hover-color: #000;
  --ui-btn-hover-bg: #0dcaf0;
  --ui-btn-hover-border-color: #0dcaf0;
  --ui-btn-focus-shadow-rgb: 13, 202, 240;
  --ui-btn-active-color: #000;
  --ui-btn-active-bg: #0dcaf0;
  --ui-btn-active-border-color: #0dcaf0;
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #0dcaf0;
  --ui-btn-disabled-bg: transparent;
  --ui-btn-disabled-border-color: #0dcaf0;
  --ui-gradient: none;
}

.btn-outline-warning {
  --ui-btn-color: #ffc107;
  --ui-btn-border-color: #ffc107;
  --ui-btn-hover-color: #000;
  --ui-btn-hover-bg: #ffc107;
  --ui-btn-hover-border-color: #ffc107;
  --ui-btn-focus-shadow-rgb: 255, 193, 7;
  --ui-btn-active-color: #000;
  --ui-btn-active-bg: #ffc107;
  --ui-btn-active-border-color: #ffc107;
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #ffc107;
  --ui-btn-disabled-bg: transparent;
  --ui-btn-disabled-border-color: #ffc107;
  --ui-gradient: none;
}

.btn-outline-danger {
  --ui-btn-color: #dc3545;
  --ui-btn-border-color: #dc3545;
  --ui-btn-hover-color: #fff;
  --ui-btn-hover-bg: #dc3545;
  --ui-btn-hover-border-color: #dc3545;
  --ui-btn-focus-shadow-rgb: 220, 53, 69;
  --ui-btn-active-color: #fff;
  --ui-btn-active-bg: #dc3545;
  --ui-btn-active-border-color: #dc3545;
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #dc3545;
  --ui-btn-disabled-bg: transparent;
  --ui-btn-disabled-border-color: #dc3545;
  --ui-gradient: none;
}

.btn-outline-light {
  --ui-btn-color: #f8f9fa;
  --ui-btn-border-color: #f8f9fa;
  --ui-btn-hover-color: #000;
  --ui-btn-hover-bg: #f8f9fa;
  --ui-btn-hover-border-color: #f8f9fa;
  --ui-btn-focus-shadow-rgb: 248, 249, 250;
  --ui-btn-active-color: #000;
  --ui-btn-active-bg: #f8f9fa;
  --ui-btn-active-border-color: #f8f9fa;
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #f8f9fa;
  --ui-btn-disabled-bg: transparent;
  --ui-btn-disabled-border-color: #f8f9fa;
  --ui-gradient: none;
}

.btn-outline-dark {
  --ui-btn-color: #212529;
  --ui-btn-border-color: #212529;
  --ui-btn-hover-color: #fff;
  --ui-btn-hover-bg: #212529;
  --ui-btn-hover-border-color: #212529;
  --ui-btn-focus-shadow-rgb: 33, 37, 41;
  --ui-btn-active-color: #fff;
  --ui-btn-active-bg: #212529;
  --ui-btn-active-border-color: #212529;
  --ui-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --ui-btn-disabled-color: #212529;
  --ui-btn-disabled-bg: transparent;
  --ui-btn-disabled-border-color: #212529;
  --ui-gradient: none;
}

.btn-link {
  --ui-btn-font-weight: 400;
  --ui-btn-color: var(--ui-link-color);
  --ui-btn-bg: transparent;
  --ui-btn-border-color: transparent;
  --ui-btn-hover-color: var(--ui-link-hover-color);
  --ui-btn-hover-border-color: transparent;
  --ui-btn-active-color: var(--ui-link-hover-color);
  --ui-btn-active-border-color: transparent;
  --ui-btn-disabled-color: #6c757d;
  --ui-btn-disabled-border-color: transparent;
  --ui-btn-box-shadow: 0 0 0 #000;
  --ui-btn-focus-shadow-rgb: 47, 166, 86;
  text-decoration: underline;
}
.btn-link:focus-visible {
  color: var(--ui-btn-color);
}
.btn-link:hover {
  color: var(--ui-btn-hover-color);
}

.btn-lg, .btn-group-lg > .btn {
  --ui-btn-padding-y: 0.5rem;
  --ui-btn-padding-x: 1rem;
  --ui-btn-font-size: 1.25rem;
  --ui-btn-border-radius: var(--ui-border-radius-lg);
}

.btn-sm, .btn-group-sm > .btn {
  --ui-btn-padding-y: 0.25rem;
  --ui-btn-padding-x: 0.5rem;
  --ui-btn-font-size: 0.875rem;
  --ui-btn-border-radius: var(--ui-border-radius-sm);
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}
.collapsing.collapse-horizontal {
  width: 0;
  height: auto;
  transition: width 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing.collapse-horizontal {
    transition: none;
  }
}

.dropup,
.dropend,
.dropdown,
.dropstart,
.dropup-center,
.dropdown-center {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  --ui-dropdown-zindex: 1000;
  --ui-dropdown-min-width: 10rem;
  --ui-dropdown-padding-x: 0;
  --ui-dropdown-padding-y: 0.5rem;
  --ui-dropdown-spacer: 0.125rem;
  --ui-dropdown-font-size: 1rem;
  --ui-dropdown-color: var(--ui-body-color);
  --ui-dropdown-bg: var(--ui-body-bg);
  --ui-dropdown-border-color: var(--ui-border-color-translucent);
  --ui-dropdown-border-radius: var(--ui-border-radius);
  --ui-dropdown-border-width: var(--ui-border-width);
  --ui-dropdown-inner-border-radius: calc(var(--ui-border-radius) - var(--ui-border-width));
  --ui-dropdown-divider-bg: var(--ui-border-color-translucent);
  --ui-dropdown-divider-margin-y: 0.5rem;
  --ui-dropdown-box-shadow: var(--ui-box-shadow);
  --ui-dropdown-link-color: var(--ui-body-color);
  --ui-dropdown-link-hover-color: var(--ui-body-color);
  --ui-dropdown-link-hover-bg: var(--ui-tertiary-bg);
  --ui-dropdown-link-active-color: #fff;
  --ui-dropdown-link-active-bg: hsl(140, 56%, 49%);
  --ui-dropdown-link-disabled-color: var(--ui-tertiary-color);
  --ui-dropdown-item-padding-x: 1rem;
  --ui-dropdown-item-padding-y: 0.25rem;
  --ui-dropdown-header-color: #6c757d;
  --ui-dropdown-header-padding-x: 1rem;
  --ui-dropdown-header-padding-y: 0.5rem;
  position: absolute;
  z-index: var(--ui-dropdown-zindex);
  display: none;
  min-width: var(--ui-dropdown-min-width);
  padding: var(--ui-dropdown-padding-y) var(--ui-dropdown-padding-x);
  margin: 0;
  font-size: var(--ui-dropdown-font-size);
  color: var(--ui-dropdown-color);
  text-align: left;
  list-style: none;
  background-color: var(--ui-dropdown-bg);
  background-clip: padding-box;
  border: var(--ui-dropdown-border-width) solid var(--ui-dropdown-border-color);
  border-radius: var(--ui-dropdown-border-radius);
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: var(--ui-dropdown-spacer);
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: var(--ui-dropdown-spacer);
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: var(--ui-dropdown-spacer);
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: var(--ui-dropdown-spacer);
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: var(--ui-dropdown-divider-margin-y) 0;
  overflow: hidden;
  border-top: 1px solid var(--ui-dropdown-divider-bg);
  opacity: 1;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: var(--ui-dropdown-item-padding-y) var(--ui-dropdown-item-padding-x);
  clear: both;
  font-weight: 400;
  color: var(--ui-dropdown-link-color);
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  border-radius: var(--ui-dropdown-item-border-radius, 0);
}
.dropdown-item:hover, .dropdown-item:focus {
  color: var(--ui-dropdown-link-hover-color);
  background-color: var(--ui-dropdown-link-hover-bg);
}
.dropdown-item.active, .dropdown-item:active {
  color: var(--ui-dropdown-link-active-color);
  text-decoration: none;
  background-color: var(--ui-dropdown-link-active-bg);
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: var(--ui-dropdown-link-disabled-color);
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: var(--ui-dropdown-header-padding-y) var(--ui-dropdown-header-padding-x);
  margin-bottom: 0;
  font-size: 0.875rem;
  color: var(--ui-dropdown-header-color);
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: var(--ui-dropdown-item-padding-y) var(--ui-dropdown-item-padding-x);
  color: var(--ui-dropdown-link-color);
}

.dropdown-menu-dark {
  --ui-dropdown-color: #dee2e6;
  --ui-dropdown-bg: #343a40;
  --ui-dropdown-border-color: var(--ui-border-color-translucent);
  --ui-dropdown-box-shadow: ;
  --ui-dropdown-link-color: #dee2e6;
  --ui-dropdown-link-hover-color: #fff;
  --ui-dropdown-divider-bg: var(--ui-border-color-translucent);
  --ui-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);
  --ui-dropdown-link-active-color: #fff;
  --ui-dropdown-link-active-bg: hsl(140, 56%, 49%);
  --ui-dropdown-link-disabled-color: #adb5bd;
  --ui-dropdown-header-color: #adb5bd;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn-check:checked + .btn,
.btn-group > .btn-check:focus + .btn,
.btn-group > .btn:hover,
.btn-group > .btn:focus,
.btn-group > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn-check:checked + .btn,
.btn-group-vertical > .btn-check:focus + .btn,
.btn-group-vertical > .btn:hover,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group {
  border-radius: var(--ui-border-radius);
}
.btn-group > :not(.btn-check:first-child) + .btn,
.btn-group > .btn-group:not(:first-child) {
  margin-left: calc(-1 * var(--ui-border-width));
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn.dropdown-toggle-split:first-child,
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:nth-child(n+3),
.btn-group > :not(.btn-check) + .btn,
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: calc(-1 * var(--ui-border-width));
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn:nth-child(n+3),
.btn-group-vertical > :not(.btn-check) + .btn,
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav {
  --ui-nav-link-padding-x: 1rem;
  --ui-nav-link-padding-y: 0.5rem;
  --ui-nav-link-font-weight: ;
  --ui-nav-link-color: var(--ui-link-color);
  --ui-nav-link-hover-color: var(--ui-link-hover-color);
  --ui-nav-link-disabled-color: var(--ui-secondary-color);
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: var(--ui-nav-link-padding-y) var(--ui-nav-link-padding-x);
  font-size: var(--ui-nav-link-font-size);
  font-weight: var(--ui-nav-link-font-weight);
  color: var(--ui-nav-link-color);
  text-decoration: none;
  background: none;
  border: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover, .nav-link:focus {
  color: var(--ui-nav-link-hover-color);
}
.nav-link:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(54.978, 194.922, 101.626, 0.25);
}
.nav-link.disabled, .nav-link:disabled {
  color: var(--ui-nav-link-disabled-color);
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  --ui-nav-tabs-border-width: var(--ui-border-width);
  --ui-nav-tabs-border-color: var(--ui-border-color);
  --ui-nav-tabs-border-radius: var(--ui-border-radius);
  --ui-nav-tabs-link-hover-border-color: var(--ui-secondary-bg) var(--ui-secondary-bg) var(--ui-border-color);
  --ui-nav-tabs-link-active-color: var(--ui-emphasis-color);
  --ui-nav-tabs-link-active-bg: var(--ui-body-bg);
  --ui-nav-tabs-link-active-border-color: var(--ui-border-color) var(--ui-border-color) var(--ui-body-bg);
  border-bottom: var(--ui-nav-tabs-border-width) solid var(--ui-nav-tabs-border-color);
}
.nav-tabs .nav-link {
  margin-bottom: calc(-1 * var(--ui-nav-tabs-border-width));
  border: var(--ui-nav-tabs-border-width) solid transparent;
  border-top-left-radius: var(--ui-nav-tabs-border-radius);
  border-top-right-radius: var(--ui-nav-tabs-border-radius);
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  isolation: isolate;
  border-color: var(--ui-nav-tabs-link-hover-border-color);
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: var(--ui-nav-tabs-link-active-color);
  background-color: var(--ui-nav-tabs-link-active-bg);
  border-color: var(--ui-nav-tabs-link-active-border-color);
}
.nav-tabs .dropdown-menu {
  margin-top: calc(-1 * var(--ui-nav-tabs-border-width));
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills {
  --ui-nav-pills-border-radius: var(--ui-border-radius);
  --ui-nav-pills-link-active-color: #fff;
  --ui-nav-pills-link-active-bg: hsl(140, 56%, 49%);
}
.nav-pills .nav-link {
  border-radius: var(--ui-nav-pills-border-radius);
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--ui-nav-pills-link-active-color);
  background-color: var(--ui-nav-pills-link-active-bg);
}

.nav-underline {
  --ui-nav-underline-gap: 1rem;
  --ui-nav-underline-border-width: 0.125rem;
  --ui-nav-underline-link-active-color: var(--ui-emphasis-color);
  gap: var(--ui-nav-underline-gap);
}
.nav-underline .nav-link {
  padding-right: 0;
  padding-left: 0;
  border-bottom: var(--ui-nav-underline-border-width) solid transparent;
}
.nav-underline .nav-link:hover, .nav-underline .nav-link:focus {
  border-bottom-color: currentcolor;
}
.nav-underline .nav-link.active,
.nav-underline .show > .nav-link {
  font-weight: 700;
  color: var(--ui-nav-underline-link-active-color);
  border-bottom-color: currentcolor;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  --ui-navbar-padding-x: 0;
  --ui-navbar-padding-y: 0.5rem;
  --ui-navbar-color: rgba(var(--ui-emphasis-color-rgb), 0.65);
  --ui-navbar-hover-color: rgba(var(--ui-emphasis-color-rgb), 0.8);
  --ui-navbar-disabled-color: rgba(var(--ui-emphasis-color-rgb), 0.3);
  --ui-navbar-active-color: rgba(var(--ui-emphasis-color-rgb), 1);
  --ui-navbar-brand-padding-y: 0.3125rem;
  --ui-navbar-brand-margin-end: 1rem;
  --ui-navbar-brand-font-size: 1.25rem;
  --ui-navbar-brand-color: rgba(var(--ui-emphasis-color-rgb), 1);
  --ui-navbar-brand-hover-color: rgba(var(--ui-emphasis-color-rgb), 1);
  --ui-navbar-nav-link-padding-x: 0.5rem;
  --ui-navbar-toggler-padding-y: 0.25rem;
  --ui-navbar-toggler-padding-x: 0.75rem;
  --ui-navbar-toggler-font-size: 1.25rem;
  --ui-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  --ui-navbar-toggler-border-color: rgba(var(--ui-emphasis-color-rgb), 0.15);
  --ui-navbar-toggler-border-radius: var(--ui-border-radius);
  --ui-navbar-toggler-focus-width: 0.25rem;
  --ui-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--ui-navbar-padding-y) var(--ui-navbar-padding-x);
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: var(--ui-navbar-brand-padding-y);
  padding-bottom: var(--ui-navbar-brand-padding-y);
  margin-right: var(--ui-navbar-brand-margin-end);
  font-size: var(--ui-navbar-brand-font-size);
  color: var(--ui-navbar-brand-color);
  text-decoration: none;
  white-space: nowrap;
}
.navbar-brand:hover, .navbar-brand:focus {
  color: var(--ui-navbar-brand-hover-color);
}

.navbar-nav {
  --ui-nav-link-padding-x: 0;
  --ui-nav-link-padding-y: 0.5rem;
  --ui-nav-link-font-weight: ;
  --ui-nav-link-color: var(--ui-navbar-color);
  --ui-nav-link-hover-color: var(--ui-navbar-hover-color);
  --ui-nav-link-disabled-color: var(--ui-navbar-disabled-color);
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
  color: var(--ui-navbar-active-color);
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--ui-navbar-color);
}
.navbar-text a,
.navbar-text a:hover,
.navbar-text a:focus {
  color: var(--ui-navbar-active-color);
}

.navbar-collapse {
  flex-grow: 1;
  flex-basis: 100%;
  align-items: center;
}

.navbar-toggler {
  padding: var(--ui-navbar-toggler-padding-y) var(--ui-navbar-toggler-padding-x);
  font-size: var(--ui-navbar-toggler-font-size);
  line-height: 1;
  color: var(--ui-navbar-color);
  background-color: transparent;
  border: var(--ui-border-width) solid var(--ui-navbar-toggler-border-color);
  border-radius: var(--ui-navbar-toggler-border-radius);
  transition: var(--ui-navbar-toggler-transition);
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 var(--ui-navbar-toggler-focus-width);
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: var(--ui-navbar-toggler-icon-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--ui-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: var(--ui-navbar-nav-link-padding-x);
    padding-left: var(--ui-navbar-nav-link-padding-x);
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
  .navbar-expand-sm .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: var(--ui-navbar-nav-link-padding-x);
    padding-left: var(--ui-navbar-nav-link-padding-x);
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
  .navbar-expand-md .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: var(--ui-navbar-nav-link-padding-x);
    padding-left: var(--ui-navbar-nav-link-padding-x);
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
  .navbar-expand-lg .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: var(--ui-navbar-nav-link-padding-x);
    padding-left: var(--ui-navbar-nav-link-padding-x);
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: var(--ui-navbar-nav-link-padding-x);
    padding-left: var(--ui-navbar-nav-link-padding-x);
  }
  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xxl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-xxl .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-xxl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: var(--ui-navbar-nav-link-padding-x);
  padding-left: var(--ui-navbar-nav-link-padding-x);
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}
.navbar-expand .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  transition: none;
}
.navbar-expand .offcanvas .offcanvas-header {
  display: none;
}
.navbar-expand .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}

.navbar-dark,
.navbar[data-bs-theme=dark] {
  --ui-navbar-color: rgba(255, 255, 255, 0.55);
  --ui-navbar-hover-color: rgba(255, 255, 255, 0.75);
  --ui-navbar-disabled-color: rgba(255, 255, 255, 0.25);
  --ui-navbar-active-color: #fff;
  --ui-navbar-brand-color: #fff;
  --ui-navbar-brand-hover-color: #fff;
  --ui-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
  --ui-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

[data-bs-theme=dark] .navbar-toggler-icon {
  --ui-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.card {
  --ui-card-spacer-y: 1rem;
  --ui-card-spacer-x: 1rem;
  --ui-card-title-spacer-y: 0.5rem;
  --ui-card-title-color: ;
  --ui-card-subtitle-color: ;
  --ui-card-border-width: var(--ui-border-width);
  --ui-card-border-color: var(--ui-border-color-translucent);
  --ui-card-border-radius: var(--ui-border-radius);
  --ui-card-box-shadow: ;
  --ui-card-inner-border-radius: calc(var(--ui-border-radius) - (var(--ui-border-width)));
  --ui-card-cap-padding-y: 0.5rem;
  --ui-card-cap-padding-x: 1rem;
  --ui-card-cap-bg: rgba(var(--ui-body-color-rgb), 0.03);
  --ui-card-cap-color: ;
  --ui-card-height: ;
  --ui-card-color: ;
  --ui-card-bg: var(--ui-body-bg);
  --ui-card-img-overlay-padding: 1rem;
  --ui-card-group-margin: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--ui-card-height);
  color: var(--ui-body-color);
  word-wrap: break-word;
  background-color: var(--ui-card-bg);
  background-clip: border-box;
  border: var(--ui-card-border-width) solid var(--ui-card-border-color);
  border-radius: var(--ui-card-border-radius);
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: var(--ui-card-inner-border-radius);
  border-top-right-radius: var(--ui-card-inner-border-radius);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: var(--ui-card-inner-border-radius);
  border-bottom-left-radius: var(--ui-card-inner-border-radius);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: var(--ui-card-spacer-y) var(--ui-card-spacer-x);
  color: var(--ui-card-color);
}

.card-title {
  margin-bottom: var(--ui-card-title-spacer-y);
  color: var(--ui-card-title-color);
}

.card-subtitle {
  margin-top: calc(-0.5 * var(--ui-card-title-spacer-y));
  margin-bottom: 0;
  color: var(--ui-card-subtitle-color);
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link + .card-link {
  margin-left: var(--ui-card-spacer-x);
}

.card-header {
  padding: var(--ui-card-cap-padding-y) var(--ui-card-cap-padding-x);
  margin-bottom: 0;
  color: var(--ui-card-cap-color);
  background-color: var(--ui-card-cap-bg);
  border-bottom: var(--ui-card-border-width) solid var(--ui-card-border-color);
}
.card-header:first-child {
  border-radius: var(--ui-card-inner-border-radius) var(--ui-card-inner-border-radius) 0 0;
}

.card-footer {
  padding: var(--ui-card-cap-padding-y) var(--ui-card-cap-padding-x);
  color: var(--ui-card-cap-color);
  background-color: var(--ui-card-cap-bg);
  border-top: var(--ui-card-border-width) solid var(--ui-card-border-color);
}
.card-footer:last-child {
  border-radius: 0 0 var(--ui-card-inner-border-radius) var(--ui-card-inner-border-radius);
}

.card-header-tabs {
  margin-right: calc(-0.5 * var(--ui-card-cap-padding-x));
  margin-bottom: calc(-1 * var(--ui-card-cap-padding-y));
  margin-left: calc(-0.5 * var(--ui-card-cap-padding-x));
  border-bottom: 0;
}
.card-header-tabs .nav-link.active {
  background-color: var(--ui-card-bg);
  border-bottom-color: var(--ui-card-bg);
}

.card-header-pills {
  margin-right: calc(-0.5 * var(--ui-card-cap-padding-x));
  margin-left: calc(-0.5 * var(--ui-card-cap-padding-x));
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--ui-card-img-overlay-padding);
  border-radius: var(--ui-card-inner-border-radius);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: var(--ui-card-inner-border-radius);
  border-top-right-radius: var(--ui-card-inner-border-radius);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: var(--ui-card-inner-border-radius);
  border-bottom-left-radius: var(--ui-card-inner-border-radius);
}

.card-group > .card {
  margin-bottom: var(--ui-card-group-margin);
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) > .card-img-top,
  .card-group > .card:not(:last-child) > .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) > .card-img-bottom,
  .card-group > .card:not(:last-child) > .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) > .card-img-top,
  .card-group > .card:not(:first-child) > .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) > .card-img-bottom,
  .card-group > .card:not(:first-child) > .card-footer {
    border-bottom-left-radius: 0;
  }
}

.accordion {
  --ui-accordion-color: var(--ui-body-color);
  --ui-accordion-bg: var(--ui-body-bg);
  --ui-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
  --ui-accordion-border-color: var(--ui-border-color);
  --ui-accordion-border-width: var(--ui-border-width);
  --ui-accordion-border-radius: var(--ui-border-radius);
  --ui-accordion-inner-border-radius: calc(var(--ui-border-radius) - (var(--ui-border-width)));
  --ui-accordion-btn-padding-x: 1.25rem;
  --ui-accordion-btn-padding-y: 1rem;
  --ui-accordion-btn-color: var(--ui-body-color);
  --ui-accordion-btn-bg: var(--ui-accordion-bg);
  --ui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  --ui-accordion-btn-icon-width: 1.25rem;
  --ui-accordion-btn-icon-transform: rotate(-180deg);
  --ui-accordion-btn-icon-transition: transform 0.2s ease-in-out;
  --ui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='rgb%2821.9912, 77.9688, 40.6504%29' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  --ui-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(54.978, 194.922, 101.626, 0.25);
  --ui-accordion-body-padding-x: 1.25rem;
  --ui-accordion-body-padding-y: 1rem;
  --ui-accordion-active-color: var(--ui-primary-text-emphasis);
  --ui-accordion-active-bg: var(--ui-primary-bg-subtle);
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--ui-accordion-btn-padding-y) var(--ui-accordion-btn-padding-x);
  font-size: 1rem;
  color: var(--ui-accordion-btn-color);
  text-align: left;
  background-color: var(--ui-accordion-btn-bg);
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: var(--ui-accordion-transition);
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button:not(.collapsed) {
  color: var(--ui-accordion-active-color);
  background-color: var(--ui-accordion-active-bg);
  box-shadow: inset 0 calc(-1 * var(--ui-accordion-border-width)) 0 var(--ui-accordion-border-color);
}
.accordion-button:not(.collapsed)::after {
  background-image: var(--ui-accordion-btn-active-icon);
  transform: var(--ui-accordion-btn-icon-transform);
}
.accordion-button::after {
  flex-shrink: 0;
  width: var(--ui-accordion-btn-icon-width);
  height: var(--ui-accordion-btn-icon-width);
  margin-left: auto;
  content: "";
  background-image: var(--ui-accordion-btn-icon);
  background-repeat: no-repeat;
  background-size: var(--ui-accordion-btn-icon-width);
  transition: var(--ui-accordion-btn-icon-transition);
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  outline: 0;
  box-shadow: var(--ui-accordion-btn-focus-box-shadow);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  color: var(--ui-accordion-color);
  background-color: var(--ui-accordion-bg);
  border: var(--ui-accordion-border-width) solid var(--ui-accordion-border-color);
}
.accordion-item:first-of-type {
  border-top-left-radius: var(--ui-accordion-border-radius);
  border-top-right-radius: var(--ui-accordion-border-radius);
}
.accordion-item:first-of-type > .accordion-header .accordion-button {
  border-top-left-radius: var(--ui-accordion-inner-border-radius);
  border-top-right-radius: var(--ui-accordion-inner-border-radius);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: var(--ui-accordion-border-radius);
  border-bottom-left-radius: var(--ui-accordion-border-radius);
}
.accordion-item:last-of-type > .accordion-header .accordion-button.collapsed {
  border-bottom-right-radius: var(--ui-accordion-inner-border-radius);
  border-bottom-left-radius: var(--ui-accordion-inner-border-radius);
}
.accordion-item:last-of-type > .accordion-collapse {
  border-bottom-right-radius: var(--ui-accordion-border-radius);
  border-bottom-left-radius: var(--ui-accordion-border-radius);
}

.accordion-body {
  padding: var(--ui-accordion-body-padding-y) var(--ui-accordion-body-padding-x);
}

.accordion-flush > .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush > .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush > .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush > .accordion-item > .accordion-collapse,
.accordion-flush > .accordion-item > .accordion-header .accordion-button,
.accordion-flush > .accordion-item > .accordion-header .accordion-button.collapsed {
  border-radius: 0;
}

[data-bs-theme=dark] .accordion-button::after {
  --ui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgb%28134.9868, 218.9532, 162.9756%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e");
  --ui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgb%28134.9868, 218.9532, 162.9756%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e");
}

.breadcrumb {
  --ui-breadcrumb-padding-x: 0;
  --ui-breadcrumb-padding-y: 0;
  --ui-breadcrumb-margin-bottom: 1rem;
  --ui-breadcrumb-bg: ;
  --ui-breadcrumb-border-radius: ;
  --ui-breadcrumb-divider-color: var(--ui-secondary-color);
  --ui-breadcrumb-item-padding-x: 0.5rem;
  --ui-breadcrumb-item-active-color: var(--ui-secondary-color);
  display: flex;
  flex-wrap: wrap;
  padding: var(--ui-breadcrumb-padding-y) var(--ui-breadcrumb-padding-x);
  margin-bottom: var(--ui-breadcrumb-margin-bottom);
  font-size: var(--ui-breadcrumb-font-size);
  list-style: none;
  background-color: var(--ui-breadcrumb-bg);
  border-radius: var(--ui-breadcrumb-border-radius);
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: var(--ui-breadcrumb-item-padding-x);
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: var(--ui-breadcrumb-item-padding-x);
  color: var(--ui-breadcrumb-divider-color);
  content: var(--ui-breadcrumb-divider, "/") /* rtl: var(--ui-breadcrumb-divider, "/") */;
}
.breadcrumb-item.active {
  color: var(--ui-breadcrumb-item-active-color);
}

.pagination {
  --ui-pagination-padding-x: 0.75rem;
  --ui-pagination-padding-y: 0.375rem;
  --ui-pagination-font-size: 1rem;
  --ui-pagination-color: var(--ui-link-color);
  --ui-pagination-bg: var(--ui-body-bg);
  --ui-pagination-border-width: var(--ui-border-width);
  --ui-pagination-border-color: var(--ui-border-color);
  --ui-pagination-border-radius: var(--ui-border-radius);
  --ui-pagination-hover-color: var(--ui-link-hover-color);
  --ui-pagination-hover-bg: var(--ui-tertiary-bg);
  --ui-pagination-hover-border-color: var(--ui-border-color);
  --ui-pagination-focus-color: var(--ui-link-hover-color);
  --ui-pagination-focus-bg: var(--ui-secondary-bg);
  --ui-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(54.978, 194.922, 101.626, 0.25);
  --ui-pagination-active-color: #fff;
  --ui-pagination-active-bg: hsl(140, 56%, 49%);
  --ui-pagination-active-border-color: hsl(140, 56%, 49%);
  --ui-pagination-disabled-color: var(--ui-secondary-color);
  --ui-pagination-disabled-bg: var(--ui-secondary-bg);
  --ui-pagination-disabled-border-color: var(--ui-border-color);
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  padding: var(--ui-pagination-padding-y) var(--ui-pagination-padding-x);
  font-size: var(--ui-pagination-font-size);
  color: var(--ui-pagination-color);
  text-decoration: none;
  background-color: var(--ui-pagination-bg);
  border: var(--ui-pagination-border-width) solid var(--ui-pagination-border-color);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}
.page-link:hover {
  z-index: 2;
  color: var(--ui-pagination-hover-color);
  background-color: var(--ui-pagination-hover-bg);
  border-color: var(--ui-pagination-hover-border-color);
}
.page-link:focus {
  z-index: 3;
  color: var(--ui-pagination-focus-color);
  background-color: var(--ui-pagination-focus-bg);
  outline: 0;
  box-shadow: var(--ui-pagination-focus-box-shadow);
}
.page-link.active, .active > .page-link {
  z-index: 3;
  color: var(--ui-pagination-active-color);
  background-color: var(--ui-pagination-active-bg);
  border-color: var(--ui-pagination-active-border-color);
}
.page-link.disabled, .disabled > .page-link {
  color: var(--ui-pagination-disabled-color);
  pointer-events: none;
  background-color: var(--ui-pagination-disabled-bg);
  border-color: var(--ui-pagination-disabled-border-color);
}

.page-item:not(:first-child) .page-link {
  margin-left: calc(-1 * var(--ui-border-width));
}
.page-item:first-child .page-link {
  border-top-left-radius: var(--ui-pagination-border-radius);
  border-bottom-left-radius: var(--ui-pagination-border-radius);
}
.page-item:last-child .page-link {
  border-top-right-radius: var(--ui-pagination-border-radius);
  border-bottom-right-radius: var(--ui-pagination-border-radius);
}

.pagination-lg {
  --ui-pagination-padding-x: 1.5rem;
  --ui-pagination-padding-y: 0.75rem;
  --ui-pagination-font-size: 1.25rem;
  --ui-pagination-border-radius: var(--ui-border-radius-lg);
}

.pagination-sm {
  --ui-pagination-padding-x: 0.5rem;
  --ui-pagination-padding-y: 0.25rem;
  --ui-pagination-font-size: 0.875rem;
  --ui-pagination-border-radius: var(--ui-border-radius-sm);
}

.badge {
  --ui-badge-padding-x: 0.65em;
  --ui-badge-padding-y: 0.35em;
  --ui-badge-font-size: 0.75em;
  --ui-badge-font-weight: 700;
  --ui-badge-color: #fff;
  --ui-badge-border-radius: var(--ui-border-radius);
  display: inline-block;
  padding: var(--ui-badge-padding-y) var(--ui-badge-padding-x);
  font-size: var(--ui-badge-font-size);
  font-weight: var(--ui-badge-font-weight);
  line-height: 1;
  color: var(--ui-badge-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--ui-badge-border-radius);
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.alert {
  --ui-alert-bg: transparent;
  --ui-alert-padding-x: 1rem;
  --ui-alert-padding-y: 1rem;
  --ui-alert-margin-bottom: 1rem;
  --ui-alert-color: inherit;
  --ui-alert-border-color: transparent;
  --ui-alert-border: var(--ui-border-width) solid var(--ui-alert-border-color);
  --ui-alert-border-radius: var(--ui-border-radius);
  --ui-alert-link-color: inherit;
  position: relative;
  padding: var(--ui-alert-padding-y) var(--ui-alert-padding-x);
  margin-bottom: var(--ui-alert-margin-bottom);
  color: var(--ui-alert-color);
  background-color: var(--ui-alert-bg);
  border: var(--ui-alert-border);
  border-radius: var(--ui-alert-border-radius);
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
  color: var(--ui-alert-link-color);
}

.alert-dismissible {
  padding-right: 3rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}

.alert-primary {
  --ui-alert-color: var(--ui-primary-text-emphasis);
  --ui-alert-bg: var(--ui-primary-bg-subtle);
  --ui-alert-border-color: var(--ui-primary-border-subtle);
  --ui-alert-link-color: var(--ui-primary-text-emphasis);
}

.alert-secondary {
  --ui-alert-color: var(--ui-secondary-text-emphasis);
  --ui-alert-bg: var(--ui-secondary-bg-subtle);
  --ui-alert-border-color: var(--ui-secondary-border-subtle);
  --ui-alert-link-color: var(--ui-secondary-text-emphasis);
}

.alert-success {
  --ui-alert-color: var(--ui-success-text-emphasis);
  --ui-alert-bg: var(--ui-success-bg-subtle);
  --ui-alert-border-color: var(--ui-success-border-subtle);
  --ui-alert-link-color: var(--ui-success-text-emphasis);
}

.alert-info {
  --ui-alert-color: var(--ui-info-text-emphasis);
  --ui-alert-bg: var(--ui-info-bg-subtle);
  --ui-alert-border-color: var(--ui-info-border-subtle);
  --ui-alert-link-color: var(--ui-info-text-emphasis);
}

.alert-warning {
  --ui-alert-color: var(--ui-warning-text-emphasis);
  --ui-alert-bg: var(--ui-warning-bg-subtle);
  --ui-alert-border-color: var(--ui-warning-border-subtle);
  --ui-alert-link-color: var(--ui-warning-text-emphasis);
}

.alert-danger {
  --ui-alert-color: var(--ui-danger-text-emphasis);
  --ui-alert-bg: var(--ui-danger-bg-subtle);
  --ui-alert-border-color: var(--ui-danger-border-subtle);
  --ui-alert-link-color: var(--ui-danger-text-emphasis);
}

.alert-light {
  --ui-alert-color: var(--ui-light-text-emphasis);
  --ui-alert-bg: var(--ui-light-bg-subtle);
  --ui-alert-border-color: var(--ui-light-border-subtle);
  --ui-alert-link-color: var(--ui-light-text-emphasis);
}

.alert-dark {
  --ui-alert-color: var(--ui-dark-text-emphasis);
  --ui-alert-bg: var(--ui-dark-bg-subtle);
  --ui-alert-border-color: var(--ui-dark-border-subtle);
  --ui-alert-link-color: var(--ui-dark-text-emphasis);
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: var(--ui-progress-height);
  }
}
.progress,
.progress-stacked {
  --ui-progress-height: 1rem;
  --ui-progress-font-size: 0.75rem;
  --ui-progress-bg: var(--ui-secondary-bg);
  --ui-progress-border-radius: var(--ui-border-radius);
  --ui-progress-box-shadow: var(--ui-box-shadow-inset);
  --ui-progress-bar-color: #fff;
  --ui-progress-bar-bg: hsl(140, 56%, 49%);
  --ui-progress-bar-transition: width 0.6s ease;
  display: flex;
  height: var(--ui-progress-height);
  overflow: hidden;
  font-size: var(--ui-progress-font-size);
  background-color: var(--ui-progress-bg);
  border-radius: var(--ui-progress-border-radius);
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--ui-progress-bar-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--ui-progress-bar-bg);
  transition: var(--ui-progress-bar-transition);
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: var(--ui-progress-height) var(--ui-progress-height);
}

.progress-stacked > .progress {
  overflow: visible;
}

.progress-stacked > .progress > .progress-bar {
  width: 100%;
}

.progress-bar-animated {
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    animation: none;
  }
}

.list-group {
  --ui-list-group-color: var(--ui-body-color);
  --ui-list-group-bg: var(--ui-body-bg);
  --ui-list-group-border-color: var(--ui-border-color);
  --ui-list-group-border-width: var(--ui-border-width);
  --ui-list-group-border-radius: var(--ui-border-radius);
  --ui-list-group-item-padding-x: 1rem;
  --ui-list-group-item-padding-y: 0.5rem;
  --ui-list-group-action-color: var(--ui-secondary-color);
  --ui-list-group-action-hover-color: var(--ui-emphasis-color);
  --ui-list-group-action-hover-bg: var(--ui-tertiary-bg);
  --ui-list-group-action-active-color: var(--ui-body-color);
  --ui-list-group-action-active-bg: var(--ui-secondary-bg);
  --ui-list-group-disabled-color: var(--ui-secondary-color);
  --ui-list-group-disabled-bg: var(--ui-body-bg);
  --ui-list-group-active-color: #fff;
  --ui-list-group-active-bg: hsl(140, 56%, 49%);
  --ui-list-group-active-border-color: hsl(140, 56%, 49%);
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: var(--ui-list-group-border-radius);
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > .list-group-item::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item {
  position: relative;
  display: block;
  padding: var(--ui-list-group-item-padding-y) var(--ui-list-group-item-padding-x);
  color: var(--ui-list-group-color);
  text-decoration: none;
  background-color: var(--ui-list-group-bg);
  border: var(--ui-list-group-border-width) solid var(--ui-list-group-border-color);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: var(--ui-list-group-disabled-color);
  pointer-events: none;
  background-color: var(--ui-list-group-disabled-bg);
}
.list-group-item.active {
  z-index: 2;
  color: var(--ui-list-group-active-color);
  background-color: var(--ui-list-group-active-bg);
  border-color: var(--ui-list-group-active-border-color);
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: calc(-1 * var(--ui-list-group-border-width));
  border-top-width: var(--ui-list-group-border-width);
}

.list-group-item-action {
  width: 100%;
  color: var(--ui-list-group-action-color);
  text-align: inherit;
}
.list-group-item-action:not(.active):hover, .list-group-item-action:not(.active):focus {
  z-index: 1;
  color: var(--ui-list-group-action-hover-color);
  text-decoration: none;
  background-color: var(--ui-list-group-action-hover-bg);
}
.list-group-item-action:not(.active):active {
  color: var(--ui-list-group-action-active-color);
  background-color: var(--ui-list-group-action-active-bg);
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--ui-list-group-border-radius);
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--ui-list-group-border-radius);
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: var(--ui-list-group-border-width);
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--ui-list-group-border-width));
  border-left-width: var(--ui-list-group-border-width);
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--ui-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--ui-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: var(--ui-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--ui-list-group-border-width));
    border-left-width: var(--ui-list-group-border-width);
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--ui-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--ui-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: var(--ui-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--ui-list-group-border-width));
    border-left-width: var(--ui-list-group-border-width);
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--ui-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--ui-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: var(--ui-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--ui-list-group-border-width));
    border-left-width: var(--ui-list-group-border-width);
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--ui-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--ui-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: var(--ui-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--ui-list-group-border-width));
    border-left-width: var(--ui-list-group-border-width);
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--ui-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--ui-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: var(--ui-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--ui-list-group-border-width));
    border-left-width: var(--ui-list-group-border-width);
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 var(--ui-list-group-border-width);
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  --ui-list-group-color: var(--ui-primary-text-emphasis);
  --ui-list-group-bg: var(--ui-primary-bg-subtle);
  --ui-list-group-border-color: var(--ui-primary-border-subtle);
  --ui-list-group-action-hover-color: var(--ui-emphasis-color);
  --ui-list-group-action-hover-bg: var(--ui-primary-border-subtle);
  --ui-list-group-action-active-color: var(--ui-emphasis-color);
  --ui-list-group-action-active-bg: var(--ui-primary-border-subtle);
  --ui-list-group-active-color: var(--ui-primary-bg-subtle);
  --ui-list-group-active-bg: var(--ui-primary-text-emphasis);
  --ui-list-group-active-border-color: var(--ui-primary-text-emphasis);
}

.list-group-item-secondary {
  --ui-list-group-color: var(--ui-secondary-text-emphasis);
  --ui-list-group-bg: var(--ui-secondary-bg-subtle);
  --ui-list-group-border-color: var(--ui-secondary-border-subtle);
  --ui-list-group-action-hover-color: var(--ui-emphasis-color);
  --ui-list-group-action-hover-bg: var(--ui-secondary-border-subtle);
  --ui-list-group-action-active-color: var(--ui-emphasis-color);
  --ui-list-group-action-active-bg: var(--ui-secondary-border-subtle);
  --ui-list-group-active-color: var(--ui-secondary-bg-subtle);
  --ui-list-group-active-bg: var(--ui-secondary-text-emphasis);
  --ui-list-group-active-border-color: var(--ui-secondary-text-emphasis);
}

.list-group-item-success {
  --ui-list-group-color: var(--ui-success-text-emphasis);
  --ui-list-group-bg: var(--ui-success-bg-subtle);
  --ui-list-group-border-color: var(--ui-success-border-subtle);
  --ui-list-group-action-hover-color: var(--ui-emphasis-color);
  --ui-list-group-action-hover-bg: var(--ui-success-border-subtle);
  --ui-list-group-action-active-color: var(--ui-emphasis-color);
  --ui-list-group-action-active-bg: var(--ui-success-border-subtle);
  --ui-list-group-active-color: var(--ui-success-bg-subtle);
  --ui-list-group-active-bg: var(--ui-success-text-emphasis);
  --ui-list-group-active-border-color: var(--ui-success-text-emphasis);
}

.list-group-item-info {
  --ui-list-group-color: var(--ui-info-text-emphasis);
  --ui-list-group-bg: var(--ui-info-bg-subtle);
  --ui-list-group-border-color: var(--ui-info-border-subtle);
  --ui-list-group-action-hover-color: var(--ui-emphasis-color);
  --ui-list-group-action-hover-bg: var(--ui-info-border-subtle);
  --ui-list-group-action-active-color: var(--ui-emphasis-color);
  --ui-list-group-action-active-bg: var(--ui-info-border-subtle);
  --ui-list-group-active-color: var(--ui-info-bg-subtle);
  --ui-list-group-active-bg: var(--ui-info-text-emphasis);
  --ui-list-group-active-border-color: var(--ui-info-text-emphasis);
}

.list-group-item-warning {
  --ui-list-group-color: var(--ui-warning-text-emphasis);
  --ui-list-group-bg: var(--ui-warning-bg-subtle);
  --ui-list-group-border-color: var(--ui-warning-border-subtle);
  --ui-list-group-action-hover-color: var(--ui-emphasis-color);
  --ui-list-group-action-hover-bg: var(--ui-warning-border-subtle);
  --ui-list-group-action-active-color: var(--ui-emphasis-color);
  --ui-list-group-action-active-bg: var(--ui-warning-border-subtle);
  --ui-list-group-active-color: var(--ui-warning-bg-subtle);
  --ui-list-group-active-bg: var(--ui-warning-text-emphasis);
  --ui-list-group-active-border-color: var(--ui-warning-text-emphasis);
}

.list-group-item-danger {
  --ui-list-group-color: var(--ui-danger-text-emphasis);
  --ui-list-group-bg: var(--ui-danger-bg-subtle);
  --ui-list-group-border-color: var(--ui-danger-border-subtle);
  --ui-list-group-action-hover-color: var(--ui-emphasis-color);
  --ui-list-group-action-hover-bg: var(--ui-danger-border-subtle);
  --ui-list-group-action-active-color: var(--ui-emphasis-color);
  --ui-list-group-action-active-bg: var(--ui-danger-border-subtle);
  --ui-list-group-active-color: var(--ui-danger-bg-subtle);
  --ui-list-group-active-bg: var(--ui-danger-text-emphasis);
  --ui-list-group-active-border-color: var(--ui-danger-text-emphasis);
}

.list-group-item-light {
  --ui-list-group-color: var(--ui-light-text-emphasis);
  --ui-list-group-bg: var(--ui-light-bg-subtle);
  --ui-list-group-border-color: var(--ui-light-border-subtle);
  --ui-list-group-action-hover-color: var(--ui-emphasis-color);
  --ui-list-group-action-hover-bg: var(--ui-light-border-subtle);
  --ui-list-group-action-active-color: var(--ui-emphasis-color);
  --ui-list-group-action-active-bg: var(--ui-light-border-subtle);
  --ui-list-group-active-color: var(--ui-light-bg-subtle);
  --ui-list-group-active-bg: var(--ui-light-text-emphasis);
  --ui-list-group-active-border-color: var(--ui-light-text-emphasis);
}

.list-group-item-dark {
  --ui-list-group-color: var(--ui-dark-text-emphasis);
  --ui-list-group-bg: var(--ui-dark-bg-subtle);
  --ui-list-group-border-color: var(--ui-dark-border-subtle);
  --ui-list-group-action-hover-color: var(--ui-emphasis-color);
  --ui-list-group-action-hover-bg: var(--ui-dark-border-subtle);
  --ui-list-group-action-active-color: var(--ui-emphasis-color);
  --ui-list-group-action-active-bg: var(--ui-dark-border-subtle);
  --ui-list-group-active-color: var(--ui-dark-bg-subtle);
  --ui-list-group-active-bg: var(--ui-dark-text-emphasis);
  --ui-list-group-active-border-color: var(--ui-dark-text-emphasis);
}

.btn-close {
  --ui-btn-close-color: #000;
  --ui-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e");
  --ui-btn-close-opacity: 0.5;
  --ui-btn-close-hover-opacity: 0.75;
  --ui-btn-close-focus-shadow: 0 0 0 0.25rem rgba(54.978, 194.922, 101.626, 0.25);
  --ui-btn-close-focus-opacity: 1;
  --ui-btn-close-disabled-opacity: 0.25;
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: var(--ui-btn-close-color);
  background: transparent var(--ui-btn-close-bg) center/1em auto no-repeat;
  filter: var(--ui-btn-close-filter);
  border: 0;
  border-radius: 0.375rem;
  opacity: var(--ui-btn-close-opacity);
}
.btn-close:hover {
  color: var(--ui-btn-close-color);
  text-decoration: none;
  opacity: var(--ui-btn-close-hover-opacity);
}
.btn-close:focus {
  outline: 0;
  box-shadow: var(--ui-btn-close-focus-shadow);
  opacity: var(--ui-btn-close-focus-opacity);
}
.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  user-select: none;
  opacity: var(--ui-btn-close-disabled-opacity);
}

.btn-close-white {
  --ui-btn-close-filter: invert(1) grayscale(100%) brightness(200%);
}

:root,
[data-bs-theme=light] {
  --ui-btn-close-filter: ;
}

[data-bs-theme=dark] {
  --ui-btn-close-filter: invert(1) grayscale(100%) brightness(200%);
}

.toast {
  --ui-toast-zindex: 1090;
  --ui-toast-padding-x: 0.75rem;
  --ui-toast-padding-y: 0.5rem;
  --ui-toast-spacing: 1.5rem;
  --ui-toast-max-width: 350px;
  --ui-toast-font-size: 0.875rem;
  --ui-toast-color: ;
  --ui-toast-bg: rgba(var(--ui-body-bg-rgb), 0.85);
  --ui-toast-border-width: var(--ui-border-width);
  --ui-toast-border-color: var(--ui-border-color-translucent);
  --ui-toast-border-radius: var(--ui-border-radius);
  --ui-toast-box-shadow: var(--ui-box-shadow);
  --ui-toast-header-color: var(--ui-secondary-color);
  --ui-toast-header-bg: rgba(var(--ui-body-bg-rgb), 0.85);
  --ui-toast-header-border-color: var(--ui-border-color-translucent);
  width: var(--ui-toast-max-width);
  max-width: 100%;
  font-size: var(--ui-toast-font-size);
  color: var(--ui-toast-color);
  pointer-events: auto;
  background-color: var(--ui-toast-bg);
  background-clip: padding-box;
  border: var(--ui-toast-border-width) solid var(--ui-toast-border-color);
  box-shadow: var(--ui-toast-box-shadow);
  border-radius: var(--ui-toast-border-radius);
}
.toast.showing {
  opacity: 0;
}
.toast:not(.show) {
  display: none;
}

.toast-container {
  --ui-toast-zindex: 1090;
  position: absolute;
  z-index: var(--ui-toast-zindex);
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.toast-container > :not(:last-child) {
  margin-bottom: var(--ui-toast-spacing);
}

.toast-header {
  display: flex;
  align-items: center;
  padding: var(--ui-toast-padding-y) var(--ui-toast-padding-x);
  color: var(--ui-toast-header-color);
  background-color: var(--ui-toast-header-bg);
  background-clip: padding-box;
  border-bottom: var(--ui-toast-border-width) solid var(--ui-toast-header-border-color);
  border-top-left-radius: calc(var(--ui-toast-border-radius) - var(--ui-toast-border-width));
  border-top-right-radius: calc(var(--ui-toast-border-radius) - var(--ui-toast-border-width));
}
.toast-header .btn-close {
  margin-right: calc(-0.5 * var(--ui-toast-padding-x));
  margin-left: var(--ui-toast-padding-x);
}

.toast-body {
  padding: var(--ui-toast-padding-x);
  word-wrap: break-word;
}

.modal {
  --ui-modal-zindex: 1055;
  --ui-modal-width: 500px;
  --ui-modal-padding: 1rem;
  --ui-modal-margin: 0.5rem;
  --ui-modal-color: var(--ui-body-color);
  --ui-modal-bg: var(--ui-body-bg);
  --ui-modal-border-color: var(--ui-border-color-translucent);
  --ui-modal-border-width: var(--ui-border-width);
  --ui-modal-border-radius: var(--ui-border-radius-lg);
  --ui-modal-box-shadow: var(--ui-box-shadow-sm);
  --ui-modal-inner-border-radius: calc(var(--ui-border-radius-lg) - (var(--ui-border-width)));
  --ui-modal-header-padding-x: 1rem;
  --ui-modal-header-padding-y: 1rem;
  --ui-modal-header-padding: 1rem 1rem;
  --ui-modal-header-border-color: var(--ui-border-color);
  --ui-modal-header-border-width: var(--ui-border-width);
  --ui-modal-title-line-height: 1.5;
  --ui-modal-footer-gap: 0.5rem;
  --ui-modal-footer-bg: ;
  --ui-modal-footer-border-color: var(--ui-border-color);
  --ui-modal-footer-border-width: var(--ui-border-width);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--ui-modal-zindex);
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: var(--ui-modal-margin);
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transform: translate(0, -50px);
  transition: transform 0.3s ease-out;
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - var(--ui-modal-margin) * 2);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - var(--ui-modal-margin) * 2);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--ui-modal-color);
  pointer-events: auto;
  background-color: var(--ui-modal-bg);
  background-clip: padding-box;
  border: var(--ui-modal-border-width) solid var(--ui-modal-border-color);
  border-radius: var(--ui-modal-border-radius);
  outline: 0;
}

.modal-backdrop {
  --ui-backdrop-zindex: 1050;
  --ui-backdrop-bg: #000;
  --ui-backdrop-opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--ui-backdrop-zindex);
  width: 100vw;
  height: 100vh;
  background-color: var(--ui-backdrop-bg);
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: var(--ui-backdrop-opacity);
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: var(--ui-modal-header-padding);
  border-bottom: var(--ui-modal-header-border-width) solid var(--ui-modal-header-border-color);
  border-top-left-radius: var(--ui-modal-inner-border-radius);
  border-top-right-radius: var(--ui-modal-inner-border-radius);
}
.modal-header .btn-close {
  padding: calc(var(--ui-modal-header-padding-y) * 0.5) calc(var(--ui-modal-header-padding-x) * 0.5);
  margin-top: calc(-0.5 * var(--ui-modal-header-padding-y));
  margin-right: calc(-0.5 * var(--ui-modal-header-padding-x));
  margin-bottom: calc(-0.5 * var(--ui-modal-header-padding-y));
  margin-left: auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: var(--ui-modal-title-line-height);
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: var(--ui-modal-padding);
}

.modal-footer {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: calc(var(--ui-modal-padding) - var(--ui-modal-footer-gap) * 0.5);
  background-color: var(--ui-modal-footer-bg);
  border-top: var(--ui-modal-footer-border-width) solid var(--ui-modal-footer-border-color);
  border-bottom-right-radius: var(--ui-modal-inner-border-radius);
  border-bottom-left-radius: var(--ui-modal-inner-border-radius);
}
.modal-footer > * {
  margin: calc(var(--ui-modal-footer-gap) * 0.5);
}

@media (min-width: 576px) {
  .modal {
    --ui-modal-margin: 1.75rem;
    --ui-modal-box-shadow: var(--ui-box-shadow);
  }
  .modal-dialog {
    max-width: var(--ui-modal-width);
    margin-right: auto;
    margin-left: auto;
  }
  .modal-sm {
    --ui-modal-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
    --ui-modal-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    --ui-modal-width: 1140px;
  }
}
.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.modal-fullscreen .modal-header,
.modal-fullscreen .modal-footer {
  border-radius: 0;
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}

@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-header,
  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-header,
  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-header,
  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 1199.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-header,
  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-header,
  .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
}
.tooltip {
  --ui-tooltip-zindex: 1080;
  --ui-tooltip-max-width: 200px;
  --ui-tooltip-padding-x: 0.5rem;
  --ui-tooltip-padding-y: 0.25rem;
  --ui-tooltip-margin: ;
  --ui-tooltip-font-size: 0.875rem;
  --ui-tooltip-color: var(--ui-body-bg);
  --ui-tooltip-bg: var(--ui-emphasis-color);
  --ui-tooltip-border-radius: var(--ui-border-radius);
  --ui-tooltip-opacity: 0.9;
  --ui-tooltip-arrow-width: 0.8rem;
  --ui-tooltip-arrow-height: 0.4rem;
  z-index: var(--ui-tooltip-zindex);
  display: block;
  margin: var(--ui-tooltip-margin);
  font-family: var(--ui-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  white-space: normal;
  word-spacing: normal;
  line-break: auto;
  font-size: var(--ui-tooltip-font-size);
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: var(--ui-tooltip-opacity);
}
.tooltip .tooltip-arrow {
  display: block;
  width: var(--ui-tooltip-arrow-width);
  height: var(--ui-tooltip-arrow-height);
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: calc(-1 * var(--ui-tooltip-arrow-height));
}
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: var(--ui-tooltip-arrow-height) calc(var(--ui-tooltip-arrow-width) * 0.5) 0;
  border-top-color: var(--ui-tooltip-bg);
}

/* rtl:begin:ignore */
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: calc(-1 * var(--ui-tooltip-arrow-height));
  width: var(--ui-tooltip-arrow-height);
  height: var(--ui-tooltip-arrow-width);
}
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: calc(var(--ui-tooltip-arrow-width) * 0.5) var(--ui-tooltip-arrow-height) calc(var(--ui-tooltip-arrow-width) * 0.5) 0;
  border-right-color: var(--ui-tooltip-bg);
}

/* rtl:end:ignore */
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: calc(-1 * var(--ui-tooltip-arrow-height));
}
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 calc(var(--ui-tooltip-arrow-width) * 0.5) var(--ui-tooltip-arrow-height);
  border-bottom-color: var(--ui-tooltip-bg);
}

/* rtl:begin:ignore */
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: calc(-1 * var(--ui-tooltip-arrow-height));
  width: var(--ui-tooltip-arrow-height);
  height: var(--ui-tooltip-arrow-width);
}
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: calc(var(--ui-tooltip-arrow-width) * 0.5) 0 calc(var(--ui-tooltip-arrow-width) * 0.5) var(--ui-tooltip-arrow-height);
  border-left-color: var(--ui-tooltip-bg);
}

/* rtl:end:ignore */
.tooltip-inner {
  max-width: var(--ui-tooltip-max-width);
  padding: var(--ui-tooltip-padding-y) var(--ui-tooltip-padding-x);
  color: var(--ui-tooltip-color);
  text-align: center;
  background-color: var(--ui-tooltip-bg);
  border-radius: var(--ui-tooltip-border-radius);
}

.popover {
  --ui-popover-zindex: 1070;
  --ui-popover-max-width: 276px;
  --ui-popover-font-size: 0.875rem;
  --ui-popover-bg: var(--ui-body-bg);
  --ui-popover-border-width: var(--ui-border-width);
  --ui-popover-border-color: var(--ui-border-color-translucent);
  --ui-popover-border-radius: var(--ui-border-radius-lg);
  --ui-popover-inner-border-radius: calc(var(--ui-border-radius-lg) - var(--ui-border-width));
  --ui-popover-box-shadow: var(--ui-box-shadow);
  --ui-popover-header-padding-x: 1rem;
  --ui-popover-header-padding-y: 0.5rem;
  --ui-popover-header-font-size: 1rem;
  --ui-popover-header-color: inherit;
  --ui-popover-header-bg: var(--ui-secondary-bg);
  --ui-popover-body-padding-x: 1rem;
  --ui-popover-body-padding-y: 1rem;
  --ui-popover-body-color: var(--ui-body-color);
  --ui-popover-arrow-width: 1rem;
  --ui-popover-arrow-height: 0.5rem;
  --ui-popover-arrow-border: var(--ui-popover-border-color);
  z-index: var(--ui-popover-zindex);
  display: block;
  max-width: var(--ui-popover-max-width);
  font-family: var(--ui-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  white-space: normal;
  word-spacing: normal;
  line-break: auto;
  font-size: var(--ui-popover-font-size);
  word-wrap: break-word;
  background-color: var(--ui-popover-bg);
  background-clip: padding-box;
  border: var(--ui-popover-border-width) solid var(--ui-popover-border-color);
  border-radius: var(--ui-popover-border-radius);
}
.popover .popover-arrow {
  display: block;
  width: var(--ui-popover-arrow-width);
  height: var(--ui-popover-arrow-height);
}
.popover .popover-arrow::before, .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
  border-width: 0;
}

.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-1 * (var(--ui-popover-arrow-height)) - var(--ui-popover-border-width));
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, .bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  border-width: var(--ui-popover-arrow-height) calc(var(--ui-popover-arrow-width) * 0.5) 0;
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-top-color: var(--ui-popover-arrow-border);
}
.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: var(--ui-popover-border-width);
  border-top-color: var(--ui-popover-bg);
}

/* rtl:begin:ignore */
.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-1 * (var(--ui-popover-arrow-height)) - var(--ui-popover-border-width));
  width: var(--ui-popover-arrow-height);
  height: var(--ui-popover-arrow-width);
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, .bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  border-width: calc(var(--ui-popover-arrow-width) * 0.5) var(--ui-popover-arrow-height) calc(var(--ui-popover-arrow-width) * 0.5) 0;
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-right-color: var(--ui-popover-arrow-border);
}
.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: var(--ui-popover-border-width);
  border-right-color: var(--ui-popover-bg);
}

/* rtl:end:ignore */
.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-1 * (var(--ui-popover-arrow-height)) - var(--ui-popover-border-width));
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, .bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  border-width: 0 calc(var(--ui-popover-arrow-width) * 0.5) var(--ui-popover-arrow-height);
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-bottom-color: var(--ui-popover-arrow-border);
}
.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: var(--ui-popover-border-width);
  border-bottom-color: var(--ui-popover-bg);
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: var(--ui-popover-arrow-width);
  margin-left: calc(-0.5 * var(--ui-popover-arrow-width));
  content: "";
  border-bottom: var(--ui-popover-border-width) solid var(--ui-popover-header-bg);
}

/* rtl:begin:ignore */
.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-1 * (var(--ui-popover-arrow-height)) - var(--ui-popover-border-width));
  width: var(--ui-popover-arrow-height);
  height: var(--ui-popover-arrow-width);
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, .bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  border-width: calc(var(--ui-popover-arrow-width) * 0.5) 0 calc(var(--ui-popover-arrow-width) * 0.5) var(--ui-popover-arrow-height);
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-left-color: var(--ui-popover-arrow-border);
}
.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: var(--ui-popover-border-width);
  border-left-color: var(--ui-popover-bg);
}

/* rtl:end:ignore */
.popover-header {
  padding: var(--ui-popover-header-padding-y) var(--ui-popover-header-padding-x);
  margin-bottom: 0;
  font-size: var(--ui-popover-header-font-size);
  color: var(--ui-popover-header-color);
  background-color: var(--ui-popover-header-bg);
  border-bottom: var(--ui-popover-border-width) solid var(--ui-popover-border-color);
  border-top-left-radius: var(--ui-popover-inner-border-radius);
  border-top-right-radius: var(--ui-popover-inner-border-radius);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: var(--ui-popover-body-padding-y) var(--ui-popover-body-padding-x);
  color: var(--ui-popover-body-color);
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
  .carousel-fade .active.carousel-item-end {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  filter: var(--ui-carousel-control-icon-filter);
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
  .carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e") /*rtl:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e")*/;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e") /*rtl:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e")*/;
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: var(--ui-carousel-indicator-active-bg);
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: var(--ui-carousel-caption-color);
  text-align: center;
}

.carousel-dark {
  --ui-carousel-indicator-active-bg: #000;
  --ui-carousel-caption-color: #000;
  --ui-carousel-control-icon-filter: invert(1) grayscale(100);
}

:root,
[data-bs-theme=light] {
  --ui-carousel-indicator-active-bg: #fff;
  --ui-carousel-caption-color: #fff;
  --ui-carousel-control-icon-filter: ;
}

[data-bs-theme=dark] {
  --ui-carousel-indicator-active-bg: #000;
  --ui-carousel-caption-color: #000;
  --ui-carousel-control-icon-filter: invert(1) grayscale(100);
}

.spinner-grow,
.spinner-border {
  display: inline-block;
  width: var(--ui-spinner-width);
  height: var(--ui-spinner-height);
  vertical-align: var(--ui-spinner-vertical-align);
  border-radius: 50%;
  animation: var(--ui-spinner-animation-speed) linear infinite var(--ui-spinner-animation-name);
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.spinner-border {
  --ui-spinner-width: 2rem;
  --ui-spinner-height: 2rem;
  --ui-spinner-vertical-align: -0.125em;
  --ui-spinner-border-width: 0.25em;
  --ui-spinner-animation-speed: 0.75s;
  --ui-spinner-animation-name: spinner-border;
  border: var(--ui-spinner-border-width) solid currentcolor;
  border-right-color: transparent;
}

.spinner-border-sm {
  --ui-spinner-width: 1rem;
  --ui-spinner-height: 1rem;
  --ui-spinner-border-width: 0.2em;
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  --ui-spinner-width: 2rem;
  --ui-spinner-height: 2rem;
  --ui-spinner-vertical-align: -0.125em;
  --ui-spinner-animation-speed: 0.75s;
  --ui-spinner-animation-name: spinner-grow;
  background-color: currentcolor;
  opacity: 0;
}

.spinner-grow-sm {
  --ui-spinner-width: 1rem;
  --ui-spinner-height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-border,
  .spinner-grow {
    --ui-spinner-animation-speed: 1.5s;
  }
}
.offcanvas, .offcanvas-xxl, .offcanvas-xl, .offcanvas-lg, .offcanvas-md, .offcanvas-sm {
  --ui-offcanvas-zindex: 1045;
  --ui-offcanvas-width: 400px;
  --ui-offcanvas-height: 30vh;
  --ui-offcanvas-padding-x: 1rem;
  --ui-offcanvas-padding-y: 1rem;
  --ui-offcanvas-color: var(--ui-body-color);
  --ui-offcanvas-bg: var(--ui-body-bg);
  --ui-offcanvas-border-width: var(--ui-border-width);
  --ui-offcanvas-border-color: var(--ui-border-color-translucent);
  --ui-offcanvas-box-shadow: var(--ui-box-shadow-sm);
  --ui-offcanvas-transition: transform 0.3s ease-in-out;
  --ui-offcanvas-title-line-height: 1.5;
}

@media (max-width: 575.98px) {
  .offcanvas-sm {
    position: fixed;
    bottom: 0;
    z-index: var(--ui-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--ui-offcanvas-color);
    visibility: hidden;
    background-color: var(--ui-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--ui-offcanvas-transition);
  }
}
@media (max-width: 575.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-sm {
    transition: none;
  }
}
@media (max-width: 575.98px) {
  .offcanvas-sm.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--ui-offcanvas-width);
    border-right: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-sm.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--ui-offcanvas-width);
    border-left: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-sm.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--ui-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-sm.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--ui-offcanvas-height);
    max-height: 100%;
    border-top: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-sm.showing, .offcanvas-sm.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-sm.showing, .offcanvas-sm.hiding, .offcanvas-sm.show {
    visibility: visible;
  }
}
@media (min-width: 576px) {
  .offcanvas-sm {
    --ui-offcanvas-height: auto;
    --ui-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-sm .offcanvas-header {
    display: none;
  }
  .offcanvas-sm .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 767.98px) {
  .offcanvas-md {
    position: fixed;
    bottom: 0;
    z-index: var(--ui-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--ui-offcanvas-color);
    visibility: hidden;
    background-color: var(--ui-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--ui-offcanvas-transition);
  }
}
@media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-md {
    transition: none;
  }
}
@media (max-width: 767.98px) {
  .offcanvas-md.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--ui-offcanvas-width);
    border-right: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-md.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--ui-offcanvas-width);
    border-left: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-md.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--ui-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-md.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--ui-offcanvas-height);
    max-height: 100%;
    border-top: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-md.showing, .offcanvas-md.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-md.showing, .offcanvas-md.hiding, .offcanvas-md.show {
    visibility: visible;
  }
}
@media (min-width: 768px) {
  .offcanvas-md {
    --ui-offcanvas-height: auto;
    --ui-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-md .offcanvas-header {
    display: none;
  }
  .offcanvas-md .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 991.98px) {
  .offcanvas-lg {
    position: fixed;
    bottom: 0;
    z-index: var(--ui-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--ui-offcanvas-color);
    visibility: hidden;
    background-color: var(--ui-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--ui-offcanvas-transition);
  }
}
@media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-lg {
    transition: none;
  }
}
@media (max-width: 991.98px) {
  .offcanvas-lg.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--ui-offcanvas-width);
    border-right: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-lg.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--ui-offcanvas-width);
    border-left: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-lg.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--ui-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-lg.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--ui-offcanvas-height);
    max-height: 100%;
    border-top: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-lg.showing, .offcanvas-lg.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-lg.showing, .offcanvas-lg.hiding, .offcanvas-lg.show {
    visibility: visible;
  }
}
@media (min-width: 992px) {
  .offcanvas-lg {
    --ui-offcanvas-height: auto;
    --ui-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-lg .offcanvas-header {
    display: none;
  }
  .offcanvas-lg .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 1199.98px) {
  .offcanvas-xl {
    position: fixed;
    bottom: 0;
    z-index: var(--ui-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--ui-offcanvas-color);
    visibility: hidden;
    background-color: var(--ui-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--ui-offcanvas-transition);
  }
}
@media (max-width: 1199.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-xl {
    transition: none;
  }
}
@media (max-width: 1199.98px) {
  .offcanvas-xl.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--ui-offcanvas-width);
    border-right: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-xl.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--ui-offcanvas-width);
    border-left: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-xl.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--ui-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-xl.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--ui-offcanvas-height);
    max-height: 100%;
    border-top: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-xl.showing, .offcanvas-xl.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-xl.showing, .offcanvas-xl.hiding, .offcanvas-xl.show {
    visibility: visible;
  }
}
@media (min-width: 1200px) {
  .offcanvas-xl {
    --ui-offcanvas-height: auto;
    --ui-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-xl .offcanvas-header {
    display: none;
  }
  .offcanvas-xl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 1399.98px) {
  .offcanvas-xxl {
    position: fixed;
    bottom: 0;
    z-index: var(--ui-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--ui-offcanvas-color);
    visibility: hidden;
    background-color: var(--ui-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--ui-offcanvas-transition);
  }
}
@media (max-width: 1399.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-xxl {
    transition: none;
  }
}
@media (max-width: 1399.98px) {
  .offcanvas-xxl.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--ui-offcanvas-width);
    border-right: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-xxl.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--ui-offcanvas-width);
    border-left: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-xxl.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--ui-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-xxl.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--ui-offcanvas-height);
    max-height: 100%;
    border-top: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-xxl.showing, .offcanvas-xxl.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-xxl.showing, .offcanvas-xxl.hiding, .offcanvas-xxl.show {
    visibility: visible;
  }
}
@media (min-width: 1400px) {
  .offcanvas-xxl {
    --ui-offcanvas-height: auto;
    --ui-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-xxl .offcanvas-header {
    display: none;
  }
  .offcanvas-xxl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

.offcanvas {
  position: fixed;
  bottom: 0;
  z-index: var(--ui-offcanvas-zindex);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: var(--ui-offcanvas-color);
  visibility: hidden;
  background-color: var(--ui-offcanvas-bg);
  background-clip: padding-box;
  outline: 0;
  transition: var(--ui-offcanvas-transition);
}
@media (prefers-reduced-motion: reduce) {
  .offcanvas {
    transition: none;
  }
}
.offcanvas.offcanvas-start {
  top: 0;
  left: 0;
  width: var(--ui-offcanvas-width);
  border-right: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
  transform: translateX(-100%);
}
.offcanvas.offcanvas-end {
  top: 0;
  right: 0;
  width: var(--ui-offcanvas-width);
  border-left: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
  transform: translateX(100%);
}
.offcanvas.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: var(--ui-offcanvas-height);
  max-height: 100%;
  border-bottom: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
  transform: translateY(-100%);
}
.offcanvas.offcanvas-bottom {
  right: 0;
  left: 0;
  height: var(--ui-offcanvas-height);
  max-height: 100%;
  border-top: var(--ui-offcanvas-border-width) solid var(--ui-offcanvas-border-color);
  transform: translateY(100%);
}
.offcanvas.showing, .offcanvas.show:not(.hiding) {
  transform: none;
}
.offcanvas.showing, .offcanvas.hiding, .offcanvas.show {
  visibility: visible;
}

.offcanvas-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.offcanvas-backdrop.fade {
  opacity: 0;
}
.offcanvas-backdrop.show {
  opacity: 0.5;
}

.offcanvas-header {
  display: flex;
  align-items: center;
  padding: var(--ui-offcanvas-padding-y) var(--ui-offcanvas-padding-x);
}
.offcanvas-header .btn-close {
  padding: calc(var(--ui-offcanvas-padding-y) * 0.5) calc(var(--ui-offcanvas-padding-x) * 0.5);
  margin-top: calc(-0.5 * var(--ui-offcanvas-padding-y));
  margin-right: calc(-0.5 * var(--ui-offcanvas-padding-x));
  margin-bottom: calc(-0.5 * var(--ui-offcanvas-padding-y));
  margin-left: auto;
}

.offcanvas-title {
  margin-bottom: 0;
  line-height: var(--ui-offcanvas-title-line-height);
}

.offcanvas-body {
  flex-grow: 1;
  padding: var(--ui-offcanvas-padding-y) var(--ui-offcanvas-padding-x);
  overflow-y: auto;
}

.placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentcolor;
  opacity: 0.5;
}
.placeholder.btn::before {
  display: inline-block;
  content: "";
}

.placeholder-xs {
  min-height: 0.6em;
}

.placeholder-sm {
  min-height: 0.8em;
}

.placeholder-lg {
  min-height: 1.2em;
}

.placeholder-glow .placeholder {
  animation: placeholder-glow 2s ease-in-out infinite;
}

@keyframes placeholder-glow {
  50% {
    opacity: 0.2;
  }
}
.placeholder-wave {
  mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
  mask-size: 200% 100%;
  animation: placeholder-wave 2s linear infinite;
}

@keyframes placeholder-wave {
  100% {
    mask-position: -200% 0%;
  }
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.text-bg-primary {
  color: #000 !important;
  background-color: RGBA(var(--ui-primary-rgb), var(--ui-bg-opacity, 1)) !important;
}

.text-bg-secondary {
  color: #000 !important;
  background-color: RGBA(var(--ui-secondary-rgb), var(--ui-bg-opacity, 1)) !important;
}

.text-bg-success {
  color: #fff !important;
  background-color: RGBA(var(--ui-success-rgb), var(--ui-bg-opacity, 1)) !important;
}

.text-bg-info {
  color: #000 !important;
  background-color: RGBA(var(--ui-info-rgb), var(--ui-bg-opacity, 1)) !important;
}

.text-bg-warning {
  color: #000 !important;
  background-color: RGBA(var(--ui-warning-rgb), var(--ui-bg-opacity, 1)) !important;
}

.text-bg-danger {
  color: #fff !important;
  background-color: RGBA(var(--ui-danger-rgb), var(--ui-bg-opacity, 1)) !important;
}

.text-bg-light {
  color: #000 !important;
  background-color: RGBA(var(--ui-light-rgb), var(--ui-bg-opacity, 1)) !important;
}

.text-bg-dark {
  color: #fff !important;
  background-color: RGBA(var(--ui-dark-rgb), var(--ui-bg-opacity, 1)) !important;
}

.link-primary {
  color: RGBA(var(--ui-primary-rgb), var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--ui-primary-rgb), var(--ui-link-underline-opacity, 1)) !important;
}
.link-primary:hover, .link-primary:focus {
  color: RGBA(95, 207, 132, var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(95, 207, 132, var(--ui-link-underline-opacity, 1)) !important;
}

.link-secondary {
  color: RGBA(var(--ui-secondary-rgb), var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--ui-secondary-rgb), var(--ui-link-underline-opacity, 1)) !important;
}
.link-secondary:hover, .link-secondary:focus {
  color: RGBA(128, 205, 207, var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(128, 205, 207, var(--ui-link-underline-opacity, 1)) !important;
}

.link-success {
  color: RGBA(var(--ui-success-rgb), var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--ui-success-rgb), var(--ui-link-underline-opacity, 1)) !important;
}
.link-success:hover, .link-success:focus {
  color: RGBA(20, 108, 67, var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(20, 108, 67, var(--ui-link-underline-opacity, 1)) !important;
}

.link-info {
  color: RGBA(var(--ui-info-rgb), var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--ui-info-rgb), var(--ui-link-underline-opacity, 1)) !important;
}
.link-info:hover, .link-info:focus {
  color: RGBA(61, 213, 243, var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(61, 213, 243, var(--ui-link-underline-opacity, 1)) !important;
}

.link-warning {
  color: RGBA(var(--ui-warning-rgb), var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--ui-warning-rgb), var(--ui-link-underline-opacity, 1)) !important;
}
.link-warning:hover, .link-warning:focus {
  color: RGBA(255, 205, 57, var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(255, 205, 57, var(--ui-link-underline-opacity, 1)) !important;
}

.link-danger {
  color: RGBA(var(--ui-danger-rgb), var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--ui-danger-rgb), var(--ui-link-underline-opacity, 1)) !important;
}
.link-danger:hover, .link-danger:focus {
  color: RGBA(176, 42, 55, var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(176, 42, 55, var(--ui-link-underline-opacity, 1)) !important;
}

.link-light {
  color: RGBA(var(--ui-light-rgb), var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--ui-light-rgb), var(--ui-link-underline-opacity, 1)) !important;
}
.link-light:hover, .link-light:focus {
  color: RGBA(249, 250, 251, var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(249, 250, 251, var(--ui-link-underline-opacity, 1)) !important;
}

.link-dark {
  color: RGBA(var(--ui-dark-rgb), var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--ui-dark-rgb), var(--ui-link-underline-opacity, 1)) !important;
}
.link-dark:hover, .link-dark:focus {
  color: RGBA(26, 30, 33, var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(26, 30, 33, var(--ui-link-underline-opacity, 1)) !important;
}

.link-body-emphasis {
  color: RGBA(var(--ui-emphasis-color-rgb), var(--ui-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--ui-emphasis-color-rgb), var(--ui-link-underline-opacity, 1)) !important;
}
.link-body-emphasis:hover, .link-body-emphasis:focus {
  color: RGBA(var(--ui-emphasis-color-rgb), var(--ui-link-opacity, 0.75)) !important;
  text-decoration-color: RGBA(var(--ui-emphasis-color-rgb), var(--ui-link-underline-opacity, 0.75)) !important;
}

.focus-ring:focus {
  outline: 0;
  box-shadow: var(--ui-focus-ring-x, 0) var(--ui-focus-ring-y, 0) var(--ui-focus-ring-blur, 0) var(--ui-focus-ring-width) var(--ui-focus-ring-color);
}

.icon-link {
  display: inline-flex;
  gap: 0.375rem;
  align-items: center;
  text-decoration-color: rgba(var(--ui-link-color-rgb), var(--ui-link-opacity, 0.5));
  text-underline-offset: 0.25em;
  backface-visibility: hidden;
}
.icon-link > .bi {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  fill: currentcolor;
  transition: 0.2s ease-in-out transform;
}
@media (prefers-reduced-motion: reduce) {
  .icon-link > .bi {
    transition: none;
  }
}

.icon-link-hover:hover > .bi, .icon-link-hover:focus-visible > .bi {
  transform: var(--ui-icon-link-transform, translate3d(0.25em, 0, 0));
}

.ratio {
  position: relative;
  width: 100%;
}
.ratio::before {
  display: block;
  padding-top: var(--ui-aspect-ratio);
  content: "";
}
.ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ratio-1x1 {
  --ui-aspect-ratio: 100%;
}

.ratio-4x3 {
  --ui-aspect-ratio: 75%;
}

.ratio-16x9 {
  --ui-aspect-ratio: 56.25%;
}

.ratio-21x9 {
  --ui-aspect-ratio: 42.8571428571%;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}

.sticky-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}

@media (min-width: 576px) {
  .sticky-sm-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-sm-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sticky-md-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-md-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sticky-lg-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-lg-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 1200px) {
  .sticky-xl-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-xl-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .sticky-xxl-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-xxl-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
.hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}

.vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}

.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
.visually-hidden:not(caption),
.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption) {
  position: absolute !important;
}
.visually-hidden *,
.visually-hidden-focusable:not(:focus):not(:focus-within) * {
  overflow: hidden !important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vr {
  display: inline-block;
  align-self: stretch;
  width: var(--ui-border-width);
  min-height: 1em;
  background-color: currentcolor;
  opacity: 0.25;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.float-start {
  float: left !important;
}

.float-end {
  float: right !important;
}

.float-none {
  float: none !important;
}

.object-fit-contain {
  object-fit: contain !important;
}

.object-fit-cover {
  object-fit: cover !important;
}

.object-fit-fill {
  object-fit: fill !important;
}

.object-fit-scale {
  object-fit: scale-down !important;
}

.object-fit-none {
  object-fit: none !important;
}

.opacity-0 {
  opacity: 0 !important;
}

.opacity-25 {
  opacity: 0.25 !important;
}

.opacity-50 {
  opacity: 0.5 !important;
}

.opacity-75 {
  opacity: 0.75 !important;
}

.opacity-100 {
  opacity: 1 !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-scroll {
  overflow: scroll !important;
}

.overflow-x-auto {
  overflow-x: auto !important;
}

.overflow-x-hidden {
  overflow-x: hidden !important;
}

.overflow-x-visible {
  overflow-x: visible !important;
}

.overflow-x-scroll {
  overflow-x: scroll !important;
}

.overflow-y-auto {
  overflow-y: auto !important;
}

.overflow-y-hidden {
  overflow-y: hidden !important;
}

.overflow-y-visible {
  overflow-y: visible !important;
}

.overflow-y-scroll {
  overflow-y: scroll !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-grid {
  display: grid !important;
}

.d-inline-grid {
  display: inline-grid !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.d-none {
  display: none !important;
}

.shadow {
  box-shadow: var(--ui-box-shadow) !important;
}

.shadow-sm {
  box-shadow: var(--ui-box-shadow-sm) !important;
}

.shadow-lg {
  box-shadow: var(--ui-box-shadow-lg) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.focus-ring-primary {
  --ui-focus-ring-color: rgba(var(--ui-primary-rgb), var(--ui-focus-ring-opacity));
}

.focus-ring-secondary {
  --ui-focus-ring-color: rgba(var(--ui-secondary-rgb), var(--ui-focus-ring-opacity));
}

.focus-ring-success {
  --ui-focus-ring-color: rgba(var(--ui-success-rgb), var(--ui-focus-ring-opacity));
}

.focus-ring-info {
  --ui-focus-ring-color: rgba(var(--ui-info-rgb), var(--ui-focus-ring-opacity));
}

.focus-ring-warning {
  --ui-focus-ring-color: rgba(var(--ui-warning-rgb), var(--ui-focus-ring-opacity));
}

.focus-ring-danger {
  --ui-focus-ring-color: rgba(var(--ui-danger-rgb), var(--ui-focus-ring-opacity));
}

.focus-ring-light {
  --ui-focus-ring-color: rgba(var(--ui-light-rgb), var(--ui-focus-ring-opacity));
}

.focus-ring-dark {
  --ui-focus-ring-color: rgba(var(--ui-dark-rgb), var(--ui-focus-ring-opacity));
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: sticky !important;
}

.top-0 {
  top: 0 !important;
}

.top-50 {
  top: 50% !important;
}

.top-100 {
  top: 100% !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-50 {
  bottom: 50% !important;
}

.bottom-100 {
  bottom: 100% !important;
}

.start-0 {
  left: 0 !important;
}

.start-50 {
  left: 50% !important;
}

.start-100 {
  left: 100% !important;
}

.end-0 {
  right: 0 !important;
}

.end-50 {
  right: 50% !important;
}

.end-100 {
  right: 100% !important;
}

.translate-middle {
  transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
  transform: translateX(-50%) !important;
}

.translate-middle-y {
  transform: translateY(-50%) !important;
}

.border {
  border: var(--ui-border-width) var(--ui-border-style) var(--ui-border-color) !important;
}

.border-0 {
  border: 0 !important;
}

.border-top {
  border-top: var(--ui-border-width) var(--ui-border-style) var(--ui-border-color) !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-end {
  border-right: var(--ui-border-width) var(--ui-border-style) var(--ui-border-color) !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-bottom {
  border-bottom: var(--ui-border-width) var(--ui-border-style) var(--ui-border-color) !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-start {
  border-left: var(--ui-border-width) var(--ui-border-style) var(--ui-border-color) !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-primary {
  --ui-border-opacity: 1;
  border-color: rgba(var(--ui-primary-rgb), var(--ui-border-opacity)) !important;
}

.border-secondary {
  --ui-border-opacity: 1;
  border-color: rgba(var(--ui-secondary-rgb), var(--ui-border-opacity)) !important;
}

.border-success {
  --ui-border-opacity: 1;
  border-color: rgba(var(--ui-success-rgb), var(--ui-border-opacity)) !important;
}

.border-info {
  --ui-border-opacity: 1;
  border-color: rgba(var(--ui-info-rgb), var(--ui-border-opacity)) !important;
}

.border-warning {
  --ui-border-opacity: 1;
  border-color: rgba(var(--ui-warning-rgb), var(--ui-border-opacity)) !important;
}

.border-danger {
  --ui-border-opacity: 1;
  border-color: rgba(var(--ui-danger-rgb), var(--ui-border-opacity)) !important;
}

.border-light {
  --ui-border-opacity: 1;
  border-color: rgba(var(--ui-light-rgb), var(--ui-border-opacity)) !important;
}

.border-dark {
  --ui-border-opacity: 1;
  border-color: rgba(var(--ui-dark-rgb), var(--ui-border-opacity)) !important;
}

.border-black {
  --ui-border-opacity: 1;
  border-color: rgba(var(--ui-black-rgb), var(--ui-border-opacity)) !important;
}

.border-white {
  --ui-border-opacity: 1;
  border-color: rgba(var(--ui-white-rgb), var(--ui-border-opacity)) !important;
}

.border-primary-subtle {
  border-color: var(--ui-primary-border-subtle) !important;
}

.border-secondary-subtle {
  border-color: var(--ui-secondary-border-subtle) !important;
}

.border-success-subtle {
  border-color: var(--ui-success-border-subtle) !important;
}

.border-info-subtle {
  border-color: var(--ui-info-border-subtle) !important;
}

.border-warning-subtle {
  border-color: var(--ui-warning-border-subtle) !important;
}

.border-danger-subtle {
  border-color: var(--ui-danger-border-subtle) !important;
}

.border-light-subtle {
  border-color: var(--ui-light-border-subtle) !important;
}

.border-dark-subtle {
  border-color: var(--ui-dark-border-subtle) !important;
}

.border-1 {
  border-width: 1px !important;
}

.border-2 {
  border-width: 2px !important;
}

.border-3 {
  border-width: 3px !important;
}

.border-4 {
  border-width: 4px !important;
}

.border-5 {
  border-width: 5px !important;
}

.border-opacity-10 {
  --ui-border-opacity: 0.1;
}

.border-opacity-25 {
  --ui-border-opacity: 0.25;
}

.border-opacity-50 {
  --ui-border-opacity: 0.5;
}

.border-opacity-75 {
  --ui-border-opacity: 0.75;
}

.border-opacity-100 {
  --ui-border-opacity: 1;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.vw-100 {
  width: 100vw !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mh-100 {
  max-height: 100% !important;
}

.vh-100 {
  height: 100vh !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.justify-content-evenly {
  justify-content: space-evenly !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-last {
  order: 6 !important;
}

.m-0 {
  margin: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mt-auto {
  margin-top: auto !important;
}

.me-0 {
  margin-right: 0 !important;
}

.me-1 {
  margin-right: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.me-4 {
  margin-right: 1.5rem !important;
}

.me-5 {
  margin-right: 3rem !important;
}

.me-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ms-0 {
  margin-left: 0 !important;
}

.ms-1 {
  margin-left: 0.25rem !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}

.ms-4 {
  margin-left: 1.5rem !important;
}

.ms-5 {
  margin-left: 3rem !important;
}

.ms-auto {
  margin-left: auto !important;
}

.p-0 {
  padding: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pt-3 {
  padding-top: 1rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pe-0 {
  padding-right: 0 !important;
}

.pe-1 {
  padding-right: 0.25rem !important;
}

.pe-2 {
  padding-right: 0.5rem !important;
}

.pe-3 {
  padding-right: 1rem !important;
}

.pe-4 {
  padding-right: 1.5rem !important;
}

.pe-5 {
  padding-right: 3rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.ps-0 {
  padding-left: 0 !important;
}

.ps-1 {
  padding-left: 0.25rem !important;
}

.ps-2 {
  padding-left: 0.5rem !important;
}

.ps-3 {
  padding-left: 1rem !important;
}

.ps-4 {
  padding-left: 1.5rem !important;
}

.ps-5 {
  padding-left: 3rem !important;
}

.gap-0 {
  gap: 0 !important;
}

.gap-1 {
  gap: 0.25rem !important;
}

.gap-2 {
  gap: 0.5rem !important;
}

.gap-3 {
  gap: 1rem !important;
}

.gap-4 {
  gap: 1.5rem !important;
}

.gap-5 {
  gap: 3rem !important;
}

.row-gap-0 {
  row-gap: 0 !important;
}

.row-gap-1 {
  row-gap: 0.25rem !important;
}

.row-gap-2 {
  row-gap: 0.5rem !important;
}

.row-gap-3 {
  row-gap: 1rem !important;
}

.row-gap-4 {
  row-gap: 1.5rem !important;
}

.row-gap-5 {
  row-gap: 3rem !important;
}

.column-gap-0 {
  column-gap: 0 !important;
}

.column-gap-1 {
  column-gap: 0.25rem !important;
}

.column-gap-2 {
  column-gap: 0.5rem !important;
}

.column-gap-3 {
  column-gap: 1rem !important;
}

.column-gap-4 {
  column-gap: 1.5rem !important;
}

.column-gap-5 {
  column-gap: 3rem !important;
}

.font-monospace {
  font-family: var(--ui-font-monospace) !important;
}

.fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}

.fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}

.fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}

.fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}

.fs-5 {
  font-size: 1.25rem !important;
}

.fs-6 {
  font-size: 1rem !important;
}

.fst-italic {
  font-style: italic !important;
}

.fst-normal {
  font-style: normal !important;
}

.fw-lighter {
  font-weight: lighter !important;
}

.fw-light {
  font-weight: 300 !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.fw-medium {
  font-weight: 500 !important;
}

.fw-semibold {
  font-weight: 600 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.fw-bolder {
  font-weight: bolder !important;
}

.lh-1 {
  line-height: 1 !important;
}

.lh-sm {
  line-height: 1.25 !important;
}

.lh-base {
  line-height: 1.5 !important;
}

.lh-lg {
  line-height: 2 !important;
}

.text-start {
  text-align: left !important;
}

.text-end {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}

/* rtl:end:remove */
.text-primary {
  --ui-text-opacity: 1;
  color: rgba(var(--ui-primary-rgb), var(--ui-text-opacity)) !important;
}

.text-secondary {
  --ui-text-opacity: 1;
  color: rgba(var(--ui-secondary-rgb), var(--ui-text-opacity)) !important;
}

.text-success {
  --ui-text-opacity: 1;
  color: rgba(var(--ui-success-rgb), var(--ui-text-opacity)) !important;
}

.text-info {
  --ui-text-opacity: 1;
  color: rgba(var(--ui-info-rgb), var(--ui-text-opacity)) !important;
}

.text-warning {
  --ui-text-opacity: 1;
  color: rgba(var(--ui-warning-rgb), var(--ui-text-opacity)) !important;
}

.text-danger {
  --ui-text-opacity: 1;
  color: rgba(var(--ui-danger-rgb), var(--ui-text-opacity)) !important;
}

.text-light {
  --ui-text-opacity: 1;
  color: rgba(var(--ui-light-rgb), var(--ui-text-opacity)) !important;
}

.text-dark {
  --ui-text-opacity: 1;
  color: rgba(var(--ui-dark-rgb), var(--ui-text-opacity)) !important;
}

.text-black {
  --ui-text-opacity: 1;
  color: rgba(var(--ui-black-rgb), var(--ui-text-opacity)) !important;
}

.text-white {
  --ui-text-opacity: 1;
  color: rgba(var(--ui-white-rgb), var(--ui-text-opacity)) !important;
}

.text-body {
  --ui-text-opacity: 1;
  color: rgba(var(--ui-body-color-rgb), var(--ui-text-opacity)) !important;
}

.text-muted {
  --ui-text-opacity: 1;
  color: var(--ui-secondary-color) !important;
}

.text-black-50 {
  --ui-text-opacity: 1;
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  --ui-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-body-secondary {
  --ui-text-opacity: 1;
  color: var(--ui-secondary-color) !important;
}

.text-body-tertiary {
  --ui-text-opacity: 1;
  color: var(--ui-tertiary-color) !important;
}

.text-body-emphasis {
  --ui-text-opacity: 1;
  color: var(--ui-emphasis-color) !important;
}

.text-reset {
  --ui-text-opacity: 1;
  color: inherit !important;
}

.text-opacity-25 {
  --ui-text-opacity: 0.25;
}

.text-opacity-50 {
  --ui-text-opacity: 0.5;
}

.text-opacity-75 {
  --ui-text-opacity: 0.75;
}

.text-opacity-100 {
  --ui-text-opacity: 1;
}

.text-primary-emphasis {
  color: var(--ui-primary-text-emphasis) !important;
}

.text-secondary-emphasis {
  color: var(--ui-secondary-text-emphasis) !important;
}

.text-success-emphasis {
  color: var(--ui-success-text-emphasis) !important;
}

.text-info-emphasis {
  color: var(--ui-info-text-emphasis) !important;
}

.text-warning-emphasis {
  color: var(--ui-warning-text-emphasis) !important;
}

.text-danger-emphasis {
  color: var(--ui-danger-text-emphasis) !important;
}

.text-light-emphasis {
  color: var(--ui-light-text-emphasis) !important;
}

.text-dark-emphasis {
  color: var(--ui-dark-text-emphasis) !important;
}

.link-opacity-10 {
  --ui-link-opacity: 0.1;
}

.link-opacity-10-hover:hover {
  --ui-link-opacity: 0.1;
}

.link-opacity-25 {
  --ui-link-opacity: 0.25;
}

.link-opacity-25-hover:hover {
  --ui-link-opacity: 0.25;
}

.link-opacity-50 {
  --ui-link-opacity: 0.5;
}

.link-opacity-50-hover:hover {
  --ui-link-opacity: 0.5;
}

.link-opacity-75 {
  --ui-link-opacity: 0.75;
}

.link-opacity-75-hover:hover {
  --ui-link-opacity: 0.75;
}

.link-opacity-100 {
  --ui-link-opacity: 1;
}

.link-opacity-100-hover:hover {
  --ui-link-opacity: 1;
}

.link-offset-1 {
  text-underline-offset: 0.125em !important;
}

.link-offset-1-hover:hover {
  text-underline-offset: 0.125em !important;
}

.link-offset-2 {
  text-underline-offset: 0.25em !important;
}

.link-offset-2-hover:hover {
  text-underline-offset: 0.25em !important;
}

.link-offset-3 {
  text-underline-offset: 0.375em !important;
}

.link-offset-3-hover:hover {
  text-underline-offset: 0.375em !important;
}

.link-underline-primary {
  --ui-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--ui-primary-rgb), var(--ui-link-underline-opacity)) !important;
}

.link-underline-secondary {
  --ui-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--ui-secondary-rgb), var(--ui-link-underline-opacity)) !important;
}

.link-underline-success {
  --ui-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--ui-success-rgb), var(--ui-link-underline-opacity)) !important;
}

.link-underline-info {
  --ui-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--ui-info-rgb), var(--ui-link-underline-opacity)) !important;
}

.link-underline-warning {
  --ui-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--ui-warning-rgb), var(--ui-link-underline-opacity)) !important;
}

.link-underline-danger {
  --ui-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--ui-danger-rgb), var(--ui-link-underline-opacity)) !important;
}

.link-underline-light {
  --ui-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--ui-light-rgb), var(--ui-link-underline-opacity)) !important;
}

.link-underline-dark {
  --ui-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--ui-dark-rgb), var(--ui-link-underline-opacity)) !important;
}

.link-underline {
  --ui-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--ui-link-color-rgb), var(--ui-link-underline-opacity, 1)) !important;
}

.link-underline-opacity-0 {
  --ui-link-underline-opacity: 0;
}

.link-underline-opacity-0-hover:hover {
  --ui-link-underline-opacity: 0;
}

.link-underline-opacity-10 {
  --ui-link-underline-opacity: 0.1;
}

.link-underline-opacity-10-hover:hover {
  --ui-link-underline-opacity: 0.1;
}

.link-underline-opacity-25 {
  --ui-link-underline-opacity: 0.25;
}

.link-underline-opacity-25-hover:hover {
  --ui-link-underline-opacity: 0.25;
}

.link-underline-opacity-50 {
  --ui-link-underline-opacity: 0.5;
}

.link-underline-opacity-50-hover:hover {
  --ui-link-underline-opacity: 0.5;
}

.link-underline-opacity-75 {
  --ui-link-underline-opacity: 0.75;
}

.link-underline-opacity-75-hover:hover {
  --ui-link-underline-opacity: 0.75;
}

.link-underline-opacity-100 {
  --ui-link-underline-opacity: 1;
}

.link-underline-opacity-100-hover:hover {
  --ui-link-underline-opacity: 1;
}

.bg-primary {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-primary-rgb), var(--ui-bg-opacity)) !important;
}

.bg-secondary {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-secondary-rgb), var(--ui-bg-opacity)) !important;
}

.bg-success {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-success-rgb), var(--ui-bg-opacity)) !important;
}

.bg-info {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-info-rgb), var(--ui-bg-opacity)) !important;
}

.bg-warning {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-warning-rgb), var(--ui-bg-opacity)) !important;
}

.bg-danger {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-danger-rgb), var(--ui-bg-opacity)) !important;
}

.bg-light {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-light-rgb), var(--ui-bg-opacity)) !important;
}

.bg-dark {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-dark-rgb), var(--ui-bg-opacity)) !important;
}

.bg-black {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-black-rgb), var(--ui-bg-opacity)) !important;
}

.bg-white {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-white-rgb), var(--ui-bg-opacity)) !important;
}

.bg-body {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-body-bg-rgb), var(--ui-bg-opacity)) !important;
}

.bg-transparent {
  --ui-bg-opacity: 1;
  background-color: transparent !important;
}

.bg-body-secondary {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-secondary-bg-rgb), var(--ui-bg-opacity)) !important;
}

.bg-body-tertiary {
  --ui-bg-opacity: 1;
  background-color: rgba(var(--ui-tertiary-bg-rgb), var(--ui-bg-opacity)) !important;
}

.bg-opacity-10 {
  --ui-bg-opacity: 0.1;
}

.bg-opacity-25 {
  --ui-bg-opacity: 0.25;
}

.bg-opacity-50 {
  --ui-bg-opacity: 0.5;
}

.bg-opacity-75 {
  --ui-bg-opacity: 0.75;
}

.bg-opacity-100 {
  --ui-bg-opacity: 1;
}

.bg-primary-subtle {
  background-color: var(--ui-primary-bg-subtle) !important;
}

.bg-secondary-subtle {
  background-color: var(--ui-secondary-bg-subtle) !important;
}

.bg-success-subtle {
  background-color: var(--ui-success-bg-subtle) !important;
}

.bg-info-subtle {
  background-color: var(--ui-info-bg-subtle) !important;
}

.bg-warning-subtle {
  background-color: var(--ui-warning-bg-subtle) !important;
}

.bg-danger-subtle {
  background-color: var(--ui-danger-bg-subtle) !important;
}

.bg-light-subtle {
  background-color: var(--ui-light-bg-subtle) !important;
}

.bg-dark-subtle {
  background-color: var(--ui-dark-bg-subtle) !important;
}

.bg-gradient {
  background-image: var(--ui-gradient) !important;
}

.user-select-all {
  user-select: all !important;
}

.user-select-auto {
  user-select: auto !important;
}

.user-select-none {
  user-select: none !important;
}

.pe-none {
  pointer-events: none !important;
}

.pe-auto {
  pointer-events: auto !important;
}

.rounded {
  border-radius: var(--ui-border-radius) !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-1 {
  border-radius: var(--ui-border-radius-sm) !important;
}

.rounded-2 {
  border-radius: var(--ui-border-radius) !important;
}

.rounded-3 {
  border-radius: var(--ui-border-radius-lg) !important;
}

.rounded-4 {
  border-radius: var(--ui-border-radius-xl) !important;
}

.rounded-5 {
  border-radius: var(--ui-border-radius-xxl) !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: var(--ui-border-radius-pill) !important;
}

.rounded-top {
  border-top-left-radius: var(--ui-border-radius) !important;
  border-top-right-radius: var(--ui-border-radius) !important;
}

.rounded-top-0 {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.rounded-top-1 {
  border-top-left-radius: var(--ui-border-radius-sm) !important;
  border-top-right-radius: var(--ui-border-radius-sm) !important;
}

.rounded-top-2 {
  border-top-left-radius: var(--ui-border-radius) !important;
  border-top-right-radius: var(--ui-border-radius) !important;
}

.rounded-top-3 {
  border-top-left-radius: var(--ui-border-radius-lg) !important;
  border-top-right-radius: var(--ui-border-radius-lg) !important;
}

.rounded-top-4 {
  border-top-left-radius: var(--ui-border-radius-xl) !important;
  border-top-right-radius: var(--ui-border-radius-xl) !important;
}

.rounded-top-5 {
  border-top-left-radius: var(--ui-border-radius-xxl) !important;
  border-top-right-radius: var(--ui-border-radius-xxl) !important;
}

.rounded-top-circle {
  border-top-left-radius: 50% !important;
  border-top-right-radius: 50% !important;
}

.rounded-top-pill {
  border-top-left-radius: var(--ui-border-radius-pill) !important;
  border-top-right-radius: var(--ui-border-radius-pill) !important;
}

.rounded-end {
  border-top-right-radius: var(--ui-border-radius) !important;
  border-bottom-right-radius: var(--ui-border-radius) !important;
}

.rounded-end-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.rounded-end-1 {
  border-top-right-radius: var(--ui-border-radius-sm) !important;
  border-bottom-right-radius: var(--ui-border-radius-sm) !important;
}

.rounded-end-2 {
  border-top-right-radius: var(--ui-border-radius) !important;
  border-bottom-right-radius: var(--ui-border-radius) !important;
}

.rounded-end-3 {
  border-top-right-radius: var(--ui-border-radius-lg) !important;
  border-bottom-right-radius: var(--ui-border-radius-lg) !important;
}

.rounded-end-4 {
  border-top-right-radius: var(--ui-border-radius-xl) !important;
  border-bottom-right-radius: var(--ui-border-radius-xl) !important;
}

.rounded-end-5 {
  border-top-right-radius: var(--ui-border-radius-xxl) !important;
  border-bottom-right-radius: var(--ui-border-radius-xxl) !important;
}

.rounded-end-circle {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}

.rounded-end-pill {
  border-top-right-radius: var(--ui-border-radius-pill) !important;
  border-bottom-right-radius: var(--ui-border-radius-pill) !important;
}

.rounded-bottom {
  border-bottom-right-radius: var(--ui-border-radius) !important;
  border-bottom-left-radius: var(--ui-border-radius) !important;
}

.rounded-bottom-0 {
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.rounded-bottom-1 {
  border-bottom-right-radius: var(--ui-border-radius-sm) !important;
  border-bottom-left-radius: var(--ui-border-radius-sm) !important;
}

.rounded-bottom-2 {
  border-bottom-right-radius: var(--ui-border-radius) !important;
  border-bottom-left-radius: var(--ui-border-radius) !important;
}

.rounded-bottom-3 {
  border-bottom-right-radius: var(--ui-border-radius-lg) !important;
  border-bottom-left-radius: var(--ui-border-radius-lg) !important;
}

.rounded-bottom-4 {
  border-bottom-right-radius: var(--ui-border-radius-xl) !important;
  border-bottom-left-radius: var(--ui-border-radius-xl) !important;
}

.rounded-bottom-5 {
  border-bottom-right-radius: var(--ui-border-radius-xxl) !important;
  border-bottom-left-radius: var(--ui-border-radius-xxl) !important;
}

.rounded-bottom-circle {
  border-bottom-right-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}

.rounded-bottom-pill {
  border-bottom-right-radius: var(--ui-border-radius-pill) !important;
  border-bottom-left-radius: var(--ui-border-radius-pill) !important;
}

.rounded-start {
  border-bottom-left-radius: var(--ui-border-radius) !important;
  border-top-left-radius: var(--ui-border-radius) !important;
}

.rounded-start-0 {
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
}

.rounded-start-1 {
  border-bottom-left-radius: var(--ui-border-radius-sm) !important;
  border-top-left-radius: var(--ui-border-radius-sm) !important;
}

.rounded-start-2 {
  border-bottom-left-radius: var(--ui-border-radius) !important;
  border-top-left-radius: var(--ui-border-radius) !important;
}

.rounded-start-3 {
  border-bottom-left-radius: var(--ui-border-radius-lg) !important;
  border-top-left-radius: var(--ui-border-radius-lg) !important;
}

.rounded-start-4 {
  border-bottom-left-radius: var(--ui-border-radius-xl) !important;
  border-top-left-radius: var(--ui-border-radius-xl) !important;
}

.rounded-start-5 {
  border-bottom-left-radius: var(--ui-border-radius-xxl) !important;
  border-top-left-radius: var(--ui-border-radius-xxl) !important;
}

.rounded-start-circle {
  border-bottom-left-radius: 50% !important;
  border-top-left-radius: 50% !important;
}

.rounded-start-pill {
  border-bottom-left-radius: var(--ui-border-radius-pill) !important;
  border-top-left-radius: var(--ui-border-radius-pill) !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

.z-n1 {
  z-index: -1 !important;
}

.z-0 {
  z-index: 0 !important;
}

.z-1 {
  z-index: 1 !important;
}

.z-2 {
  z-index: 2 !important;
}

.z-3 {
  z-index: 3 !important;
}

@media (min-width: 576px) {
  .float-sm-start {
    float: left !important;
  }
  .float-sm-end {
    float: right !important;
  }
  .float-sm-none {
    float: none !important;
  }
  .object-fit-sm-contain {
    object-fit: contain !important;
  }
  .object-fit-sm-cover {
    object-fit: cover !important;
  }
  .object-fit-sm-fill {
    object-fit: fill !important;
  }
  .object-fit-sm-scale {
    object-fit: scale-down !important;
  }
  .object-fit-sm-none {
    object-fit: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-grid {
    display: grid !important;
  }
  .d-sm-inline-grid {
    display: inline-grid !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
  .d-sm-none {
    display: none !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    justify-content: center !important;
  }
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-sm-start {
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    align-items: center !important;
  }
  .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-between {
    align-content: space-between !important;
  }
  .align-content-sm-around {
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
  .order-sm-first {
    order: -1 !important;
  }
  .order-sm-0 {
    order: 0 !important;
  }
  .order-sm-1 {
    order: 1 !important;
  }
  .order-sm-2 {
    order: 2 !important;
  }
  .order-sm-3 {
    order: 3 !important;
  }
  .order-sm-4 {
    order: 4 !important;
  }
  .order-sm-5 {
    order: 5 !important;
  }
  .order-sm-last {
    order: 6 !important;
  }
  .m-sm-0 {
    margin: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-sm-0 {
    margin-top: 0 !important;
  }
  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }
  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mt-sm-3 {
    margin-top: 1rem !important;
  }
  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mt-sm-5 {
    margin-top: 3rem !important;
  }
  .mt-sm-auto {
    margin-top: auto !important;
  }
  .me-sm-0 {
    margin-right: 0 !important;
  }
  .me-sm-1 {
    margin-right: 0.25rem !important;
  }
  .me-sm-2 {
    margin-right: 0.5rem !important;
  }
  .me-sm-3 {
    margin-right: 1rem !important;
  }
  .me-sm-4 {
    margin-right: 1.5rem !important;
  }
  .me-sm-5 {
    margin-right: 3rem !important;
  }
  .me-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-0 {
    margin-bottom: 0 !important;
  }
  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }
  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }
  .mb-sm-auto {
    margin-bottom: auto !important;
  }
  .ms-sm-0 {
    margin-left: 0 !important;
  }
  .ms-sm-1 {
    margin-left: 0.25rem !important;
  }
  .ms-sm-2 {
    margin-left: 0.5rem !important;
  }
  .ms-sm-3 {
    margin-left: 1rem !important;
  }
  .ms-sm-4 {
    margin-left: 1.5rem !important;
  }
  .ms-sm-5 {
    margin-left: 3rem !important;
  }
  .ms-sm-auto {
    margin-left: auto !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem !important;
  }
  .p-sm-2 {
    padding: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 1rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 3rem !important;
  }
  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-sm-0 {
    padding-top: 0 !important;
  }
  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }
  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pt-sm-3 {
    padding-top: 1rem !important;
  }
  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pt-sm-5 {
    padding-top: 3rem !important;
  }
  .pe-sm-0 {
    padding-right: 0 !important;
  }
  .pe-sm-1 {
    padding-right: 0.25rem !important;
  }
  .pe-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pe-sm-3 {
    padding-right: 1rem !important;
  }
  .pe-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pe-sm-5 {
    padding-right: 3rem !important;
  }
  .pb-sm-0 {
    padding-bottom: 0 !important;
  }
  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }
  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }
  .ps-sm-0 {
    padding-left: 0 !important;
  }
  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }
  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }
  .ps-sm-3 {
    padding-left: 1rem !important;
  }
  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }
  .ps-sm-5 {
    padding-left: 3rem !important;
  }
  .gap-sm-0 {
    gap: 0 !important;
  }
  .gap-sm-1 {
    gap: 0.25rem !important;
  }
  .gap-sm-2 {
    gap: 0.5rem !important;
  }
  .gap-sm-3 {
    gap: 1rem !important;
  }
  .gap-sm-4 {
    gap: 1.5rem !important;
  }
  .gap-sm-5 {
    gap: 3rem !important;
  }
  .row-gap-sm-0 {
    row-gap: 0 !important;
  }
  .row-gap-sm-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-sm-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-sm-3 {
    row-gap: 1rem !important;
  }
  .row-gap-sm-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-sm-5 {
    row-gap: 3rem !important;
  }
  .column-gap-sm-0 {
    column-gap: 0 !important;
  }
  .column-gap-sm-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-sm-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-sm-3 {
    column-gap: 1rem !important;
  }
  .column-gap-sm-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-sm-5 {
    column-gap: 3rem !important;
  }
  .text-sm-start {
    text-align: left !important;
  }
  .text-sm-end {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }
  .float-md-end {
    float: right !important;
  }
  .float-md-none {
    float: none !important;
  }
  .object-fit-md-contain {
    object-fit: contain !important;
  }
  .object-fit-md-cover {
    object-fit: cover !important;
  }
  .object-fit-md-fill {
    object-fit: fill !important;
  }
  .object-fit-md-scale {
    object-fit: scale-down !important;
  }
  .object-fit-md-none {
    object-fit: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-grid {
    display: grid !important;
  }
  .d-md-inline-grid {
    display: inline-grid !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
  .d-md-none {
    display: none !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .justify-content-md-between {
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    justify-content: space-around !important;
  }
  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-md-start {
    align-items: flex-start !important;
  }
  .align-items-md-end {
    align-items: flex-end !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
  .align-items-md-baseline {
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-between {
    align-content: space-between !important;
  }
  .align-content-md-around {
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
  .order-md-first {
    order: -1 !important;
  }
  .order-md-0 {
    order: 0 !important;
  }
  .order-md-1 {
    order: 1 !important;
  }
  .order-md-2 {
    order: 2 !important;
  }
  .order-md-3 {
    order: 3 !important;
  }
  .order-md-4 {
    order: 4 !important;
  }
  .order-md-5 {
    order: 5 !important;
  }
  .order-md-last {
    order: 6 !important;
  }
  .m-md-0 {
    margin: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-md-0 {
    margin-top: 0 !important;
  }
  .mt-md-1 {
    margin-top: 0.25rem !important;
  }
  .mt-md-2 {
    margin-top: 0.5rem !important;
  }
  .mt-md-3 {
    margin-top: 1rem !important;
  }
  .mt-md-4 {
    margin-top: 1.5rem !important;
  }
  .mt-md-5 {
    margin-top: 3rem !important;
  }
  .mt-md-auto {
    margin-top: auto !important;
  }
  .me-md-0 {
    margin-right: 0 !important;
  }
  .me-md-1 {
    margin-right: 0.25rem !important;
  }
  .me-md-2 {
    margin-right: 0.5rem !important;
  }
  .me-md-3 {
    margin-right: 1rem !important;
  }
  .me-md-4 {
    margin-right: 1.5rem !important;
  }
  .me-md-5 {
    margin-right: 3rem !important;
  }
  .me-md-auto {
    margin-right: auto !important;
  }
  .mb-md-0 {
    margin-bottom: 0 !important;
  }
  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-md-3 {
    margin-bottom: 1rem !important;
  }
  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-md-5 {
    margin-bottom: 3rem !important;
  }
  .mb-md-auto {
    margin-bottom: auto !important;
  }
  .ms-md-0 {
    margin-left: 0 !important;
  }
  .ms-md-1 {
    margin-left: 0.25rem !important;
  }
  .ms-md-2 {
    margin-left: 0.5rem !important;
  }
  .ms-md-3 {
    margin-left: 1rem !important;
  }
  .ms-md-4 {
    margin-left: 1.5rem !important;
  }
  .ms-md-5 {
    margin-left: 3rem !important;
  }
  .ms-md-auto {
    margin-left: auto !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }
  .p-md-2 {
    padding: 0.5rem !important;
  }
  .p-md-3 {
    padding: 1rem !important;
  }
  .p-md-4 {
    padding: 1.5rem !important;
  }
  .p-md-5 {
    padding: 3rem !important;
  }
  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-md-0 {
    padding-top: 0 !important;
  }
  .pt-md-1 {
    padding-top: 0.25rem !important;
  }
  .pt-md-2 {
    padding-top: 0.5rem !important;
  }
  .pt-md-3 {
    padding-top: 1rem !important;
  }
  .pt-md-4 {
    padding-top: 1.5rem !important;
  }
  .pt-md-5 {
    padding-top: 3rem !important;
  }
  .pe-md-0 {
    padding-right: 0 !important;
  }
  .pe-md-1 {
    padding-right: 0.25rem !important;
  }
  .pe-md-2 {
    padding-right: 0.5rem !important;
  }
  .pe-md-3 {
    padding-right: 1rem !important;
  }
  .pe-md-4 {
    padding-right: 1.5rem !important;
  }
  .pe-md-5 {
    padding-right: 3rem !important;
  }
  .pb-md-0 {
    padding-bottom: 0 !important;
  }
  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-md-3 {
    padding-bottom: 1rem !important;
  }
  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-md-5 {
    padding-bottom: 3rem !important;
  }
  .ps-md-0 {
    padding-left: 0 !important;
  }
  .ps-md-1 {
    padding-left: 0.25rem !important;
  }
  .ps-md-2 {
    padding-left: 0.5rem !important;
  }
  .ps-md-3 {
    padding-left: 1rem !important;
  }
  .ps-md-4 {
    padding-left: 1.5rem !important;
  }
  .ps-md-5 {
    padding-left: 3rem !important;
  }
  .gap-md-0 {
    gap: 0 !important;
  }
  .gap-md-1 {
    gap: 0.25rem !important;
  }
  .gap-md-2 {
    gap: 0.5rem !important;
  }
  .gap-md-3 {
    gap: 1rem !important;
  }
  .gap-md-4 {
    gap: 1.5rem !important;
  }
  .gap-md-5 {
    gap: 3rem !important;
  }
  .row-gap-md-0 {
    row-gap: 0 !important;
  }
  .row-gap-md-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-md-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-md-3 {
    row-gap: 1rem !important;
  }
  .row-gap-md-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-md-5 {
    row-gap: 3rem !important;
  }
  .column-gap-md-0 {
    column-gap: 0 !important;
  }
  .column-gap-md-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-md-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-md-3 {
    column-gap: 1rem !important;
  }
  .column-gap-md-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-md-5 {
    column-gap: 3rem !important;
  }
  .text-md-start {
    text-align: left !important;
  }
  .text-md-end {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }
  .float-lg-end {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
  .object-fit-lg-contain {
    object-fit: contain !important;
  }
  .object-fit-lg-cover {
    object-fit: cover !important;
  }
  .object-fit-lg-fill {
    object-fit: fill !important;
  }
  .object-fit-lg-scale {
    object-fit: scale-down !important;
  }
  .object-fit-lg-none {
    object-fit: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-grid {
    display: grid !important;
  }
  .d-lg-inline-grid {
    display: inline-grid !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
  .d-lg-none {
    display: none !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    justify-content: center !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-lg-start {
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    align-items: center !important;
  }
  .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-between {
    align-content: space-between !important;
  }
  .align-content-lg-around {
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
  .order-lg-first {
    order: -1 !important;
  }
  .order-lg-0 {
    order: 0 !important;
  }
  .order-lg-1 {
    order: 1 !important;
  }
  .order-lg-2 {
    order: 2 !important;
  }
  .order-lg-3 {
    order: 3 !important;
  }
  .order-lg-4 {
    order: 4 !important;
  }
  .order-lg-5 {
    order: 5 !important;
  }
  .order-lg-last {
    order: 6 !important;
  }
  .m-lg-0 {
    margin: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-lg-0 {
    margin-top: 0 !important;
  }
  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mt-lg-3 {
    margin-top: 1rem !important;
  }
  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mt-lg-5 {
    margin-top: 3rem !important;
  }
  .mt-lg-auto {
    margin-top: auto !important;
  }
  .me-lg-0 {
    margin-right: 0 !important;
  }
  .me-lg-1 {
    margin-right: 0.25rem !important;
  }
  .me-lg-2 {
    margin-right: 0.5rem !important;
  }
  .me-lg-3 {
    margin-right: 1rem !important;
  }
  .me-lg-4 {
    margin-right: 1.5rem !important;
  }
  .me-lg-5 {
    margin-right: 3rem !important;
  }
  .me-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-0 {
    margin-bottom: 0 !important;
  }
  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }
  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }
  .mb-lg-auto {
    margin-bottom: auto !important;
  }
  .ms-lg-0 {
    margin-left: 0 !important;
  }
  .ms-lg-1 {
    margin-left: 0.25rem !important;
  }
  .ms-lg-2 {
    margin-left: 0.5rem !important;
  }
  .ms-lg-3 {
    margin-left: 1rem !important;
  }
  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }
  .ms-lg-5 {
    margin-left: 3rem !important;
  }
  .ms-lg-auto {
    margin-left: auto !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem !important;
  }
  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-lg-0 {
    padding-top: 0 !important;
  }
  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pt-lg-3 {
    padding-top: 1rem !important;
  }
  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pt-lg-5 {
    padding-top: 3rem !important;
  }
  .pe-lg-0 {
    padding-right: 0 !important;
  }
  .pe-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pe-lg-3 {
    padding-right: 1rem !important;
  }
  .pe-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pe-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-0 {
    padding-bottom: 0 !important;
  }
  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }
  .ps-lg-0 {
    padding-left: 0 !important;
  }
  .ps-lg-1 {
    padding-left: 0.25rem !important;
  }
  .ps-lg-2 {
    padding-left: 0.5rem !important;
  }
  .ps-lg-3 {
    padding-left: 1rem !important;
  }
  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }
  .ps-lg-5 {
    padding-left: 3rem !important;
  }
  .gap-lg-0 {
    gap: 0 !important;
  }
  .gap-lg-1 {
    gap: 0.25rem !important;
  }
  .gap-lg-2 {
    gap: 0.5rem !important;
  }
  .gap-lg-3 {
    gap: 1rem !important;
  }
  .gap-lg-4 {
    gap: 1.5rem !important;
  }
  .gap-lg-5 {
    gap: 3rem !important;
  }
  .row-gap-lg-0 {
    row-gap: 0 !important;
  }
  .row-gap-lg-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-lg-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-lg-3 {
    row-gap: 1rem !important;
  }
  .row-gap-lg-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-lg-5 {
    row-gap: 3rem !important;
  }
  .column-gap-lg-0 {
    column-gap: 0 !important;
  }
  .column-gap-lg-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-lg-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-lg-3 {
    column-gap: 1rem !important;
  }
  .column-gap-lg-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-lg-5 {
    column-gap: 3rem !important;
  }
  .text-lg-start {
    text-align: left !important;
  }
  .text-lg-end {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-start {
    float: left !important;
  }
  .float-xl-end {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
  .object-fit-xl-contain {
    object-fit: contain !important;
  }
  .object-fit-xl-cover {
    object-fit: cover !important;
  }
  .object-fit-xl-fill {
    object-fit: fill !important;
  }
  .object-fit-xl-scale {
    object-fit: scale-down !important;
  }
  .object-fit-xl-none {
    object-fit: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-grid {
    display: grid !important;
  }
  .d-xl-inline-grid {
    display: inline-grid !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
  .d-xl-none {
    display: none !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    justify-content: center !important;
  }
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xl-start {
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    align-items: center !important;
  }
  .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-between {
    align-content: space-between !important;
  }
  .align-content-xl-around {
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
  .order-xl-first {
    order: -1 !important;
  }
  .order-xl-0 {
    order: 0 !important;
  }
  .order-xl-1 {
    order: 1 !important;
  }
  .order-xl-2 {
    order: 2 !important;
  }
  .order-xl-3 {
    order: 3 !important;
  }
  .order-xl-4 {
    order: 4 !important;
  }
  .order-xl-5 {
    order: 5 !important;
  }
  .order-xl-last {
    order: 6 !important;
  }
  .m-xl-0 {
    margin: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xl-0 {
    margin-top: 0 !important;
  }
  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mt-xl-3 {
    margin-top: 1rem !important;
  }
  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mt-xl-5 {
    margin-top: 3rem !important;
  }
  .mt-xl-auto {
    margin-top: auto !important;
  }
  .me-xl-0 {
    margin-right: 0 !important;
  }
  .me-xl-1 {
    margin-right: 0.25rem !important;
  }
  .me-xl-2 {
    margin-right: 0.5rem !important;
  }
  .me-xl-3 {
    margin-right: 1rem !important;
  }
  .me-xl-4 {
    margin-right: 1.5rem !important;
  }
  .me-xl-5 {
    margin-right: 3rem !important;
  }
  .me-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }
  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }
  .mb-xl-auto {
    margin-bottom: auto !important;
  }
  .ms-xl-0 {
    margin-left: 0 !important;
  }
  .ms-xl-1 {
    margin-left: 0.25rem !important;
  }
  .ms-xl-2 {
    margin-left: 0.5rem !important;
  }
  .ms-xl-3 {
    margin-left: 1rem !important;
  }
  .ms-xl-4 {
    margin-left: 1.5rem !important;
  }
  .ms-xl-5 {
    margin-left: 3rem !important;
  }
  .ms-xl-auto {
    margin-left: auto !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem !important;
  }
  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-xl-0 {
    padding-top: 0 !important;
  }
  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pt-xl-3 {
    padding-top: 1rem !important;
  }
  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pt-xl-5 {
    padding-top: 3rem !important;
  }
  .pe-xl-0 {
    padding-right: 0 !important;
  }
  .pe-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pe-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pe-xl-3 {
    padding-right: 1rem !important;
  }
  .pe-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pe-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }
  .ps-xl-0 {
    padding-left: 0 !important;
  }
  .ps-xl-1 {
    padding-left: 0.25rem !important;
  }
  .ps-xl-2 {
    padding-left: 0.5rem !important;
  }
  .ps-xl-3 {
    padding-left: 1rem !important;
  }
  .ps-xl-4 {
    padding-left: 1.5rem !important;
  }
  .ps-xl-5 {
    padding-left: 3rem !important;
  }
  .gap-xl-0 {
    gap: 0 !important;
  }
  .gap-xl-1 {
    gap: 0.25rem !important;
  }
  .gap-xl-2 {
    gap: 0.5rem !important;
  }
  .gap-xl-3 {
    gap: 1rem !important;
  }
  .gap-xl-4 {
    gap: 1.5rem !important;
  }
  .gap-xl-5 {
    gap: 3rem !important;
  }
  .row-gap-xl-0 {
    row-gap: 0 !important;
  }
  .row-gap-xl-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-xl-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-xl-3 {
    row-gap: 1rem !important;
  }
  .row-gap-xl-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-xl-5 {
    row-gap: 3rem !important;
  }
  .column-gap-xl-0 {
    column-gap: 0 !important;
  }
  .column-gap-xl-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-xl-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-xl-3 {
    column-gap: 1rem !important;
  }
  .column-gap-xl-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-xl-5 {
    column-gap: 3rem !important;
  }
  .text-xl-start {
    text-align: left !important;
  }
  .text-xl-end {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .float-xxl-start {
    float: left !important;
  }
  .float-xxl-end {
    float: right !important;
  }
  .float-xxl-none {
    float: none !important;
  }
  .object-fit-xxl-contain {
    object-fit: contain !important;
  }
  .object-fit-xxl-cover {
    object-fit: cover !important;
  }
  .object-fit-xxl-fill {
    object-fit: fill !important;
  }
  .object-fit-xxl-scale {
    object-fit: scale-down !important;
  }
  .object-fit-xxl-none {
    object-fit: none !important;
  }
  .d-xxl-inline {
    display: inline !important;
  }
  .d-xxl-inline-block {
    display: inline-block !important;
  }
  .d-xxl-block {
    display: block !important;
  }
  .d-xxl-grid {
    display: grid !important;
  }
  .d-xxl-inline-grid {
    display: inline-grid !important;
  }
  .d-xxl-table {
    display: table !important;
  }
  .d-xxl-table-row {
    display: table-row !important;
  }
  .d-xxl-table-cell {
    display: table-cell !important;
  }
  .d-xxl-flex {
    display: flex !important;
  }
  .d-xxl-inline-flex {
    display: inline-flex !important;
  }
  .d-xxl-none {
    display: none !important;
  }
  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xxl-row {
    flex-direction: row !important;
  }
  .flex-xxl-column {
    flex-direction: column !important;
  }
  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xxl-center {
    justify-content: center !important;
  }
  .justify-content-xxl-between {
    justify-content: space-between !important;
  }
  .justify-content-xxl-around {
    justify-content: space-around !important;
  }
  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xxl-start {
    align-items: flex-start !important;
  }
  .align-items-xxl-end {
    align-items: flex-end !important;
  }
  .align-items-xxl-center {
    align-items: center !important;
  }
  .align-items-xxl-baseline {
    align-items: baseline !important;
  }
  .align-items-xxl-stretch {
    align-items: stretch !important;
  }
  .align-content-xxl-start {
    align-content: flex-start !important;
  }
  .align-content-xxl-end {
    align-content: flex-end !important;
  }
  .align-content-xxl-center {
    align-content: center !important;
  }
  .align-content-xxl-between {
    align-content: space-between !important;
  }
  .align-content-xxl-around {
    align-content: space-around !important;
  }
  .align-content-xxl-stretch {
    align-content: stretch !important;
  }
  .align-self-xxl-auto {
    align-self: auto !important;
  }
  .align-self-xxl-start {
    align-self: flex-start !important;
  }
  .align-self-xxl-end {
    align-self: flex-end !important;
  }
  .align-self-xxl-center {
    align-self: center !important;
  }
  .align-self-xxl-baseline {
    align-self: baseline !important;
  }
  .align-self-xxl-stretch {
    align-self: stretch !important;
  }
  .order-xxl-first {
    order: -1 !important;
  }
  .order-xxl-0 {
    order: 0 !important;
  }
  .order-xxl-1 {
    order: 1 !important;
  }
  .order-xxl-2 {
    order: 2 !important;
  }
  .order-xxl-3 {
    order: 3 !important;
  }
  .order-xxl-4 {
    order: 4 !important;
  }
  .order-xxl-5 {
    order: 5 !important;
  }
  .order-xxl-last {
    order: 6 !important;
  }
  .m-xxl-0 {
    margin: 0 !important;
  }
  .m-xxl-1 {
    margin: 0.25rem !important;
  }
  .m-xxl-2 {
    margin: 0.5rem !important;
  }
  .m-xxl-3 {
    margin: 1rem !important;
  }
  .m-xxl-4 {
    margin: 1.5rem !important;
  }
  .m-xxl-5 {
    margin: 3rem !important;
  }
  .m-xxl-auto {
    margin: auto !important;
  }
  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xxl-0 {
    margin-top: 0 !important;
  }
  .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }
  .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }
  .mt-xxl-3 {
    margin-top: 1rem !important;
  }
  .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }
  .mt-xxl-5 {
    margin-top: 3rem !important;
  }
  .mt-xxl-auto {
    margin-top: auto !important;
  }
  .me-xxl-0 {
    margin-right: 0 !important;
  }
  .me-xxl-1 {
    margin-right: 0.25rem !important;
  }
  .me-xxl-2 {
    margin-right: 0.5rem !important;
  }
  .me-xxl-3 {
    margin-right: 1rem !important;
  }
  .me-xxl-4 {
    margin-right: 1.5rem !important;
  }
  .me-xxl-5 {
    margin-right: 3rem !important;
  }
  .me-xxl-auto {
    margin-right: auto !important;
  }
  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }
  .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }
  .mb-xxl-auto {
    margin-bottom: auto !important;
  }
  .ms-xxl-0 {
    margin-left: 0 !important;
  }
  .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }
  .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }
  .ms-xxl-3 {
    margin-left: 1rem !important;
  }
  .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }
  .ms-xxl-5 {
    margin-left: 3rem !important;
  }
  .ms-xxl-auto {
    margin-left: auto !important;
  }
  .p-xxl-0 {
    padding: 0 !important;
  }
  .p-xxl-1 {
    padding: 0.25rem !important;
  }
  .p-xxl-2 {
    padding: 0.5rem !important;
  }
  .p-xxl-3 {
    padding: 1rem !important;
  }
  .p-xxl-4 {
    padding: 1.5rem !important;
  }
  .p-xxl-5 {
    padding: 3rem !important;
  }
  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-xxl-0 {
    padding-top: 0 !important;
  }
  .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }
  .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }
  .pt-xxl-3 {
    padding-top: 1rem !important;
  }
  .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }
  .pt-xxl-5 {
    padding-top: 3rem !important;
  }
  .pe-xxl-0 {
    padding-right: 0 !important;
  }
  .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }
  .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }
  .pe-xxl-3 {
    padding-right: 1rem !important;
  }
  .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }
  .pe-xxl-5 {
    padding-right: 3rem !important;
  }
  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }
  .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }
  .ps-xxl-0 {
    padding-left: 0 !important;
  }
  .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }
  .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }
  .ps-xxl-3 {
    padding-left: 1rem !important;
  }
  .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }
  .ps-xxl-5 {
    padding-left: 3rem !important;
  }
  .gap-xxl-0 {
    gap: 0 !important;
  }
  .gap-xxl-1 {
    gap: 0.25rem !important;
  }
  .gap-xxl-2 {
    gap: 0.5rem !important;
  }
  .gap-xxl-3 {
    gap: 1rem !important;
  }
  .gap-xxl-4 {
    gap: 1.5rem !important;
  }
  .gap-xxl-5 {
    gap: 3rem !important;
  }
  .row-gap-xxl-0 {
    row-gap: 0 !important;
  }
  .row-gap-xxl-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-xxl-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-xxl-3 {
    row-gap: 1rem !important;
  }
  .row-gap-xxl-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-xxl-5 {
    row-gap: 3rem !important;
  }
  .column-gap-xxl-0 {
    column-gap: 0 !important;
  }
  .column-gap-xxl-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-xxl-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-xxl-3 {
    column-gap: 1rem !important;
  }
  .column-gap-xxl-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-xxl-5 {
    column-gap: 3rem !important;
  }
  .text-xxl-start {
    text-align: left !important;
  }
  .text-xxl-end {
    text-align: right !important;
  }
  .text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 2.5rem !important;
  }
  .fs-2 {
    font-size: 2rem !important;
  }
  .fs-3 {
    font-size: 1.75rem !important;
  }
  .fs-4 {
    font-size: 1.5rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-grid {
    display: grid !important;
  }
  .d-print-inline-grid {
    display: inline-grid !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
  .d-print-none {
    display: none !important;
  }
}
:root {
  --gray-f9: hsl(0, 0%, 98%);
  --gray-f1: hsl(0, 0%, 95%);
  --gray-e: hsl(0, 0%, 93%);
  --gray-d: hsl(0, 0%, 87%);
  --gray-c: hsl(0, 0%, 80%);
  --gray-b: hsl(0, 0%, 73%);
  --gray-a: hsl(0, 0%, 67%);
  --gray-9: hsl(0, 0%, 60%);
  --gray-8: hsl(0, 0%, 53%);
  --gray-7: hsl(0, 0%, 47%);
  --gray-6: hsl(0, 0%, 40%);
  --gray-5: hsl(0, 0%, 33%);
  --gray-4: hsl(0, 0%, 27%);
  --gray-3: hsl(0, 0%, 20%);
  --gray-2: hsl(0, 0%, 13%);
  --gray-1: hsl(0, 0%, 7%);
}

.my-custom-class {
  background-color: lightblue;
  padding: 15px;
}


  `

export default helperStyles;