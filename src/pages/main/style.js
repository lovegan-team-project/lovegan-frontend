import styled from "styled-components";

const S ={};

S.MainContainer1 = styled.div`
    
    border-bottom: solid 1px #CCCCCC;
`
S.MainContainer2 = styled.div`
    width: 100%;
    height: 1007px;
    border-bottom: solid 1px #CCCCCC;

`
S.MainContainer3 = styled.div`
    width: 100%;
    height: 727px;
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