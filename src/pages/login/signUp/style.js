import downIcon from './icons/down.svg';
import styled from "styled-components";
import check from "./icons/checkbox.svg";

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

S.SignUp = styled.div`
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    margin-top: 254px;
`

S.Divider = styled.div`
    width: 309px;
    height: 1px;
    background-color: ${({theme})=>theme.PALLETTE.grey["8"]};
    margin-top: 52px;
    position: relative;
    left : 50%;
    transform: translateX(-50%);
    z-index: 1;
`
S.DividerFont = styled.div`
    width: 89px;
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
S.Button = styled.div`
    display: flex;
    flex-direction: column;
`
S.Kakao = styled.button`
    display: flex;
    width: 380px;
    height: 46px;
    border-radius: 10px;
    padding: 14px 50px;
    margin-top: 19px;
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
S.EmailDivider = styled.div`
    width: 360px;
    height: 1px;
    background-color: ${({theme})=>theme.PALLETTE.grey["8"]};
    margin-top: 28px;
    position: relative;
    left : 50%;
    transform: translateX(-50%);
`
S.Email = styled.div`
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    margin-top: 30px;
`
S.EmailContainer = styled.div`
    margin-top: 12px;
    width: 380px;
    display: flex;
    justify-content: space-between;
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    align-items: center;
    color: ${({theme})=>theme.PALLETTE.grey["8"]};

`
S.EmailInput = styled.input`
    position: relative;
    width: 170px;
    height: 42px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    &:focus {
        border-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.EmailDropDown = styled.select`
    option[value="default"]{
        color: ${({theme})=>theme.PALLETTE.grey["8"]} !important;
    }
    option:not([value="default"]) {
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]}; 
    }
    position: relative;
    width: 170px;
    height: 42px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    padding: 8px 10px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none; 
    background: ${({theme}) => theme.PALLETTE.white} url(${downIcon}) no-repeat right 10px center;
    background-position: right 10px center; 
    &:focus {
        border-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.EmailButton = styled.div`
    width: 380px;
    height: 53px;
    border-radius: 10px;
    padding: 14px 80px;
    margin-top: 16px;
    background-color: white;
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    border: 1px solid ${({theme})=> theme.PALLETTE.brand["primary"]};
    align-items: center;
    text-align: center;
    box-sizing: border-box;
`
S.EmailCertifyBox = styled.div`
    width: 380px;
    height: 135px;
    border-radius: 5px;
    background-color: ${({theme})=>theme.PALLETTE.grey["0"]};
    margin-top: 16px;
    padding: 18px 24px;
    & div {
        font-size: ${({theme})=>theme.FONT_SIZE["small"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
        color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    }
`
S.CertifyCodeContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 332px;
    height: 42px;
    & span {
        font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    }
    
`
S.CertifyCode = styled.input`
    width: 332px;
    height: 42px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    color: ${({theme})=>theme.PALLETTE.grey["8"]};
    margin-top: 8px;
    &:focus {
        border-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.EmailConfirm = styled.span`
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    color: ${({theme})=>theme.PALLETTE.grey["8"]};
    position: absolute;
    right: 16px;
    top: 50%; 
    display: flex; 
    align-items: center; 
    cursor: pointer; 
`
S.ReCertifyCode = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    width: 332px;
    height: 15px;
    & img {
        width: 15px;
        height: 15px;
        margin-right: 2px;
    }
`
S.NoEmail = styled.div`
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    color: ${({theme})=>theme.PALLETTE.grey["8"]} !important;
    display: flex;
    align-items: center;
    margin-right: 4px;
`
S.ResendCode = styled.div`
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: ${({theme})=>theme.PALLETTE.grey["8"]} !important;
    display: flex;
    align-items: center;
    text-decoration: underline;
`
S.PhoneInput = styled.input`
    width: 380px;
    height: 42px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    &:focus {
        border-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.Password = styled.div`
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    margin-top: 30px;
`
S.PasswordInputContainer = styled.div`
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    margin-top: 12px;
`
S.PasswordInput = styled.input`
    width: 380px;
    height: 42px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    /* color : ${({theme})=>theme.PALLETTE.grey["8"]}; */
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    padding : 12px 16px;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    margin-top: 8px;
    &:focus {
        border-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.Nickname = styled.div`
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    margin-top: 30px;
`
S.NicknameInputContainer = styled.div`
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    margin-top: 12px;
`
S.NicknameInput = styled.input`
    width: 380px;
    height: 42px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    /* color : ${({theme})=>theme.PALLETTE.grey["8"]}; */
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    padding : 12px 16px;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    margin-top: 8px;
    &:focus {
        border-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.Agree = styled.div`
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    margin-top: 30px;
`
S.AgreeContainer = styled.div`
    width: 380px;
    height: 300px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    margin-top: 12px;
`
S.AllAgree = styled.div`
    width: auto;
    height: 22px;
    margin-left: 30px;
    margin-top: 24px;
    & label {
        display: flex;
        line-height: 22px;
        font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
        color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    }
    & span {
        font-size: ${({theme})=>theme.FONT_SIZE["small"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
        color: ${({theme})=>theme.PALLETTE.grey["8"]};
        margin-left: 8px;
    }
`
S.AgreeDivider = styled.div`
    width: 360px;
    height: 1px;
    background-color: ${({theme})=>theme.PALLETTE.grey["8"]};
    margin-top: 24px;
    position: relative;
    left : 50%;
    transform: translateX(-50%);
    margin-bottom: 6px;
`
S.EachAgree = styled.div`
    width: 227px;
    margin-left: 30px;
    margin-top: 22px;

`
S.AgreeLabel = styled.label`
    width: 320px;
    height: 22px;
    display: flex;
    margin-top: 16px;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    line-height: 22px;
    & span {
        margin-left: 8px;
        font-size: ${({theme})=>theme.FONT_SIZE["small"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    }
    & img {
        margin-left: auto;
    }
`
S.AgreeCheckbox = styled.input`
    appearance: none;
    width: 22px;
    height: 22px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["2"]};
    border-radius: 2px;
    padding: 0px;
    margin: 0px 8px 0px 0px;

    &:checked{
        border-color: transparent;
        background-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        background-image: url(${check}) ; 
        background-position: 50%;
        background-repeat: no-repeat;
    }
`
S.Required = styled.span`
    color: ${({theme})=> theme.PALLETTE.brand["primary"]};
`
S.Option = styled.span`
    color: ${({theme})=>theme.PALLETTE.grey["8"]};
`
S.SignUpButton = styled.button`
    width: 380px;
    height: 53px;
    padding: 14px 80px;
    color: white;
    background-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    border-radius: 10px;
    margin-top: 27px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
`
S.ToLoginContainer = styled.div`
    width: 197px;
    margin: 24px auto 148px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
S.IsHaveId = styled.div`
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
`
S.ToLogin = styled.div`
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    text-decoration: underline;
`
S.ConfirmMessage = styled.div`
    position: relative;
    margin-top: 5px;
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    color: ${({theme})=> theme.PALLETTE.sub["secondary"]};
`
export default S;