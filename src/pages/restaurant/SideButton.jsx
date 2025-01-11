import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#03A63C' : '#333333')};
`;

const Icon = styled.svg`
    height: 30px;
    & path {
        fill: ${(props) => (props.isActive ? '#03A63C' : '#fff')};
        stroke: ${(props) => (props.isActive ? '#03A63C' : '#333333')};
    }
`;


const SideButton = ({ icon: IconComponent, label, onClick, isActive }) => {
    // 경로 데이터 확인
    const pathData = IconComponent ? IconComponent : '없음';
    console.log(pathData);
  
    return (
      <ButtonWrapper onClick={onClick} isActive={isActive}>
        <Icon isActive={isActive}>
          <path d={pathData} />
        </Icon>
        <span>{label}</span>
      </ButtonWrapper>
    );
  };
  

export default SideButton;
