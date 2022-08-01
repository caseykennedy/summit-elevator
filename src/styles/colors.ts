// Colors
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

const Colors = css`
  :root,
  [data-theme='default'] {
    // base
    --color-black: hsl(0, 0%, 0%);
    --color-white: hsl(0, 0%, 100%);
    --color-gray: gray;

    --color-primary: #203451;
    --color-secondary: #CCC5B3;

    // background
    --color-bg: #203451;
    // typography
    --color-text: #DADCE0;
    // border
    --color-border: #322E3C;
  }

  /* [data-theme='darkMode'] {
  } */
`

export default Colors
