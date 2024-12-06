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

export default SpS;