import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyle = createGlobalStyle`

    ${reset}

    @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    *{
        box-sizing: border-box;
        text-decoration: none;

    }

    body{
        font-family: 'SpoqaHanSansNeo-Regular',sans-serif;
    }

    button{
        /* width: 20px; */
        /* height: 20px; */
        padding: 4px 12px;
        border-width: 1px;
        border-radius: 50px;
        /* border-color: ; */
    }
    
    button:hover{
        /* border-color: ; */
    }
    
` 
export default GlobalStyle;