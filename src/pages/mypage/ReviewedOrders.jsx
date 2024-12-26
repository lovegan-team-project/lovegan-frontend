import React from 'react';
import attention from './icons/attention.svg';
import VS from './reviewStyle';

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
        </>
    );
};

export default ReviewedOrders;