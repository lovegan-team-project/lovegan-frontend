import React from 'react';
import S from './style.js';
import OrS from './orderStyle.js';
import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import product4 from './images/product4.png';
import cart from './icons/cart.svg';

const Orders = () => {
    return (
        <>
            <S.ContentTitle>주문 내역</S.ContentTitle>
            <OrS.OrderHeader>
                <div>상품명</div>
                <div>결제 금액</div>
                <div>주문 개수</div>
                <div>배송 현황</div>
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
                <div><p className='content'>10개</p></div>
                <div><p className='content status'>배송중</p></div>
                <div className='button-wrapper'>
                    <button className='review'>후기쓰기</button>
                    <button className='cart'><img src={cart} alt="" />장바구니</button>
                </div>
            </OrS.OrderData>
            <OrS.OrderData>
                <div className='product-info'>
                    <div className='product-img-wrapper'><img src={product2} alt="" /></div>
                    <span>다다기오이</span>
                </div>
                <div>
                    <p className='content'>5,4900(원)</p>
                    <p className='discount-price'>5,990(원)</p>
                </div>
                <div><p className='content'>10개</p></div>
                <div><p className='content status'>배송중</p></div>
                <div className='button-wrapper'>
                    <button className='review'>후기쓰기</button>
                    <button className='cart'><img src={cart} alt="" />장바구니</button>
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
                <div><p className='content'>10개</p></div>
                <div><p className='content status'>배송중</p></div>
                <div className='button-wrapper'>
                    <button className='review'>후기쓰기</button>
                    <button className='cart'><img src={cart} alt="" />장바구니</button>
                </div>
            </OrS.OrderData>
            <OrS.OrderData>
                <div className='product-info'>
                    <div className='product-img-wrapper'><img src={product4} alt="" /></div>
                    <span>[유기농]완숙토마토 1kg</span>
                </div>
                <div>
                    <p className='content'>12,900(원)</p>
                    <p className='discount-price'>13,900(원)</p>
                </div>
                <div><p className='content'>10개</p></div>
                <div><p className='content status'>배송중</p></div>
                <div className='button-wrapper'>
                    <button className='review'>후기쓰기</button>
                    <button className='cart'><img src={cart} alt="" />장바구니</button>
                </div>
            </OrS.OrderData>
        </>
    );
};

export default Orders;