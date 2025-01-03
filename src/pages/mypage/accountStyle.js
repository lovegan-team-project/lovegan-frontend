import styled from 'styled-components';
import common, { flexRow } from '../../global/common.js';

const AS = {};

AS.ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
`;

AS.ProfileImageWrapper = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 100px;
  overflow: hidden;
`;

AS.ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

AS.ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

AS.InfoContainer = styled.div`
    padding: 4px 40px;
    width: 100%;
`;

AS.LoginInfoWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({theme})=>theme.PALLETTE.grey["2"]};
    padding: 16px 8px;

    & span.title {
        font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
        color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
        margin-right: 12px;
    }

    & span.sub {
        font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
        color: ${({theme})=>theme.PALLETTE.grey["8"]};
    }
`;

AS.Notice = styled.div`
    margin-top: 16px;
    font-size: ${({theme})=>theme.FONT_SIZE["p"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: ${({theme})=>theme.PALLETTE.grey["8"]};
`;

AS.InputContainer = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    width: 100%;

    & p {
        margin-top: 8px;
        font-size: ${({theme})=>theme.FONT_SIZE["p"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
        color: ${({theme})=>theme.PALLETTE.grey["8"]};
    }

    & div.top-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        &.title {
            font-size: ${({theme})=>theme.FONT_SIZE["title"]};
            font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
            color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
        }

        & button.modify {
            cursor: pointer;
            background-color: transparent;
            font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
            font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
            color: ${({theme})=>theme.PALLETTE.brand["primary"]};
            padding: 0;
        }

        & button.save {
            cursor: pointer;
            background-color: transparent;
            font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
            font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
            color: ${({theme})=>theme.PALLETTE.sub["secondary"]};
            padding: 0;
        }
    }

    & button.verify {
        cursor: pointer;
            background-color: transparent;
            font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
            font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
            color: ${({theme})=>theme.PALLETTE.brand["primary"]};
            padding: 0;
    }

    & input.lock {
        width: 100%;
        border-radius: 5px;
        border: 1px solid ${({theme})=>theme.PALLETTE.grey["2"]};
        background-color: ${({theme})=>theme.PALLETTE.myGrey["disable"]};
        color: ${({theme})=>theme.PALLETTE.grey["2"]};
    }

    & input.unlock {
        width: 100%;
        border-radius: 5px;
        border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
        background-color: #fff;
        color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    }

    & input:focus {
        outline: none;
    }
`;


export default AS;