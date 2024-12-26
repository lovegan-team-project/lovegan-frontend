import styled from "styled-components";

const S ={};

S.MainContainer1 = styled.div`
    border-bottom: solid 1px #CCCCCC;
`
S.BannerImgWrapper = styled.div`
    width: 1420px;
    height: 650px;
`
S.MainContainer2 = styled.div`
    widows: 100%;
    height: 1007px;
    border-bottom: solid 1px #CCCCCC;
    margin-left: 250px;
`
S.Main2HeaderWrapper = styled.div`
    height: 300px;
    display: flex;
`
S.RestaurantInfoWrapper = styled.div`
    width: 800px;
    height: 350px;
`
S.Main2Title = styled.div`
    width: 290px;
    height: 30px;
    font-size: ${({theme})=> theme.FONT_SIZE["h4"]};
    margin-top: 100px;

`
S.MainShopTitle = styled.div`
    width: 265px;
    height: 60px;
    font-size: ${({theme})=> theme.FONT_SIZE["h1"]};
    margin-top: 16px;
    font-weight: 900;
`
S.MainShopIntro = styled.div`
    width: 700px;
    height: 18px;
    margin: 8px 0px 30px 0px;
`
S.MainShopAddressWrapper = styled.div`
    width: 300px;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    & img{
        margin-right: 4px;
    } 

`
S.ReviewWrapper = styled.div`
    margin-top: 100px;
    margin-left: 155px;

`
S.MainShopAddress = styled.div`
    width: 270px;
    height: 20px;
`
S.MainRestStar = styled.div`
    width: 100px;
    height: 45px;
    font-size: ${({theme})=> theme.FONT_SIZE["h2"]};
    font-weight: bold;
    margin-bottom: 10px;

`
S.MainReview = styled.div`
    width: 150px;
    height: 45px;
    font-size: ${({theme})=> theme.FONT_SIZE["h2"]};
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 10px;
    
`
S.RestaurantImgWrapper = styled.div`
    height: 500px;
    margin-top: 49px;
    display: flex;
`
S.RestaurantNumberWrapper = styled.div`
    width: 750px;
    height: 25px;
    & img{
        margin: 0 28px 0 28px;
    }
    display: flex;
    align-items: center;
    margin-top: 26px;
    margin-left: 60px;
`
S.MainImg = styled.div`
    width: 800px;
    height: 500px;
    margin-right: 41px;
`
S.SubImg = styled.div`
    width: 480px;
    height: 396px;
    margin-right: 39px;
    & img {
        width: 480px;
        height: 300px;
    }
`
S.SubShopTitle = styled.div`
    width: 200px;
    height: 30px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: ${({theme})=> theme.FONT_SIZE["h4"]};
`
S.SubShopInfo = styled.div`
    font-size: 14px;
    width: 500px;
    height: 36px;
`
S.Main3SubTitle = styled.div`
    width: 560px;
    height: 18px;
    margin: 8px 0px 30px 0px;
`

S.MainContainer3 = styled.div`
    width: 100%;
    height: 727px;
    margin: 0 250px;
`
S.Main3Title = styled.div`
    width: 250px;
    height: 30px;
    font-size: ${({theme})=> theme.FONT_SIZE["h4"]};
    margin-top: 70px;

`
S.Main3SubTitle = styled.p`
    width: 250px;
    height: 30px;
    font-size: 14px;
    margin-top: 8px;

`
S.ContentWrapper = styled.div`
    width: 1420px;
    height: 394px;
    display: flex;
    margin-top: 24px;

`
S.ContentContainer = styled.div`
    width: 460px;
    height: 394px;
    margin-right: 20px;


`
S.ContentUser = styled.div`
    width: 100%;
    height: 20px;
    font-size: 14px;
    & img{
        margin-right: 8px;
    }
    display: flex;
    align-items: center;

`
S.FunctionContainer = styled.div`
    width: 100%;
    height: 18px;
    font-size: 14px;
    color: ${({theme}) => theme.PALLETTE.grey["8"]};
    display: flex;
    margin-top: 11px;
    /* & span{
        margin-right: 8px;
    } */
`
S.ContentTitle = styled.div`
    width: 100%;
    height: 25px;
    font-size: ${({theme}) => theme.FONT_SIZE["title"]};
    margin: 12px 0 8px 0;

`
S.Wrapper = styled.div`
    & img {
        width: 100%;
        
    }
`
S.ImgContainer = styled.div`
    width: 300vw;

`
S.ProductWrapper = styled.div`
    width: 1420px;
    height: 1240px;
    margin: 65px 250px 0 250px;
    
`
S.ProductButton = styled.button`
    width: 320px;
    height: 70px;
    margin: 30px 550px 0 550px;
    background-color: ${({theme})=>theme.PALLETTE.brand["primary"]};
    color : #FFFFFF;
    font-size: ${({theme})=> theme.FONT_SIZE["h4"]};
    border-radius: 40px;
`
S.ProductTitle = styled.div`
    width: 340px;
    height: 30px;
    font-size: ${({theme})=> theme.FONT_SIZE["h4"]};

`
S.TagWrapper = styled.div`
    width: 850px;
    height: 26px;
    margin-top: 20px;

`
S.tagButton = styled.button`
    background-color: white;
    margin-right: 10px;
    border-radius: 50px;
    border: 1px solid #D9D9D9;
    font-size: 14px;
   

    &.active{
        background-color: #03a63c;
        color: white;
        font-weight: 500;
    }

`
S.TagItemWrapper = styled.div`
    width: 1420px;
    height: 399px;
    display: flex;
    padding-top: 30px;
    margin-bottom: 50px;

`
S.ItemContainer = styled.div`
    
    width: 340px;
    height: 399px;
    margin-right: 20px;
    & div.mainPhotoWrapper {
        width: 340px;
        height: 240px;
        position: relative;

    }

    & img.like {
        position: relative;
        top: -54px;
        left: 280px;
    }
    
`
S.ItemTitle = styled.div`
    width : 340px;
    height: 25px;
    font-size: ${({theme})=> theme.FONT_SIZE["title"] };
    margin-top: 10px;
    margin-left: 4px;
`
S.ItemExplain = styled.div`

    width: 340px;
    height: 18px;
    color: ${({theme})=> theme.PALLETTE.grey["8"]};
    font-size: ${({theme})=> theme.FONT_SIZE["paragraph"] };
    margin : 4px 0 0 4px;
 
`
S.ItemPrice = styled.div`
    margin: 6px 0 4px 4px;
    font-size: ${({theme})=> theme.FONT_SIZE["title"] };

`
S.ItemStar = styled.div`
    margin : 4px 0 0 4px;
   
`
S.Review = styled.span`
    font-size: 14px;

`
export default S; 