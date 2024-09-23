import React, { useState } from 'react';
import S from './style';

// iconify 아이콘 import
import { Icon } from '@iconify/react';

const SideBar = ({ onNearRestaurantClick }) => {

  return (
    <S.SideBar>
      {/* 메인 버튼 */}
      <S.SideBarButtonContainer>
        <S.SideBarButton>
          <Icon icon="lucide:home" /><br />
          메인
        </S.SideBarButton>
      </S.SideBarButtonContainer>

      {/* 스크랩 버튼 */}
        <S.SideBarButtonContainer>
          <S.SideBarButton>
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
        <S.SideBarButton>
        <Icon icon="lucide:clock" /><br />
        최근
        </S.SideBarButton>
      </S.SideBarButtonContainer>
    </S.SideBar>
  );
};

export default SideBar;