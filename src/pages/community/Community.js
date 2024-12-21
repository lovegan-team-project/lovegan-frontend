import { Outlet, useNavigate } from 'react-router-dom';
import S from './style';
import { useState } from 'react';
import CommunityAll from './CommunityAll';
import CommunityFollow from './CommunityFollow';


const Community = () => {
    
    const [activeComponent, setActiveComponent] = useState("ALL");
    const options = ['ALL', 'FOLLOW'];
    
    const getButtonPosition = (option) => {
        return option === 'ALL' ? '5px' : 'calc(100% - 165px)';
    };
    
    const handleButtonClick = (option) => {
        console.log('Clicked option:', option);
        setActiveComponent(option);
    };
    
    return (
        <div>
            <S.CommunityTitle>COMMUNITY</S.CommunityTitle>
            <S.CommunitySubTitle>지속 가능한 세상을 함께 만들어가는 공간</S.CommunitySubTitle>

                <S.CommunityToggle>
                    <S.ToggleButton
                        className='버튼'
                        isActive={activeComponent} 
                        position={getButtonPosition(activeComponent)}
                    />
                    {options.map(option => (
                        <S.ToggleComponent
                            key={option}
                            isActive={activeComponent === option}
                            onClick={() => handleButtonClick(option)}
                        >
                            {option}
                    </S.ToggleComponent>
                    ))}
                </S.CommunityToggle>
                <div>
                    {activeComponent === 'ALL' && <CommunityAll />}
                    {activeComponent === 'FOLLOW' && <CommunityFollow />}
                </div>
                <Outlet />
        </div>
    );
    
};

export default Community;