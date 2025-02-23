import React, { useEffect, useState } from 'react';
import S from './style.js'
import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom';
// import user_default from './images/user_default.svg';
import scrap from './icons/menu-scrap.svg';
import like from './icons/menu-like.svg';
import cart from './icons/big_cart.svg';
import document from './icons/document.svg';
import all_aplication from './icons/all_aplication.svg';
import buy from './icons/buy.svg';
import communication from './icons/communication.svg';
import lock from './icons/lock.svg';
import product from './icons/product.svg';
import three_bar from './icons/three_bar.svg';
import user from './icons/user.svg';
import { useDispatch, useSelector } from 'react-redux';


const MyPage = () => {

    const [ searchParams ] = useSearchParams();
    const previousUrl = useSelector((state) => state.user.previousUrl);
    const currentUser = useSelector((state) => state.user.currentUser);
    const isLogin = useSelector((state) => state.user.isLogin);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSettingsClick = () => {
        navigate('/mypage/settings/accountInfo');
    };

    const [picturePath, setPicturePath] = useState('');

    useEffect(() => {
        if (currentUser && currentUser.picturePath && currentUser.pictureName) {
            setPicturePath(`http://localhost:8000${currentUser.picturePath}/${currentUser.pictureName}`);
        }
    }, [currentUser]);

    return (
        <S.Background>
            <S.Container>
                <S.Sidebar>
                    <S.ProfileInfoWrapper>
                        <div className='profileImage'>
                            {/* <img src={picturePath || 'default_image_path.jpg'} alt='프로필 사진'/> */}
                            <img src={picturePath} alt='프로필 사진'/>
                        </div>
                        <div>
                            <h4>{currentUser.nickname}</h4>
                            <p>{currentUser.intro}</p>
                        </div>
                    </S.ProfileInfoWrapper>
                    <S.FollowInfoWrapper>
                        <div className='wrapper'>
                            <span className='title'>팔로워</span>
                            <span className='content'>{currentUser.followerCount}</span>
                            <div className='divider' />
                            <span className='title'>팔로잉</span>
                            <span className='content'>{currentUser.followingCount}</span>
                        </div>
                        <S.SmallButton onClick={handleSettingsClick}>설정</S.SmallButton>
                    </S.FollowInfoWrapper>
                    <S.MenuSection>
                        <div className='wrapper'>
                            <S.IconWrapper>
                                <NavLink to="/mypage/activity/scrap">
                                    <img src={scrap} alt=''/>
                                    <span className='top-title'>스크랩</span>
                                    <span className='top-content'>0</span>
                                </NavLink>
                            </S.IconWrapper>
                            <S.IconWrapper>
                                <NavLink to="/mypage/activity/likes">
                                    <img src={like} alt=''/>
                                    <span className='top-title'>좋아요</span>
                                    <span className='top-content'>0</span>
                                </NavLink>
                            </S.IconWrapper>
                            <S.IconWrapper>
                                <NavLink to="/cart">
                                    <img src={cart} alt=''/>
                                    <span className='top-title'>장바구니</span>
                                    <span className='top-content'>0</span>
                                </NavLink>
                            </S.IconWrapper>
                        </div>
                    </S.MenuSection>
                    <S.MenuSection>
                    <S.MenuListWrapper>
                            <p className='menu-title'>My Activity</p>
                            <S.MenuListNavLink to="/mypage/activity/posts"><img src={document} alt="" /><span className='menu-content'>게시물</span></S.MenuListNavLink>
                            <S.MenuListNavLink to="/mypage/activity/follow"><img src={three_bar} alt="" /><span className='menu-content'>팔로워/팔로잉</span></S.MenuListNavLink>
                            <S.MenuListNavLink to="/mypage/activity/likes"><img src={like} alt="" /><span className='menu-content'>좋아요</span></S.MenuListNavLink>
                            <S.MenuListNavLink to="/mypage/activity/scrap"><img src={scrap} alt="" /><span className='menu-content'>스크랩</span></S.MenuListNavLink>
                            {/* <S.MenuListNavLink to="/mypage/activity/couponbook"><img src={coupon} alt="" /><span className='menu-content'>쿠폰북</span></S.MenuListNavLink> */}
                        </S.MenuListWrapper>
                        <S.MenuListWrapper>
                            <p className='menu-title'>Shopping</p>
                            <S.MenuListNavLink to="/mypage/shopping/orders"><img src={all_aplication} alt="" /><span className='menu-content'>주문 내역</span></S.MenuListNavLink>
                            <S.MenuListNavLink to="/mypage/shopping/reviews"><img src={buy} alt="" /><span className='menu-content'>상품 후기</span></S.MenuListNavLink>
                            <S.MenuListNavLink to="/mypage/shopping/inquiries"><img src={communication} alt="" /><span className='menu-content'>상품 문의</span></S.MenuListNavLink>
                        </S.MenuListWrapper>
                        
                        <S.MenuListWrapper>
                            <p className='menu-title'>Settings</p>
                            <S.MenuListNavLink to="/mypage/settings/shippings"><img src={product} alt="" /><span className='menu-content'>배송지 관리</span></S.MenuListNavLink>
                            <S.MenuListNavLink to="/mypage/settings/accountInfo"><img src={user} alt="" /><span className='menu-content'>회원정보 수정</span></S.MenuListNavLink>
                            <S.MenuListNavLink to="/mypage/settings/changePassword"><img src={lock} alt="" /><span className='menu-content'>비밀번호 변경</span></S.MenuListNavLink>
                        </S.MenuListWrapper>
                    </S.MenuSection>
                </S.Sidebar>
                <S.Content>
                    <Outlet />
                </S.Content>
            </S.Container>
        </S.Background>
    );
};

export default MyPage;

