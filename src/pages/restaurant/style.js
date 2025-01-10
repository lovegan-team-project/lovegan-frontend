import styled from "styled-components";

const S = {};

S.SideMenu = styled.div`
    position: absolute;
    z-index: 5;
    left: 0;
    top: 0;
    box-shadow: 0px -5px 8px 0px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    height: 100%;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-top: 30px;
    padding-left: 16px;

    & button.item {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: transparent;
        cursor: pointer;
        gap: 6px;

        & img {
            width: 30px;
            fill: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
        }

        & span {
            font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};
            color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
        }

    }

    & button.active {

        & img {
            fill: ${({theme})=> theme.PALLETTE.brand["primary"]};
        }
    }
`;

S.SearchBar = styled.div`
    position: absolute;
    z-index: 5;
    background-color: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    top: 30px;
    left: 120px;

    width: 400px;
    height: 50px;
    border-radius: 26px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 26px 0px 10px;

    & input {
        background-color: transparent;
        width: 100%;
    }

    & input:focus {
        outline: 0;
    }
`;

S.Zoom = styled.div`
    position: absolute;
    z-index: 5;
    right: 40px;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & button.control {
        cursor: pointer;
        width: 80px;
        height: 80px;
        border-radius: 40px;
        background-color: #fff;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    }
`;

export default S;