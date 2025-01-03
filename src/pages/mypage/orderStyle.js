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
        width: 350px;
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
            width: 228px;
            display: inline-block;
            padding: 6px 0px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        & div.product-img-wrapper {
            width: 100px;
            height: 100px;
            border-radius: 10px;
            overflow: hidden;
            margin-right: 20px;

            & img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
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
        display: flex;
        gap: 8px;
        flex-direction: column; 
        
        & button {
            height: 35px;
            width: 110px;
            border-radius: 10px;
            padding: 8px 20px;
            cursor: pointer;
        }

        & button:hover {
            opacity: 0.8;
        }

        & button.review {
            color: #fff;
            background-color: ${({ theme }) => theme.PALLETTE.brand["primary"]};
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

        & button.modify {
            width: 95px;
            border-radius: 10px;
            border: 1px solid ${({ theme }) => theme.PALLETTE.brand["primary"]};
            color: ${({ theme }) => theme.PALLETTE.brand["primary"]};
            background-color: #fff;
            padding: 8px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & button.cancle {
            width: 95px;
            border-radius: 10px;
            border: 1px solid ${({ theme }) => theme.PALLETTE.grey["3"]};
            color: ${({ theme }) => theme.PALLETTE.brand["primary_black"]};
            background-color: #fff;
            padding: 8px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & button.lock {
            width: 95px;
            border-radius: 10px;
            border: none;
            color: ${({ theme }) => theme.PALLETTE.grey["8"]};
            background-color: ${({ theme }) => theme.PALLETTE.myGrey["disable"]};
            padding: 8px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: default;
        }

        & button.lock:hover{
            opacity: 1;
        }
    }
`;


export default OrS;