import React, { useEffect, useState } from 'react';
import S, { FollowButton_1, LikeButton, ScrapButton } from './style';
import unsplash1 from './image/unsplash1.png'
import unsplash2 from './image/unsplash2.png'
import unsplash3 from './image/unsplash3.png'
import unsplash4 from './image/unsplash4.png'
import left from './image/left.svg';
import right from './image/right.svg';
import { ReactComponent as like} from './image/like.svg';
import { ReactComponent as scrap} from './image/scrap.svg';
import comment_one from './image/comment_one.svg';
import Comment from './Comment';

const CommunityFollowDt = (props) => {

    // 팔로우 버튼 클릭, 호버 색 변경
    const [colorChange, setColorChange] = useState('#fafafa');
    const [textColor, setTextColor] = useState('#333')    
    // // like, scrap 버튼 클릭 상태
    const [likeColor, setLikeColor] = useState('#fff')
    const [likeStroke, setLikeStroke] = useState('#8D8D8D')
    
    const [scrapColor, setScrapColor] = useState('#fff')
    const [scrapStroke, setScrapStroke] = useState('#8D8D8D')

    // // 각 댓글별 좋아요 버튼 클릭 상태 (배열로 관리)
    const [likeMinStates, setLikeMinStates] = useState('#fff');

    // 댓글 수 초기값 설정
    const [commentCount, setCommentCount] = useState(0);

    // // 팔로우 버튼 색 변경 함수
    const onChangeColor = () => {
        setColorChange(prevColor => (prevColor === '#fafafa' ? '#03A63C' : '#fafafa'))
        setTextColor(prevText => (prevText === '#333' ? '#fff' : '#333'))
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

    return (
        <S.PostWrapper>
            <S.HeadLine>
                가을이 오면 생각나는 비건 음식들, 단호박 수프부터 비건 카페라테까지! 오늘 하루 일상 🌿🍂
            </S.HeadLine>
            <S.sideBar>
                <S.sideC>
                    <LikeButton src={like} alt='좋아요' onClick={onChangeLike} color={likeColor} stroke={likeStroke}/>
                </S.sideC>
                <p>1,856</p>
                <S.sideC>
                    <ScrapButton src={scrap} alt='스크랩' onClick={onChangeScrap} color={scrapColor} stroke={scrapStroke}/>
                </S.sideC>
                <p>4,774</p>
                <hr />
                <S.sideC>
                    <img src={comment_one} alt='댓글' />
                </S.sideC>
                <p>59</p>
            </S.sideBar>
            <S.UserInfo>
                <S.UserImage></S.UserImage>
                <div>
                    <S.UserNickPost>유저 닉네임</S.UserNickPost>
                    <S.Introduce>유저 한 줄 소개</S.Introduce>
                </div>
                <FollowButton_1
                    onClick={onChangeColor} color={colorChange} text={textColor}>팔로우
                </FollowButton_1> 
            </S.UserInfo>
            <hr/>
            <p className='write'>
                안녕하세요, 0000입니다 😊<br/><br/>
                요즘 정말 날씨가 확 달라졌죠? 아침저녁으로 선선한 바람이 불고, 공원 산책할 때마다 가을 냄새가 나서 기분이 너무 좋아요. 여름이 갔다는 게 살짝 아쉽긴 하지만, 가을만의 분위기도 너무 좋아서 요즘은 그 감성에 빠져 지내고 있어요. 그래서 그런지 가을에 어울리는 따뜻한 비건 음식들이 자꾸 생각나네요. 여러분도 가을이 오면 꼭 해먹는 비건 메뉴들이 있으신가요?<br/><br/>
                저는 가을마다 비건 단호박 수프를 자주 만들어요. 푹 익힌 단호박에 두유, 약간의 올리브유, 그리고 향신료를 넣고 끓이면 정말 부드럽고 따뜻한 수프가 완성돼요. 아침에 먹으면 속도 편하고, 저녁에도 가볍게 먹기 좋은 음식이에요. 이번에는 위에 구운 견과류랑 통밀빵을 곁들여봤는데, 너무 잘 어울리더라고요! 혹시 수프 좋아하시는 분 계시면 한번 도전해 보세요!혹시 가을이 되면 즐겨 먹는 비건 음식이 있으시면 추천도 부탁드려요. 비건 베이킹이나 가을 채소를 활용한 레시피도 정말 궁금해요.<br/><br/>
                오늘 하루는 바쁜 와중에 잠깐 짬을 내서 동네 공원에 다녀왔어요. 바람이 살랑살랑 불어서 너무 기분 좋더라고요. 저는 텀블러에 비건 카페라테를 직접 만들어서 들고 갔어요. 요즘은 비건 우유 선택지도 많아서, 귀리우유나 아몬드우유를 넣어 집에서 만들어 먹는 게 아주 만족스럽더라고요.<br/><br/>
                카페에서 비건 메뉴 찾는 게 가끔 어렵긴 하지만, 그럴 때 집에서 만들어서 텀블러에 챙겨 나가는 것도 좋은 방법인 것 같아요. 환경도 지키고, 내가 원하는 맛을 딱 맞춰서 만들 수 있는 장점도 있죠!<br/><br/>
                그리고 최근에는 비건 패션이나 친환경 생활용품에도 관심이 많이 가요. 평소에는 음식에만 집중했었는데, 점점 생활 전반에서 더 많은 선택지를 찾고 싶어지더라고요. 환경 보호를 생각하면서 비건 생활을 이어가는 것에 대해 여러분은 어떻게 생각하세요? 이런 부분도 나중에 같이 이야기 나누면 좋을 것 같아요.<br/><br/>
                비건 라이프는 매일이 새로워요. 내가 아끼는 음식을 재발견하거나 새로운 레시피를 시도해볼 때, 작은 성취감도 느끼고요. 여러분들은 최근에 어떤 비건 일상이나 도전이 있으셨나요? 댓글로 여러분의 하루도 나눠주시면 좋겠어요! 다 같이 이야기하면서 더 좋은 정보와 영감을 나눌 수 있으면 좋겠네요 🌱<br/><br/>
                그럼 오늘도 모두 평온하고 따뜻한 하루 보내세요! 🧡<br/><br/>
            </p>
            <hr />
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
            <S.commentNum>
                댓글
                <div>{commentCount}</div>
            </S.commentNum>           
            <S.Recomment>
            {/* 새로운 댓글 로직 컴포넌트트 */}
            <Comment onAddComment = {() => setCommentCount(prev => prev + 1)} />
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

export default CommunityFollowDt;