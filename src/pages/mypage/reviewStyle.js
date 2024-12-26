import styled from "styled-components";

const VS = {};

VS.Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 4px;
    border-bottom: 1px solid ${({ theme }) => theme.PALLETTE.grey["2"]};
    justify-content: space-between;
`;

VS.Total = styled.div`
    color: ${({ theme }) => theme.PALLETTE.brand["primary_black"]};
`;

VS.Notice = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    color: ${({ theme }) => theme.PALLETTE.grey["8"]};
`;

VS.ProductContainer = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.PALLETTE.grey["0"]};
    padding: 20px;
    width: 940px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.PALLETTE.brand["primary_black"]};
`;

VS.ProductImageWrapper = styled.div`
    margin-right: 20px;
`;

VS.ProductImage = styled.img`
    width: 100px;
    height: 100px;
`;

VS.ProductName = styled.div`
    flex: 1;
    font-size: ${({ theme }) => theme.FONT_SIZE["title"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["medium"]};
`;

VS.DeliveryInfo = styled.div`
    flex: 1;
    font-size: ${({ theme }) => theme.FONT_SIZE["subtitle"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["medium"]};
`;

VS.ReviewDeadline = styled.div`
    flex: 1;
    font-size: ${({ theme }) => theme.FONT_SIZE["subtitle"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["medium"]};
    color: ${({ theme }) => theme.PALLETTE.grey["8"]};
`;

VS.ReviewButtonWrapper = styled.div`
    & button {
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
    }

    & button:hover {
        background-color: ${({ theme }) => theme.PALLETTE.grey["2"]};
    }
`;

VS.ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: ${({ theme }) => theme.PALLETTE.brand["primary_black"]};
`;

VS.ReviewHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

VS.ProductImageWrapper = styled.div`
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 10px;
    margin-right: 16px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

VS.ReviewDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    p.title {
        font-size: ${({ theme }) => theme.FONT_SIZE["title"]};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT["medium"]};
    }

    div {
        display: flex;
        flex-direction: row;
        gap: 8px;
        color: ${({ theme }) => theme.PALLETTE.grey["8"]};

        span {
            margin: 0 4px;
        }
    }
`;

VS.ReviewContent = styled.div`
    margin-top: 8px;
    padding: 12px 8px;
    white-space: pre-line;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 1.2;
    font-size: 18px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["medium"]};
`;

VS.ReviewButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;

    button {
        padding: 8px 12px;
        border: none;
        border-radius: 4px;
        background-color: #f0f0f0;
        cursor: pointer;
        &:hover {
            background-color: #e0e0e0;
        }
    }
`;

export default VS;