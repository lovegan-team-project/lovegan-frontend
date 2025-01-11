import styled from "styled-components";
const S = {};
S.Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 300px;
`
S.FindId = styled.div`
    width: 187px;
    height: 34px;
    margin-top: 220px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: ${({theme})=>theme.FONT_SIZE["h3"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
`
S.PhoneAuthenticate = styled.div`
    width: 78px;
    height: 19px;
    line-height: 19px;
    text-align: center;
    font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    margin-top: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`
S.Divider = styled.div`
    width: 440px;
    height: 2px;
    background-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
    margin-bottom: 20px;
`
S.ContentWrapper = styled.div`
    width: 440px;
    height: 160px;
    box-sizing: border-box;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 40px;
`
S.InputTitle = styled.div`
    height: 18px;
    line-height: 18px;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    margin-bottom: 10px;
`
S.SubmitWrapper = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`
S.SubmitInput = styled.input`
    width: 300px;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    color: ${({theme})=>theme.PALLETTE.grey["8"]};
    &:focus {
        border-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.SubmitBtn = styled.div`
    width: 120px;
    height: 42px;
    line-height: 42px;
    box-sizing: border-box;
    border: 1px solid ${({theme})=> theme.PALLETTE.brand["primary"]};
    border-radius: 20px;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    text-align: center;
`
S.FindIdBtn = styled.div`
    width: 440px;
    height: 53px;
    box-sizing: border-box;
    line-height: 53px;
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: ${({theme})=>theme.PALLETTE.grey["4"]};
    background-color: ${({theme})=>theme.PALLETTE.grey["0"]};
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 40px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["4"]};
    border-radius: 10px;
`

export default S;