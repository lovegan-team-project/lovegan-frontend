import styled from 'styled-components';
import common, { flexRow } from '../../global/common.js';

const OrS = {};

OrS.OrderHeader = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 30px;
    background-color: ${({ theme }) => theme.PALLETTE.myGrey["background"]};
    border-radius: 10px;

    & div:first-child {
        width: 340px;
    }

    & div:not(:first-child) {
        flex: 2;
    }

    & div:last-child {
        flex: 1;
    }
`;


OrS.OrderData = styled.div`
    width: 100%;
    ${flexRow}
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.PALLETTE.grey["0"]};

    & div:first-child {
        width: 350px;
    }

    & div:not(:first-child) {
        flex: 2;
    }

    & div:last-child {
        flex: 1;
    }

    & div.product-info {
        ${flexRow}
        align-items: center;

        & span {
            font-size: ${({theme})=>theme.FONT_SIZE["title"]};
            font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
            width: 190px;
            display: inline-block;
            padding: 6px 0px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        & div.product-img-wrapper {
            width: 140px;
            height: 140px;
            border-radius: 10px;
            overflow: hidden;
            object-fit: cover;
            margin-right: 20px;
        }
    }

    & div.product-info {
        ${flexRow}
    }

    & p {
        padding-left: 8px;
    }

    & p.content {
        font-size: ${({theme})=>theme.FONT_SIZE["title"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    }

    & p.status {
        padding-left: 16px;
    }

    & p.discount-price {
        font-size: ${({theme})=>theme.FONT_SIZE["p"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
        color: ${({ theme }) => theme.PALLETTE.grey["8"]};
        text-decoration: line-through;
        margin-top: 8px;
    }

    & div.button-wrapper {
        width: fit-content;
        & button {
            width: 110px;
            border-radius: 10px;
            padding: 10px 20px;
            cursor: pointer;
        }

        & button.review {
            color: #fff;
            background-color: ${({ theme }) => theme.PALLETTE.brand["primary"]};
            margin-bottom: 8px;
        }

        & button.cart {
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.PALLETTE.brand["primary"]};
            border: 1px solid ${({ theme }) => theme.PALLETTE.brand["primary"]};
            background-color: #fff;
            & img {
                margin-right: 2px;
            }
        }
    }
`;


export default OrS;