import styled from "styled-components";

const S = {};

// 사이드바랑 지도를 감싸는 영역 스타일
S.MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

// 사이드바 메뉴를 감싸는 영역 스타일
S.SideBar = styled.div`
  width: 80px;
  background-color: #fff;
  padding: 10px;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

// 사이드바 메뉴 간격을 지정해주기 위한 스타일
S.SideBarButtonContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

// 사이드바 메뉴 내용과 아이콘을 감싸기 위한 스타일
S.SideBarButton = styled.button`
  width: 100%;
  padding: 15px 0;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f1f1f1;
    color: #03a63c;
  }

  &:focus {
    background-color: #f1f1f1;
    color: #03a63c;
  }

  & svg {
    margin-bottom: 5px;
    font-size: 24px;
  }
`;

// 지도와 사용자 아이콘을 감싸기 위한 영역 스타일
S.MapContainer = styled.div`
  /* 사이드바 너비 제외 공간 사용 */
  width: calc(100% - 80px);
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
  position: absolute;
  top: 20px;
  left: 15%;
  transform: translateX(-50%);
  background-color: white;
  width: 320px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
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
  left: 115px;
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
  max-height: 900px;
  overflow-y: auto;
  padding: 15px;
  /* 검색창과 너비 동일 설정 */
  width: 100%;
`;

// 헤더와 닫기 버튼 스타일
S.HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;

  & p {
    font-size: 16px;
    font-weight: bold;
  }
`;

// 영업중 및 별점 표시 스타일
S.RestaurantStatus = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

// 영업중 텍스트 스타일
S.OpenStatus = styled.span`
  color: #03a63c;
  font-weight: bold;
  margin-right: 10px;
  font-size: 14px;
`;

// 별점 스타일
S.StarRating = styled.span`
  font-size: 14px;
  color: #333;
`;

// 비건 레스토랑 정보 및 이미지를 감싸고 있는 영역 스타일
S.RestaurantCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f9f9f9;
  }
`;

// 레스토랑 카드 내용 스타일
S.RestaurantContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// 식당 이름 스타일
S.RestaurantTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

// 식당 한 줄 소개 스타일
S.RestaurantDescription = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
`;

// 별점과 리뷰 수 스타일
S.RestaurantRating = styled.p`
  font-size: 14px;
  color: #03A63C;
  margin-bottom: 8px;
`;

// 식당 위치 정보 스타일
S.RestaurantLocation = styled.p`
  font-size: 14px;
  color: #555;
`;

// 비건 레스토랑 이미지 영역 스타일
S.RestaurantImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;

// 페이지 목록을 나타내주는 영역 스타일
S.PageList = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;

  & span {
    margin: 0 5px;
    cursor: pointer;
    font-size: 14px;
    color: #777;
  }

  &:hover {
    color: #03a63c;
  }   
`;

// 비건 레스토랑에 대한 상세 정보를 담고 있는 영역 스타일
S.DetailContainer = styled.div`
  position: absolute;
  top: 70px; // 목록 바로 옆에 표시되도록
  right: 1000px;
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; // 다른 요소보다 위에 표시되도록
`;

// 비건 레스토랑에 대한 상세 정보를 보여줄 때 나타나는 이미지 스타일
S.RestaurantDetailImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
`;

// 레스토랑 정보 섹션
S.RestaurantInfo = styled.div`
  & h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  & p {
    font-size: 16px;
    color: #777;
  }
`;

// 영업 상태와 별점 표시
S.RestaurantStatus = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

// 영업중 텍스트 스타일
S.OpenStatus = styled.span`
  color: #03a63c;
  font-weight: bold;
  margin-right: 10px;
  font-size: 14px;
`;

// 별점 스타일
S.StarRating = styled.span`
  font-size: 14px;
  color: #333;
`;

// 태그 컨테이너
S.TagContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// 태그 스타일
S.Tag = styled.span`
  background-color: #f1f1f1;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  margin-right: 8px;
`;

// 더보기 버튼 스타일
S.MoreButton = styled.button`
  background-color: #f1f1f1;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  border: none;
  cursor: pointer;
`;

// 탭 스타일
S.TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
`;

S.Tab = styled.span`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: ${props => (props.active ? "#03a63c" : "#333")};
  border-bottom: ${props => (props.active ? "2px solid #03a63c" : "none")};
`;

// 레스토랑 세부 정보 스타일
S.RestaurantDetails = styled.div`
  margin-bottom: 20px;
`;

S.InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  & svg {
    margin-right: 10px;
    color: #03a63c;
  }

  & a {
    color: #03a63c;
    text-decoration: none;
  }
`;

// 사진 그리드 스타일
S.PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

S.Photo = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

// 닫기 버튼 스타일
S.CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 5px;
  background: none;  // 투명한 배경 적용
  color: black;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: background-color 0.2s ease;

  &:hover {
    color: #03a63c;
  }
`;

// 메뉴 아이템 스타일
S.MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

S.MenuTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 5px;
`;

S.MenuDescription = styled.p`
  font-size: 14px;
  color: #888;
`;

S.MenuPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

// 리뷰 아이템 스타일
S.ReviewItem = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

S.ReviewUser = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;

  & svg {
    margin-right: 10px;
  }
`;

S.ReviewContent = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

S.ReviewDate = styled.p`
  font-size: 12px;
  color: #aaa;
`;

S.WriteReviewButton = styled.button`
  background-color: #03a63c;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
`;


export default S;
