import styled from "styled-components";
import theme from '../../global/theme.js';
import common, { flexRow } from '../../global/common.js';

const S = {};

S.ToggleContainer = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-radius: 25px;
    width: 340px;
    padding: 5px;
    height: 55px;
    position: relative;
    background-color: ${({ theme }) => theme.PALLETTE.myGrey["background"]};
`;

S.ToggleOption = styled.span`
    flex: 1;
    text-align: center;
    font-size: 16px;
    color: ${({ isActive }) => (isActive ? theme.PALLETTE.brand["primary_black"] : theme.PALLETTE.grey["8"])}; 
    z-index: 2;
    cursor: pointer;
`;

S.ToggleButton = styled.div`
    position: absolute;
    left: ${({ position }) => position};  // position 값을 직접 사용
    width: 160px;
    height: 45px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: left 0.5s ease;
    z-index: 1;
`;

S.Overview = styled.div`
    ${flexRow}
    justify-content: space-between;
`;

S.FlexRow = styled.div`
    ${flexRow}
    align-items: center;

    & span {
        margin-left: 8px;
        font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    }

    & span:last-child {
        color: ${({theme})=>theme.PALLETTE.grey["8"]};
    }
`;

S.SearchContainer = styled.div`
    position: relative;
    width: 260px;

    & img {
        position: absolute;
        left: 14px;
        top: 53%;
        transform: translateY(-50%);
        pointer-events: none;
    }

    & input {
        width: 100%;
        height: 36px;
        padding: 12px 10px 10px 36px;
        border: 1px solid ${({theme})=>theme.PALLETTE.grey["2"]};
        border-radius: 10px;
        outline: none;
        font-size: ${({theme})=>theme.FONT_SIZE["p"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
        color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    }

    & input::placeholder {
        color: ${({theme})=>theme.PALLETTE.grey["8"]};
    }

`;


S.FollowHeader = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 30px;
    background-color: ${({ theme }) => theme.PALLETTE.myGrey["background"]};
    border-radius: 10px;

    & div:first-child {
        width: 540px;
    }

    & div:not(:first-child) {
        flex: 1;
    }
`;

S.FollowData = styled.div`
    width: 100%;
    ${flexRow}
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.PALLETTE.grey["0"]};

    & div.profile-img-wrapper img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        overflow: hidden;
        object-fit: cover;
    }

    & div:first-child { /*프로필 이미지 */
        width: 60px;
    }


    & div:nth-child(2) {
        margin-left: 10px;
        width: 100px;
    }

    & div:nth-child(3) {
        width: 380px;
    }

    & div:nth-child(4) {
        width: 170px;
    }

    & div:nth-child(5) {
        flex: 1;
    }

    & div.wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: space-between;

        & img {
            cursor: pointer;
        }
    }

`;


export default S;
