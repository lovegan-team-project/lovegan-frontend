import React from 'react';
import RS from './restaurantStyles.js';
import res1_1 from './images/res1-1.png';
import res1_2 from './images/res1-2.png';
import res1_3 from './images/res1-3.png';
import res2_1 from './images/res2-1.png';
import res2_2 from './images/res2-2.png';
import res2_3 from './images/res2-3.png';
import res3_1 from './images/res3-1.png';
import res3_2 from './images/res3-2.png';
import res3_3 from './images/res3-3.png';
import res4_1 from './images/res4-1.png';
import res4_2 from './images/res4-2.png';
import res4_3 from './images/res4-3.png';
import DarkLikeBt from '../../components/likeButton/DarkLikeBt.jsx';

const RestaurantLikes = () => {
    return (
        <>
            <RS.Container>
                <RS.RestaurantContainer>
                    <RS.InfoWrapper>
                        <p className='title'>식당명</p>
                        <div className='address'>서울 강남구 테헤란로 146</div>
                        <DarkLikeBt />
                    </RS.InfoWrapper>
                    <RS.ImageWrapper>
                        <RS.ImageContainer>
                            <img src={res1_1} alt="식당 사진" />
                        </RS.ImageContainer>
                        <RS.ImageContainer>
                            <img src={res1_2} alt="식당 사진" />
                        </RS.ImageContainer>
                        <RS.ImageContainer>
                            <img src={res1_3} alt="식당 사진" />
                        </RS.ImageContainer>
                    </RS.ImageWrapper>
                </RS.RestaurantContainer>
                <RS.RestaurantContainer>
                    <RS.InfoWrapper>
                        <p className='title'>식당명</p>
                        <div className='address'>서울 강남구 테헤란로 146</div>
                        <DarkLikeBt />
                    </RS.InfoWrapper>
                    <RS.ImageWrapper>
                        <RS.ImageContainer>
                            <img src={res2_1} alt="식당 사진" />
                        </RS.ImageContainer>
                        <RS.ImageContainer>
                            <img src={res2_2} alt="식당 사진" />
                        </RS.ImageContainer>
                        <RS.ImageContainer>
                            <img src={res2_3} alt="식당 사진" />
                        </RS.ImageContainer>
                    </RS.ImageWrapper>
                </RS.RestaurantContainer>
                <RS.RestaurantContainer>
                    <RS.InfoWrapper>
                        <p className='title'>식당명</p>
                        <div className='address'>서울 강남구 테헤란로 146</div>
                        <DarkLikeBt />
                    </RS.InfoWrapper>
                    <RS.ImageWrapper>
                        <RS.ImageContainer>
                            <img src={res3_1} alt="식당 사진" />
                        </RS.ImageContainer>
                        <RS.ImageContainer>
                            <img src={res3_2} alt="식당 사진" />
                        </RS.ImageContainer>
                        <RS.ImageContainer>
                            <img src={res3_3} alt="식당 사진" />
                        </RS.ImageContainer>
                    </RS.ImageWrapper>
                </RS.RestaurantContainer>
                <RS.RestaurantContainer>
                    <RS.InfoWrapper>
                        <p className='title'>식당명</p>
                        <div className='address'>서울 강남구 테헤란로 146</div>
                        <DarkLikeBt />
                    </RS.InfoWrapper>
                    <RS.ImageWrapper>
                        <RS.ImageContainer>
                            <img src={res4_1} alt="식당 사진" />
                        </RS.ImageContainer>
                        <RS.ImageContainer>
                            <img src={res4_2} alt="식당 사진" />
                        </RS.ImageContainer>
                        <RS.ImageContainer>
                            <img src={res4_3} alt="식당 사진" />
                        </RS.ImageContainer>
                    </RS.ImageWrapper>
                </RS.RestaurantContainer>
            </RS.Container>
        </>
    );
};

export default RestaurantLikes;