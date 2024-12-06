import React from 'react';
import S from './style.js';
import SpS from './shippingStyle.js';

const Shippings = () => {
    return (
        <>
            <S.ContentTitle>배송지 관리</S.ContentTitle>
            <SpS.ShippingHeader>
                <div></div>
                <div>베송지명</div>
                <div>주소</div>
                <div></div>
                <div></div>
            </SpS.ShippingHeader>
        </>
    );
};

export default Shippings;