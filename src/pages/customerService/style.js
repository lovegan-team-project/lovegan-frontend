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
    gap: 80px;

    & .tabMenu{

        & h1{
            font-size: ${({theme})=> theme.FONT_SIZE["h3"]};
            font-weight: bold;
            color: ${({theme})=> theme.PALLETTE.brand["primary_black"]};
            margin-bottom: 42px;
        }
    }
`
S.TabButtonContainer = styled.li`
    & button.active{
        color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    }
`;

S.TabButton = styled.button`
    width: 197px;
    height: 55px;
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
`;

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

    & .faqTable{
        & tbody{
            & tr:active{
                height: 300px;
            }
        }
    }

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
        }
    }
`
/* Arrow style */
S.A_Div = styled.div`
    width: 300px;
    height: 300px;
    /* border: 1px solid #333; */
    margin: 0 auto;
    text-align: center;
    padding-top: 67px;

`

S.A_Button = styled.div`
    & button {
        background: none;
        font-size: 15px;
        color: ${({theme})=> theme.PALLETTE.brand["primary"]};
        cursor: pointer;
        
        /* & .active {
            background: #333333;
            width: 23px;
            height: 23px;
            line-height: 23px;
            border-radius: 50%;
            text-align: center;
        } */
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
    & .active{
        background-color: ${({theme})=> theme.PALLETTE.brand["primary"]} ;
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
`

S.NTd = styled.td`
    border: 1px solid #999999;
    border-right: none;
    border-left: none;
    padding-left: 28px;
    
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
`

S.NButton = styled.button`
    width: 126px;
    height: 38px;
    background-color: ${({theme})=> theme.PALLETTE.brand["primary"]};
    border-radius: 10px;
    font-size: 14px;
    color: #fff;
    margin-top: 54px;
    cursor: pointer;
`

export default S;