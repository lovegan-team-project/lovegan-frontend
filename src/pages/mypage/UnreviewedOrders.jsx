import React from 'react';
import attention from './icons/attention.svg';
import VS from './reviewStyle';
import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import product4 from './images/product4.png';

const UnreviewedOrders = () => {
    return (
        <>
            <VS.Container>
                <VS.Total>
                    총 <span>0</span>개
                </VS.Total>
                <VS.Notice>
                    작성 시 유의사항
                    <img src={attention} alt="주의 아이콘" />
                </VS.Notice>
            </VS.Container>
            <VS.ProductContainer>
                <VS.ProductImageWrapper>
                    <VS.ProductImage src={product1} alt="상품" />
                </VS.ProductImageWrapper>
                <VS.ProductName>상품명</VS.ProductName>
                <VS.DeliveryInfo>2024.12.25 배송 완료</VS.DeliveryInfo>
                <VS.ReviewDeadline>01.24까지 작성 가능</VS.ReviewDeadline>
                <VS.ReviewButtonWrapper>
                    <button>후기 쓰기</button>
                </VS.ReviewButtonWrapper>
            </VS.ProductContainer>
            <VS.ProductContainer>
                <VS.ProductImageWrapper>
                    <VS.ProductImage src={product2} alt="상품" />
                </VS.ProductImageWrapper>
                <VS.ProductName>상품명</VS.ProductName>
                <VS.DeliveryInfo>2024.12.25 배송 완료</VS.DeliveryInfo>
                <VS.ReviewDeadline>01.24까지 작성 가능</VS.ReviewDeadline>
                <VS.ReviewButtonWrapper>
                    <button>후기 쓰기</button>
                </VS.ReviewButtonWrapper>
            </VS.ProductContainer>
            <VS.ProductContainer>
                <VS.ProductImageWrapper>
                    <VS.ProductImage src={product3} alt="상품" />
                </VS.ProductImageWrapper>
                <VS.ProductName>상품명</VS.ProductName>
                <VS.DeliveryInfo>2024.12.25 배송 완료</VS.DeliveryInfo>
                <VS.ReviewDeadline>01.24까지 작성 가능</VS.ReviewDeadline>
                <VS.ReviewButtonWrapper>
                    <button>후기 쓰기</button>
                </VS.ReviewButtonWrapper>
            </VS.ProductContainer>
            <VS.ProductContainer>
                <VS.ProductImageWrapper>
                    <VS.ProductImage src={product4} alt="상품" />
                </VS.ProductImageWrapper>
                <VS.ProductName>상품명</VS.ProductName>
                <VS.DeliveryInfo>2024.12.25 배송 완료</VS.DeliveryInfo>
                <VS.ReviewDeadline>01.24까지 작성 가능</VS.ReviewDeadline>
                <VS.ReviewButtonWrapper>
                    <button>후기 쓰기</button>
                </VS.ReviewButtonWrapper>
            </VS.ProductContainer>
            <VS.ProductContainer>
                <VS.ProductImageWrapper>
                    <VS.ProductImage src={product2} alt="상품" />
                </VS.ProductImageWrapper>
                <VS.ProductName>상품명</VS.ProductName>
                <VS.DeliveryInfo>2024.12.25 배송 완료</VS.DeliveryInfo>
                <VS.ReviewDeadline>01.24까지 작성 가능</VS.ReviewDeadline>
                <VS.ReviewButtonWrapper>
                    <button>후기 쓰기</button>
                </VS.ReviewButtonWrapper>
            </VS.ProductContainer>
        </>
    );
};

export default UnreviewedOrders;