import React, { useState } from 'react';
import S from './style';
import VegeNew from './VegeNew';
import MeatNew from './MeatNew';
import VegeSideNew from './VegeSideNew';
import SpiceNew from './SpiceNew';
import SnackNew from './SnackNew';
import EggNew from './EggNew';
import FastFoodNew from './FastFoodNew';
import DrinksNew from './DrinksNew';
import HealthyFoodNew from './HealthyFoodNew';
const New = () => {
    const [selectedCategory, setSelectedCategory] = useState("채소");
    const renderContent = () => {
        switch (selectedCategory) {
          case "채소":
            return <VegeNew />;
          case "고기대용":
            return <MeatNew />;
          case "채식 반찬":
            return <VegeSideNew />;
          case "양념·가루":
            return <SpiceNew />;
          case "간식·과일·견과":
            return <SnackNew />;
          case "쌀·잡곡·계란":
            return <EggNew />;
          case "간편식":
            return <FastFoodNew />;
          case "음료":
            return <DrinksNew />;
          case "건강식품":
            return <HealthyFoodNew />;
          default:
            return null;
        }
      };
    
    return (
        <>
        <S.ProductTitle>이런 신상품을 찾으시나요? ✨</S.ProductTitle>
        <S.TagWrapper>
          <S.tagButton
            className={selectedCategory === "채소" ? "active" : ""}
            onClick={() => setSelectedCategory("채소")}
          >
            채소
          </S.tagButton>
          <S.tagButton
            className={selectedCategory === "고기대용" ? "active" : ""}
            onClick={() => setSelectedCategory("고기대용")}
          >
            고기대용
          </S.tagButton>
          <S.tagButton
            className={selectedCategory === "채식 반찬" ? "active" : ""}
            onClick={() => setSelectedCategory("채식 반찬")}
          >
            채식 반찬
          </S.tagButton>
          <S.tagButton
            className={selectedCategory === "양념·가루" ? "active" : ""}
            onClick={() => setSelectedCategory("양념·가루")}
          >
            양념·가루
          </S.tagButton>
          <S.tagButton
            className={selectedCategory === "간식·과일·견과" ? "active" : ""}
            onClick={() => setSelectedCategory("간식·과일·견과")}
          >
            간식·과일·견과
          </S.tagButton>
          <S.tagButton
            className={selectedCategory === "쌀·잡곡·계란" ? "active" : ""}
            onClick={() => setSelectedCategory("쌀·잡곡·계란")}
          >
            쌀·잡곡·계란
          </S.tagButton>
          <S.tagButton
            className={selectedCategory === "간편식" ? "active" : ""}
            onClick={() => setSelectedCategory("간편식")}
          >
            간편식
          </S.tagButton>
          <S.tagButton
            className={selectedCategory === "음료" ? "active" : ""}
            onClick={() => setSelectedCategory("음료")}
          >
            음료
          </S.tagButton>
          <S.tagButton
            className={selectedCategory === "건강식품" ? "active" : ""}
            onClick={() => setSelectedCategory("건강식품")}
          >
            건강식품
          </S.tagButton>
        </S.TagWrapper>

        {/* 선택된 카테고리에 맞는 내용 렌더링 */}
        <div>{renderContent()}</div>
      </>

    );
};

export default New;