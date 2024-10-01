import styled from "styled-components";

const S = {};

// 사이드바랑 지도를 감싸는 영역 스타일
S.MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

// 사이드바 메뉴를 감싸는 영역 스타일
S.SideBar = styled.div`
  width: 10%;
  background-color: #f2f2f2;
  padding: 10px;
`;

// 사이드바 메뉴 간격을 지정해주기 위한 스타일
S.SideBarButtonContainer = styled.div`
  margin-bottom: 20px;
`;

// 사이드바 메뉴 내용과 아이콘을 감싸기 위한 스타일
S.SideBarButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
`;

// 지도와 사용자 아이콘을 감싸기 위한 영역 스타일
S.MapContainer = styled.div`
  width: 90%;
  position: relative;
`;

// 검색창을 감싸는 영역 스타일
S.SearchContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 15%;
  transform: translateX(-50%);
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// 검색창 스타일
S.SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
`;

// 지도 스타일
S.MapDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  /* 지도 위에 다른 요소가 겹치지 않도록 설정 */
  z-index: 0;
`;

// 근처 레스토랑 목록 보여주기 위한 영역 스타일
S.NearRestaurantContainer = styled.div`
  position: absolute;
  /* 검색창 아래에 위치하도록 설정 */
  top: 70px;
  left: 80px;
  right: 10px;
  /* 검색창과 너비가 동일하게 되도록 설정 */
  width: 320px;
  background-color: white;
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

// 비건 레스토랑 목록을 보여주는 영역 스타일
S.NearRestaurantList = styled.div`
  max-height: 800px;
  overflow-y: auto;
  padding: 20px;
  /* 검색창과 너비 동일 설정 */
  width: 100%;
`;

// 비건 레스토랑 정보 및 이미지를 감싸고 있는 영역 스타일
S.RestaurantCard = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  cursor: pointer;
`;

// 비건 레스토랑 이미지 영역 스타일
S.RestaurantImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 8px;
`;

// 페이지 목록을 나타내주는 영역 스타일
S.PageList = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;

  & span {
    margin: 0 5px;
    cursor: pointer;
  }
`;

// 비건 레스토랑에 대한 상세 정보를 담고 있는 영역 스타일
S.DetailContainer = styled.div`
  width: 50%;
  padding: 20px;
  background-color: #fff;
`;

// 비건 레스토랑에 대한 상세 정보를 보여줄 때 나타나는 이미지 스타일
S.RestaurantDetailImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

// 메뉴 정보를 담고 있는 영역 스타일
S.Menu = styled.div`
  margin-top: 20px;
  & h4 {
    margin-bottom: 5px;
  }
`;


export default S;
