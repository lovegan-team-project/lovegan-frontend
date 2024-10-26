import React, { useState } from 'react';
// import CheckboxBt from '../../componenet/checkbox/CheckboxBt';
// import Radio from '../../componenet/radioButton/Radio';
// // import Dropdown from '../../componenet/dropdown/Dropdown';
import S from './style';
import scrapBtTypeIn from './image/scrapBtTypeIn.svg';
import Post1 from './image/Post1.svg';
import Post2 from './image/Post2.svg';
import Post3 from './image/Post3.svg';
import Post4 from './image/Post4.svg';
import Post5 from './image/Post5.svg';
import Post6 from './image/Post6.svg';
import Post7 from './image/Post7.svg';
import Post8 from './image/Post8.svg';
import Post9 from './image/Post9.svg';
import Post1User from './image/Post1User.svg';
import Post2user from './image/Post2User.svg';
import Post3User from './image/Post3User.svg';
import Post4User from './image/Post4User.svg';
import Post5User from './image/Post5User.svg';
import Post6User from './image/Post6User.svg';
import Post7User from './image/Post7User.svg';
import Post8User from './image/Post8User.svg';
import Post9User from './image/Post9User.svg';
 

const CommunityFollow  = () => {

    // 토글 버튼 상태 변경 시
    const [isFollow, setIsFollow] = useState(false);
    const [text, setText] = useState("FOLLOW");

    // 드롭다운 사용시 필요 ->
    // const [selectedOption, setSelectedOption] = useState(null);

    // const options = [
    //     { label: '옵션 1 입니다. 자기소개 페이지로 이동하는 옵션입니다', value: '옵션 1'},
    //     { label: '옵션 2', value: '옵션 2'},
    //     { label: '옵션 3', value: '옵션 3'},
    //     { label: '옵션 4입니다.', value: '옵션 4'},
    //     { label: '옵션 5', value: '옵션 5'},
    // ];

    // const handleOptionSelect = (option) => {
    //     setSelectedOption(option);
    // };
    // -> 끝.

    // 토글 버튼 상태 변경
    const handleToggle = () => {
    setIsFollow(prev => !prev);
    setText(prevText => (prevText === "FOLLOW" ? "ALL" : "FOLLOW"))
    };

    // 반복되는 게시물 이미지
    const postImages = [
        Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9
    ];

    // 반복되는 유저 이미지
    const postTitleImages = [
        Post1User, Post2user, Post3User, Post4User, Post5User, Post6User, Post7User, Post8User, Post9User,
    ];

    // 반복되는 피드
    const posts = Array(9).fill().map((_, index) => ({
        PostTitle : '게시물 제목',
        UserNickname : '유저 닉네임',
        PostImage : postImages[index % postImages.length],
        PostTitleImage : postTitleImages[index % postImages.length],
        Scrap : '스크랩24',
        likes : '좋아요80',
        comment : '댓글604',
        view : '조회수713',
    }));
    
    return (
        <S.CommunityContainer>
            <S.CommunityTitle>COMMUNITY</S.CommunityTitle>
            <S.CommunitySubTitle>지속 가능한 세상을 함께 만들어가는 공간</S.CommunitySubTitle>

            {/* 슬라이드 토글 기능 */}
            <S.CommunityToggle>
                <S.toggleText1 onClick={handleToggle}
                    style={{ color: isFollow ? "#8D8D8D" : "#333",
                        transition: "color 1s"}}>
                    ALL
                </S.toggleText1>
                <S.toggleText1 onClick={handleToggle}
                style={{ color: isFollow ? "#8D8D8D" : "#333",
                    transition: "color 1s"}}>
                    FOLLOW
                </S.toggleText1>
                <S.toggleButtonAll 
                onClick={handleToggle} 
                    // style={{ transform: isFollow ? "translateX(170px)" : "translate(0)"}}>
                    style={{ transform: isFollow ? "translateX(0)" : "translate(170px)"}}>
                    <S.textnToggle onClick={handleToggle}>
                        <div onClick={handleToggle}>{text}</div>
                    </S.textnToggle>
                </S.toggleButtonAll>
            </S.CommunityToggle>

            <S.mainWrapper>
                <S.totalNum>전체 13,429</S.totalNum>
                <S.tagButton>
                    <div>좋아요순</div>
                    <div>최신순</div>
                    <div>댓글많은순</div>
                    <div>조회수순</div>
                    <div>스크랩순</div>
                </S.tagButton>

                <S.FeedBox>
                    {/* 반복되는 코드 줄임 */}
                    {posts.map((post, index) => (
                        <S.Feed1>
                            <S.PostImage>
                                <img src={post.PostImage} alt={`게시물${index + 1}`}/>
                                <S.type>
                                    <img src={scrapBtTypeIn} alt='저장버튼'/>
                                </S.type>
                            </S.PostImage>
                            <S.PostUser>
                                <S.PostUserImage>
                                    <img src={post.PostTitleImage} alt={`게시물유저1${index + 1}`}/>
                                </S.PostUserImage>
                                <S.PostUserName>{post.UserNickname}</S.PostUserName>
                            </S.PostUser>
                            <S.PostTitle>{post.PostTitle}{index + 1}</S.PostTitle>
                            <S.FeedTags>
                                <S.FeedFilter>스크랩24</S.FeedFilter>
                                <S.FeedFilter>·</S.FeedFilter>
                                <S.FeedFilter>좋아요80</S.FeedFilter>
                                <S.FeedFilter>·</S.FeedFilter>
                                <S.FeedFilter>댓글604</S.FeedFilter>
                                <S.FeedFilter>·</S.FeedFilter>
                                <S.FeedFilter>조회수713</S.FeedFilter>
                            </S.FeedTags>
                        </S.Feed1>
                    ))};
                </S.FeedBox>
            </S.mainWrapper>
        </S.CommunityContainer>
    );
};

export default CommunityFollow;