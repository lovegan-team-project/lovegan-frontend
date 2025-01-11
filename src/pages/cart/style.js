import styled from 'styled-components';
import { flexCenterColumn, flexCenterRow, flexRow } from '../../global/common.js';
import { NavLink } from 'react-router-dom';

const S = {};


S.ContentTitle = styled.h3`
    font-size: ${({theme})=>theme.FONT_SIZE["h3"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
`;

S.Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({theme})=>theme.PALLETTE.myGrey["background"]};
    padding: 20px 0px 300px 0px;
`;

S.Container = styled.div`
    display: flex;
    width: 1420px;
    padding: 20px;
    margin: 0 auto;
    justify-content: space-between;

    & input {
        accent-color: ${({theme})=>theme.PALLETTE.brand["primary"]};
        cursor: pointer;
    }

    & input[type="checkbox"]{
        width: 22px;
        height: 22px;
    }

    & label {
        cursor: pointer;
    }
`;

S.Sidebar = styled.div`
    width: 340px;
    height: fit-content;
    background-color: #ffffff;
    padding: 20px;
    margin-left: 20px;
    border-radius: 10px;
`;

S.Content = styled.div`
    width: 1020px;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 10px;

    & .top {
        font-size: ${({theme})=>theme.FONT_SIZE["title"]};
        margin-top: 12px;
    }
`;

S.SideContent = styled.section`
    margin-top: 10px;
    padding: 12px 0px;
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    border-bottom: 1px solid ${({theme})=>theme.PALLETTE.grey["2"]};

    & p.title {
        font-size: ${({theme})=>theme.FONT_SIZE["title"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
        margin-bottom: 30px;
    }

    & p.content, div.content {
        font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
        margin-bottom: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & span {
            display: inline-block;
        }

        & span.total {
            font-size: ${({theme})=>theme.FONT_SIZE["h4"]};
            font-weight: 900;
            color: ${({theme})=>theme.PALLETTE.brand["primary"]};
            margin: 12px 0px;
        }

        & span.discount {
            color: ${({theme})=>theme.PALLETTE.sub["secondary"]};
        }
    }

    & button {
        cursor: pointer;
    }

`;


S.PurchaseButton = styled.button`
    width: 100%;
    margin: 16px 0px 4px 0px;
    border-radius: 6px;
    padding: 10px 0px;
    font-size: ${({theme}) => theme.FONT_SIZE["title"]};
    background-color: ${({theme}) => theme.PALLETTE.brand["primary"]};
    color: #fff;
    cursor: pointer;
`;

S.ItemWrapper = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    border-bottom: 1px solid ${({theme}) => theme.PALLETTE.grey["0"]};
`;

S.CheckboxWrapper = styled.div`
    input {
        cursor: pointer;
        accent-color: ${({theme}) => theme.PALLETTE.brand["primary"]};
    }
`;

S.ItemContent = styled.div`
    width: 100%;
`;

S.ItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    p.title {
        font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
    }
`;

S.CloseButton = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
    padding: 0;
    margin: 8px 8px 0px 0px;

    img {
        width: 20px;
        height: 20px;
    }
`;

S.ItemDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

S.ProductInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

S.ProductImage = styled.img`
    width: 100px;
`;

S.PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

S.CurrentPrice = styled.span`
    font-size: 20px;
    font-weight: 900;
`;

S.OriginalPrice = styled.span`
    font-size: 20px;
    text-decoration: line-through;
    color: ${({theme}) => theme.PALLETTE.grey["2"]};
`;

S.QuantityWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    button {
        padding: 4px 8px;
        border: 1px solid ${({theme}) => theme.PALLETTE.grey["2"]};
        background-color: white;
        cursor: pointer;
    }

    span {
        font-size: 18px;
    }
`;


export default S;
