import styled from "styled-components";
const S = {}

S.Wrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  
`
S.Header = styled.header`

    
    position: fixed;
    width: 1920px;
    height : 100px;
    display: flex;
    justify-content: flex-start;
    z-index: 9999;
    background-color: white;
    box-shadow: 0 4px 4px 0 rgb(0,0,0,0.2);
    //box-shadow: h-shadow v-shadow blur spread color inset;
    
   
   & img{
        width: 175PX;
        height: 65px;
        margin: 18px 100px 17px 250px;
        justify-content: center;
        
   }


    & a {
        font-size: 14px;
        color : #333333;
        align-items: center;
        background-color: white;

        
    }
    & .active {
               color : ${({theme})=> theme.PALLETTE.brand["primary"]} !important;
           
        }

    & a:hover{
        color : #03A63C;
    }

    
    
`
S.Login = styled.p`
    width: 44px;
    height: 18px;
    font-size: 14px;
    margin: 41px 12px 41px 0px;
    
   

`
S.NavContainer = styled.div`
    display : flex;
    justify-content : flex-start;
    width : 614px;
    height : 20px;
    margin-top : 41px;
    

    & a {
        text-decoration-line: none;
        margin-right: 60px;
        color : #333333;
        background-color: white;
    }
      
`

S.SignupButton = styled.button`

    width : 90px;
    height : 32px;
    background-color : ${({theme})=> theme.PALLETTE.brand["primary"]};
    color: white;
    border: none;
    border-radius: 15px;
    text-align: center;
    margin-top: 32px;
    margin-right : 250px;
   
`

S.Input = styled.input`

  
    width: 212px;
    height: 40px;
    border: 1px solid black;
    border-radius: 20px 20px;
    margin: 30px 32px 30px 86px;
    font-size: 14px;
   
    
    &:focus {

        outline-color: #03A63C;
    }

   
    cursor: pointer;
    

`

S.InputButton = styled.button`

    position: relative;
    width: 17px;
    height: 17px;
    margin : 12px 13px 11px 177px;
    background: url("/images/main/search.svg") 0px 0px no-repeat;
    left: 90px;
    top: -70px;
   
`

S.Main = styled.main`

    flex: 1;
    width: 100%;
    padding-top: 100px;
    //padding-bottom: 293px;
 

`

S.Footer = styled.footer`
    color: white;
    width: 100%;
    height: 293px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme})=> theme.PALLETTE.brand["primary"] };
    

`
S.logoWrapper = styled.div`

    width: 121px;
    height: 45px;
    margin: 38px 1557px 0px 242px;
`
S.TextBoxWrapper = styled.div`
    width : 613px;
    height : 84px;

`
S.textBox1 = styled.p`
    
    width: 256px;
    height: 18px;
    font-size: 14px;
    margin : 42.92px 1414px 15px 250px;
    & a {
        color: white;
    }

`
S.textBox2 = styled.div`

    width: 613px;
    height: 15px;
    font-size: 12px;
    margin : 8px 1057px 0px 250px;
`


export default S;