import styled, { keyframes } from "styled-components";
import theme from "../../global/theme";
import { ReactComponent as like } from './image/like.svg';
import { ReactComponent as scrap } from './image/scrap.svg';
import { ReactComponent as scrapBlack } from './image/scrapBlack.svg';
import { flexCenter, flexCenterColumn, flexCenterRow } from "../../global/common";

// 토글 슬라이드
const slideln = keyframes`
    from {
        transform: translateX(0);
    } to {
        transform: translateX(170px);
    }
`

// AllDt 팔로우 버튼 클릭, 호버 색 변경
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
// FollowDt 팔로우 버튼 클릭, 호버 색 변경
export const FollowButton_1 = styled.button`
    background-color: ${(props) => props.color || '#fafafa'};
    color : ${(props) => props.text || '#333'};
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
    width: fit-content;
    height: fit-content;
    fill: ${(props) => props.color === '#fff' ? '#fff' : '#F27830'};
    stroke: ${(props) => props.stroke === '#8D8D8D' ? '#8D8D8D' : '#F27830'};

    &:hover path{
        fill: ${(props) => props.color === "#fff" ? "#F27830" : "#D8590E"};
        stroke: ${(props) => props.stroke === '#8D8D8D' ? '#F27830' : '#D8590E'};
    }
`

// 작은 like 버튼
export const LikeButtonMin = styled(like)`
    cursor: pointer;
    width: 18px;
    height: 18px;
    margin-right: 4px;
    fill: ${(props) => props.color === "#fff" ? "#fff" : "#F27830"};
    stroke: ${(props) => props.stroke === '#333' ? '#333' : '#F27830'};

    &:hover path{
        fill: ${(props) => props.color === "#fff" ? "#fff" : "#D8590E"};
        stroke: ${(props) => props.stroke === '#333' ? '#939393' : '#D8590E'};
    }
`

// scrap 버튼
export const ScrapButton = styled(scrap)`
    cursor: pointer;
    fill: ${(props) => props.color === '#fff' ? '#fff' : '#F27830'};
    stroke: ${(props) => props.stroke === '#8D8D8D' ? '#8D8D8D' : '#F27830'};

    &:hover path{
    fill: ${(props) => props.color === "#fff" ? "#F27830" : "#D8590E"};
    stroke: ${(props) => props.stroke === '#8D8D8D' ? '#F27830' : '#D8590E'};
    }
`

export const LikeButtonCmAll = styled(like)`
    cursor: pointer;
    fill: ${(props) => props.color === "#fff" ? "#fff" : "#F27830"};
    stroke: ${(props) => props.stroke === '#333' ? '#333' : '#F27830'};

    &:hover path{
    fill: ${(props) => props.color === "#fff" ? "#fff" : "#D8590E"};
    stroke: ${(props) => props.stroke === '#333' ? '#939393' : '#D8590E'};
    }
`

export const ScrapButtonBlack = styled(scrapBlack)`
    cursor: pointer;
    fill: ${(props) => props.color === "#fff" ? "#fff" : "#F27830"};
    stroke: ${(props) => props.stroke === '#333' ? '#333' : '#F27830'};
    
    &:hover path{
    fill: ${(props) => props.color === "#fff" ? "#fff" : "#D8590E"};
    stroke: ${(props) => props.stroke === '#333' ? '#939393' : '#D8590E'};
    }
`

export const ScrapButtonCmAll = styled(scrap)`
    cursor: pointer;
    fill: ${(porps) => porps.color === '#fff' ? "#fff" : "#F27830"};
    fill-opacity: ${(props) => props.opacity === true ? 0.5 : 1};
    stroke: ${(props) => props.stroke === '#fff' ? '#fff' : '#F27830'};
    
    &:hover path{
    fill: ${(props) => props.color === '#fff' ? '#fff' : '#D8590E'};
    fill-opacity: ${(props) => props.opacity === true ? 0.5 : 1};
    /* fill-opacity: ${(props) => props.opacity === '#fff' || 0.5}; */
    stroke: ${(props) => props.color === '#fff' ? '#fff' : '#D8590E'};
    }
`

const S = {};

S.CommunityContainer = styled.div`
`

S.CommunityTitle = styled.div`
    width: 220px;
    height: 45px;
    margin: 60px 849px 12px 851px;
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE["h2"]};
    font-weight: bold;
`

S.CommunitySubTitle = styled.div`
    margin: 0 758px 28px 759px;
    width: 403px;
    height: 30px;
    font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
    text-align: center;
`

S.CommunityToggle = styled.div`
    width: 340px;
    height: 55px;
    background-color: #E6E6E6;
    border-radius: 50px;
    margin: 0 790px 40px 790px;
    position: relative;
    display: flex;
    align-items: center;
`
S.ToggleComponent = styled.span`
    flex: 1;
    text-align: center;
    font-size: 16px;
    color: ${({ isActive }) => (isActive ? theme.PALLETTE.brand["primary_black"] : theme.PALLETTE.grey["8"])}; 
    z-index: 2;
    cursor: pointer;
`

S.ToggleButton = styled.div`
    position: absolute;
    left: ${({ position }) => position};
    width : 160px;
    height: 45px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: left 0.5s ease;
    z-index: 1;
`

S.mainWrapper = styled.div`
    width: 1320px;
    margin: 0 300px;

    & .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
    }    
`

S.totalNum = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};
    width: 85px;
    height: 20px;
    ${flexCenter}
`

S.tagButton = styled.div`
    display: flex;
    justify-content: space-between;
    width: 340px;
    height: 18px;

     & button.click {
        padding: 0px;
        background-color: white;
        font-size: 14px;
        outline: none;
        font: ${({theme}) => theme.FONT_WEIGHT["bold"]};
        cursor: pointer;
     }
     & button.unClick {
        padding: 0px;
        background-color: white;
        font-size: 14px;
        outline: none;
        cursor: pointer;

        & p{
            font-size: 14px;
            color: #8D8D8D;
        }
     }
`

S.FeedBoxAll = styled.div`
    width: 1320px; 
    height: 1563px;
    display: inline-block;
`

S.FeedBoxFollow = styled.div`
    width: 1320px; 
    height: 1467px;
    display: inline-block;
`

S.Feed1 = styled.div`
    width: 420px;
    height: 394px;
    margin: 0 0 120px 0;
    display: flex;
`

S.Feed2 = styled.div`
    width: 420px;
    height: 394px;
    margin: 0 0 60px 0;
    display: flex;
`

S.PostImage = styled.div`
    width: 420px;
    height: 300px;
    margin: 0 30px 12px 0;
    background-color: #d9d9d9;
    border-radius: 6px;
    position: relative;
    /* cursor: pointer; */
`

S.Views = styled.p`
        position: absolute;
        top: 268px;
        left: 326px;
        width: 78px;
        height: 18px;
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        color: #fff;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`

S.type = styled.p`
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
    /* display: flex; */
    display: ${flexCenter};
    margin: 12px 162px 10px 161px;
`

S.PostTitleLeft = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["title"]};
     margin-bottom: 8px;
     width: fit-content;
     /* cursor: pointer; */
`

S.PostUser = styled.div`
    display: flex;
    align-items: center;
    width: 96px;
    height: 20px;
    margin: 0 0 11px 0;
`

S.PostUser1 = styled.div`
    width: 1320px;
    height: 449px;
    margin-bottom: 60px;
    /* margin-top: 60px; */
`

S.PostUserImage = styled.div`
    width: 20px;
    height: 20px;
    margin: 0 8px 0 0;
    background-color: #fff;
    border-radius: 50px;
    float: left;
`

S.text = styled.div`
    /* margin-right: 261px; */
    display: flex;
    width: 100%;
    margin-bottom: 18px;
`

S.text2 = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 12px;
`

S.TextInfo = styled.div`
    display: flex;
    height: fit-content;
    /* 커뮤니티all 페이지에서 적용되면 안됨. */
    /* align-items: center; */

    & .profileUserName{
        align-items: center;
    }
`

S.PostUserImage1 = styled.div`
    width: 36px;
    height: 36px;
    margin: 0 8px 0 0;
    background-color: #d9d9d9;
    border-radius: 50px;
    display: flex;
`

S.Profile = styled.div`
    width: 20px;
    height: 20px;
    margin: 1px 8px 1px 0;
    background-color: #d9d9d9;
    border-radius: 50px;
    display: flex;
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
`

S.PostUserName2 = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
    margin: 1px 0 1px 0px;
    display: flex;
    align-items: center;
`

S.UserIntro = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 21px 0 1px 0;
    font-size: ${({theme}) => theme.FONT_SIZE["small"]};
    color: ${({theme}) => theme.PALLETTE.grey[8]};
    position: absolute;
`

S.UserNickname = styled.span`
    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
    height: 18px;
    margin-top: 1px;
`

S.FollowUser = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
    margin: 1px 0 1px 0px;
    position: relative;
    cursor: pointer;

    & p{
        color: ${({theme}) => theme.PALLETTE.brand["primary"]};         
    }
`

S.Introduce = styled.div`
    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
    color: ${({theme}) => theme.PALLETTE.grey[8]};
    margin: 4px 0 0 12px;
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
    width: fit-content;
    height: 48px;
    margin: 0 33px;
    padding: 0 0 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    & div {
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        display: flex;
        align-items: center;
        width: 26px; 
        height: 18px;
        margin: 11px 60px 11px 4px;
    }
`

S.FeedFilter = styled.p`
    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
    color: ${({theme}) => theme.PALLETTE.grey[8]};
    margin: 0 8px 0 0;
`

S.PostWrapper = styled.div`
    width: 720px;
    margin: 0 600px 122px 600px;
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
    
    /* & div {
        margin-left: 12px;
    } */
    
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

S.UserNickPost = styled.div`
    height: 20px;
    margin: 7px 0 4px 12px;
    font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};     
`

// S.Introduce = styled.p`
//     width: 87px;
//     height: 18px;
//     margin-top: 4px;
//     font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
//     `
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
        /* cursor: pointer; */
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
    margin-bottom: 10px;
    
    & input {
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        width: 662px;
        height: 42px;
        border-style: solid;
        border-width: 1px;
        margin-left: 16px;
        padding: 12px 50px 12px 16px;
        color: ${({theme}) => theme.PALLETTE.grey[8]};
        border-radius: 5px;
    }

    /* 댓글 스타일 추가 부분 */
    .submitBt {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        background: none;
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        color: ${({theme}) => theme.PALLETTE.brand["primary"]};
        cursor: pointer;
    }
`

S.replyTyping = styled.div`
    /* display: flex;
    align-items: center;
    justify-content: flex-end; */
    position: relative;
    margin-bottom: 10px;
    margin-left: 50px;
    width: 670px;
    
    .reply-div {

        .reply-form {
            
        }

        .reply-input {
            font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
            width: 612px;
            height: 42px;
            border-style: solid;
            border-width: 1px;
            margin-left: 16px;
            padding: 12px 50px 12px 16px;
            color: ${({theme}) => theme.PALLETTE.grey[8]};
            border-radius: 5px;
        }
    
        .reply-submit {
            position: absolute;
            top: 50%;
            right: 5px;
            transform: translateY(-50%);
            background: none;
            font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
            color: ${({theme}) => theme.PALLETTE.brand["primary"]};
            cursor: pointer;
        }
    }
`

S.Recomment = styled.div`
    margin: 40px 0 40px 0;
`
S.RecommentBox = styled.div`
    display: flex;
    margin-top: 30px;
    font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};
    

    & img {
        margin-right: 8px;
        position: relative;
        height: fit-content;
    }
    
    & .detail {
        margin: 10px 0 10px 0;
    }
`

// S.InputComment = styled.div`
//     position: relative;
//     display: flex;
//     width: 670px;
//     margin-left: 50px;
//     margin-top: 20px;
//     padding: 20px 0 16px;
//     justify-content: flex-end;
//     align-items: center;
//     /* background-color: ${({theme}) => theme.PALLETTE.grey[0]}; */

//     & img {
//         margin-right: 16px;
//     }
    
//     & input {
//         width: 612px;
//         height: 42px;
//         border-style: solid;
//         border-width: 1px;
//         padding: 12px 50px 12px 16px;
//         font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
//         color: ${({theme}) => theme.PALLETTE.grey[8]};
//         border-radius: 5px;
//     }

//     & button {
//         position: absolute;
//         border: none;
//         background: none;
//         font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
//         color: ${({theme}) => theme.PALLETTE.brand["primary"]};
//         cursor: pointer;
//     }
// `

export const ReplyTexts = styled.div`
    width: 550px;
`

// S.Recomment1 = styled.div`
//     width: 670px;
//     margin-top: 20px;
//     margin-left: 50px;
//     padding: 20px 16px;
//     display: flex;
//     background-color: ${({theme}) => theme.PALLETTE.grey[0]};

//     & .userInfo {
//         margin-left: 8px;
//     }

//     & .userInfoIn {
//         display: flex;
//     }

//     & .writeComment {
//         margin: 10px 4px 0 0;
//         font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
//     }

//     & img {
//         height: fit-content;
//     }

//     & input {
//         width: 612px;
//         height: 42px;
//         border-style: solid;
//         border-width: 1px;
//         padding: 12px 16px;
//         font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
//         color: ${({theme}) => theme.PALLETTE.grey[8]};
//         border-radius: 5px;
//     }

//     & button {
//         position: absolute;
//         border: none;
//         background: none;
//         font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
//         color: ${({theme}) => theme.PALLETTE.brand["primary"]};
//         cursor: pointer;
//     }
// `

// S.goolbang = styled.div`
//     /* display: flex; */
//     font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
//     color: ${({theme}) => theme.PALLETTE.brand["primary"]};
//     margin: 10px 4px 0 0;
//     float: left;
// `

S.CommentListStyle = styled.ul`
    width: 670px;
    height: 100%;
    margin-top: 40px;
    
    .comment-row {
        margin-bottom: 30px;

        .comment-row-user{
            display: flex;
            margin-bottom: 10px;

            .userImg {
                width: fit-content;
                height: fit-content;
            }

            .comment-row-user-between{
                margin-left: 8px;
                .comment-content {
                    font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
                }
            }
        }
    }    
    .comment-id {
        font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};
        margin-bottom: 10px;
    }

    .reply {
        margin-bottom: 30px;
    }

    .reply-outline {
        width: 620px;
        margin-left: 50px;

        .reply-form {
            width: 620px;
            .box {
                
            }
            .int{
                
            }
            .userpf{
                margin-left: 50px;
            }
        }
    }

    .replies {
        width: 100%;
        margin-left: 50px;
        margin-bottom: 30px;
        padding: 20px 16px 10px 16px;
        border-radius: 5px;
        background-color: ${({theme}) => theme.PALLETTE.grey[0]};

        .comment-row-reply-row{
            /* margin-bottom: 10px; */
        }

        .comment-row-user1{
            display: flex;
            /* margin-top: 10px; */
            margin-bottom: 10px;

            .comment-row-user-between{
                margin-left: 8px;
            }
        }
    }

    .dtInfo_1 {
        margin-bottom: 10px;
    }
`

S.dtInfo_1 = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.PALLETTE.grey[8]};
    position: relative;
    margin-bottom: 20px;
    margin-left: 50px;
 
    .comment-date {
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
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

S.nextPage = styled.div`
    ${flexCenter}
    margin-top: 40px;

    & p {
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        width: 22px;
        height: 22px;

        &:hover {
            color: #03A63C;
        }
    }
        
    & button {
        margin: 0 8px 0 8px;
    }

    & button.click {
        padding: 0px;
        outline: none;
        background-color: #03A63C;
        width: 22px;
        height: 22px;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;

        & p{
            color: #fff;
            width: 22px;
            height: 22px;
        }
    }

    & button.unClick {
        padding: 0px;
        background-color: white;
        outline: none;   
        cursor: pointer;
    }
`

export default S;
