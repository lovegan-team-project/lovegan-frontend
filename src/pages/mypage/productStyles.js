import styled from "styled-components";

const PdS = {};

PdS.Container = styled.div`
    display: grid;
    width: 940px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 140px);
    row-gap: 40px;
    column-gap: 20px;
    margin-top: 30px;
`;

PdS.ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

PdS.ImageWrapper = styled.div`
    border-radius: 10px;
    width: 140px;
    height: 140px;
    overflow: hidden;
    position: relative;

    & img.product {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & svg {
        position: absolute;
        bottom: 8px;
        right: 10px;
        width: 30px;
        height: 30px;
    }
`;

PdS.InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-left: 10px;
    padding-top: 10px;
    color: ${({ theme }) => theme.PALLETTE.brand["primary_black"]};

    & p {
        padding-left: 8px;
        margin: 0;
        font-size: ${({theme})=>theme.FONT_SIZE["subtitle"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    }

    & div.priceWrapper {
        padding-left: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        & span {
            font-size: ${({theme})=>theme.FONT_SIZE["title"]};
            font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
        }

        & span.discount {
            color: ${({ theme }) => theme.PALLETTE.sub["secondary"]};
        }

        & span.finalPrice {
            font-size: ${({theme})=>theme.FONT_SIZE["title"]};
            font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
        }

        & span.originalPrice {
            font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
            font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
            color: ${({ theme }) => theme.PALLETTE.grey["8"]};
            text-decoration: line-through;
        }
    }
`;

PdS.ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;

    & button {
        width: 150px;
        height: 38px;
        color: ${({ theme }) => theme.PALLETTE.brand["primary_black"]};
        border-radius: 10px;
        background: #fff;
        font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
        font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
        cursor: pointer;

        & img {
            margin-right: 5px;
        }
    }

    & button.delete {
        border: 1px solid ${({ theme }) => theme.PALLETTE.grey["0"]};
    }

    & button.cart {
        border: 1px solid ${({ theme }) => theme.PALLETTE.brand["primary"]};
        color: ${({ theme }) => theme.PALLETTE.brand["primary"]};
    }
`;




export default PdS;