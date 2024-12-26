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

export default VS;