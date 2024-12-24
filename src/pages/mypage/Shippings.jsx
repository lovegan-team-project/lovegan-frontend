import React from 'react';
import S from './style.js';
import SpS from './shippingStyle.js';
import shipping_plus from './icons/shipping-plus.svg';
import CheckCircleButton from '../../components/checkCircleBtn/CheckCircleButton.jsx';
import write from './icons/write.svg';

const Shippings = () => {
    return (
        <>
            <S.ContentTitle>배송지 관리</S.ContentTitle>
            <SpS.shippingPlusWrapper>
                <img src={shipping_plus} alt="" />
                <span>배송지</span>
            </SpS.shippingPlusWrapper>
            <SpS.ShippingHeader style={{ margin: '0px' }}>
                <div></div>
                <div>배송지명</div>
                <div>주소</div>
                <div></div>
                <div></div>
            </SpS.ShippingHeader>
            <SpS.ShippingData>
                <div><CheckCircleButton /></div>
                <div>배송지명</div>
                <div>배송지 주소</div>
                <div><div className='default'>기본 배송지</div></div>
                <div><img src={write} alt="배송지 입력 버튼" /></div>
            </SpS.ShippingData>
            <SpS.ShippingData>
                <div><CheckCircleButton /></div>
                <div>배송지명</div>
                <div>배송지 주소</div>
                <div></div>
                <div><img src={write} alt="배송지 입력 버튼" /></div>
            </SpS.ShippingData>
            <SpS.ShippingData>
                <div><CheckCircleButton /></div>
                <div>배송지명</div>
                <div>배송지 주소</div>
                <div></div>
                <div><img src={write} alt="배송지 입력 버튼" /></div>
            </SpS.ShippingData>
            <SpS.ShippingData>
                <div><CheckCircleButton /></div>
                <div>배송지명</div>
                <div>배송지 주소</div>
                <div></div>
                <div><img src={write} alt="배송지 입력 버튼" /></div>
            </SpS.ShippingData>
        </>
    );
};

export default Shippings;