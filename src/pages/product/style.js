import styled from "styled-components";

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
`
S.MainWrapper = styled.div`
    display: flex;
    margin-left: 250px;


`
S.SideMenuWrapper = styled.div`
    width: 260px;
    height: 1483px;
    & img {
        margin-bottom: 34px;
    }


`
S.ProductWrapper = styled.div`
    width: 1100px;
    height: 1483px;
    //border: 1px solid black;
    margin-left: 60px;
    

`
S.ProductHeader = styled.div`
    width: 1100px;
    height: 88px;
    border-bottom: 1px solid #C0C0C0;
    


`
S.ProductNum = styled.div`
    margin-bottom: 10px;
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
    justify-content: space-between;
    margin-right: 541px;

    & button {
        width: 57px;
        height: 26px;
        background-color: white;
        border: 1px solid #D9D9D9;
        border-radius: 50px;
        text-align: center;
    }

    & button:hover{
        color: ${({theme})=>theme.PALLETTE.brand["primary"]};
    }
`
S.ProductSortWrapper = styled.div`
    width: 353px;
    height: 18px;
    display: flex;
    justify-content: space-between;
   
    & button {
        background-color: white;
        font-size: 14px;
        padding: 0px;
      
    }

    & button:hover{
        color: ${({theme})=>theme.PALLETTE.brand["primary"]};
    }



`
export default S;