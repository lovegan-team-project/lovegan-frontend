import React from 'react';
import S from './style';

// iconify 아이콘 import
import { Icon } from '@iconify/react';

import { useNavigate } from 'react-router-dom';

const SideBar = ({ onNearRestaurantClick }) => {

  const navigate = useNavigate();

  // 메인 페이지로 이동하는 함수
  const goToMainPage = () => {
    navigate("/");  // 메인 페이지 경로로 이동
  };

  return (
    <S.SideBar>
      {/* 메인 버튼 */}
      <S.SideBarButtonContainer>
        <S.SideBarButton onClick={goToMainPage}>
          <Icon icon="lucide:home" /><br />
          메인으로
        </S.SideBarButton>
      </S.SideBarButtonContainer>

      {/* 스크랩 버튼 */}
        <S.SideBarButtonContainer>
          <S.SideBarButton onClick={onNearRestaurantClick}>
          <Icon icon="ep:collection-tag" /><br />
          스크랩
        </S.SideBarButton>
      </S.SideBarButtonContainer>

      {/* 주변 비건 식당 확인 버튼 */}
      <S.SideBarButtonContainer>
        <S.SideBarButton onClick={onNearRestaurantClick}>
          <Icon icon="ep:location-information" /><br />
          주변
        </S.SideBarButton>
        </S.SideBarButtonContainer>

      {/* 최근 검색 내역 확인 버튼 */}
      <S.SideBarButtonContainer>
        <S.SideBarButton onClick={onNearRestaurantClick}>
        <Icon icon="lucide:clock" /><br />
        최근
        </S.SideBarButton>
      </S.SideBarButtonContainer>
    </S.SideBar>
  );
};

export default SideBar;