import { createGlobalStyle } from 'styled-components';


export const GlobalIconfont = createGlobalStyle` 
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1563673904200'); /* IE9 */
    src: url('./iconfont.eot?t=1563673904200#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1563673904200') format('woff'),
    url('./iconfont.ttf?t=1563673904200') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1563673904200#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

