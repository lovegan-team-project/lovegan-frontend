import React from 'react';
import styled from 'styled-components';
import close from './icons/close.svg';

const MainBoxComponent = styled.div`
    position: absolute;
    z-index: 5;
    background-color: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
    width: 400px;
    height: 80vh;
    top: 100px;
    left: 120px;
    border-radius: 10px;

    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .close {
        background-color: transparent;
        position: absolute;
        top: 18px;
        right: 12px;
        cursor: pointer;
        border: none;
        padding: 0;
    }
`;

const MainBox = ({ children, onClose }) => {
    const closeMainBox = () => {
        if (onClose) {
            onClose();
        } else {
            console.log('MainBox closed');
        }
    };

    return (
        <MainBoxComponent>
            <div className='wrapper'>
                <button className='close' onClick={closeMainBox} aria-label="Close">
                    <img src={close} alt="닫기" />
                </button>
                {children}
            </div>
        </MainBoxComponent>
    );
};

export default MainBox;