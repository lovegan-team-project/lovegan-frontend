import styled from "styled-components";
const S = {}

S.Wrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; */
    margin: auto;
  
`
S.Header = styled.header`
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
    /* display: block; */
    width: 100%;
	background-color: #ffffff;
	position: sticky;
    top: 0;
	height: 100px;
	z-index: 10;
    /* border-bottom: 1px solid #d9d9d9; */
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
   
   & img.logo {
        width: 175PX;
        height: 65px;
        /* margin: 18px 100px 17px 250px; */
   }

    & a {
        font-size: 14px;
        color : #333333;
    }
    & .active {
            color : ${({theme})=> theme.PALLETTE.brand["primary"]} !important;
        }

    & a:hover{
        color : #03A63C;
    }
`
S.HeaderContainer = styled.div`
    width: 1420px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
    height: 100%;
`;

S.NavContainer = styled.div`
    width: fit-content;
    display : flex;
    flex-direction: row;
    gap: 60px;

    & a {
        text-decoration-line: none;
        color : #333333;
    }
`

S.ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

S.Input = styled.input`
    width: 212px;
    height: 40px;
    border: 1px solid #D9D9D9;
    border-radius: 20px 20px;
    /* margin: 30px 45px 30px 85px; */
    font-size: 14px;
    
    
    &:focus {
        outline: none;
        border: 1px solid #a6a6a6;
    }
    `

S.InputWrapper = styled.div`
    height: 40px;
    margin-right: 32px;

    & form {
        position: relative;
    }
`;

S.InputButton = styled.button`
    /* margin: 12px 13px 11px 177px; */
    position: absolute; /* 부모 내 위치 조정 */
    top: 12px;
    right: 14px;
    background: none; 
    border: none; 
    cursor: pointer;
    justify-content: center;
    align-items: center;
    padding: 0;
    
    & img.search {
        width: 16px;
        height: 16px;
        object-fit: contain; /* 이미지 비율 유지 */
    }
    
    `
S.Login = styled.div`
    font-size: 14px;
    margin-right: 12px;
`
S.SignupButton = styled.button`
    padding: 8px 20px;
    background-color : ${({theme})=> theme.PALLETTE.brand["primary"]};
    color: white;
    border: none;
    border-radius: 20px;
    text-align: center;

    &:hover {
        opacity: 0.8;
    }

    & a {
        color: #fff;
    }
    & a:hover {
        color: #fff;
    }
`

S.Main = styled.main`
    background-color: ${({ isMypage }) => (isMypage ? '#F7F8FA' : 'transparent')};
`;

S.Main1 = styled.main`
    /* flex: 1;
    width: 100%; */
    padding-top: 100px;
    overflow: hidden;
    //padding-bottom: 293px;
 

`
S.Main2 = styled.main`

    /* flex: 1; */
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

S.Container = styled.div`
    width: 1420px;
    margin: auto;

    & div.bottom {
        border-top: 1px solid #d9d9d9;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 14px;
        color: #8d8d8d;
    }

    & div.flexRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }
`


S.logoWrapper = styled.div`
    margin: 40px 0px;
    width: 121px;
    height: 45px;
`

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
S.MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


S.TextBoxWrapper = styled.div`
    margin: 20px 0px 30px 0px;
    color: #333333;
    font-size: 16px;
`

S.TextBox2 = styled.div`
    padding-top: 8px;
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


export default S;