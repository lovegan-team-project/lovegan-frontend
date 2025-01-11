import React, { useState } from 'react';
import S from './style.js';
import CartItem from './CartItem.jsx';

const flexRowAlignCenterJustifySpaceBetweenStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
};

const flexRowAlignCenterStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
};




const Cart = () => {

    const [cartItems, setCartItems] = useState([
        { id: 1, price: 15900, discount: 3180, quantity: 1, selected: false },
        { id: 2, price: 15900, discount: 3180, quantity: 1, selected: false },
    ]);

    const [isAllSelected, setIsAllSelected] = useState(false); // 전체 선택 상태

    // 🛒 장바구니 아이템 제거 로직
    const removeItemFromCart = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
    };

    // 🧺 선택된 아이템 삭제 로직
    const removeSelectedItems = () => {
        const updatedItems = cartItems.filter(item => !item.selected);
        setCartItems(updatedItems);
    };

    // ✅ 배송비를 장바구니 상태에 따라 조정
    const deliveryFee = cartItems.length === 0 ? 0 : 3000;

    // 📊 총 결제 금액 계산
    const calculateTotals = () => {
        const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const totalDiscount = cartItems.reduce((acc, item) => acc + item.discount * item.quantity, 0);
        const totalPayment = totalPrice - totalDiscount + deliveryFee;
        return { totalPrice, totalDiscount, totalPayment };
    };

    // ✅ 개별 아이템 업데이트 로직 (수량 변경 및 가격 업데이트)
    const updateCart = (id, price, discount, quantity) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, price, discount, quantity } : item
        );
        setCartItems(updatedItems);
    };

    // ✅ 아이템 선택 상태 변경 (개별 아이템)
    const toggleItemSelection = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, selected: !item.selected } : item
        );
        setCartItems(updatedItems);
        checkIfAllSelected(updatedItems);
    };

    // ✅ 전체 선택 상태 변경
    const toggleAllSelection = () => {
        const updatedItems = cartItems.map(item => ({ ...item, selected: !isAllSelected }));
        setCartItems(updatedItems);
        setIsAllSelected(!isAllSelected);
    };

    // ✅ 전체 선택 체크 상태 확인
    const checkIfAllSelected = (updatedItems) => {
        const allSelected = updatedItems.every(item => item.selected);
        setIsAllSelected(allSelected);
    };

    const { totalPrice, totalDiscount, totalPayment } = calculateTotals();

    return (
        <S.Background>
            <S.Container>
                <S.Content>
                    <S.ContentTitle>장바구니</S.ContentTitle>
                    <S.SideContent style={flexRowAlignCenterJustifySpaceBetweenStyle} className='top'>
                        <div style={flexRowAlignCenterStyle}>
                            <div style={{ ...flexRowAlignCenterStyle, marginRight: "4px" }}>
                                <input 
                                    type="checkbox" 
                                    checked={isAllSelected} 
                                    onChange={toggleAllSelection} 
                                />
                                <label htmlFor="checkAll" style={{ marginLeft: "8px" }}>전체선택</label>
                            </div>
                            <div style={flexRowAlignCenterStyle}>
                                <span>{cartItems.filter(item => item.selected).length} / {cartItems.length}</span>
                            </div>
                        </div>
                        <button onClick={removeSelectedItems}>선택 삭제</button>
                    </S.SideContent>
                    {/* ✅ 여러 개의 CartItem을 매핑하여 렌더링 */}
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <CartItem 
                                key={item.id} 
                                id={item.id} 
                                pricePerItem={item.price} 
                                discountPerItem={item.discount} 
                                updateCart={updateCart} 
                                removeItemFromCart={removeItemFromCart} 
                                selected={item.selected}
                                toggleItemSelection={toggleItemSelection}
                            />
                        ))
                    ) : (
                        <p>장바구니가 비었습니다.</p>
                    )}
                </S.Content>
                <S.Sidebar>
                    <S.SideContent>
                        <p className='title'>배송지</p>
                        <p className='content'>경기도 성남시 분당구 산운로 97(산운마을) 505동 901호</p>
                        <div style={{textAlign: "right"}}><button className='change'>변경</button></div>
                    </S.SideContent>

                    {/* ✅ 결제 금액 섹션 */}
                    <S.SideContent>
                        <p className="title">결제 금액</p>
                        <div className="content">
                            <span>상품금액</span>
                            <span>{totalPrice.toLocaleString()}원</span>
                        </div>
                        <div className="content">
                            <span>상품할인금액</span>
                            <span className="discount">{totalDiscount.toLocaleString()}원</span>
                        </div>
                        <div className="content">
                            <span>배송비</span>
                            <span>{deliveryFee.toLocaleString()}원</span>
                        </div>
                        <div className="content">
                            <span>결제예정금액</span>
                            <span className="total">{totalPayment.toLocaleString()}원</span>
                        </div>
                    </S.SideContent>
                    <S.PurchaseButton>
                        {cartItems.length === 0 ? "상품을 담아주세요" : `${totalPayment.toLocaleString()}원 주문하기`}
                    </S.PurchaseButton>
                </S.Sidebar>
            </S.Container>
        </S.Background>
    );
};

export default Cart;