import styled from "styled-components";
const S = {};
S.Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 300px;
`
S.Reset = styled.div`
    width: 187px;
    height: 34px;
    margin-top: 220px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: ${({theme})=>theme.FONT_SIZE["h3"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};;
`
S.Notice = styled.div`
    width: 340px;
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
    height: 182px;
    box-sizing: border-box;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 40px;
    & span {
        width: 330px;
        height: 18px;
        line-height: 18px;
        margin-top: 4px;
        font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
        color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    }
`
S.Subtitle = styled.div`
    width: 97px;
    height: 18px;
    line-height: 18px;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
`
S.NewPWInput = styled.input`
    width: 440px;
    height: 42px;
    padding: 12px 16px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    margin-top: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    &:focus {
        border-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.ResetBtn = styled.div`
    width: 440px;
    height: 53px;
    box-sizing: border-box;
    line-height: 53px;
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: white;
    background-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 40px;
    border-radius: 10px;
`
export default S;