import styled from "styled-components";

const S = {};

S.Container = styled.div`
    width: 1420px;
    height: 1200px;
    margin: 0 auto;
    padding-top: 85px;
`

S.Wrapper = styled.div`
    width: 857px;
    display: flex;
    gap: 80px;

    & .tabMenu{

        & h1{
            font-size: ${({theme})=> theme.FONT_SIZE["h3"]};
            font-weight: bold;
            color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
            margin-bottom: 42px;
        }
    }
`
S.TabButtonContainer = styled.li`

`;

S.TabButton = styled.button`
    width: 197px;
    height: 55px;
    line-height: 50px;
    text-align: left;
    color: ${({theme})=> theme.PALLETTE.grey["7"]};
    background: none;
    font-size: ${({theme})=> theme.FONT_SIZE["subtitle"]};
    font-weight: bold;
    border: 1px solid ${({theme})=> theme.PALLETTE.grey["7"]};
    border-radius: 0%;
    border-left: none;
    border-right: none;
    cursor: pointer;
`;

S.Wrap = styled.div`
    width:857px;
    /* border:1px solid red; */
`

S.Div= styled.div`
    display: flex;
    gap:16px;
`

S.H2 = styled.h2`
    font-size: ${({theme})=> theme.FONT_SIZE["h4"]};
    font-weight: bold;
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
`

S.P = styled.p`
    font-size: ${({theme})=> theme.FONT_SIZE["paragraph"]};
    font-weight: bold;
    color: ${({theme})=> theme.PALLETTE.grey["7"]};
    line-height: 30px;
`

export default S;