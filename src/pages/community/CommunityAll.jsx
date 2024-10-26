import React, { useState } from 'react';
// import CheckboxBt from '../../componenet/checkbox/CheckboxBt';
// import Radio from '../../componenet/radioButton/Radio';
// import Dropdown from '../../componenet/dropdown/Dropdown';
// import theme from '../../global/theme';
import S from './style';
import Post1 from './image/Post1.svg';
import Post2 from './image/Post2.svg';
import Post3 from './image/Post3.svg';
import Post4 from './image/Post4.svg';
import Post5 from './image/Post5.svg';
import Post6 from './image/Post6.svg';
import Post7 from './image/Post7.svg';
import Post8 from './image/Post8.svg';
import Post9 from './image/Post9.svg';
// import Post1User from './image/Post1User.svg';
// import Post2user from './image/Post2User.svg';
// import Post3User from './image/Post3User.svg';
// import Post4User from './image/Post4User.svg';
// import Post5User from './image/Post5User.svg';
// import Post6User from './image/Post6User.svg';
// import Post7User from './image/Post7User.svg';
// import Post8User from './image/Post8User.svg';
// import Post9User from './image/Post9User.svg';
import like from './image/like.svg';
import scrap from './image/scrap.svg';
import comment_one from './image/comment_one.svg';

const CommunityAll = () => {

    // 토글 버튼 상태 변경 시
    const [isFollow, setIsFollow] = useState(false);
    const [text, setText] = useState("ALL");

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
        setText(prevText => (prevText === "ALL" ? "FOLLOW" : "ALL"))
    };

    const postImages = [
        Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9,
    ]

    const posts = Array(9).fill().map((_, index) => ({
        UserNickname: '유저 닉네임',
        Introduce: '한 줄 소개',
        PostImage: postImages[index % postImages.length],
        postTitle: '게시물 제목',
        likes: 136,
        views : '조회수 6,841'
    }));
    
    return (
        <S.CommunityContainer>
            <S.CommunityTitle>COMMUNITY</S.CommunityTitle>
            <S.CommunitySubTitle>지속 가능한 세상을 함께 만들어가는 공간</S.CommunitySubTitle>

            <S.CommunityToggle>
                <S.toggleText1 onClick={handleToggle}>
                    ALL
                </S.toggleText1>
                <S.toggleText1 onClick={handleToggle}>
                    FOLLOW
                </S.toggleText1>
                <S.toggleButtonAll 
                    onClick={handleToggle} 
                    style={{ transform: isFollow ? "translateX(170px)" : "translate(0)"}}>
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
                    {/* 반복되는 코드 -> 반복문 돌림 */}
                    {posts.map((post, index) => (
                    <S.Feed1 key={index}>
                        <S.PostUser1>
                            <S.PostUserImage1 />
                            <S.PostUserName>
                                <S.UserNickname>
                                    {post.UserNickname}
                                </S.UserNickname>
                                <span>·</span>
                                <S.FollowUser>팔로우</S.FollowUser>
                                <S.Introduce>{post.Introduce}</S.Introduce>
                            </S.PostUserName>
                        </S.PostUser1>
                        <S.PostImage>
                            <img src={post.PostImage} alt={`게시물${index + 1}`}/>
                            <div>{post.views}</div>
                        </S.PostImage>
                        <S.PostTitleCenter>{post.postTitle}{index + 1}</S.PostTitleCenter>
                        <S.FeedOption>
                            <img src={like} alt='좋아요'/>
                            <div>{post.likes}</div>
                            <img src={scrap} alt='스크랩'/>
                            <div>{post.likes}</div>
                            <img src={comment_one} alt='댓글'/>
                            <div>{post.likes}</div>
                        </S.FeedOption>
                    </S.Feed1>
                    ))};
                </S.FeedBox>
            </S.mainWrapper>
        </S.CommunityContainer>
    );
};

export default CommunityAll;   