import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { flexCenter } from "./common";


const GlobalStyle = createGlobalStyle`

    ${reset}

    @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    *{
        font-family: 'SpoqaHanSansNeo-Regular';
        box-sizing: border-box;
        text-decoration: none;
        

        input{
            border: 1px;
            padding: 12px 0px 12px 16px; 
        }

        button {
            
            /* width: 20px; */
            /* height: 20px; */
            padding: 4px 12px;
            border-width: 1px;
            /* border-radius: 50px; */
            /* border-color: ; */

            border: 1px;
            border-radius: 10px;
        }

        button:hover {
        /* border-color: ; */
        }


        .tag {
            padding: 4px 12px;
            border: 1px;
            border-radius: 50px;
        }
        
        

    }

   

   body{
        font-family: 'SpoqaHanSansNeo-Regular',sans-serif;
        ${flexCenter}
       

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