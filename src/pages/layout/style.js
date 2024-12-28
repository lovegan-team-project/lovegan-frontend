import styled from "styled-components";
const S = {}

S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  
`
S.Header = styled.header`

    position: fixed;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: 100px;
    display: flex;
    z-index: 99999;
    background-color: white;
    box-shadow: 0px 6px 5px -2px gray;
    justify-content: center;

    /* position: fixed;
    width: 100%;
    height : 100px;
    display: flex;
    /* justify-content: flex-start; */
    //border-bottom: 1px rgba(0, 0, 0, 0.3);
    //box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    //box-shadow: h-shadow v-shadow blur spread color inset; */

   
    
   
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
    margin: 41px 20px 41px 30px;
    
   

`
S.NavContainer = styled.div`
    display : flex;
    justify-content : flex-start;
    width : 614px;
    height : 20px;
    margin-top : 41px;
    z-index: 9999;
    

    & a {
        text-decoration-line: none;
        margin-right: 65px;
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
    margin: 30px 45px 30px 85px;
    font-size: 14px;
   
    
    &:focus {

        outline-color: #03A63C;
    }

   
    cursor: pointer;
    

`

S.InputButton = styled.button`

    position: relative;
    width: 40px; 
    height: 40px;
    margin: 12px 13px 11px 177px;
    background: none; 
    border: none; 
    cursor: pointer;

    display: flex; 
    justify-content: center;
    align-items: center;

    & img.search {
        width: 17px;
        height: 17px;
        position: relative; /* 부모 내 위치 조정 */
        top: -82px;
        left: 5px;
        object-fit: contain; /* 이미지 비율 유지 */
    }
   
`

S.Main1 = styled.main`

    flex: 1;
    width: 100%;
    padding-top: 100px;
    overflow: hidden;
    //padding-bottom: 293px;
 

`
S.Main2 = styled.main`

    flex: 1;
    width: 100%;
    overflow: hidden;
    //padding-bottom: 293px;
 

`

S.Footer = styled.footer`
    /* position: relative; */
    width: 100%;
    color: #333333;
    height: 293px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #d9d9d9;
    min-width: 100vw;
    
`
S.logoWrapper = styled.div`
    margin: 40px 0px;
    width: 121px;
    height: 45px;
`
S.TextBoxWrapper = styled.div`
    margin: 20px 0px 30px 0px;
    color: #333333;
    font-size: 16px;
`

S.ContactWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 70px;

`

S.Contact = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;

    & div.title {
        padding-bottom: 8px;
        color: #8d8d8d;
    }

    & div.content {
        color: #333333;
    }
`

S.MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


S.TopContent = styled.p`
    cursor: pointer;
    color: #333333;
    font-size: 18px;
    font-weight: 600;
    margin: 16px 0px;
    & a {
        color: #333333;
    }

`
S.TextBox2 = styled.div`
    padding-top: 8px;
`

S.Container = styled.div`
    width: 1420px;
    margin: 0 auto;

    & div.bottom {
        border-top: 1px solid #d9d9d9;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 14px;
        color: #8d8d8d;
    }
`

export default S;