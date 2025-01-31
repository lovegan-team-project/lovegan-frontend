import React, { useEffect, useState } from 'react';
import S from './style';
import Userimages from './Userimages';
import like from './image/like.svg';
import scrapBlack from './image/scrapBlack.svg';
import comment_one from './image/comment_one.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LikeBt from './LikeBt';
import Follow from './Follow';
import ScrapBlack from './ScrapBlack';
import { useSelector } from 'react-redux';

const CommunityAll = () => {

    window.scrollTo(0,0);

    const navigate = useNavigate();

    // 태그버튼
    const [tagClick, setTagClick] = useState("like")
    useEffect(()=>{
        setTagClick("like")
    }, [setTagClick])

    // 글로 페이지 이동
    // const toPostsOnClick = () => {
    //     navigate("/community/CommunityAllDt")
    // }   

    const currentUser = useSelector((state) => state.user.currentUser);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch("http://localhost:8000/community/getPost")
                console.log(response)

                const data = await response.json();
                setPosts(data);
                console.log(data)
                
                if(!response.ok) {
                    throw new Error('게시물 fetch 실패');
                }


            } catch (error) {
                console.error('Error fetching: ', error);
            }
        }
        fetchPost();
    },[])

    console.log(posts);

    if (!posts) return <p>Loading...</p>;
    
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
                    <S.totalNum><p>전체 {posts.length}</p></S.totalNum>
                    <S.tagButton>
                        <button className={tagClick === "like" ? "click" : "unClick"} onClick={()=>setTagClick("like")}><p>좋아요순</p></button>
                        <button className={tagClick === "new" ? "click" : "unClick"} onClick={()=>setTagClick("new")}><p>최신순</p></button>
                        <button className={tagClick === "coment" ? "click" : "unClick"} onClick={()=>setTagClick("coment")}><p>댓글많은순</p></button>
                        <button className={tagClick === "view" ? "click" : "unClick"} onClick={()=>setTagClick("view")}><p>조회수순</p></button>
                        <button className={tagClick === "scrap" ? "click" : "unClick"} onClick={()=>setTagClick("scrap")}><p>스크랩순</p></button>
                    </S.tagButton>
                </div>

            <S.FeedBoxAll className='전체 박스'>
            {posts.map((post, index)=>
                <S.Feed1 className='게시물' key={post._id}>
                    <S.PostUser1 className='게시물1' >
                    <S.text >
                        <S.PostUserImage1><img src={Userimages[`postuser${index + 1}`]} alt={Userimages[`postuser${index + 1}`]}/></S.PostUserImage1>
                        <S.TextInfo>
                        <S.PostUserName >{post.author}</S.PostUserName>
                        <div>·</div>
                        <S.FollowUser>
                            <Follow likeData={likeData}/>
                        </S.FollowUser>
                        <S.UserIntro>한 줄 소개</S.UserIntro>
                        </S.TextInfo>
                    </S.text>
                    <Link to={`/community/communityAllDt/${post._id}`}>
                    <S.PostImage >
                        <img src={Userimages[`post${index + 1}`]} alt={`게시물 사진 ${index + 1}`}/>
                        <S.Views >조회수 {post.viewCount}</S.Views>
                    </S.PostImage>
                    </Link>
                    <S.PostTitleCenter ><div>{post.title}</div></S.PostTitleCenter>
                    <S.FeedOption >
                        <LikeBt likeData={likeData}/>
                        <div >{post.likeCount}</div>
                        <ScrapBlack likeData={likeData} />
                        <div >{post.scrapCount}</div>
                        <img src={comment_one} alt='commentBt'></img>
                        <div>63</div>
                    </S.FeedOption>
                    </S.PostUser1>
                </S.Feed1>
            )}
                </S.FeedBoxAll>
            </S.mainWrapper>
         </S.CommunityContainer>
    );
};

export default CommunityAll;