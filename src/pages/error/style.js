import styled from "styled-components";

const S = {};

 S.wrapper = styled.div`
    margin: 0 auto;
    text-align: center;
    width: 540px;
    height: 370px;
    padding-top:290px;

    & h2{
        margin-top: 30px;
        font-size: 36px;
        font-weight: bold;
        color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
    }

    & p{
        margin-top: 40px;
        font-size: 20px;
        font-weight: bold;
        line-height: 1.3;
        color: #999999;
    }

    & .main{
        width: 290px;
        height: 50px;
        border: 1px solid ${({theme})=> theme.PALLETTE.grey["4"]};
        border-radius: 30px;
        color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
        display: block;
        text-align: center;
        font-weight: bold;
        line-height: 50px;
        margin: 50px auto;
    }
 `

export default S;