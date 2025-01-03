import React from 'react';
import S from './style.js';
import OrS from './orderStyle.js';
import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import product4 from './images/product4.png';
import cart from './icons/cart.svg';

const Inquiries = () => {
    return (
        <>
            <S.ContentTitle>상품 문의</S.ContentTitle>
            <OrS.OrderHeader>
                <div>상품명</div>
                <div>결제 금액</div>
                <div>문의 등록일</div>
                <div>상태</div>
                <div></div>
            </OrS.OrderHeader>
            <OrS.OrderData>
                <div className='product-info'>
                    <div className='product-img-wrapper'><img src={product1} alt="" /></div>
                    <span>[유기농]완숙토마토 1kg</span>
                </div>
                <div>
                    <p className='content'>12,900(원)</p>
                    <p className='discount-price'>13,900(원)</p>
                </div>
                <div><p className='content'>24.12.31</p></div>
                <div><p className='content status'>미답변</p></div>
                <div className='button-wrapper'>
                    <button className='modify'>문의 수정</button>
                    <button className='cancle'>문의 취소</button>
                </div>
            </OrS.OrderData>
            <OrS.OrderData>
                <div className='product-info'>
                    <div className='product-img-wrapper'><img src={product2} alt="" /></div>
                    <span>[유기농]완숙토마토 1kg</span>
                </div>
                <div>
                    <p className='content'>12,900(원)</p>
                    <p className='discount-price'>13,900(원)</p>
                </div>
                <div><p className='content'>24.12.31</p></div>
                <div><p className='content status'>답변 완료</p></div>
                <div className='button-wrapper'>
                    <button className='lock'>문의 수정</button>
                    <button className='lock'>문의 취소</button>
                </div>
            </OrS.OrderData>
            <OrS.OrderData>
                <div className='product-info'>
                    <div className='product-img-wrapper'><img src={product3} alt="" /></div>
                    <span>[유기농]완숙토마토 1kg</span>
                </div>
                <div>
                    <p className='content'>12,900(원)</p>
                    <p className='discount-price'>13,900(원)</p>
                </div>
                <div><p className='content'>24.12.31</p></div>
                <div><p className='content status'>검토중</p></div>
                <div className='button-wrapper'>
                    <button className='lock'>문의 수정</button>
                    <button className='cancle'>문의 취소</button>
                </div>
            </OrS.OrderData>
        </>
    );
};

export default Inquiries;