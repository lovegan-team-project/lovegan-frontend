import styled from 'styled-components';
import common, { flexRow } from '../../global/common.js';


const SpS = {};

SpS.ShippingHeader = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 30px;
    background-color: ${({ theme }) => theme.PALLETTE.myGrey["background"]};
    border-radius: 10px;

    & div:first-child {
        width: 80px;
    }

    & div:nth-child(2) {
        width: 200px;
    }

    & div:nth-child(3) {
        width: 460px;
    }

    & div:nth-child(4) {
        width: 100px;
    }

    & div:nth-child(5) {
        width: 80px;
    }
`;

SpS.shippingPlusWrapper = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 16px 0px;

    & img {
        cursor: pointer;
        width: 22px;
        height: 22px;
    }
`;

// 모달 스타일 추가
SpS.ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

SpS.ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 40%;

    h4 {
        font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
        display: inline-block;
        margin-bottom: 10px;
    }

    input[type="checkbox"] {
        accent-color: ${({ theme }) => theme.PALLETTE.brand["primary"]};
        width: 20px;
        height: 20px;
    }

    input:focus {
        outline: none;
    }

    & div.addressWrapper {
        padding: 10px 0px;
        border-top: 1px solid ${({ theme }) => theme.PALLETTE.grey["0"]};
    }

    & div.checkboxWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        & label, input {
            cursor: pointer;
        }
    }

    & div.inputWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 0;
        gap: 8px;

        label {
            width: fit-content;
        }
        
        input {
            width: auto;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 5px;
            flex: 1;
        }
    }

    & div.addressInputWrapper {
        display: flex;
        flex-direction: column;

        margin: 10px 0;
        gap: 8px;

        label {
            width: fit-content;
        }
        
        input {
            width: auto;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 5px;
            flex: 1;
        }

        & button {
            width: fit-content;
            margin-left: 10px;
        }
    }

    

    button {
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        margin-top: 8px;
    }

    button:first-of-type {
        background: ${({ theme }) => theme.PALLETTE.grey["8"]};
        color: white;
    }

    button:last-of-type {
        background: #4caf50;
        color: white;
    }
`;

SpS.ShippingData = styled.div`
    ${flexRow}
    align-items: center;
    justify-content: center;
    padding: 28px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.PALLETTE.grey["0"]};

    & div:first-child {
        width: 100px;
        text-align: center;
    }

    & div:nth-child(2) {
        width: 200px;
        padding-left: 4px;
    }

    & div:nth-child(3) {
        width: 460px;
    }

    & div:nth-child(4) {
        width: 120px;
    }

    & div:nth-child(5) {
        width: 60px;
        & img { margin: 0 auto; cursor: pointer; }
    }

    & div.default {
        cursor: default;
        width: 110px;
        border-radius: 20px;
        padding: 8px 10px;
        color: ${({ theme }) => theme.PALLETTE.sub["secondary"]};
        border: 1px solid ${({ theme }) => theme.PALLETTE.sub["secondary"]};
        background-color: ${({ theme }) => theme.PALLETTE.sub["secondary_light"]};
    }
`;



export default SpS;