import React, { useEffect, useState } from 'react';
import S from './style';
import Userimages from './Userimages';
import { useNavigate } from 'react-router-dom';
import ScrapBt from './ScrapBt';

const CommunityFollow  = () => {
    
    window.scrollTo(0,0);

    const navigate = useNavigate();

    // 태그버튼
    const [tagClick, setTagClick] = useState("like")
    useEffect(()=>{
        setTagClick("like")
    }, [setTagClick])

    // 게시물 클릭시 디테일 페이지로 이동
    const toPostsOnClick = () => {
        // navigate("/community/CommunityFollowDt")
        navigate("/community/CommunityFollowDt")
    }   
    const bookmarkClick = (event) => {
        event.stopPropagation();
    }

    return (
        <S.CommunityContainer>
            <S.mainWrapper>
                <div className='top'>
                    <S.totalNum><span>전체 13,429</span></S.totalNum>
                    <S.tagButton>
                        <button className={tagClick === "like" ? "click" : "unClick"} onClick={()=>setTagClick("like")}><p>좋아요순</p></button>
                        <button className={tagClick === "new" ? "click" : "unClick"} onClick={()=>setTagClick("new")}><p>최신순</p></button>
                        <button className={tagClick === "coment" ? "click" : "unClick"} onClick={()=>setTagClick("coment")}><p>댓글많은순</p></button>
                        <button className={tagClick === "view" ? "click" : "unClick"} onClick={()=>setTagClick("view")}><p>조회수순</p></button>
                        <button className={tagClick === "scrap" ? "click" : "unClick"} onClick={()=>setTagClick("scrap")}><p>스크랩순</p></button>
                    </S.tagButton>
                </div>

                <S.FeedBoxFollow className='전체 박스'>
                        
                        <S.Feed2 className='게시물'>
                            <S.PostUser1 className='게시물1'>
                            <S.PostImage onClick={toPostsOnClick}>
                                <img src={Userimages.post10} alt='팔로우 게시물 이미지10'/>
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'>
                                        <img src={Userimages.postuser10} alt='팔로우 유저 이미지10'/>
                                    </S.Profile>

                                    <S.PostUserName2 className='profileUserName'>유저 이름</S.PostUserName2>
                                </S.TextInfo>
                            </S.text2>
                                <S.FeedTags className='postTags'>
                                    <S.FeedFilter>스크랩24</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>좋아요80</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>댓글604</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>조회수713</S.FeedFilter>
                                </S.FeedTags>
                            </S.PostUser1>
                            <S.PostUser1 className='게시물1'>
                            <S.PostImage onClick={toPostsOnClick}>
                                <img src={Userimages.post11} alt='팔로우 게시물11'/>
                            <S.type onClick={bookmarkClick}>
                                <ScrapBt />
                            </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'>
                                        <img src={Userimages.postuser11} alt='팔로우 게시물 유저11'/>
                                    </S.Profile>
                                    <S.PostUserName2>유저 이름</S.PostUserName2>
                                </S.TextInfo>
                            </S.text2>
                                <S.FeedTags className='postTags'>
                                    <S.FeedFilter>스크랩24</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>좋아요80</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>댓글604</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>조회수713</S.FeedFilter>
                                </S.FeedTags>
                            </S.PostUser1>
                            <S.PostUser1 className='게시물1'>
                            <S.PostImage onClick={toPostsOnClick}>
                                <img src={Userimages.post12} alt='팔로우 게시물12'/>
                            <S.type onClick={bookmarkClick}>
                                <ScrapBt />
                            </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'>
                                    <img src={Userimages.postuser12} alt='팔로우 게시물 유저12'/>
                                    </S.Profile>

                                    <S.PostUserName2>유저 이름</S.PostUserName2>
                                </S.TextInfo>
                            </S.text2>
                                <S.FeedTags className='postTags'>
                                    <S.FeedFilter>스크랩24</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>좋아요80</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>댓글604</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>조회수713</S.FeedFilter>
                                </S.FeedTags>
                            </S.PostUser1>
                        </S.Feed2>
                        <S.Feed2 className='게시물'>
                            <S.PostUser1 className='게시물1'>
                            <S.PostImage onClick={toPostsOnClick}>
                                <img src={Userimages.post13} alt='팔로우 게시물13'/>
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'>
                                        <img src={Userimages.postuser13} alt='팔로우 게시물 유저13'/>
                                    </S.Profile>

                                    <S.PostUserName2 className='profileUserName'>유저 이름</S.PostUserName2>
                                </S.TextInfo>
                            </S.text2>
                                <S.FeedTags className='postTags'>
                                    <S.FeedFilter>스크랩24</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>좋아요80</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>댓글604</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>조회수713</S.FeedFilter>
                                </S.FeedTags>
                            </S.PostUser1>
                            <S.PostUser1 className='게시물1'>
                            <S.PostImage onClick={toPostsOnClick}>
                                <img src={Userimages.post14} alt='팔로우 게시물14'/>
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'>
                                        <img src={Userimages.postuser14} alt='팔로우 게시물 유저14'/>
                                    </S.Profile>

                                    <S.PostUserName2>유저 이름</S.PostUserName2>
                                </S.TextInfo>
                            </S.text2>
                                <S.FeedTags className='postTags'>
                                    <S.FeedFilter>스크랩24</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>좋아요80</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>댓글604</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>조회수713</S.FeedFilter>
                                </S.FeedTags>
                            </S.PostUser1>
                            <S.PostUser1 className='게시물1'>
                            <S.PostImage onClick={toPostsOnClick}>
                                <img src={Userimages.post15} alt='팔로우 게시물 유저15'/>
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'>
                                        <img src={Userimages.postuser15} alt='팔로우 게시물 유저15'/>
                                    </S.Profile>

                                    <S.PostUserName2>유저 이름</S.PostUserName2>
                                </S.TextInfo>
                            </S.text2>
                                <S.FeedTags className='postTags'>
                                    <S.FeedFilter>스크랩24</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>좋아요80</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>댓글604</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>조회수713</S.FeedFilter>
                                </S.FeedTags>
                            </S.PostUser1>
                        </S.Feed2>
                        <S.Feed2 className='게시물'>
                            <S.PostUser1 className='게시물1'>
                            <S.PostImage onClick={toPostsOnClick}>
                                <img src={Userimages.post16} alt='팔로우 게시물16'/>
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'>
                                        <img src={Userimages.postuser16} alt='팔로우 게시물 유저16'/>
                                    </S.Profile>

                                    <S.PostUserName2 className='profileUserName'>유저 이름</S.PostUserName2>
                                </S.TextInfo>
                            </S.text2>
                                <S.FeedTags className='postTags'>
                                    <S.FeedFilter>스크랩24</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>좋아요80</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>댓글604</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>조회수713</S.FeedFilter>
                                </S.FeedTags>
                            </S.PostUser1>
                            <S.PostUser1 className='게시물1'>
                            <S.PostImage onClick={toPostsOnClick}>
                                <img src={Userimages.post17} alt='팔로우 게시물17'/>
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'>
                                        <img src={Userimages.postuser17} alt='팔로우 게시물 유저17'/>
                                    </S.Profile>

                                    <S.PostUserName2>유저 이름</S.PostUserName2>
                                </S.TextInfo>
                            </S.text2>
                                <S.FeedTags className='postTags'>
                                    <S.FeedFilter>스크랩24</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>좋아요80</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>댓글604</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>조회수713</S.FeedFilter>
                                </S.FeedTags>
                            </S.PostUser1>
                            <S.PostUser1 className='게시물1'>
                            <S.PostImage onClick={toPostsOnClick}>
                                <img src={Userimages.post18} alt='팔로우 게시물18'/>
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'>
                                        <img src={Userimages.postuser18} alt='팔로우 게시물 유저18'/>
                                    </S.Profile>

                                    <S.PostUserName2>유저 이름</S.PostUserName2>
                                </S.TextInfo>
                            </S.text2>
                                <S.FeedTags className='postTags'>
                                    <S.FeedFilter>스크랩24</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>좋아요80</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>댓글604</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>조회수713</S.FeedFilter>
                                </S.FeedTags>
                            </S.PostUser1>
                        </S.Feed2>


                </S.FeedBoxFollow>

            </S.mainWrapper>
        </S.CommunityContainer>
    );
};

export default CommunityFollow;