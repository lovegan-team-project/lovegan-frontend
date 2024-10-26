// style.js
import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  display: flex; /* Flexbox */
  justify-content: space-between; 
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 220px; 
  height: 42px;
  padding: 12px; 
  border: 1px solid #333333; 
  border-radius: 10px; 
  background-color: #fff; 
  cursor: pointer; 
  text-align: left; 

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 50px;
    transform: translateY(-50%);
    border: solid transparent;
    border-width: 5px 5px 0 5px;
    border-top-color: #000;
  }
`;

export const DropdownButton1 = styled.button`
  display: flex; /* Flexbox */
  justify-content: space-between; 
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 220px; 
  height: 42px;
  padding: 12px; 
  border: 1px solid #8D8D8D; 
  border-radius: 10px; 
  background-color: #fff; 
  cursor: pointer; 
  text-align: left;
  color: #8D8D8D;

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 50px;
    transform: translateY(-50%);
    border: solid transparent;
    border-width: 5px 5px 0 5px;
    border-top-color: #000;
  }
`;

export const DropdownButton2 = styled.button`
  display: flex; /* Flexbox */
  justify-content: space-between; 
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 220px; 
  height: 42px;
  padding: 12px; 
  border: 1px solid #8D8D8D; 
  border-radius: 10px; 
  background-color: #fff; 
  cursor: pointer; 
  text-align: left;
  color: #8D8D8D;

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 50px;
    transform: translateY(-50%);
    border: solid transparent;
    border-width: 5px 5px 0 5px;
    border-top-color: #000;
  }
`;

export const DropdownButton3 = styled.button`
  display: flex; /* Flexbox 사용 */
  justify-content: space-between; /* 텍스트와 화살표 사이에 공간을 두기 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 220px; /* 고정 너비 */
  padding: 10px; /* 패딩 */
  border: 1px solid ${({ isSelected }) => (isSelected ? '#ccc' : '#ccc')}; /* 보더 색상 */
  border-radius: 10px; /* 모서리 둥글게 */
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : '#fff')}; /* 비활성화 시 배경색 변경 */
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; /* 비활성화 시 커서 변경 */
  color: ${({ disabled }) => (disabled ? '#aaa' : '#333')}; /* 비활성화 시 폰트 색상 변경 */
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)}; /* 비활성화 시 투명도 변경 */
  text-align: left; /* 텍스트 정렬 */
  overflow: hidden; /* 오버플로우 숨기기 */
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 생략 부호 추가 */
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

export const DropdownList = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 5px 0 0 0;
  background: #fff; /* 배경색 */
  border: 1px solid #ccc; /* 테두리 */
  border-radius: 5px;
  z-index: 1; /* 위로 쌓이게 */
  width: 220px; /* 버튼과 같은 너비 */
`;

export const DropdownItem = styled.li`
  padding: 12px 20px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#D9EAD3' : 'transparent')}; /* 선택된 항목 배경색 */
  border: 1px solid ${({ isSelected }) => (isSelected ? '#03A63C' : 'transparent')};
  word-wrap: break-word;
  
  &:hover {
    background-color: #F2F2F2; /* 호버 시 배경색 */
  }
`;
