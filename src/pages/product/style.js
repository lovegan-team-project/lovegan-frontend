import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../global/common";
const S={};

S.ProductContainer = styled.div`
    
`
S.ProductTitle = styled.div`
    width: 175px;
    height: 45px;
    margin: 60px 873px 12px 872px;
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE["h2"]};
    font-weight: bold;

`
S.ProductSubTitle = styled.div`
    margin: 0 673px 28px 673px;
    font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
`

S.ToggleContainer = styled.div`
    width: 340px;
    height: 55px;
    background-color: #E6E6E6;
    border-radius: 30px;
    margin: 0 790px 60px 790px;
    position: relative;
    display: flex;
    text-align: center;

   & .toggleButtonFood{

        width: 160px;
        height: 45px;
        border-radius: 20px;
        background-color: #E6E6E6;
        text-align: center;
        margin : 1px 0px 1px 5px;
        font-size : 16px;
        padding: 16px 57.5px;
        color: #8D8D8D;
   }
   & .toggleButtonOther{

        width: 160px;
        height: 45px;
        border-radius: 20px;
        background-color: #E6E6E6;
        text-align: center;
        margin : 1px 0px 1px 5px;
        font-size : 16px;
        padding: 16px 53px;
        color: #8D8D8D;
   }
   & .button{
        position: absolute;
        width: 160px;
        height: 45px;
        border-radius: 20px;
        top: 5px;
        left: 5px;
        background-color: white;
        
        &.foodActive{
            border: 1px solid #333333;
            padding: 12.5px 57.5px;
            transform: translate(0px);
            transition: 0.5s;
        }
        &.otherActive{
            border: 1px solid #333333;
            padding: 12.5px 53px;
            transform: translate(170px);
            transition: 0.5s;
        }
   }
    
`
S.MainWrapper = styled.div`
    display: flex;
    margin-left: 250px;


`
S.SideMenuWrapper = styled.div`
    width: 260px;
    height: 1483px;
    margin-bottom: 200px;
    & img {
        margin-bottom: 34px;
    }


`
S.SideFilterWrapper = styled.div`
    display: ${flexCenterColumn};
    width: 134px;
    height: 1379px;
    //border: 1px solid black;


    & .filterWrapper {
        padding-bottom: 20px;
        border-bottom: 2px solid #C0C0C0;

    }
   
`



S.MainFilterButton = styled.button`
    font-size: ${({theme})=> theme.FONT_SIZE["title"]};
    color: #333333;
    font-weight : 500;
    padding: 0px;
    height: 25px;
    text-align: left;
    background-color: white;
    outline: none;
    border: none;
    margin-top: 20px;
    margin-bottom: 4px;
    
`

S.ProductWrapper = styled.div`
    width: 1100px;
    height: 100%;
    //border: 1px solid black;
    margin-left: 60px;
    margin-bottom: 200px;
    

`
S.ProductHeader = styled.div`
    width: 1100px;
    height: 88px;
    border-bottom: 1px solid #C0C0C0;
    


`
S.ProductNum = styled.div`
    margin-bottom: 20px;
    font-size: ${({theme}) => theme.FONT_SIZE["subtitle"]};

`
S.FilterWrapper = styled.div`
    display: flex;
    align-items: center;

`
S.ProductTagWrapper = styled.div`
    width: 206px;
    height: 26px;
    display: flex;
    margin-right: 541px;
    text-align: center;
   
    & .active div {
        background-color : ${({theme})=> theme.PALLETTE.brand["primary"]} !important;
        color: white;  
        
    }

    & .normal div {
        
        background-color : white !important;
        color: black

       

    }
   
   
    & a {
        color: #333333;
    }
        
`
S.NewButton = styled.div`
    width: 55px;
    height: 26px;
    border: 1px solid #D9D9D9;
    border-radius: 50px;
    text-align: center;
    margin-right: 18px;
    font-size: 14px;
    padding: 4px 12px;
    ${flexCenter}
`

S.BestButton = styled.div`

    width: 58px;
    height: 26px;
    border: 1px solid #D9D9D9;
    border-radius: 50px;
    text-align: center;
    margin-right: 18px;
    font-size: 14px;
    padding: 4px 12px;
    background-color: white;
    ${flexCenter}


`

S.SaleButton = styled.div`
    width: 57px;
    height: 26px;
    background-color: white;
    border: 1px solid #D9D9D9;
    border-radius: 50px;
    text-align: center;
    margin-right: 18px;
    font-size: 14px;
    padding: 4px 12px;
    background-color: white;
    ${flexCenter}
`

S.ProductSortWrapper = styled.div`
    width: 353px;
    height: 18px;
    display: flex;
    justify-content: space-between;
        
    & button.active {

        padding: 0px;
        background-color: white;
        font-size: 14px;
        outline: none;
        font-weight: 700;
    }

    & button.normal {

        padding: 0px;
        background-color: white;
        font-size: 14px;
        outline: none;

    & p {

        font-size: 14px;
        color: #8D8D8D;
    } 
        
      
    }
`

S.ProductMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 34px;
    width: 1100px;
    height: 1281px;
    
`
S.ProductRowItemContainer = styled.div`
    display: flex;
    width: 1100px;
    height: 399px;
    margin-bottom: 42px;
`
S.ProductItemContainer = styled.div`
    margin-right: 40px;
    width: 100%;
    height: 399px;

`
S.ItemImgWrapper = styled.div`
    width: 340px;
    height: 240px;
    border-radius: 10px;
    background-color: #E6E6E6;

`
S.ItemTitle = styled.div`
    width : 340px;
    height: 25px;
    font-size: ${({theme})=> theme.FONT_SIZE["title"] };
    margin-top: 10px;
    margin-left: 4px;
    font-weight: 500;
`
S.ItemExplain = styled.div`

    width: 340px;
    height: 18px;
    color: ${({theme})=> theme.PALLETTE.grey["8"]};
    font-size: ${({theme})=> theme.FONT_SIZE["paragraph"] };
    margin : 4px 0 0 4px;
 
`
S.ItemPrice = styled.div`
    display: flex;
    width: 340px;
    margin: 12px 0 4px 4px;
    font-size: ${({theme})=> theme.FONT_SIZE["h4"] };
    

`
S.Discount = styled.div`
    width: 51px;
    height: 30px;
    color: ${({theme})=>theme.PALLETTE.sub["secondary"]};
    margin-right: 4px;

`
S.OriginPrice = styled.div`

    width: 61px;
    height: 18px;
    font-size: 14px;
    margin: 6px 6px;
    color: #8D8D8D;
    text-decoration: line-through;

`
S.ItemStar = styled.div`
    margin : 4px 0 0 4px;
    font-size: 14px;
    display: flex;
    align-items: center;
    & img{
        width: 15px;
        height: 15px;
        margin-right: 3px;
    }
   
`
S.Review = styled.span`
    font-size: 14px;

`

S.ItemTagWrapper = styled.div`

    width: 340px;
    height: 26px;
    margin-top: 12px;
`
S.Tag = styled.button`
    
    width: 46px;
    height: 26px;
    background: ${({theme})=> theme.PALLETTE.brand["primary"]};
    color: #ffffff;
    font-size: 14px;
    border-radius: 50px;
    text-align: center;
    font-weight: 500;
    text-align: center;
    padding: 4px 12px;
    ${flexCenter}
    
`

// product details

S.ProductDetailContainer = styled.div`

    width: 1420px;
    height: 1162px;
    margin: 0 250px;
`
S.DetailMainWrapper = styled.div`
    display: flex;


`
S.ImgWrapper = styled.div`
   
`
S.DetailContainer = styled.div`
    width: 720px;
    height: 917px;
    margin-left: 60px;

`
S.ProductDetailTitle = styled.div`
    width: 720px;
    height: 45px;
    font-size: 36px;

`
S.ProductExplain = styled.p`
    width: 100%;
    height: 18px;
    font-size: 14px;
    color: ${({theme})=> theme.PALLETTE.grey["8"] };
    margin-top: 6px;

`
S.ProductStarWrapper = styled.div`
    width: 100%;
    height: 21px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    & img{
        margin-right: 12px;
    }

`
S.ProductPriceWrapper = styled.div`
    width: 100%;
    height: 90px;
    margin-top: 32px;
    border-bottom: 1px solid #A6A6A6;
`
S.OrderDetailContainer = styled.div`
    width: 100%;
    height: 486px;
    border-bottom: 1px solid #A6A6A6;


`
S.ProductDeliveryDetail = styled.div`
    width: 100%;
    height : 148px;
    display: flex;
    margin: 30px 0;
`
S.DeliveryTitle = styled.div`
    width: 26px;
    height: 18px;
    font-size: 14px;
    color: ${({theme})=> theme.PALLETTE.grey["8"] };
    margin-right: 24px;
`
S.BenefitTitle = styled.div`
    width: 26px;
    height: 18px;
    font-size: 14px;
    color: ${({theme})=> theme.PALLETTE.grey["8"] };
    margin-right: 24px;
`
S.ProductBenefitDetail = styled.div`
    width: 100%;
    height: 18px;
    display: flex;
    margin-bottom: 30px;

`
S.BenefitDetail = styled.div`
    width: 200px;
    height: 18px;
    color: #333333;
`
S.DeliveryDetails = styled.div`
    width: 400px;
    height: 148px;
    font-size: 14px;
`
S.DeliverySubtitle = styled.div`
    width: 52px;
    height: 18px;
    color: #333333;
    margin-bottom: 10px;
`
S.DeliveryPrice = styled.div`
    width: 203px;
    height: 36px;
    margin-bottom: 20px;
    color: ${({theme})=> theme.PALLETTE.grey["8"] };
    line-height: normal;

`
S.DeliveryExpressPrice = styled.div`
    width: 357px;
    height: 36px;
    color: ${({theme})=> theme.PALLETTE.grey["8"] };
    line-height: normal;

`
S.ProductComponentDetail = styled.div`
    width: 100%;
    height: 18px;
    display: flex;
    margin-bottom: 30px;

`
S.ComponentTitle = styled.div`
    width: 26px;
    height: 18px;
    font-size: 14px;
    color: ${({theme})=> theme.PALLETTE.grey["8"] };
    margin-right: 24px;

`
S.ComponentDetail = styled.div`
    width: 200px;
    height: 18px;
    color: #333333;
    font-size: 14px;
    margin-bottom: 30px;
`
S.ProductOptionDetail = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    & select{
        width: 640px;
        height: 42px;
        border-color: ${({theme})=> theme.PALLETTE.grey["8"] };
        border-radius: 5px;
        font-size: 14px;
        padding-left: 18px;
    }

`
S.OptionTitle = styled.div`
    width: 55px;
    height: 18px;
    font-size: 14px;
    color: ${({theme})=> theme.PALLETTE.grey["8"] };
    margin-right: 25px;

`
S.OptionResultBox = styled.div`
    width: 640px;
    height: 120px;
    background-color: ${({theme})=> theme.PALLETTE.grey["0"] };
    margin-left: 80px;
    padding: 20px 0 0 24px;
`
S.OptionProductName = styled.p`
    width: 80px;
    height: 18px;
    font-size: 14px;
`
S.OrderPriceWrapper = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
`
S.OrderTotalPrice = styled.div`
    width: 150px;
    height: 45px;
    font-size: 36px;
    font-weight: bold;

`
S.DiscountRate = styled.span`
    width: 101px;
    height: 100%;
    font-size: ${({theme})=> theme.FONT_SIZE["h1"]};
    font-weight: bold;
    color : ${({theme})=> theme.PALLETTE.sub["secondary"] };
    margin-right: 20px;
`
S.DiscountPrice = styled.span`
    width: 199x;
    height: 100%;
    font-size: ${({theme})=> theme.FONT_SIZE["h1"]};
    font-weight: bold;
    color : ${({theme})=> theme.PALLETTE.sub["primary_black"] };
    margin-right: 20px;
`
S.OriginalPrice = styled.span`
    width: 83px;
    height: 25px;
    font-size: 20px;
    color: ${({theme})=> theme.PALLETTE.grey["8"] };
    text-decoration-line: line-through;
`
S.ProductDetailBar = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid black;
`
S.ProductOptionCheckContainer = styled.div`
    width: 100%;
    height: 2106px;
    border: 1px solid black;
`
S.TagContainer = styled.div`
    margin: 51px 0px 36px 0px;
    font-size: 14px;
    width: 300px;
    height: 20px;
    color: ${({theme})=> theme.PALLETTE.grey["8"] };
    & img{
        margin : 0 8px 0 8px
    }

`
S.MainImgWrapper = styled.div`
    width: 640px;
    height: 640px;
    & img{
        width: 640px;
        height: 640px;
    }
`
S.SubImgWrapper = styled.div`

    width: 640px;
    height: 100px;
    display: flex;
    margin-top: 18px;

    & img{
        
        width: 100px;
        height: 100px;
        margin-right: 8px;
    }


`















export default S;