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
        navigate("/community/CommunityFollowDt")
    }   
    const bookmarkClick = (event) => {
        event.stopPropagation();
    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch("http://localhost:8000/community/getPost")
                console.log(response)
                // .then((res) => res.json())
                if(!response.ok) {
                    throw new Error('게시물 fetch 실패');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching: ', error);
            }
        }
        fetchPost();
    },[])

    console.log(posts);
    
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
                    {posts.map((post, index)=>
                        <S.Feed2 className='게시물' key={post._id}>
                            <S.PostUser1 className='게시물1'>
                            <S.PostImage onClick={toPostsOnClick}>
                                <img src={Userimages[`post${index + 4}`]} alt={`게시물 사진 ${index + 1}`}/>
                                <S.type onClick={bookmarkClick}>
                                    <ScrapBt />
                                </S.type>
                            </S.PostImage>
                            <S.PostTitleLeft onClick={toPostsOnClick}>{post.title}</S.PostTitleLeft>
                            <S.text2>
                                <S.TextInfo>
                                    <S.Profile className='profileImage'>
                                        <img src={Userimages[`postuser${index + 1}`]} alt={Userimages[`postuser${index + 1}`]}/>
                                    </S.Profile>

                                    <S.PostUserName2 className='profileUserName'>유저 이름</S.PostUserName2>
                                </S.TextInfo>
                            </S.text2>
                                <S.FeedTags className='postTags' key={post._id}>
                                    <S.FeedFilter>스크랩 {post.scrapCount}</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>좋아요 {post.likeCount}</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>댓글604</S.FeedFilter>
                                    <S.FeedFilter>·</S.FeedFilter>
                                    <S.FeedFilter>조회수 {post.viewCount}</S.FeedFilter>
                                </S.FeedTags>
                            </S.PostUser1>
                        </S.Feed2>
                    )}
                </S.FeedBoxFollow>
            </S.mainWrapper>
        </S.CommunityContainer>
    );
};

export default CommunityFollow;