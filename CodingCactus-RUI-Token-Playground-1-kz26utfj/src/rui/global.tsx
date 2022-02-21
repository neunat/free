import * as React from 'react';
import { globalStyles } from './tokens';
import { Global } from '@emotion/react';

const GlobalStyle = () => (
  <>
    <Global styles={globalStyles} />

    <style>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed, 
      figure, figcaption, footer, header, hgroup, 
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }

      html,
      body {
        min-height: 100%;
      }

      #root {
        min-height: 100vh;
        background-color: var(--background-default);
        font-family: var(--font-family-default);
        font-size: var(--font-size-default);
        color: var(--foreground-default);
        --interactiveBackground: var(--background-default);
        --interactiveBackgroundActive: var(--background-higher);
        --interactiveBorder: var(--outline-dimmer);
        --interactiveBorderHover: var(--outline-default);
      }

      button {
        font-family: inherit;
        border-radius: 0;
        border: none;
        background: transparent;
        color: inherit;
        font: inherit;
        lineHeight: normal;
      }

      input {
        font-family: inherit;
      }

      /* PLEX SANS */

      /* ibm-plex-sans-regular - latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        src: local('IBM Plex Sans Regular'), local('IBMPlexSans-Regular'),
            url('/fonts/ibm-plex-sans-v8-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-sans-v8-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* ibm-plex-sans-italic - latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: italic;
        font-weight: 400;
        src: local('IBM Plex Sans Italic'), local('IBMPlexSans-Italic'),
            url('/fonts/ibm-plex-sans-v8-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-sans-v8-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* ibm-plex-sans-500 - latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 500;
        src: local('IBM Plex Sans Medium'), local('IBMPlexSans-Medium'),
            url('/fonts/ibm-plex-sans-v8-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-sans-v8-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* ibm-plex-sans-500italic - latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: italic;
        font-weight: 500;
        src: local('IBM Plex Sans Medium Italic'), local('IBMPlexSans-Medium-Italic'),
            url('/fonts/ibm-plex-sans-v8-latin-500italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-sans-v8-latin-500italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* ibm-plex-sans-600 - latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 600;
        src: local('IBM Plex Sans Semibold'), local('IBMPlexSans-Semibold'),
            url('/fonts/ibm-plex-sans-v8-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-sans-v8-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* ibm-plex-sans-600italic - latin */
      @font-face {
        font-family: 'IBM Plex Sans';
        font-style: italic;
        font-weight: 600;
        src: local('IBM Plex Sans Semibold Italic'), local('IBMPlexSans-Semibold-Italic'),
            url('/fonts/ibm-plex-sans-v8-latin-600italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-sans-v8-latin-600italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }

      /* PLEX MONO */

      /* ibm-plex-mono-regular - latin */
      @font-face {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 400;
        src: local('IBM Plex Mono Regular'), local('IBMPlexMono-Regular'),
            url('/fonts/ibm-plex-mono-v6-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-mono-v6-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* ibm-plex-mono-500 - latin */
      @font-face {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 500;
        src: local('IBM Plex Mono Medium'), local('IBMPlexMono-Medium'),
            url('/fonts/ibm-plex-mono-v6-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-mono-v6-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* ibm-plex-mono-italic - latin */
      @font-face {
        font-family: 'IBM Plex Mono';
        font-style: italic;
        font-weight: 400;
        src: local('IBM Plex Mono Italic'), local('IBMPlexMono-Italic'),
            url('/fonts/ibm-plex-mono-v6-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-mono-v6-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* ibm-plex-mono-500italic - latin */
      @font-face {
        font-family: 'IBM Plex Mono';
        font-style: italic;
        font-weight: 500;
        src: local('IBM Plex Mono Medium Italic'), local('IBMPlexMono-Medium-Italic'),
            url('/fonts/ibm-plex-mono-v6-latin-500italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-mono-v6-latin-500italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* ibm-plex-mono-600 - latin */
      @font-face {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 600;
        src: local('IBM Plex Mono Semibold'), local('IBMPlexMono-Semibold'),
            url('/fonts/ibm-plex-mono-v6-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-mono-v6-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* ibm-plex-mono-600italic - latin */
      @font-face {
        font-family: 'IBM Plex Mono';
        font-style: italic;
        font-weight: 600;
        src: local('IBM Plex Mono Semibold Italic'), local('IBMPlexMono-Semibold-Italic'),
            url('/fonts/ibm-plex-mono-v6-latin-600italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/ibm-plex-mono-v6-latin-600italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }


    `}</style>
  </>
);

export default GlobalStyle;
