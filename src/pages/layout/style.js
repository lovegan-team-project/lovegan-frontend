import styled from "styled-components";

const S = {}

S.Header = styled.header`
    width: 100%;
    height : 100px;
    display: flex;
    justify-content: flex-start;
   
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
    }
      
`

S.LoginButton = styled.button`

    width : 90px;
    height : 32px;
    background-color : #03A63C;
    color: white;
    border: none;
    border-radius: 15px;
    text-align: center;
    margin-top: 32px;
    margin-right : 250px;
   
`

S.InputWrapper = styled.button`

    position: relative;

`
S.Input = styled.input`

    width: 212px;
    height: 40px;
    border-radius: 20px 20px;
    margin: 30px 32px 30px 86px;
    font-size: 14px;
    
    &:focus {

        outline-color: #03A63C;
    }

`

S.InputButton = styled.button`
    position: absolute;
    width: 17px;
    height: 17px;
    top: 41px;
    left: 1405px;
    background-color: white;
    border-style: none;
    padding: 0px;

    & img {
        width : 17px;
        height: 17px;
        margin: 0px;
    }


`
S.Main = styled.main`

    flex: 1;

`

S.Footer = styled.footer`

    width: 100%;
    height: 293px;


`








export default S;