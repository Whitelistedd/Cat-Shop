import { createGlobalStyle } from 'styled-components';

import Exo2 from './assets/fonts/Exo2.0-Thin.otf';
import Trebuchet from './assets/fonts/trebuc.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: "Exo2";
        font-style: normal;
        src: url(${Exo2});   
    }
    @font-face {
        font-family: "Trebuchet";
        font-style: normal;
        src: url(${Trebuchet});
    }
`