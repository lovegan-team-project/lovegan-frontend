import React from 'react';
import PdS from './productStyles.js';
import p1 from './images/like_product1.png';
import p2 from './images/like_product2.png';
import p3 from './images/like_product3.png';
import p4 from './images/like_product4.png';
import p5 from './images/like_product5.png';
import p6 from './images/like_product6.png';
import p7 from './images/like_product7.png';
import p8 from './images/like_product8.png';
import cart from './icons/cart.svg';
import LikeBt from '../../components/likeButton/LikeBt.jsx';

const ProductLikes = () => {
    return (
        <>
            <PdS.Container>
                <PdS.ProductContainer>
                    <PdS.ImageWrapper>
                        <img className='product' src={p1} alt="상품사진" />
                        <LikeBt />
                    </PdS.ImageWrapper>
                    <PdS.InfoWrapper>
                        <p>상품명</p>
                        <div className='priceWrapper'>
                            <span className='discount'>00%</span>
                            <span className='finalPrice'>가격(원)</span>
                            <span className='originalPrice'>가격(원)</span>
                        </div>
                        <PdS.ButtonsWrapper>
                            <button className='delete'>삭제</button>
                            <button className='cart'><img src={cart} alt="" />장바구니</button>
                        </PdS.ButtonsWrapper>
                    </PdS.InfoWrapper>
                </PdS.ProductContainer>
                <PdS.ProductContainer>
                    <PdS.ImageWrapper>
                        <img className='product' src={p2} alt="상품사진" />
                        <LikeBt />
                    </PdS.ImageWrapper>
                    <PdS.InfoWrapper>
                        <p>상품명</p>
                        <div className='priceWrapper'>
                            <span className='finalPrice'>가격(원)</span>
                        </div>
                        <PdS.ButtonsWrapper>
                            <button className='delete'>삭제</button>
                            <button className='cart'><img src={cart} alt="" />장바구니</button>
                        </PdS.ButtonsWrapper>
                    </PdS.InfoWrapper>
                </PdS.ProductContainer>
                <PdS.ProductContainer>
                    <PdS.ImageWrapper>
                        <img className='product' src={p3} alt="상품사진" />
                        <LikeBt />
                    </PdS.ImageWrapper>
                    <PdS.InfoWrapper>
                        <p>상품명</p>
                        <div className='priceWrapper'>
                            <span className='finalPrice'>가격(원)</span>
                        </div>
                        <PdS.ButtonsWrapper>
                            <button className='delete'>삭제</button>
                            <button className='cart'><img src={cart} alt="" />장바구니</button>
                        </PdS.ButtonsWrapper>
                    </PdS.InfoWrapper>
                </PdS.ProductContainer>
                <PdS.ProductContainer>
                    <PdS.ImageWrapper>
                        <img className='product' src={p4} alt="상품사진" />
                        <LikeBt />
                    </PdS.ImageWrapper>
                    <PdS.InfoWrapper>
                        <p>상품명</p>
                        <div className='priceWrapper'>
                            <span className='discount'>00%</span>
                            <span className='finalPrice'>가격(원)</span>
                            <span className='originalPrice'>가격(원)</span>
                        </div>
                        <PdS.ButtonsWrapper>
                            <button className='delete'>삭제</button>
                            <button className='cart'><img src={cart} alt="" />장바구니</button>
                        </PdS.ButtonsWrapper>
                    </PdS.InfoWrapper>
                </PdS.ProductContainer>
                <PdS.ProductContainer>
                    <PdS.ImageWrapper>
                        <img className='product' src={p5} alt="상품사진" />
                        <LikeBt />
                    </PdS.ImageWrapper>
                    <PdS.InfoWrapper>
                        <p>상품명</p>
                        <div className='priceWrapper'>
                            <span className='finalPrice'>가격(원)</span>
                        </div>
                        <PdS.ButtonsWrapper>
                            <button className='delete'>삭제</button>
                            <button className='cart'><img src={cart} alt="" />장바구니</button>
                        </PdS.ButtonsWrapper>
                    </PdS.InfoWrapper>
                </PdS.ProductContainer>
                <PdS.ProductContainer>
                    <PdS.ImageWrapper>
                        <img className='product' src={p6} alt="상품사진" />
                        <LikeBt />
                    </PdS.ImageWrapper>
                    <PdS.InfoWrapper>
                        <p>상품명</p>
                        <div className='priceWrapper'>
                            <span className='discount'>00%</span>
                            <span className='finalPrice'>가격(원)</span>
                            <span className='originalPrice'>가격(원)</span>
                        </div>
                        <PdS.ButtonsWrapper>
                            <button className='delete'>삭제</button>
                            <button className='cart'><img src={cart} alt="" />장바구니</button>
                        </PdS.ButtonsWrapper>
                    </PdS.InfoWrapper>
                </PdS.ProductContainer>
                <PdS.ProductContainer>
                    <PdS.ImageWrapper>
                        <img className='product' src={p7} alt="상품사진" />
                        <LikeBt />
                    </PdS.ImageWrapper>
                    <PdS.InfoWrapper>
                        <p>상품명</p>
                        <div className='priceWrapper'>
                            <span className='discount'>00%</span>
                            <span className='finalPrice'>가격(원)</span>
                            <span className='originalPrice'>가격(원)</span>
                        </div>
                        <PdS.ButtonsWrapper>
                            <button className='delete'>삭제</button>
                            <button className='cart'><img src={cart} alt="" />장바구니</button>
                        </PdS.ButtonsWrapper>
                    </PdS.InfoWrapper>
                </PdS.ProductContainer>
                <PdS.ProductContainer>
                    <PdS.ImageWrapper>
                        <img className='product' src={p8} alt="상품사진" />
                        <LikeBt />
                    </PdS.ImageWrapper>
                    <PdS.InfoWrapper>
                        <p>상품명</p>
                        <div className='priceWrapper'>
                            <span className='discount'>00%</span>
                            <span className='finalPrice'>가격(원)</span>
                            <span className='originalPrice'>가격(원)</span>
                        </div>
                        <PdS.ButtonsWrapper>
                            <button className='delete'>삭제</button>
                            <button className='cart'><img src={cart} alt="" />장바구니</button>
                        </PdS.ButtonsWrapper>
                    </PdS.InfoWrapper>
                </PdS.ProductContainer>
            </PdS.Container>
            
        </>
    );
};

export default ProductLikes;