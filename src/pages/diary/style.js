import styled from "styled-components";

const S = {};
S.Form = styled.form`
    width: 100%;
    height: 100%;
`
S.DiaryWrapper = styled.div`
    width: 1401px;
    margin: 70px 0px 100px;
    display: flex;
`
S.Calendar = styled.div`
    width: 1030px;
    background-color: #fff;
    display: block;
`
S.CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 37px;
    font-size: ${({theme})=>theme.FONT_SIZE["h3"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    box-sizing: border-box;
`
S.CalendarHeaderButton = styled.div`
    width: 84px;
    height: 36px;
    display: flex;
    justify-content: space-between;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin: 6px;
`
S.CalendarDays = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};

`
S.DayCircle = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${({ isSelected, isCurrentMonth, isToday, theme }) => {
        if (isToday){
            return theme.PALLETTE.sub["secondary"];
        }
        else if (isSelected && isCurrentMonth) {
            return theme.PALLETTE.brand["primary"]; // 선택된 날짜의 색상
        } 
        else if (isCurrentMonth) {
            return 'white'; // 현재 달에 속하는 날짜의 색상
        } 
        else {
            return '#FAFAFA'; // 그 달에 포함되지 않은 날짜의 색상 (회색 등 원하는 색상으로 변경)
        }
    }};
    /* color: ${({isSelected, theme}) => (isSelected ? 'white' : theme.PALLETTE.brand["primary_black"])}; */
    color: ${({ isSelected, isCurrentMonth, isToday, theme }) => {
        if (isToday || (isSelected && isCurrentMonth)) {
            return 'white'; // 선택된 날짜의 색상
        } else if (isCurrentMonth) {
            return theme.PALLETTE.brand["primary_black"]; // 현재 달에 속하는 날짜의 색상
        } else {
            return theme.PALLETTE.grey["6"]; // 그 달에 포함되지 않은 날짜의 색상 (회색 등 원하는 색상으로 변경)
        }
    }};
`
S.Day = styled.div`
    position: relative;
    display: flex;
    width: 130px;
    height: 130px;
    font-size: 14px;
    box-sizing: border-box;
    border: solid 1px #F2F2F2;
    border-radius: 14px;
    margin-bottom: 10px;
    margin-right: 20px;
    color: ${({isCurrentMonth})=>(isCurrentMonth ? '${({theme})=>theme.PALLETTE.brand["primary_black"]}' : '#A6A6A6')};
    background-color: ${({isCurrentMonth})=>(isCurrentMonth ? 'white' : '#FAFAFA')};
    padding: 0;
`
S.FoodStickerWrapper = styled.div`
    position: relative; 
    width: 100%;
    margin-top: 45px;
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 27px;
`
S.Sticker = styled.div`
    position: relative;
    width: 50px;
    height: 26px;
    border-radius: 50px;
    border: 1px solid ${({theme})=>theme.PALLETTE.brand["primary"]};
    background-color: ${({theme})=>theme.PALLETTE.brand["primary_light"]};
    box-sizing: border-box;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: ${({theme})=>theme.PALLETTE.brand["primary"]};
    opacity: ${({isFoodFilled}) => (isFoodFilled ? 1 : 0)};
    &.dessert {
        border: 1px solid ${({theme})=>theme.PALLETTE.sub["secondary"]};
        background-color: ${({theme})=>theme.PALLETTE.sub["secondary_light"]};
        color: ${({theme})=>theme.PALLETTE.sub["secondary"]};
    }
`
S.DayNames = styled.div`
    font-size: 14px;
    width: 130px;
    height: 30px;
    text-align: end;
    padding: 10px 0;
    border-radius: 5px;
    transition: background-color 0,3s;
    background-color: white;
    font-weight: bold;
`
S.DiaryFoodBox = styled.div`
    width: 327px;
    height: 940px;
    border: solid 1px #F2F2F2;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 500;
    margin-left: 44px;
`
S.Diary = styled.div`
    padding: 28px 0 6px 24px;
    font-size: ${({theme})=>theme.FONT_SIZE["h4"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
`
S.SelectedDate = styled.div`
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    color: ${({theme})=>theme.PALLETTE.grey["8"]};
    padding: 0 0 21px 24px;
`
S.FoodBox = styled.div`
    width: 303px;
    height: 130px;
    display: flex;
    border: solid 1px ${({theme})=>theme.PALLETTE.grey["0"]};
    border-radius: 10px;
    border-left: solid 10px ${({isFoodFilled, theme}) => (isFoodFilled ? theme.PALLETTE.brand["primary_light"] : theme.PALLETTE.grey["0"])};
    
    flex-direction: column;
    margin: 0 0 10px 12px;
`
S.FoodInfo = styled.div`
    width: 100%;
    height: 90px;
    padding: 10px 0 10px 22px;
    border-bottom: solid 1px ${({theme})=>theme.PALLETTE.grey["0"]};
    display: flex;
    & img {
        margin-left: auto;
        margin-right: 10px;
    }
`
S.FoodIconCircle = styled.div`
    width: 70px;
    height: 70px;
    margin: 0px -12px;
    border: solid 1px ${({theme})=>theme.PALLETTE.grey["0"]};
    border-radius: 50%;
`
S.FoodIcon = styled.div`
    margin: 11px;
`
S.FoodText = styled.div`
    margin: 0 0 0 14px ;
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
`
S.FoodTitle = styled.div`
    margin: 11px 0 0 10px;
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
`
S.FoodSubTitle = styled.div`
    margin: 8px 0 0 10px;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
`
S.Line = styled.div`
    width: 1px;
    height: 90px;
`
S.Kcal = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({isFoodFilled, theme}) => (isFoodFilled ? theme.FONT_WEIGHT["bold"] : theme.FONT_WEIGHT["regular"])};
    margin: 11px 14px;
    color: ${({isFoodFilled, theme}) => (isFoodFilled ? theme.PALLETTE.brand["primary"] : theme.PALLETTE.brand["primary_black"])}
`

S.ModalBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 454px;
    border-radius: 10px;
    background-color: white;
    z-index: 9999;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`
S.ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 80px;
    border-bottom: solid 1px ${({theme})=>theme.PALLETTE.grey["2"]};
    box-sizing: border-box;
    padding: 20px;
`
S.ModalHeaderInfo = styled.div`
    display: flex;
`
S.ForkImage = styled.img`
    width: 40px;
    height: 40px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["2"]};
    border-radius: 10px;
`
S.ModalHeaderText = styled.div`
    margin-left: 12px;
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
`
S.HeaderKcal = styled.div`
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    margin-bottom: 4px;
    padding: 2px;
`
S.FoodTime = styled.div`
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    padding: 2px;
`
S.ModalBody = styled.div`
    display: flex;
    padding: 20px;
    width: 400px;
    height: 309px;
    flex-direction: column;
`
S.BodyTitle = styled.div`
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    display: flex;
`
S.FoodCount = styled.div`
    color: ${({isFoodFilled, theme}) => (isFoodFilled ? theme.PALLETTE.brand["primary"] : theme.PALLETTE.grey["8"] )}
`
S.ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    height: 65px;
    border-top: solid 1px ${({theme})=>theme.PALLETTE.grey["2"]};
    box-sizing: border-box;
    padding: 14px 20px 20px 20px;
`
S.PlusButton = styled.button`
    width: 64px;
    height: 31px;
    background-color: ${({theme})=>theme.PALLETTE.brand["primary"]};
    color: white;
    border-radius: 10px;
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};

`
S.UpdateButton = styled.button`
    width: 79px;
    height: 31px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 10px;
    background-color: white;
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
`
S.FoodName = styled.div`
    display: flex;
    /* flex-direction: row; */
    width: 360px;
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    & div {
        color: ${({theme})=>theme.PALLETTE.brand["primary"]};
    }
`
S.FoodInput = styled.input`
    width: 100%;
    height: 42px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    margin-top: 8px;
    box-sizing: border-box;
    padding: 12px 16px;
    &:focus {
        border-color: ${({theme})=>theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.NutritionInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    width: 100%;
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
    & div {
        color: ${({theme})=>theme.PALLETTE.grey["8"]};
    }
`
S.NutritionInput = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 12px;
    color: ${({theme})=>theme.PALLETTE.grey["8"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
`
S.Input = styled.input`
    width: 175px;
    height: 42px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 5px;
    margin-top: 4px;
    margin-bottom: 8px;
    box-sizing: border-box;
    padding: 12px 16px;
    &:focus {
        border-color: ${({theme})=>theme.PALLETTE.brand["primary"]};
        outline: none;
    }
`
S.NutritionContainer = styled.div`
    display: flex;
    flex-direction: column;
`
S.Notice = styled.div`
    text-align: center;
    margin-top: 12px;
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
`
S.HelpButton = styled.button`
    width: 116px;
    height: 31px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    border-radius: 10px;
    background-color: white;
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
`
S.CloseModalButton = styled.div`
    width: 118px;
    display: flex;
    height: 31px;
    justify-content: space-between;
`
S.CancleButton = styled.button`
    width: 55px;
    height: 31px;
    border: 1px solid ${({theme})=>theme.PALLETTE.grey["8"]};
    background-color: white;
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    border-radius: 10px;
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
`
S.ConfirmButton = styled.button`
    width: 55px;
    height: 31px;
    background-color: ${({theme})=>theme.PALLETTE.brand["primary"]};
    color: white;
    border-radius: 10px;
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
    font-size: ${({theme})=>theme.FONT_SIZE["small"]};
`
S.ListWrapper = styled.li`
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: space-between;
    padding-top: 19px;
    margin-top: 4px;
    border-bottom: 1px solid ${({theme})=>theme.PALLETTE.grey["1"]};
    box-sizing: border-box;
    & img {
        width: 15px;
        height: 15px;
    }
`
S.ListTextWrapper = styled.div`
    width: 326px;
    height: 100%;
    display: flex;
    justify-content: space-between;
`
S.FoodList = styled.div`
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    font-size: ${({theme})=>theme.FONT_SIZE["paragraph"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["regular"]};
`
S.FoodKcal = styled.div`
    color: ${({theme})=>theme.PALLETTE.brand["primary_black"]};
    font-size: ${({theme})=>theme.FONT_SIZE["title"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["medium"]};
`
export default S;