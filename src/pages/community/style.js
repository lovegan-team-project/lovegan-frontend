import styled, { keyframes } from "styled-components";
import { ReactComponent as like } from './image/like.svg';
import { ReactComponent as scrap } from './image/scrap.svg';

// 토글 슬라이드
const slideln = keyframes`
    from {
        transform: translateX(0);
    } to {
        transform: translateX(170px);
    }
`
// 팔로우 버튼 클릭, 호버 색 변경
export const FollowButton = styled.button`
    background-color: ${(props) => props.color || '#03A63C'};
    color : ${(props) => props.text || '#fff'};
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.1s ease;

    &:hover {
        background-color: #039636;
        color: #fff;
    }
`

// like 버튼
export const LikeButton = styled(like)`
    cursor: pointer;

    fill: ${(props) => props.color || '#D8590E'};

    &:hover path{
        background-color: #D8590E;
        stroke: ${(props) => props.stroke === '#333' ? '#D8590E' : '#D8590E'};
    }
`
// 작은 like 버튼
export const LikeButtonMin = styled(like)`
    cursor: pointer;
    width: 18px;
    height: 18px;
    margin-right: 4px;

    fill: ${(props) => props.color || '#D8590E'};

    &:hover path{
        background-color: #D8590E;
        stroke: ${(props) => props.stroke === '#333' ? '#D8590E' : '#D8590E'};
    }
`

// scrap 버튼
export const ScrapButton = styled(scrap)`
    cursor: pointer;
    width: 30px;
    height: 30px;

    fill: ${(props) => props.color || '#D8590E'};

    &:hover path{
        background-color: #D8590E;
        stroke: ${(props) => props.stroke === '#333' ? '#D8590E' : '#D8590E'};
    }
`

const S = {};

S.CommunityContainer = styled.div`

`

S.CommunityTitle = styled.div`
    width: 175px;
    height: 45px;
    margin: 60px 873px 12px 820px;
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE["h2"]};
    font-weight: bold;
`

S.CommunitySubTitle = styled.div`
    margin: 0 670px 28px 675px;
    width: 500px;
    height: 45px;
    font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
    text-align: center;
`

S.CommunityToggle = styled.div`
    display: flex;
    align-items: center;
    width: 340px;
    height: 55px;
    background-color: #E6E6E6;
    border-radius: 50px;
    margin: 0 790px 40px 760px;
    padding: 5px;
`

S.textnToggle = styled.div`
    height: 20px;
    font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};
    font-weight: ${({theme}) => theme.FONT_WEIGHT["medium "]};
    display: flex;
    align-items: center;
`

S.toggleText1 = styled.div`
    width: 160px;
    height: 45px;
    margin: 0 10px 0 0;
    background-color: #E6E6E6;
    border-radius: 50px;
    font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};
    font-weight: ${({theme}) => theme.FONT_WEIGHT["medium "]};
    color: #8d8d8d;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

S.toggleButtonAll = styled.div`
    width: 160px;
    height: 45px;
    padding: 12.5px 0 12.5px 0;
    border: 1px solid #333333;
    border-radius: 50px;
    background: #fff;
    font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};
    font-weight: ${({theme}) => theme.FONT_WEIGHT["medium "]};
    transition: color 0.3s ease;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: absolute;
    transition: transform 0.3s;

    &.slide {
        animation: ${slideln} 0.3s forwards;
    }
`

S.mainWrapper = styled.div`
    /* background-color: lightgray; */
    width: 1320px;
    margin: 0 300px;
`

S.totalNum = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};
    width: 85px;
    height: 20px;
    float: left;
    margin: 0 0 40px 0;
`

S.tagButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 380px;
    /* float: right; */
    margin: 0 0 40px 933px;
    padding-right: 0 20px 0 0;
    height: 18px;
    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};

    & div {
        margin-left: 20px;        
    }
`

S.FeedBox = styled.div`
    max-width: 1320px; 
    max-height: 1320px;
    display: grid; /* Grid 사용 */
    grid-template-columns: repeat(3, 420px); /* 3개의 열 생성 */
    gap: 30px; /* 요소 간의 간격 */
    justify-content: end;
`

S.Feed1 = styled.div`
    width: 420px;
    height: 394px;
    margin: 0 0 60px 0;
`

S.PostImage = styled.div`
    width: 420px;
    height: 300px;
    margin: 0 30px 12px 0;
    background-color: #fff;
    border-radius: 6px;
    position: relative;

    & div {
        position: absolute;
        top: 268px;
        left: 326px;
        width: 78px;
        height: 18px;
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        color: #fff;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
`

S.type = styled.p`
    /* background-color: red; */
    position: absolute;
    top: 238px;
    left: 356px;
`

S.PostTitle = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["title"]};
    margin: 0 0 8px 0;
`

S.PostTitleCenter = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["title"]};
    display: flex;
    justify-content: center;
    margin: 12px 0 10px 0;
`

S.PostUser = styled.div`
    display: flex;
    align-items: center;
    width: 96px;
    height: 20px;
    margin: 0 0 11px 0;
`

S.PostUser1 = styled.div`
    width: 159px;
    height: 36px;
    display: flex;
    margin: 0 0 18px 0;
`

S.PostUserImage = styled.div`
    width: 20px;
    height: 20px;
    margin: 0 8px 0 0;
    background-color: #fff;
    border-radius: 50px;
    float: left;
`

S.PostUserImage1 = styled.div`
    width: 36px;
    height: 36px;
    margin: 0 8px 0 0;
    background-color: #d9d9d9;
    border-radius: 50px;
`

S.PostUserImage2 = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background-color: #d9d9d9;
`

S.PostUserName = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
    margin: 1px 0 1px 0px;
    /* align-items: ; */
`

S.UserNickname = styled.span`
    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
    height: 18px;
    margin-top: 1px;
`

S.FollowUser = styled.span`
    color: ${({theme}) => theme.PALLETTE.brand["primary"]};
`

S.Introduce = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["small"]};
    color: ${({theme}) => theme.PALLETTE.grey[8]};
    margin: 6px 0 0 0;
    width: 50px;
    height: 15px;

`

S.FeedTags = styled.div`
    display: flex;
    align-items: center;
    width: 305px;
    height: 18px;
    background-color: #fff;
`

S.FeedOption = styled.div`
    width: 354px;
    height: 48px;
    margin: 0 33px 0 33px;
    padding: 0 0 8px 0;
    display: flex;
    justify-content: center;

    & div {
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        display: flex;
        align-items: center;
        width: 26px; 
        height: 18px;
        margin: 11px 8px 19px 4px;
    }
`

S.FeedFilter = styled.p`
    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
    color: ${({theme}) => theme.PALLETTE.grey[8]};
    margin: 0 8px 0 0;
`

S.PostWrapper = styled.div`
    width: 720px;
    margin: 0 600px 0 600px;
    color: ${({theme}) => theme.PALLETTE.brand["primary_black"]};
    position: relative;

    & hr {
        margin: 20px 0 40px 0;
        color: ${({theme}) => theme.PALLETTE.grey[2]};
    }

    & p {
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
    }
`


S.HeadLine = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["h2"]};
    width: 720px;
    margin: 70px 0 20px 0;
`

S.sideBar = styled.div`
    left: 780px;
    top: 0px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;

    & p {
        display: flex;
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        color: ${({theme}) => theme.PALLETTE.grey[8]};
        margin: 4px 0 20px 0;
    }

    & hr {
        color: ${({theme}) => theme.PALLETTE.grey[2]};
        width: 60px;
    }
`

S.sideC = styled.div`
    border: 1px solid ${({theme}) => theme.PALLETTE.grey[3]};
    border-radius: 50px;
    width: 60px;
    height: 60px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 30px;
        height: 30px;
    }
`

S.UserInfo = styled.div`
    display: flex;
    align-items: center;
    
    & div {
        margin-left: 12px;
    }
    
    & button { 
        margin-left: auto;
        width: 80px;
        height: 40px;
        border: none;
        border-radius: 5px;
        font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};     
    }
    `

S.UserImage = styled.p`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background-color: #d9d9d9;
    `

S.UserNickPost = styled.p`
    /* width: 78px; */
    height: 20px;
    margin-bottom: 4px;
    font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};     
    `

S.Introduce = styled.p`
    /* width: 87px; */
    height: 18px;
    margin-top: 4px;
    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
    `
S.dtImg = styled.div`
    margin-top: 30px;

    & img {
        margin: 10px 0 30px 0;
    }
`

S.dtInfo = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.PALLETTE.grey[8]};
    position: relative;
    /* cursor: pointer; */

    & div {
        display: flex;
        margin-left: auto;
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        color: ${({theme}) => theme.PALLETTE.grey[8]};
    }

    & span {
        margin: 0 8px 0 8px;
    }
    
    & img {
        position: absolute;
        width: 18px;
        height: 18px;
    }

    & p {
        cursor: pointer;
        display: block;
        justify-content: end;
    }

`

S.commentNum = styled.div`
    display: flex;
    margin: 40px 0 20px 0;
    font-size: ${({theme}) => theme.FONT_SIZE["title"]};

    & div {
        margin-left: 4px;
        color: ${({theme}) => theme.PALLETTE.brand["primary"]};
    }
`

S.typing = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    
    & input {
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        width: 662px;
        height: 42px;
        border-style: solid;
        border-width: 1px;
        margin-left: 16px;
        padding: 12px 16px;
        color: ${({theme}) => theme.PALLETTE.grey[8]};
        border-radius: 5px;
    }

    & button {
        position: absolute;
        border: none;
        background: none;
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        color: ${({theme}) => theme.PALLETTE.brand["primary"]};
        cursor: pointer;
    }
`

S.Recomment = styled.div`
    margin: 40px 0 40px 0;
`
S.RecommentBox = styled.div`
    display: flex;
    margin-bottom: 30px;
    font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};
    
    & img {
        margin-right: 8px;
        position: relative;
        height: fit-content;
    }
    
    & p {
        margin: 10px 0 10px 0;
    }
`

S.InputComment = styled.div`
    position: relative;
    display: flex;
    width: 670px;
    margin-top: 20px;
    padding: 20px 16px;
    justify-content: flex-end;
    align-items: center;
    /* background-color: ${({theme}) => theme.PALLETTE.grey[0]}; */
    
    & input {
        width: 612px;
        height: 42px;
        border-style: solid;
        border-width: 1px;
        padding: 12px 50px 12px 16px;
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        color: ${({theme}) => theme.PALLETTE.grey[8]};
        border-radius: 5px;
    }

    & button {
        position: absolute;
        border: none;
        background: none;
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        color: ${({theme}) => theme.PALLETTE.brand["primary"]};
        cursor: pointer;
    }
`

export const ReplyTexts = styled.div`
    width: 550px;
`

S.Recomment1 = styled.div`
    width: 670px;
    margin-top: 20px;
    padding: 20px 16px;
    display: flex;
    background-color: ${({theme}) => theme.PALLETTE.grey[0]};

    & input {
        width: 612px;
        height: 42px;
        border-style: solid;
        border-width: 1px;
        padding: 12px 16px;
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        color: ${({theme}) => theme.PALLETTE.grey[8]};
        border-radius: 5px;
    }

    & button {
        position: absolute;
        border: none;
        background: none;
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        color: ${({theme}) => theme.PALLETTE.brand["primary"]};
        cursor: pointer;
    }
`

S.goolbang = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
    color: ${({theme}) => theme.PALLETTE.brand["primary"]};
    margin: 10px 4px 0 0;
    float: left;
`

S.nextPage = styled.p`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    align-items: center;
    
    & p {
        padding: 8px;
    }
`

S.Arrow = styled.div`
    width: 0;
    height: 0;
    margin-right: 8px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid ${({theme}) => theme.PALLETTE.grey[8]};
`

S.Arrow1 = styled.div`
    width: 0;
    height: 0;
    margin-left: 8px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid ${({theme}) => theme.PALLETTE.grey[8]};
`

export default S;
