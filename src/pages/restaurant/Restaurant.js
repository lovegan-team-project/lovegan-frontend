import React, { useEffect, useState, useRef } from 'react';
import { CustomOverlayMap, Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import useLocation from '../../hooks/useLocation.js';
import S from './style.js';
import plus from './icons/plus.svg';
import minus from './icons/minus.svg';
import search from './icons/search.svg';
import MainBox from './MainBox.jsx';
import home from './icons/home.svg';
import scrap from './icons/scrap.svg';
import scrap_primary from './icons/scrap_primary.svg';
import near from './icons/near.svg';
import near_primary from './icons/near_primary.svg';
import recent from './icons/recent.svg';
import recent_primary from './icons/recent_primary.svg';
import { useNavigate } from 'react-router-dom';

const Restaurant = () => {
    const location = useLocation(); // 사용자의 현재 위치를 반환하는 훅, { latitude, longitude } 형식의 객체
    const navigate = useNavigate();

    const [isMapReady, setIsMapReady] = useState(false);
    const [contentBoxType, setContentBoxType] = useState(null);
    const [activeButton, setActiveButton] = useState(null); // 활성화된 버튼 상태 관리

    const mapRef = useRef(null);  // TypeScript에서의 타입 정의를 제거하고, 기본 null로 초기화
    const defaultLevel = 3;
    const [level, setLevel] = useState(defaultLevel);

    useEffect(() => {
        if (location) {
            setIsMapReady(true); // 위치 정보가 준비되면 지도 로딩 상태를 true로 변경
        }
    }, [location]); // location이 업데이트될 때마다 실행

    const handleLevel = (type) => {  // 타입을 JavaScript에서 사용하는 기본 타입으로 변경
        const map = mapRef.current;
        if (!map) return;

        if (type === "increase") {
            map.setLevel(map.getLevel() + 1);
            setLevel(map.getLevel());
        } else if (type === "decrease") {
            map.setLevel(map.getLevel() - 1);
            setLevel(map.getLevel());
        }
    };

    const handleMainClick = () => {
        navigate('/');
    };

    const handleContentBox = (type) => {
        setContentBoxType((prev) => (prev === type ? null : type));
        setActiveButton((prev) => (prev === type ? null : type)); // 콘텐츠 박스 닫힐 때 버튼 이미지 복원
    };

    const renderContentBox = () => {
        switch (contentBoxType) {
            case 'scrap':
                return <MainBox onClose={() => setContentBoxType(null)}>스크랩 콘텐츠</MainBox>;
            case 'near':
                return <MainBox onClose={() => setContentBoxType(null)}>주변 정보</MainBox>;
            case 'recent':
                return <MainBox onClose={() => setContentBoxType(null)}>최근 방문</MainBox>;
            default:
                return null;
        }
    };

    const getIconSrc = (type) => {
        switch (type) {
            case 'scrap':
                return activeButton === 'scrap' ? scrap_primary : scrap;
            case 'near':
                return activeButton === 'near' ? near_primary : near;
            case 'recent':
                return activeButton === 'recent' ? recent_primary : recent;
            default:
                return home;
        }
    };

    const getTextColor = (type) => {
        return activeButton === type ? '#03A63C' : '#333333'; // activeButton에 따라 색상 변경
    };

    return (
        <div style={{ height: "100vh", position: "relative" }}>
          {isMapReady && location ? (
            <>
              <Map
                id="map"
                center={{ lat: location.latitude, lng: location.longitude }}
                style={{ width: "100%", height: "100%", position: "relative" }}
                level={defaultLevel}
                zoomable={true}
                ref={mapRef}
              >
              </Map>
              <S.SideMenu>
                <button className='item' onClick={handleMainClick}>
                  <img src={home} alt="메인으로" />
                  <span>메인으로</span>
                </button>
                <button className='item' onClick={() => handleContentBox('scrap')}>
                  <img src={getIconSrc('scrap')} alt="스크랩" />
                  <span style={{ color: getTextColor('scrap') }}>스크랩</span>
                </button>
                <button className='item' onClick={() => handleContentBox('near')}>
                  <img src={getIconSrc('near')} alt="주변" />
                  <span style={{ color: getTextColor('near') }}>주변</span>
                </button>
                <button className='item' onClick={() => handleContentBox('recent')}>
                  <img src={getIconSrc('recent')} alt="최근" />
                  <span style={{ color: getTextColor('recent') }}>최근</span>
                </button>
              </S.SideMenu>
              <S.SearchBar>
                <input type="text" placeholder='검색어를 입력하세요' />
                <img src={search} alt="" />
              </S.SearchBar>
              {renderContentBox()}
              <S.Zoom>
                <button className="control" onClick={() => handleLevel("decrease")}><img src={plus} alt="확대" /></button>
                <button className="control" onClick={() => handleLevel("increase")}><img src={minus} alt="축소" /></button>
              </S.Zoom>
            </>
          ) : (
            <div>지도 로딩 중...</div>
          )}
        </div>
    );
};

export default Restaurant;