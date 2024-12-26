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