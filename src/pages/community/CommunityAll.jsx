import React, { useEffect, useState } from 'react';
import S from './style';
import Userimages from './Userimages';
import like from './image/like.svg';
// import scrap from './image/scrap.svg';
import scrapBlack from './image/scrapBlack.svg';
import comment_one from './image/comment_one.svg';
import { useNavigate } from 'react-router-dom';
import LikeBt from './LikeBt';
import Follow from './Follow';
import ScrapBlack from './ScrapBlack';

const CommunityAll = () => {

    window.scrollTo(0,0);

    const navigate = useNavigate();

    // 태그버튼
    const [tagClick, setTagClick] = useState("like")
    useEffect(()=>{
        setTagClick("like")
    }, [setTagClick])

    // 글로 페이지 이동
    const toPostsOnClick = () => {
        navigate("/community/CommunityAllDt")
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
                console.error('Error fetching post: ', error);
            }
        }
        fetchPost();
    },[])
    
    const likeData = [
        {
            id : 1,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 1,
        },
        {
            id : 2,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 2,
        },
        {
            id : 3,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 3,
        },
        {
            id : 4,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 4,
        },
        {
            id : 5,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 5,
        },
        {
            id : 6,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 6,
        },
        {
            id : 7,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 7,
        },
        {
            id : 8,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 8,
        },
        {
            id : 9,
            likeBt : <img src={like} alt="likeBt"></img>,
            scrapBt : <img src={scrapBlack} alt="scrapBt"></img>,
            follow : 9,
        },
    ]

    return (
        
        <S.CommunityContainer>
            <S.mainWrapper className='피드감싸는곳'>
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

                <S.FeedBoxAll className='전체 박스'>
            {posts.map((post)=>
                <S.Feed1 className='게시물'>
                    <S.PostUser1 className='게시물1'>
                    <S.text>
                        <S.PostUserImage1><img src={Userimages.postuser1} alt='게시물 사진 1'/></S.PostUserImage1>
                        <S.TextInfo>
                        <S.PostUserName>유저 이름</S.PostUserName>
                        <div>·</div>
                        <S.FollowUser>
                            <Follow likeData={likeData}/>
                        </S.FollowUser>
                        <S.UserIntro>한 줄 소개</S.UserIntro>
                        </S.TextInfo>
                    </S.text>
                    <S.PostImage onClick={toPostsOnClick}><img src={Userimages.post1} alt='게시물 사진 1'/><S.Views>조회수 6,841</S.Views></S.PostImage>
                    <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                    <S.FeedOption>
                        <LikeBt likeData={likeData}/>
                        <div>136</div>
                        <ScrapBlack likeData={likeData} />
                        <div>427</div>
                        <img src={comment_one} alt='commentBt'></img>
                        <div>63</div>
                    </S.FeedOption>
                </S.PostUser1>
                </S.Feed1>
            )}
                {/* <S.PostUser1 className='게시물2'>
                    <S.text>
                        <S.PostUserImage1><img src={Userimages.postuser2} alt='게시물 사진 2'/></S.PostUserImage1>
                        <S.TextInfo>
                        <S.PostUserName>유저 이름</S.PostUserName>
                        <div>·</div>
                        <S.FollowUser>
                            <Follow likeData={likeData}/>
                        </S.FollowUser>
                        <S.UserIntro>한 줄 소개</S.UserIntro>
                        </S.TextInfo>
                    </S.text>
                    <S.PostImage onClick={toPostsOnClick}><img src={Userimages.post2} alt='게시물 사진 2'/><S.Views>조회수 6,841</S.Views></S.PostImage>
                    <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                    <S.FeedOption>
                        <LikeBt likeData={likeData}/>
                        <div>136</div>
                        <ScrapBlack likeData={likeData}/>
                        <div>427</div>
                        <img src={comment_one} alt='commentBt'></img>
                        <div>63</div>
                    </S.FeedOption>
                </S.PostUser1>
                <S.PostUser1 className='게시물3'>
                    <S.text>
                        <S.PostUserImage1><img src={Userimages.postuser3} alt='게시물 사진 3'/></S.PostUserImage1>
                        <S.TextInfo>
                        <S.PostUserName>유저 이름</S.PostUserName>
                        <div>·</div>
                        <S.FollowUser>
                            <Follow likeData={likeData}/>
                        </S.FollowUser>                            
                        <S.UserIntro>한 줄 소개</S.UserIntro>
                        </S.TextInfo>
                    </S.text>
                    <S.PostImage onClick={toPostsOnClick}><img src={Userimages.post3} alt='게시물 사진 3'/><S.Views>조회수 6,841</S.Views></S.PostImage>
                    <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                    <S.FeedOption>
                        <LikeBt likeData={likeData}/>
                        <div>136</div>
                        <ScrapBlack likeData={likeData}/>
                        <div>427</div>
                        <img src={comment_one} alt='commentBt'></img>
                        <div>63</div>
                    </S.FeedOption>
                </S.PostUser1>
                    

                </S.Feed1>
                <S.Feed1 className='게시물'>
                    <S.PostUser1 className='게시물1'>
                        <S.text>
                            <S.PostUserImage1><img src={Userimages.postuser4} alt='게시물 사진 4'/></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><img src={Userimages.post4} alt='게시물 사진 4'/><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>
                    <S.PostUser1 className='게시물2'>
                        <S.text>
                            <S.PostUserImage1><img src={Userimages.postuser5} alt='게시물 사진 5'/></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><img src={Userimages.post5} alt='게시물 사진 5'/><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>
                    <S.PostUser1 className='게시물3'>
                        <S.text>
                            <S.PostUserImage1><img src={Userimages.postuser6} alt='게시물 사진 6'/></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><img src={Userimages.post6} alt='게시물 사진 6'/><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>

                </S.Feed1>
                <S.Feed1 className='게시물'>
                    <S.PostUser1 className='게시물1'>
                        <S.text>
                            <S.PostUserImage1><img src={Userimages.postuser7} alt='게시물 사진 7'/></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><img src={Userimages.post7} alt='게시물 사진 7'/><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>
                    <S.PostUser1 className='게시물2'>
                        <S.text>
                            <S.PostUserImage1><img src={Userimages.postuser8} alt='게시물 사진 8'/></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><img src={Userimages.post8} alt='게시물 사진 8'/><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>
                    <S.PostUser1 className='게시물3'>
                        <S.text>
                            <S.PostUserImage1><img src={Userimages.postuser9} alt='게시물 사진 9'/></S.PostUserImage1>
                            <S.TextInfo>
                            <S.PostUserName>유저 이름</S.PostUserName>
                            <div>·</div>
                            <S.FollowUser>
                                <Follow likeData={likeData}/>
                            </S.FollowUser>                            
                            <S.UserIntro>한 줄 소개</S.UserIntro>
                            </S.TextInfo>
                        </S.text>
                        <S.PostImage onClick={toPostsOnClick}><img src={Userimages.post9} alt='게시물 사진 9'/><S.Views>조회수 6,841</S.Views></S.PostImage>
                        <S.PostTitleCenter onClick={toPostsOnClick}>게시물 제목</S.PostTitleCenter>
                        <S.FeedOption>
                            <LikeBt likeData={likeData}/>
                            <div>136</div>
                            <ScrapBlack likeData={likeData}/>
                            <div>427</div>
                            <img src={comment_one} alt='commentBt'></img>
                            <div>63</div>
                        </S.FeedOption>
                    </S.PostUser1>

                    </S.Feed1> */}

                </S.FeedBoxAll>
            </S.mainWrapper>
         </S.CommunityContainer>
    );
};

export default CommunityAll;