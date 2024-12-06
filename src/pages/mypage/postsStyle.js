import styled from "styled-components";
import { flexCenterColumn  } from '../../global/common.js';

const PS = {};

PS.ContentDivider = styled.div`
    border: 0;
    background-color: ${({theme})=>theme.PALLETTE.grey["2"]};
    height: 1px;
    width: 100%;
`;


PS.FilterWrapper = styled.div`
    ${flexCenterColumn}
`;

PS.FilterList = styled.div`
    display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-between;

    & div {
        padding: 8px;
    }

    & div:hover {
        border-bottom: 2px solid ${({theme})=>theme.PALLETTE.brand["primary"]};
        cursor: pointer;
    }

    & div.active {
        font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
        color: ${({theme})=>theme.PALLETTE.brand["primary"]};
        border-bottom: 2px solid ${({theme})=>theme.PALLETTE.brand["primary"]};
    }
`;

PS.ContentWrapper = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-template-rows: repeat(3, auto);
    gap: 20px; 
`;

PS.Content = styled.div`
    position: relative;
    display: inline-block;

    & span {
        position: absolute;
        bottom: 40px;
        right: 12px;
        color: #ffffff;
        font-size: ${({theme})=>theme.FONT_SIZE["p"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    & p.post-user-nickname {
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 8px 10px;
        background-color: rgba(51, 51, 51, 0.4);
        border-radius: 6px;
        color: #ffffff;
        font-size: ${({theme})=>theme.FONT_SIZE["p"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    }

    & p.post-title {
        padding-top: 8px;
        font-size: ${({theme})=>theme.FONT_SIZE["title"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    }
`;

export default PS;