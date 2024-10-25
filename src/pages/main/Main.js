import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import main01 from './images/main02.svg';
import main02 from './images/main01.svg';
import main03 from './images/main03.svg';
import main04 from './images/main04.svg';
import main05 from './images/main05.svg';
import main06 from './images/main06.svg';
import main07 from './images/main07.svg';
import styled from "styled-components";
import NextArrow from './NextArrow';
import PreArrow from './PreArrow';
import Best from './Best';
import New from "./New";
import S from "./style";
import { useNavigate } from "react-router-dom";

const StyledSlider = styled(Slider)`
    width: 1420px;
    height: 650px;
    margin: 65px 250px 65px 250px;
   
    .slick-dots {
        bottom: 10px; /* dots 위치 조정 */
 
        li button:before {
            font-size: 12px; /* dots 크기 조정 */
            color: #FFFFFF /* dots 색상 조정 */
        }
        li.slick-active button:before {
            color: ${({theme}) => theme.PALLETTE.brand["primary"]}; /* 활성화된 dot 색상 */
        }
    }
`;

const Main = () => {

  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
  };

  const style = { width: "100%", height: "717px" };

  // 각 카테고리별로 표시할 컴포넌트나 내용을 조건부로 렌더링
  const moveTOProduct = () => {
      navigate("/product")
  }
  return (
    <>
    <S.MainContainer1>
      <StyledSlider {...settings}>
        <div style={style}>
          <img src={main01} alt="슬라이더1" />
        </div>
        <div style={style}>
          <img src={main02} alt="슬라이더2" />
        </div>
        <div style={style}>
          <img src={main03} alt="슬라이더3" />
        </div>
        <div style={style}>
          <img src={main04} alt="슬라이더4" />
        </div>
        <div style={style}>
          <img src={main05} alt="슬라이더5" />
        </div>
        <div style={style}>
          <img src={main06} alt="슬라이더6" />
        </div>
        <div style={style}>
          <img src={main07} alt="슬라이더7" />
        </div>
      </StyledSlider>
      <S.ProductWrapper>
        <Best />
        <New />
        {/* navigate("/product") */}
        <S.ProductButton onClick={moveTOProduct}>상품 보러가기 →</S.ProductButton>
      </S.ProductWrapper>

    </S.MainContainer1>
    <S.MainContainer2>


    </S.MainContainer2>
    <S.MainContainer3>
      
    </S.MainContainer3>
    </>
  );
};

export default Main;
