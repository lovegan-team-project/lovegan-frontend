import React, { useState } from 'react';
import FS from './followStyle';
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
            <FS.Overview>
                <FS.FlexRow><span>전체</span><span>253</span></FS.FlexRow>
                <FS.SearchContainer>
                    <input type="text" placeholder='검색' />
                    <img src={magnifier} alt="" />
                </FS.SearchContainer>
            </FS.Overview>
            <div>
                {activeOption === '팔로잉' && <FollowingList />}
                {activeOption === '팔로워' && <FollowerList />}
            </div>
        </div>
    );
};

export default Follow;
