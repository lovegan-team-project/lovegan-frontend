import styled from "styled-components";

const S = {};

S.Container = styled.div`
    width: 1420px;
    height: 1200px;
    margin: 0 auto;
    padding-top: 85px;
`

S.Wrapper = styled.div`
    width: 857px;
    display: flex;
    gap: 123px;

    & .tabMenu{

        & h1{
            font-size: ${({theme})=> theme.FONT_SIZE["h3"]};
            font-weight: bold;
            color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
            margin-bottom: 42px;
            width: 200px;
        }
    }
`
S.TabButtonContainer = styled.li`
    & button.active{
        color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    }

    & .navlink{
        width: 200px;
        height: 55px;
        display: block;
        line-height: 50px;
        text-align: left;
        color: ${({theme})=> theme.PALLETTE.grey["7"]};
        background: none;
        font-size: ${({theme})=> theme.FONT_SIZE["subtitle"]};
        font-weight: bold;
        border: 1px solid ${({theme})=> theme.PALLETTE.grey["7"]};
        border-radius: 0%;
        border-left: none;
        border-right: none;
        cursor: pointer;
    }

    & .active{
        color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    }
`;

// S.TabButton = styled.button`
//     width: 197px;
//     height: 55px;
//     line-height: 50px;
//     text-align: left;
//     color: ${({theme})=> theme.PALLETTE.grey["7"]};
//     background: none;
//     font-size: ${({theme})=> theme.FONT_SIZE["subtitle"]};
//     font-weight: bold;
//     border: 1px solid ${({theme})=> theme.PALLETTE.grey["7"]};
//     border-radius: 0%;
//     border-left: none;
//     border-right: none;
//     cursor: pointer;

//     & :active{
//         height: 900px;
//     }
// `;

S.Wrap = styled.div`
    width:857px;
    /* border:1px solid red; */
`

S.Div= styled.div`
    display: flex;
    gap:16px;
`

S.H2 = styled.h2`
    font-size: ${({theme})=> theme.FONT_SIZE["h4"]};
    font-weight: bold;
    color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
`

S.P = styled.p`
    font-size: ${({theme})=> theme.FONT_SIZE["paragraph"]};
    font-weight: bold;
    color: ${({theme})=> theme.PALLETTE.grey["7"]};
    line-height: 30px;
`

S.T_wrapper = styled.div`
    margin-top:38px;
    border-left:none;
    border-right:none;
    


    & table{
        width: 100%;
        border-spacing: 50px;

        & thead{
            & tr:first-child{
            border-top: 2px solid #333333;
            & td{
                font-weight: bold;
            }
        }
        }

        & tbody{
            & tr > td:nth-child(1){
               color: #999999;
            }

            & tr > td:nth-child(4){
               color: #999999;
            }
        }

        & tr{
            border: 1px solid #999999;
            border-left: none;
            border-right: none;
            height: 54px;
            line-height: 54px;

            & a{
                color: #333333;
            }
        }
    }
`

S.faqDiv = styled.div`
    .answer {
        padding-top: 10px;
        color: #555;
        font-size: 0.9em;

        /* 초기 상태: 숨김 처리 */
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition: max-height 0.3s ease, opacity 0.3s ease;
    }

    &.active .answer {
        /* 활성화 상태: 콘텐츠 표시 */
        max-height: 200px; /* 충분히 큰 값으로 설정 */
        opacity: 1;
    }
`

// /* Arrow style */
S.A_Div = styled.div`
    width: 300px;
    height: 300px;
    /* border: 1px solid #333; */
    margin: 0 auto;
    text-align: center;
    padding-top: 20px;

`

// S.A_Button = styled.div`
//     & button {
//         background: none;
//         font-size: 15px;
//         color: ${({theme})=> theme.PALLETTE.brand["primary"]};
//         cursor: pointer;
        
//         /* & .active {
//             background: #333333;
//             width: 23px;
//             height: 23px;
//             line-height: 23px;
//             border-radius: 50%;
//             text-align: center;
//         } */
//     }
// `

S.nextPage = styled.div`
    margin-top: 40px;

    & p {
        font-size: ${({theme}) => theme.FONT_SIZE["paragraph"]};
        width: 22px;
        height: 22px;
        line-height: 1.5;

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
        color: #fff;
            width: 22px;
            height: 22px;
    }

    & button.unClick {
        padding: 0px;
        background-color: white;
        outline: none;   
    }
`

// button
S.C_Button = styled.button`
    width: 126px;
    height: 38px;
    border: 1px solid ${({theme})=> theme.PALLETTE.brand["primary"]};
    background: none;
    color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    font-size: 14px;
    margin-left: 405px;
    &:hover{
        background-color: ${({theme})=> theme.PALLETTE.brand["primary"]} ;
        color: #fff;
    }
    cursor: pointer;

`

// notice(공지사항) 페이지
S.NoticeWrapper = styled.div`
    width: 1420px;
    /* border: 1px solid #333333; */
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 240px;
    text-align: center;

    &.noticeForm{
        padding-bottom: 1500px;
    }

    & h1{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 26px;
    }

    & p{
        font-size: 14px;
        font-weight: bold;
        color: #999999;
    }
`

S.NTable = styled.table`
    /* border: 1px solid #333333; */
    margin-top: 26px;
    width: 100%;
    text-align: left;
    font-size: 16px;
`

S.NTbody = styled.tbody`

    & > tr:first-child td{
        border-top: 2px solid #333333;
    }
    
    & > tr:last-child td{
        background-color: #ffffff;
        font-weight: normal;
        height: 600px;
        border-bottom: 1px solid #333333;
    }
`

S.NTr = styled.tr`
    /* border: 1px solid red; */
    height: 55px;
    line-height: 55px;
    left: 28px;

    & > td:first-child{
        width: 131px;
        background-color: #E6F6E8;
        font-weight: bold;
    }

    & .confirmMessage{
        color: #F25050;
        font-size: 12px;
    }
`

S.NTd = styled.td`
    border: 1px solid #999999;
    border-right: none;
    border-left: none;
    padding-left: 28px;

    /* &.update_contents{
        width: 100%;
        height: 550px;
        margin-top: 20px;
        margin-left: -10px;
        padding: 10px;
        border: none;
    } */
    
`
S.BDiv = styled.div`
    text-align: right;

    & a{
        color: #fff;
        cursor: pointer;
    }

    /* registerComplete 수정.삭제 버튼 */
    & .modi, .del{
        color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        border: 1px solid ${({theme})=> theme.PALLETTE.brand["primary"]};
        background-color: #fff;
    }

    & .modi:hover{
        background-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        color: #fff;
    }

    & .del{
        color: #F27830;
        border: 1px solid #F27830;
    }

    & .del:hover{
        background-color: #F27830;
        color: #fff; 
    }
`

S.NButton = styled.button`
    width: 126px;
    height: 38px;
    color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    background-color: #fff;
    border: 1px solid ${({theme})=> theme.PALLETTE.brand["primary"]};
    border-radius: 10px;
    font-size: 14px;
    margin-top: 54px;
    cursor: pointer;

    &:hover{
        background-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        color: #fff;
    }
`



export default S;