import styled, { css } from "styled-components";


const sizeCSS = {
    small: css`
        width: 55px;
        height: 31px;
        padding: 8px 16px;
    `,
    normal: css`
        width: 126px;
        height: 38px;
        padding: 10px 50px;   
    `,
    large: css`
        width: 197px;
        height: 53px;
        padding: 14px 80px;
    `,
    full: css`
        width: 100%;
        height: 65px;
        padding: 20px 0;
    `
}

const backgroundColorCSS = {
    normal_default: css`
        border-color: ${({theme})=>theme.PALLETTE.grey["8"]};
        background-color: #FFF;
    `,
    normal_primaryLight: css`
        border-color: ${({theme})=>theme.PALLETTE.brand["primary"]};
        background-color: #FFF;
    `,
    normalAndActive_primary: css`
        border-color: ${({theme})=>theme.PALLETTE.brand["primary"]};
        background-color: ${({theme})=>theme.PALLETTE.brand["primary"]};
    `,
    normal_warning: css`
        border-color: ${({theme})=>theme.PALLETTE.sub["warning"]};
        background-color: #FFF;
    `,
    activeAndHover_default: css`
        border-color: ${({theme})=>theme.PALLETTE.grey["8"]};
        background-color: ${({theme})=>theme.PALLETTE.grey["0"]};
    `,
    activeAndHover_primaryLight: css`
        border-color: ${({theme})=>theme.PALLETTE.brand["primary"]};
        background-color: ${({theme})=>theme.PALLETTE.brand["primary_light"]};
    `,
    hover_primary: css`
        border-color: #039636;
        background-color: #039636;
    `,
    activeAndHover_warning: css`
        border-color: ${({theme})=>theme.PALLETTE.sub["warning"]};
        background-color: ${({theme})=>theme.PALLETTE.sub["warning"]};
    `,
    disabled: css`
        border-color: ${({theme})=>theme.PALLETTE.grey["4"]};
        background-color: ${({theme})=>theme.PALLETTE.grey["0"]};
    `

}

const Button = styled.button`
    ${({size}) => sizeCSS[size]}
    ${({background}) => backgroundColorCSS[background]}
`

export default Button;