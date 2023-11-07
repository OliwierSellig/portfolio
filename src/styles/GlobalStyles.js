import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{

  & {
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-350: #bcc0c5;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;
    --color-grey-950: #030712;

    --color-background: #f9fafb;
    --color-text-white: #f9fafb;
    --color-text-white-shade-1: #9ca3af;
    --color-nav-active: #f9fafb;
    --navigation-hover-color: rgba(249, 250, 251, 0.6);
    --technology-background: radial-gradient(circle,rgba(0, 0, 0, 0.7) 0%,rgba(249, 250, 251, 0.7) 100%);
    --back-button-shadow: rgba(209, 213, 219, 0.2);

    --image-grayscale: 0;
  --image-opacity: 100%;
  
  }

  &.dark-mode{
    --color-grey-50: #09090b;
    --color-grey-100: #18181b;
    --color-grey-200: #27272a;
    --color-grey-300: #3f3f46;
    --color-grey-350: #525259;
    --color-grey-400: #52525b;
    --color-grey-500: #71717a;
    --color-grey-600: #a1a1aa;
    --color-grey-700: #d4d4d8;
    --color-grey-800: #e4e4e7;
    --color-grey-900: #f4f4f5;
    --color-grey-950: #fafafa;

    --color-background: #3f3f46;
    --color-text-white: #fafafa;
    --color-text-white-shade-1: #a1a1aa;
    --color-nav-active: #52525b;
    --navigation-hover-color: rgba(113, 113, 122, 0.4);
    --technology-background: radial-gradient(circle,rgba(0, 0, 0, 0.5) 00%, rgba(249, 250, 251, 0.5) 100%);
    --back-button-shadow: rgba(63, 63, 70, 0.2);

    --image-grayscale: 10%;
--image-opacity: 90%;
  
  }
   
    --color-blue-300: #93c5fd;
    --color-blue-400: #60a5fa;
    --color-blue-500: #3b82f6;
    --color-day-background: #BFE6F7;
    --color-day-border: #80C1D7;
    --color-sun-background: #F5ED28;
    --color-sun-border: #E6C63F;
    --color-night-background: #484848;
    --color-night-border: #333;
    --color-moon-background: #FFFDF1;
    --color-moon-border: #E1E4C5;
    --border-radius-default: 30px;
    --letter-spacing-default: 0.3px;
}

*:where(
    :not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)
  ) {
  all: unset;
  display: revert;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  transition:  background-color 0.3s
}

canvas {
  display: none;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;

  @media only screen and (max-width: 1200px) {
    font-size: 56.25%;
  }

  @media only screen and (max-width: 900px) {
    font-size: 50%;
  }

  @media only screen and (max-width: 600px) {
    font-size: 43.75%;
  }

  @media only screen and (max-width: 400px) {
    font-size: 37.5%;
  }
}

body{
    background-color: var(--color-grey-200);
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    color: var(--color-grey-700);
    
}

a,
button {
  cursor: revert;
}

ol,
ul,
menu {
  list-style: none;
}

img {
  max-inline-size: 100%;
  max-block-size: 100%;
}

table {
  border-collapse: collapse;
}

input,
textarea {
  -webkit-user-select: auto;
}

textarea {
  white-space: revert;
}

meter {
  -webkit-appearance: revert;
  appearance: revert;
}

:where(pre) {
  all: revert;
}

::placeholder {
  color: unset;
}

::marker {
  content: initial;
}

:where([hidden]) {
  display: none;
}

:where([contenteditable]:not([contenteditable="false"])) {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
  overflow-wrap: break-word;
  -webkit-line-break: after-white-space;
  -webkit-user-select: auto;
}

:where([draggable="true"]) {
  -webkit-user-drag: element;
}

:where(dialog:modal) {
  all: revert;
}`;

export default GlobalStyles;
