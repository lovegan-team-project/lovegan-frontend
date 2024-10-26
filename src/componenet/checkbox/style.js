import styled, { css } from "styled-components";

const variantCheckboxCSS = {
    green: css`
        background-color: ${({checked})=>(checked ? "#fff" : "#fff")};
        border: 1px solid ${({ checked }) => (checked ? "#03A63C" : "#D9D9D9")};
    `,
    gray: css`
        background-color: ${({checked})=>(checked ? "#f2f2f2" : "#fff")};
        border: 1px solid ${({ checked }) => (checked ? "#D9D9D9" : "#D9D9D9")};
    `,
    white: css`
        background-color: ${({checked})=>(checked ? "#03A63C" : "#fff")};
        border: 1px solid ${({ checked }) => (checked ? "#03A63C" : "#D9D9D9")};
    `
}

const shapeCSS = {
    default: css``,
    round: css`
        border-radius: 3px;
    `
}

const sizeCSS = {
    size: css`
        width: 22px;
        height: 22px;
    `
}

const CheckedBox = styled.input.attrs({ type: 'checkbox'})`
    ${({variant}) => variantCheckboxCSS[variant]}
    ${({shape}) => shapeCSS[shape]}
    ${({boxSize}) => sizeCSS[boxSize]}

    appearance: none;
    cursor: pointer;
    position: relative;
    transition: all 150ms;

    &:checked::after {
        content: '';
        position: absolute;
        top: 12%;
        left: 35%;
        width: 5px;
        height: 11px;
        border: solid ${({ checkColor }) => checkColor || '#fff'};
        border-width: 0 2px 2px 0;
        border-radius: 1px;
        transform: rotate(45deg);
    }

    &:hover {
        border-color: ${({variant}) =>
        variant === "green" ? "#03A63C" : 
        variant === "white" ? "#03A63C" : "#03A63C"};
    }

    &:disabled {
        background-color: #f2f2f2;
        border-color: #D9D9D9;
        cursor: not-allowed;
        
        &:checked::after {
            border-color: #f2f2f2;
        }
    }
`

export default CheckedBox;