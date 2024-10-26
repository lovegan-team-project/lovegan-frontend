import React, { useState } from 'react';
import S, { FollowButton, LikeButton, LikeButtonMin, ReplyTexts, ScrapButton } from './style';
import unsplash from './image/unsplash.svg';
import unsplash1 from './image/unsplash1.svg';
import unsplash2 from './image/unsplash2.svg';
import unsplash3 from './image/unsplash3.svg';
import cmUser from './image/cmUser.svg';
import cmUser1 from './image/cmUser1.svg';
import cmUser2 from './image/cmUser2.svg';
import { ReactComponent as like} from './image/like.svg';
import { ReactComponent as scrap} from './image/scrap.svg';
import comment_one from './image/comment_one.svg';

const CommunityAllDt = () => {

    // 반복되는 이미지, 댓글 등
    const cmImg = [
        cmUser1, cmUser2,
    ]
    const comment = Array(5).fill().map((_, index) => ({
        cmImgs : cmImg[index % cmImg.length],
        userNkN : '유저 닉네임',
    }));

    // 팔로우 버튼 클릭, 호버 색 변경
    const [colorChange, setColorChange] = useState('#03A63C');
    const [textColor, setTextColor] = useState('#fff')
    
    // like, scrap 버튼 클릭 상태
    const [likeColor, setLikeColor] = useState('#fff')
    const [scrapColor, setScrapColor] = useState('#fff')

    // 각 댓글별 좋아요 버튼 클릭 상태 (배열로 관리)
    const [likeMinStates, setLikeMinStates] = useState(Array(comment.length).fill('#fff'));
    const [likeSmallState, setLikeSmaillState] = useState(Array(comment.length).fill('#fff'));

    // 각 댓글별 답글 입력창 상태(열림/닫힘)
    const [replyInput, setReplyInput] = useState(Array(comment.length).fill(false))

    // 각 댓글별 답글 내용 저장
    const [replies, setReplies] = useState(Array(comment.length).fill(''));

    // 입력한 답글 내용 저장 (임시 저장)
    const [replyTexts, setReplyTexts] = useState(Array(comment.length).fill(''));

    // 답글 보이고 안보이기
    const [replyInputVisible, setReplyInputVisible] = useState(false);

    // 팔로우 버튼 색 변경 함수
    const onChangeColor = () => {
        setColorChange(prevColor => (prevColor === '#03A63C' ? '#fafafa' : '#03A63C'))
        setTextColor(prevColor => (prevColor === '#fff' ? '#333' : '#fff'))
    };
    
    // like 버튼 색변경 함수
    const onChangeLike = () => {
        setLikeColor(prevColor => (prevColor === '#fff' ? '#D8590E' : '#fff'))
    };
    
    // scrap 버튼 색변경 함수
    const onChangeScrap = () => {
        setScrapColor(prevColor => (prevColor === '#fff' ? '#D8590E' : '#fff'))
    };

    // 개별 댓글 좋아요 상태 변경 함수
    const onChangeLikeMin = (index) => {
        setLikeMinStates(prevStates => 
            prevStates.map((color, i) => i === index ? (color === '#fff' ? '#D8590E' : '#fff') : color)
        );
    };

    // 개별 댓글 작은 좋아요 상태 변경 함수
    const onChangeLikeSmall = (index) => {
        setLikeSmaillState(prevStates => 
            prevStates.map((color, i) => i === index ? (color === '#fff' ? '#D8590E' : '#fff') : color)
        );
    };

    // 답글 입력창 열기/닫기
    const buttonReplyInput = (index) => {
        setReplyInput(prevVisible => 
            prevVisible.map((visible, i) => i === index ? !visible : visible)
        );
    };

    // 답글 입력 상태 저장
    const handleReplyChange = (index, event) => {
        const newReplies = [...replyTexts];
        newReplies[index] = event.target.value;
        setReplyTexts(newReplies);

        // const newReplyTexts = [...replyTexts];
        // newReplyTexts[index] = '';
        // setReplyTexts(newReplyTexts);
    };

    // 입력된 답글을 저장하고 입력창 닫기
    const submitReply = (index) => {
        const newReplies = [...replies];
        newReplies[index] = [...newReplies[index], replyTexts[index]]; // 해당 댓글에 답글 추가
        setReplies(newReplies);

        console.log(replyTexts[index])

        // 답글 창 닫기
        setReplyInput(prevVisible => 
            prevVisible.map((visible, i) => i === index ? false : visible)
        );

        // 입력 필드 초기화
        // const newReplyTexts = [...replyTexts];
        // newReplyTexts[index] = '';
        // setReplyTexts(newReplyTexts);
    };

    return (
        <S.PostWrapper>
            <S.HeadLine>
                가을이 오면 생각나는 비건 음식들, 단호박 수프부터 비건 카페라테까지! 오늘 하루 일상 🌿🍂
            </S.HeadLine>
            <S.sideBar>
                <S.sideC>
                    <LikeButton src={like} alt='좋아요' onClick={onChangeLike} color={likeColor} />
                </S.sideC>
                <p>1,856</p>
                <S.sideC>
                    <ScrapButton src={scrap} alt='스크랩' onClick={onChangeScrap} color={scrapColor} />
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
                <FollowButton 
                    onClick={onChangeColor} 
                    color={colorChange} 
                    text={textColor}>
                    팔로우
                </FollowButton> 
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
                <img src={unsplash} alt='포스트 사진1'/>
                <img src={unsplash1} alt='포스트 사진2'/>
                <img src={unsplash2} alt='포스트 사진3'/>
                <img src={unsplash3} alt='포스트 사진4'/>
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
                <div>59</div>
            </S.commentNum>
            <S.typing>
                <img src={cmUser} alt='댓글달기' />
                <input type="text" placeholder='칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)'/>
                <button>입력</button>
            </S.typing>
            <S.Recomment>
                {comment.map((cm, index) => (
                    <S.RecommentBox key={index}>
                        <img src={cm.cmImgs} alt={`게시물${index + 1}`}></img>
                        <div className='userBox'>
                            <div>{cm.userNkN}</div>
                            {/* <p>
                                0000님 글 너무 공감돼요! 저도 요즘 단호박 수프 자주 해먹어요.
                                두유 말고 코코넛밀크 넣으면 더 달콤하고 부드럽더라고요,
                                혹시 코코넛 좋아하시면 한 번 시도해보세요! 🍂 <br />
                                저도 요즘 가을 되니까 따뜻한 음식이 자꾸 땡겨요. <br />
                                레시피 공유해주시면 저도 따라 만들어보고 싶어요~
                            </p> */}
                                
                        <S.dtInfo>
                            <p>작성 시간</p>
                            <span>·</span>
                            <LikeButtonMin onClick={() => onChangeLikeMin(index)}
                                color={likeMinStates[index]} src={like} alt='좋아요' />
                            <p>좋아요</p>
                            <span>·</span>
                            <p onClick={() => buttonReplyInput(index)}>답글 달기</p>
                            <span>·</span>
                            <p>신고</p>
                        </S.dtInfo>

                        {/* 답글 입력창 */}
                        {replyInput[index] && (
                            <S.InputComment>
                                <img src={cm.cmImgs} alt={`게시물${index + 1}`}></img>
                                <input
                                    type="text" 
                                    value={replyTexts[index]} 
                                    onChange={(e) => handleReplyChange(index, e)} 
                                    placeholder="답글을 입력하세요" 
                                />
                                <button onClick={() => submitReply(index)} >입력</button>
                            </S.InputComment>
                        )}
                        
                        <S.Recomment1>
                            <img src={cm.cmImgs} alt={`게시물${index + 1}`} />
                            <div>
                                <div>유저 닉네임</div>
                                <S.goolbang>@유저 닉네임</S.goolbang>
                            {replyTexts[index] && (
                                <p
                                    type="text" 
                                    value={replyTexts[index]} 
                                    onChange={(e) => handleReplyChange(index, e)} 
                                >
                                    <ReplyTexts>{replyTexts[index]}</ReplyTexts>
                                </p>
                            )}

                        <S.dtInfo>
                            <p>작성 시간</p>
                            <span>·</span>
                            <LikeButtonMin onClick={() => onChangeLikeSmall(index)} 
                                color={likeSmallState[index]} src={like} alt='좋아요'/>
                            <p>좋아요</p>
                            <span>·</span>
                            {/* 위의 답글달기 동작이랑 같아서 주석함*/}
                            {/* 함수를 바꿔서 동작이 따로 움직이도록 하기 */}
                            {/* onClick={() => buttonReplyInput(index)} */}
                            <p >답글 달기</p>
                            <span>·</span>
                            <p>신고</p>
                        </S.dtInfo>
                        </div>
                        </S.Recomment1>
                    </div>
                </S.RecommentBox>
                ))}
            </S.Recomment>
            <S.nextPage>
                <S.Arrow />
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <S.Arrow1 />
            </S.nextPage>
        </S.PostWrapper>
    );
};

export default CommunityAllDt;