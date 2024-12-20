import styled from "styled-components";

const S = {};

S.Form = styled.form`
    width: 100%;
    height: 100%;
`
S.Wrapper = styled.div`
    position: absolute;
    width: 380px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`
S.Logo = styled.img`
    position: absolute;
    width: 210px;
    height: 78px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 140px;
`
S.Login = styled.input`
    width: 380px;
    height: 50px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 258px;
    &:focus {
        border-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.Password = styled.input`
    width: 380px;
    height: 50px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 8px;
    &:focus {
        border-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.FoundIdAndPassword = styled.div`
    width: 158px;
    display: flex;
    margin: 12px 0px 0px 222px;
    justify-content: space-between;
    align-items: center;
`
S.FoundId = styled.div`
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
`
S.Line = styled.div`
    width: 1px;
    height: 10px;
    background-color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
`
S.FoundPW = styled.div`
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
`
S.Button = styled.div`
    display: flex;
    flex-direction: column;
`
S.LoginButton = styled.button`
    width: 380px;
    height: 53px;
    background-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: white;
    border-radius: 10px;
    padding: 14px 80px;
    margin-top: 40px;
`
S.SignUpButton = styled.button`
    width: 380px;
    height: 53px;
    background-color: white;
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    border: 1px solid ${({theme})=> theme.PALLETTE.brand["primary"]};
    border-radius: 10px;
    padding: 14px 80px;
    margin-top: 8px;
`
S.Divider = styled.div`
    width: 309px;
    height: 1px;
    background-color: ${({theme})=>theme.PALLETTE.grey["8"]};
    margin-top: 20px;
    position: relative;
    left : 50%;
    transform: translateX(-50%);
    z-index: 1;
`
S.DividerFont = styled.div`
    width: 127px;
    height: 15px;
    background-color: white;
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    margin-top: -6px;
    position: absolute;
    left : 50%;
    transform: translateX(-50%);
    z-index: 100;
    text-align: center;
`
S.Kakao = styled.button`
    display: flex;
    width: 380px;
    height: 46px;
    border-radius: 10px;
    padding: 14px 50px;
    margin-top: 24px;
    background-color: #FBDA00;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    justify-content: center;
    align-items: center;
    & div {
        width: 137px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
    }
    & img {
        width: 22px;
        height: 22px
    }
`
S.Naver = styled.button`
    display: flex;
    width: 380px;
    height: 46px;
    border-radius: 10px;
    padding: 14px 50px;
    margin-top: 8px;
    background-color: #00C13A;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: white;
    justify-content: center;
    align-items: center;
    & div {
        width: 137px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
    }
    & img {
        width: 14px;
        height: 14px;
        margin: 4px;
    }
`
S.Google = styled.button`
    display: flex;
    width: 380px;
    height: 46px;
    border-radius: 10px;
    padding: 14px 50px;
    margin-top: 8px;
    background-color: white;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    justify-content: center;
    align-items: center;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    box-sizing: border-box;
    & div {
        width: 122px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
    }
    & img {
            width: 20px;
            height: 20px;
        }    
`
S.ConfirmMessage = styled.div`
    position: relative;
    margin-top: 5px;
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    color: ${({theme})=> theme.PALLETTE.sub["secondary"]};
`
export default S;