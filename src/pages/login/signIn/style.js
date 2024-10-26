import styled from "styled-components"

const S = {};

S.CompleteIcon = styled.div`
    width: 100px;
    height: 100px;
    margin-top: 200px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    display: flex;
    justify-content: center;
    align-items: center;
`
S.SignUpComplete = styled.div`
    text-align: center;
    color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    font-size: ${({theme})=>theme.FONT_SIZE["h2"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
    margin-top: 24px;
`
S.SignUpCompleteDetail = styled.div`
    width: 250px;
    text-align: center;
    color: ${({theme})=>theme.PALLETTE.grey["8"]};
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    margin: 32px auto;
`
S.SignUpInfo = styled.div`
    width: 500px;
    height: 50px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 30px;
    box-sizing: border-box;
    margin: 69px auto;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    white-space: nowrap;
    & div {
        color: ${({theme})=> theme.PALLETTE.sub["secondary"]};
    }
`
 S.ClickButton = styled.div`
    width: 325px;
    display: flex;
    justify-content: space-between;
    margin: 32px auto;

 `
 S.MainButton = styled.div`
    width: 152px;
    height: 38px;
    border: 1px solid ${({theme})=> theme.PALLETTE.brand["primary"]};
    border-radius: 10px;
    box-sizing: border-box;
    color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
 `
 S.LoginButton = styled.div`
    width: 152px;
    height: 38px;
    background-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    border-radius: 10px;
    color: white;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
 `

 export default S;