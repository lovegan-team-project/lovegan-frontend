import React, { useEffect, useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import ScrapBt from './ScrapBt';

const CommunityFollow  = () => {
    
    window.scrollTo(0,0);

    // 토글 버튼 클릭시 글, 위치 변경
    // const [isSlide, setIsSlide] = useState(true);
    const navigate = useNavigate();
    // const slideToTag = () => {
    //     setIsSlide(!isSlide)
    //     navigate("/community")
    // }

    // 태그버튼
    const [tagClick, setTagClick] = useState("like")
    useEffect(()=>{
        setTagClick("like")
    }, [setTagClick])

    // 게시물 클릭시 디테일 페이지로 이동
    const toPostsOnClick = () => {
        navigate("/community/CommunityAllDt")
    }   
    const bookmarkClick = (event) => {
        event.stopPropagation();
    }

    return (
        <S.CommunityContainer>
            <S.mainWrapper>
                <div className='top'>
                    <S.totalNum><p>전체 13,429</p></S.totalNum>
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
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'></S.Profile>

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
                            <S.type onClick={bookmarkClick}>
                                <ScrapBt />
                            </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'></S.Profile>

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
                            <S.type onClick={bookmarkClick}>
                                <ScrapBt />
                            </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'></S.Profile>

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
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'></S.Profile>

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
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'></S.Profile>

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
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'></S.Profile>

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
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'></S.Profile>

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
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'></S.Profile>

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
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>게시물 제목</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'></S.Profile>

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