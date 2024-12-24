import styled from "styled-components";

const RS = {};

RS.Container = styled.div`
    display: flex;
    width: 940px;
    flex-direction: column;
`;

RS.RestaurantContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.PALLETTE.grey["0"]};
`;

RS.InfoWrapper = styled.div`
    padding: 10px;
    color: ${({ theme }) => theme.PALLETTE.brand["primary_black"]};
    position: relative;
    width: 100%;
    margin-right: 20px;

    & svg {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 36px;
        height: 36px;
    }

    & p.title {
        font-size: ${({theme})=>theme.FONT_SIZE["title"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    }

    & div.address {
        font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
        ${({ theme }) => theme.PALLETTE.grey["8"]};
        margin-top: 10px;
        width: 180px;
    }
`;

RS.ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

RS.ImageContainer = styled.div`
    border-radius: 6px;
    overflow: hidden;
    width: 200px;
    height: 140px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;



export default RS;