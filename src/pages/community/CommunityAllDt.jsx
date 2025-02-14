import React, { useEffect, useRef, useState } from 'react';
import S, { FollowButton, LikeButton, ScrapButton } from './style';
import dtUser from './image/dtUser.png';
import unsplash1 from './image/unsplash1.png';
import unsplash2 from './image/unsplash2.png';
import unsplash3 from './image/unsplash3.png';
import unsplash4 from './image/unsplash4.png';
import left from './image/left.svg';
import right from './image/right.svg';
import { ReactComponent as like} from './image/like.svg';
import { ReactComponent as scrap} from './image/scrap.svg';
import comment_one from './image/comment_one.svg';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CommunityAllDt = () => {

    // 팔로우 버튼 클릭, 호버 색 변경
    const [colorChange, setColorChange] = useState('#03A63C');
    const [textColor, setTextColor] = useState('#fff')    
    // // like, scrap 버튼 클릭 상태
    const [likeColor, setLikeColor] = useState('#fff')
    const [likeStroke, setLikeStroke] = useState('#8D8D8D')
    
    const [scrapColor, setScrapColor] = useState('#fff')
    const [scrapStroke, setScrapStroke] = useState('#8D8D8D')

    // // 각 댓글별 좋아요 버튼 클릭 상태 (배열로 관리)
    // const [likeMinStates, setLikeMinStates] = useState('#fff');

    // 댓글 수 초기값 설정
    const [commentCount, setCommentCount] = useState(0);
    const handleCommentCountChange = (newCount) => {
        setCommentCount(newCount); 
    }
    
    // // 팔로우 버튼 색 변경 함수
    const onChangeColor = () => {
        setColorChange(prevColor => (prevColor === '#03A63C' ? '#E6E6E6' : '#03A63C'))
        setTextColor(prevText => (prevText === '#fff' ? '#333' : '#fff'))
    };
    
    // // like 버튼 색변경 함수
    const onChangeLike = () => {
        setLikeColor(prevColor => (prevColor === '#fff' ? '#F27830' : '#fff'))
        setLikeStroke(prevStroke => (prevStroke === '#8D8D8D' ? '#F27830' : '#8D8D8D'))
    };
    
    // // scrap 버튼 색변경 함수
    const onChangeScrap = () => {
        setScrapColor(prevColor => (prevColor === '#fff' ? '#F27830' : '#fff'))
        setScrapStroke(prevStroke => (prevStroke === '#8D8D8D' ? '#F27830' : '#8D8D8D'))
    };

    const [changeVal, setChangeVal] = useState("");
    const [inputVal1, setInputVal1] = useState("");
    // 댓글 달기 클릭 -> input 박스 보임 여부
    const [visibleInput, setVisibleInput] = useState(false);
    const inputChange2 = (e) => {
        setInputVal1(e.target.value);
    };
    const textChange = () => {
        setChangeVal(inputVal1);
        setInputVal1(""); // 초기화
        setVisibleInput(!visibleInput)
    };
    
    // 태그버튼
    const [nextClick, setNextClick] = useState()
    useEffect(()=>{
        setNextClick()
    }, [setNextClick])

    const currentUser = useSelector((state) => state.user.currentUser);
    const { id } = useParams();
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);
    // const commentsRef = useRef([]); // Ref로 댓글 리스트 관리
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`http://localhost:8000/community/getPostById/${id}`);
                console.log(response);

                const data = await response.json();
                console.log(data);
                setPost(data);

                if (!response.ok) throw new Error("게시물 가져오기 실패");
                
            } catch (error) {
                console.error('Error fetching: ', error);
            }
        }
        
        fetchPosts();
    }, [id]);

    const handleNewComment = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment]);  // 새 댓글 추가
        // commentsRef.current.push(newComment); // 상태 변경 없이 바로 댓글에 추가
    };

    return (
        <S.PostWrapper>
            <S.HeadLine>
                {post && post.title}
                {/* 가을이 오면 생각나는 비건 음식들, 단호박 수프부터 비건 카페라테까지! 오늘 하루 일상 🌿🍂 */}
            </S.HeadLine>
            <S.sideBar>
                <S.sideC>
                    <LikeButton src={like} alt='좋아요' onClick={onChangeLike} color={likeColor} stroke={likeStroke}/>
                </S.sideC>
                <p>{post && post.likeCount}</p>
                <S.sideC>
                    <ScrapButton src={scrap} alt='스크랩' onClick={onChangeScrap} color={scrapColor} stroke={scrapStroke}/>
                </S.sideC>
                    <p>{post && post.scrapCount}</p>
                <hr />
                <S.sideC>
                    <img src={comment_one} alt='댓글' />
                </S.sideC>
                <p>{post && post.contentCounts}</p>
            </S.sideBar>
            <S.UserInfo>
                <S.UserImage><img src={dtUser} alt='디테일 유저'/></S.UserImage>
                <div>
                    <S.UserNickPost>{post && post.nickname || '유저 닉네임'}</S.UserNickPost>
                    <S.Introduce>{currentUser.intro}</S.Introduce>
                </div>
                <FollowButton
                    onClick={onChangeColor} color={colorChange} text={textColor}
                >
                    팔로우
                </FollowButton> 
            </S.UserInfo>
            <hr/>
            <p className='write'>{post && post.content}</p>
            <S.dtImg>
                <img src={unsplash1} alt='포스트 사진1'/>
                <img src={unsplash2} alt='포스트 사진2'/>
                <img src={unsplash3} alt='포스트 사진3'/>
                <img src={unsplash4} alt='포스트 사진4'/>
            </S.dtImg>
            <hr />
            <S.dtInfo>
                <p>24.01.13</p>
                <span>·</span>
                <p>좋아요 1,856</p>
                <span>·</span>
                <p>스크랩 4,774</p>
                <span>·</span>
                <p>조회수 713</p>
                <div>신고하기</div>
            </S.dtInfo>
            <S.commentNum >
                댓글<div>{commentCount}</div>
            </S.commentNum>           
            <S.Recomment>
            {/* 새로운 댓글 로직 컴포넌트트 */}
            
            <Comment onCommentCountChange={handleCommentCountChange} id={id} comments={comments} handleNewComment={handleNewComment}/>
            </S.Recomment>
            
            <S.nextPage>
                <img className='left' src={left} />
                <button className={nextClick === "one" ? "click" : "unClick"} onClick={()=>setNextClick("one")}><p>1</p></button>
                <button className={nextClick === "two" ? "click" : "unClick"} onClick={()=>setNextClick("two")}><p>2</p></button>
                <button className={nextClick === "three" ? "click" : "unClick"} onClick={()=>setNextClick("three")}><p>3</p></button>
                <button className={nextClick === "four" ? "click" : "unClick"} onClick={()=>setNextClick("four")}><p>4</p></button>
                <button className={nextClick === "five" ? "click" : "unClick"} onClick={()=>setNextClick("five")}><p>5</p></button>
                <img className='right' src={right} />
            </S.nextPage>
        </S.PostWrapper>
    );
};

export default CommunityAllDt;