import styled from "styled-components";

const S ={};

S.noWrapper = styled.div`
    width: 1420px;
    height: 500px;
    padding: 100px 0;
    margin: 0 auto;

    & >h4{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 40px;
        color: #333;
    }
`

S.Wrapper = styled.div`
    width: 1420px;
    height: 2700px;
    padding: 100px 0;
    margin: 0 auto;
    /* border: 1px solid red; */

    & >h4{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 40px;
        color: #333;
    }

    & .line{
        border: 1px solid #cccccc;
        margin: 0;
        margin-top: 90px;
    }
`

S.Title = styled.div`
    margin-top: 74px;
    margin-bottom: 38px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: #333;
    font-weight: bold;

    & > h5 > span{
            color: #F27830;
            margin-left: 5px;
        }

    & > a{
            color: #03A63C;
            font-weight: bold;
        }
`

S.Food = styled.div`
    margin-bottom: 90px;
    & > div:first-child{
        

        
    }
`

// FoodComponent
S.FoodWrap = styled.div`
    & div{ 
        width: 340px;
        height: 240px;
        background-color: #f2f1f1;
        border-radius: 10px;
        position: relative;

        img {
            display: block; /* 기본 이미지는 블록 형태로 표시 */
        }

        .like {
            position: absolute;
            top: 191px;
            left: 285px;
            cursor: pointer;
        }
    }

    & h2{
        font-size: 20px;
        color: #333;
        margin-top: 12px;
    }

    & h3{
        font-size: 14px;
        color: #8D8D8D;
        margin-top: 10px;
    }

    & h4{
        font-size: 24px;
        color: #333;
        margin-top: 18px;
    }

    & h5{
        font-size: 14px;
        color: #333;
        margin-top: 10px;
    }
`

// OtherComponent
S.OtherWrap = styled.div`
    & div{ 
        width: 340px;
        height: 240px;
        background-color: #f2f1f1;
        border-radius: 10px;
        position: relative;

        img {
            display: block; /* 기본 이미지는 블록 형태로 표시 */
        }

        .like {
            position: absolute;
            top: 191px;
            left: 285px;
            cursor: pointer;
        }
    }

    & h2{
        font-size: 20px;
        color: #333;
        margin-top: 12px;
    }

    & h3{
        font-size: 14px;
        color: #8D8D8D;
        margin-top: 10px;
    }

    & h4{
        font-size: 24px;
        color: #333;
        margin-top: 18px;
    }

    & h5{
        font-size: 14px;
        color: #333;
        margin-top: 10px;
    }
`

// CommunityComponent
S.CommunityWrap = styled.div`
    & div{
        width: 460px;
        height: 300px;
        background-color: #f2f1f1;
        border-radius: 10px;
        position: relative;

        img {
            display: block; /* 기본 이미지는 블록 형태로 표시 */
        }

        .scrap {
            position: absolute;
            top: 244px;
            left: 403px;
            cursor: pointer;
        }
    }

    & h2{
        margin-top: 14px;
        font-size: 20px;
    }

    & h3{
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 14px;
    }

    & span{
        font-size: 14px;
        color: #8d8d8d;
    }
`

S.RestaurantWrap = styled.div`

& div{
        position: relative;

        img {
            display: block; /* 기본 이미지는 블록 형태로 표시 */
        }

        .scrap {
            position: absolute;
            top: 244px;
            left: 403px;
            cursor: pointer;
        }
    }

    & div:first-child{
        width: 460px;
        height: 300px;
        background: #f2f1f1;
        border-radius: 10px;
    }

    & div:nth-child(2){
        width: 460px;
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > p{
            font-size: 20px;
            margin: 0;
        }

        & > div{
            font-size: 14px;
            width: 104px;
            height: 34px;
            border: 1px solid #D9D9D9;
            border-radius: 50px;
            padding: 5px;
            justify-content:center;
        }
    }

    & p{
        margin-top: 10px;
        font-size: 14px;
    }
`


export default S;