import styled, { css } from "styled-components";

const variantRadioCSS = {
  green: css`
    background-color: ${({ checked }) => (checked ? "#fff" : "#fff")};
    border: 1px solid ${({ checked }) => (checked ? "#03A63C" : "#D9D9D9")};  
  `,
  gray: css`
    background-color: ${({ checked }) => (checked ? "#f2f2f2" : "#fff")};
    border: 1px solid ${({ checked }) => (checked ? "#D9D9D9" : "#D9D9D9")};
  `,
  white: css`
    background-color: ${({ checked }) => (checked ? "#fff" : "#fff")};
    border: 1px solid ${({ checked }) => (checked ? "#03A63C" : "#D9D9D9")};
  `
};

const shapeCSS = {
  default: css``,
  round: css`
    border-radius: 50%;
  `
};

const sizeCSS = {
  size: css`
    width: 22px;
    height: 22px;
  `
};

const RadioButton = styled.input.attrs({ type: 'radio' })`
  ${({ variant }) => variantRadioCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ boxSize }) => sizeCSS[boxSize]}

  appearance: none;
  cursor: pointer;
  position: relative;
  transition: all 150ms;

  &:hover {
    border-color: ${({ variant }) =>
      variant === "green" ? "#03A63C" : 
      variant === "white" ? "#03A63C" : "#03A63C"};
  }

  /* 체크된 상태의 스타일 */
  &:checked {
    background-color: ${({ radioColorBg }) => radioColorBg || "#fff"};
    border-color: ${({ radioColorBc }) => radioColorBc || "#D9D9D9"};
    position: relative;
  }

  /* 라디오 버튼 안의 체크표시 또는 작은 원 */
  ${({ showCheck }) => showCheck ? css`
    &:checked::before {
      content: '';
      position: absolute;
      top: 3px;  
      left: 6px;
      width: 6px;
      height: 10px;
      border: solid ${({ checkBorder }) => checkBorder || "#fff"};
      border-width: 0 2px 2px 0;
      border-radius: 1px;
      transform: rotate(45deg);
    }
  ` : css`
    &:checked::after {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      background-color: ${({ radioColor }) => radioColor || "#fff"};
      border-radius: 50%;
    }
  `}

  &:disabled {
    background-color: #f2f2f2;
    border-color: #D9D9D9;
    cursor: not-allowed;

    &:checked::after {
      border-color: #f2f2f2;
    }
  }
`;

export default RadioButton;
