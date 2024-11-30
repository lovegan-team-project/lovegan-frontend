import React, { useState } from 'react';
import S from './followStyle';
import { flexRow } from '../../global/common';
import magnifier from './icons/magnifier.svg'
import FollowingList from './FollowingList.jsx';
import FollowerList from './FollowerList.jsx';

const Follow = () => {
    const [activeOption, setActiveOption] = useState('팔로잉');
    const options = ['팔로잉', '팔로워'];

    // 선택된 옵션에 맞게 좌측 위치를 계산하는 함수
    const getButtonPosition = (option) => {
        return option === '팔로잉' ? '5px' : 'calc(100% - 165px)';
    };

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };

    return (
        <div>
            <S.ToggleContainer>
                <S.ToggleButton
                     isActive={activeOption}
                     position={getButtonPosition(activeOption)}
                />
                {options.map(option => (
                    <S.ToggleOption
                        key={option}
                        isActive={activeOption === option}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </S.ToggleOption>
                ))}
            </S.ToggleContainer>
            <S.Overview>
                <S.FlexRow><span>전체</span><span>253</span></S.FlexRow>
                <S.SearchContainer>
                    <input type="text" placeholder='검색' />
                    <img src={magnifier} alt="" />
                </S.SearchContainer>
            </S.Overview>
            <div>
                {activeOption === '팔로잉' && <FollowingList />}
                {activeOption === '팔로워' && <FollowerList />}
            </div>
        </div>
    );
};

export default Follow;
