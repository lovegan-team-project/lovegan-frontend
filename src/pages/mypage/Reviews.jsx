import React, { useState } from 'react';
import FS from './followStyle';
import S from './style.js';
import UnreviewedOrders from './UnreviewedOrders.jsx';
import ReviewedOrders from './ReviewedOrders.jsx';

const Reviews = () => {

    const [activeOption, setActiveOption] = useState('작성 가능');
    const options = ['작성 가능', '작성 완료'];

    // 선택된 옵션에 맞게 좌측 위치를 계산하는 함수
    const getButtonPosition = (option) => {
        return option === '작성 가능' ? '5px' : 'calc(100% - 165px)';
    };

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };

    return (
        <>
            <S.ContentTitle>상품 후기</S.ContentTitle>
            <FS.ToggleContainer>
                <FS.ToggleButton
                     isActive={activeOption}
                     position={getButtonPosition(activeOption)}
                />
                {options.map(option => (
                    <FS.ToggleOption
                        key={option}
                        isActive={activeOption === option}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </FS.ToggleOption>
                ))}
            </FS.ToggleContainer>
            <div>
                {activeOption === '작성 가능' && <UnreviewedOrders />}
                {activeOption === '작성 완료' && <ReviewedOrders />}
            </div>
        </>
    );
};

export default Reviews;