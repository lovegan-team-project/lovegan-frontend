import React, { useEffect, useState } from 'react';
import close from '../restaurant/icons/close.svg';
import product1 from '../mypage/images/product1.png';
import S from './style.js';

const CartItem = ({ updateCart, id, pricePerItem, discountPerItem, removeItemFromCart, selected, toggleItemSelection }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateCart(id, pricePerItem, discountPerItem, newQuantity);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateCart(id, pricePerItem, discountPerItem, newQuantity);
        }
    };

    const handleRemoveItem = () => {
        removeItemFromCart(id); // 장바구니에서 해당 아이템 제거
    };

    const handleToggleSelection = () => {
        toggleItemSelection(id); // 선택 상태 변경
    };

    return (
        <S.ItemWrapper>
            <S.CheckboxWrapper>
                <input 
                    type="checkbox" 
                    checked={selected} 
                    onChange={handleToggleSelection} 
                />
            </S.CheckboxWrapper>
            <S.ItemContent>
                <S.ItemHeader>
                    <p className="title">[사미헌]갈비탕</p>
                    <S.CloseButton onClick={handleRemoveItem}>
                        <img src={close} alt="닫기" />
                    </S.CloseButton>
                </S.ItemHeader>
                
                <S.ItemDetails>
                    <S.ProductInfo>
                        <S.ProductImage src={product1} alt="상품 이미지" />
                        <S.PriceWrapper>
                            <S.CurrentPrice>{((pricePerItem-discountPerItem) * quantity).toLocaleString()}원</S.CurrentPrice>
                            <S.OriginalPrice>{pricePerItem * quantity}원</S.OriginalPrice>
                        </S.PriceWrapper>
                    </S.ProductInfo>

                    <S.QuantityWrapper>
                        <button onClick={handleDecrease}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrease}>+</button>
                    </S.QuantityWrapper>
                </S.ItemDetails>
            </S.ItemContent>
        </S.ItemWrapper>
    );
};

export default CartItem;
