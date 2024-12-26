import React from 'react';
import attention from './icons/attention.svg';
import VS from './reviewStyle';
import product4 from './images/product4.png';

const ReviewedOrders = () => {
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
            <VS.ReviewContainer>
                <VS.ReviewHeader>
                    <VS.ProductImageWrapper>
                        <img src={product4} alt="상품사진" />
                    </VS.ProductImageWrapper>
                    <VS.ReviewDetails>
                        <p className='title'>[진실된 손맛] 맑은 나주식곰탕</p>
                        <div>
                            <p>2024.12.26 작성</p><span>|</span><p>2024.12.26 수정</p>
                        </div>
                    </VS.ReviewDetails>
                </VS.ReviewHeader>
                <VS.ReviewContent>
                {"파랑 지단 색깔이 선명하드라구요\n고기도 얇고 단백해서 좋았어요\n울집 막내가 그 자리에서 맛있게 하나를 다 비웠네요\n\n조금 먹는 분들은 두분이서 나눠드실 수 있을 것 같고\n혼자 잘 드시는 분들은 든든하게 하나 다 먹을 수 있을 것 같아요"}
                </VS.ReviewContent>
                <VS.ReviewButtonWrapper>
                    <button>후기 수정</button>
                    <button>후기 삭제</button>
                </VS.ReviewButtonWrapper>
            </VS.ReviewContainer>
            <VS.ReviewContainer>
                <VS.ReviewHeader>
                    <VS.ProductImageWrapper>
                        <img src={product4} alt="상품사진" />
                    </VS.ProductImageWrapper>
                    <VS.ReviewDetails>
                        <p className='title'>상품명</p>
                        <div>
                            <p>2024.12.26 작성</p><span>|</span><p>2024.12.26 수정</p>
                        </div>
                    </VS.ReviewDetails>
                </VS.ReviewHeader>
                <VS.ReviewContent>후기 내용</VS.ReviewContent>
                <VS.ReviewButtonWrapper>
                    <button>후기 수정</button>
                    <button>후기 삭제</button>
                </VS.ReviewButtonWrapper>
            </VS.ReviewContainer>
            <VS.ReviewContainer>
                <VS.ReviewHeader>
                    <VS.ReviewDetails>
                        <p className='title'>상품명</p>
                        <div>
                            <p>2024.12.26 작성</p><span>|</span><p>2024.12.26 수정</p>
                        </div>
                    </VS.ReviewDetails>
                </VS.ReviewHeader>
                <VS.ReviewContent>후기 내용</VS.ReviewContent>
                <VS.ReviewButtonWrapper>
                    <button>후기 수정</button>
                    <button>후기 삭제</button>
                </VS.ReviewButtonWrapper>
            </VS.ReviewContainer>
        </>
    );
};

export default ReviewedOrders;