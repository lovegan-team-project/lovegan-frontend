import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import S from './style';
import salad from './icons/salad.svg'
import cupcake from './icons/cupcake.svg'
import plus from './icons/plus.svg'
import modalfork from './icons/modalfork.svg'
import close from './icons/close.svg'
import left_button from './icons/left_button.svg'
import right_button from './icons/right_button.svg'
import greyclose from './icons/close-grey.svg';
import noFood from './icons/circle.svg';
import greycheck from './icons/greycheck.svg';
import greencheck from './icons/greencheck.svg';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';


const Diary = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState([]);
    const [selectedDate, setSelectedDate] = useState({
        day : currentDate.getDate(),
        month : currentDate.getMonth(),
        year : currentDate.getFullYear(),
    });
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [isInputModalOpen, setIsInputModalOpen] = useState(false);
    const [foodTime, setFoodTime] = useState("아침");
    const [foodCount, setFoodCount] = useState({
        아침 : 0,
        점심 : 0,
        저녁 : 0,
        간식 : 0
    });
    const [kcal, setKcal] = useState({
        아침 : 0,
        점심 : 0,
        저녁 : 0,
        간식 : 0
    });
    const [isFoodFilled, setIsFoodFilled] = useState({
        아침 : false,
        점심 : false,
        저녁 : false,
        간식 : false
    })
    const [foodChecked, setFoodChecked] = useState({});
    const [isClickPlus, setIsClickPlus] = useState(false);
    const [foodList, setFoodList] = useState([]);
    const { register, handleSubmit, reset, getValues, formState: { isSubmitted, isSubmitting, errors}} = useForm({mode : "onchange"});
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);
    const isLogin = useSelector((state) => state.user.isLogin);

    const [dateStatus, setDateStatus] = useState({
        day : 0,
        month : 0,
        year : 0
    })

    const renderCalendar = () => {
        const year = currentDate.getFullYear(); 
        const month = currentDate.getMonth(); 
        const today = new Date();

        const firstDay = new Date(year, month, 1).getDay(); 
        const lastDate = new Date(year, month + 1, 0).getDate(); 
        const prevLastDate = new Date(year, month, 0).getDate(); 

        const tempDays = [];

        for (let i = firstDay; i > 0; i--) {
            tempDays.push({
                day: prevLastDate - i + 1,
                isCurrentMonth: false,
            });
        }

        for (let i = 1; i <= lastDate; i++) {
            tempDays.push({
                day: i,
                isCurrentMonth: true ,
                isToday: today.getDate() === i && today.getMonth() === month && today.getFullYear() === year
            });
        }

        const totalCells = 42;
        const nextMonthDays = totalCells - tempDays.length;
        for (let i = 1; i <= nextMonthDays; i++) {
            tempDays.push({
                day: i,
                isCurrentMonth: false,
            });
        }

        setDays(tempDays); 
    };


    const changeMonth = (step) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + step);
        setCurrentDate(newDate)

    };
    
    const clickDate = (day) => {
        console.log(currentUser, "현재 유저")
        if(!isLogin){
            alert("로그인 해주세요.")
            return;
        }
        else{
            setSelectedDate({
                day : day,
                month : currentDate.getMonth(),
                year : currentDate.getFullYear()
            }); 
        }
        
    }

    const openModal = (time) => {
        if(!isLogin){
            alert("로그인 해주세요");
            return;
        }
        setFoodTime(time)
        setIsInfoModalOpen(true);
        // console.log("모달창오픈")
    }
    const closeInfoModal = () => {
        setIsInfoModalOpen(false);
    }

    const clickPlus = () => {
        setIsClickPlus(true);
        setIsInfoModalOpen(false);
        setIsInputModalOpen(true);
    }

    const closeInputModal = () => {
        setIsInputModalOpen(false);
        reset();
    }

    const checkFood = (date, time) => {
        if(!isLogin){
            alert("로그인 해주세요")
            return;
        }
        const key = `${date.year}-${date.month}-${date.day}`;
        setFoodChecked((prevState) => ({
            ...prevState,
            [key] : {
                ...prevState[key],
                [time] : !prevState[key]?.[time]
            }
        }))
    }

    const deleteFood = async (food) => {
        try{
            const response = await fetch(`http://localhost:8000/diary/deleteFood?id=${food}`, {
                method : "DELETE",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    id: food,
                    userId: currentUser._id
                })
            })
            if(response.ok){
                showFood();
            }
        }
        catch(error){
            console.error(error)
        }
    }


    const showFood = async() => {
        if(days.length === 0) return;
        const response = await fetch(`http://localhost:8000/diary/foodInfo?id=${currentUser._id}&year=${selectedDate.year}&month=${selectedDate.month}&day=${selectedDate.day}`, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        
        const foods = await response.json();
        console.log("음식 리스트 :", foods);
        setFoodList(foods);
        console.log(foodList);
        console.log(selectedDate);

        const kcal = { 아침 : 0, 점심 : 0, 저녁 : 0, 간식 : 0};
        const foodCount = { 아침 : 0, 점심 : 0, 저녁 : 0, 간식 : 0};
        const isFoodFilled = {아침 : false, 점심 : false, 저녁 : false, 간식 : false};

        const updatedDays = days.map((day) => {
            const foodStatus = {
                morning: false,
                lunch: false,
                dinner: false,
                dessert: false,
            };

            // foods 배열과 현재 day를 비교
            foods.forEach((food) => {
                if (
                    food.date.day === day.day &&
                    food.date.month === selectedDate.month + 1 && 
                    food.date.year === selectedDate.year
                ) {
                    if (food.time === "아침") foodStatus.morning = true;
                    if (food.time === "점심") foodStatus.lunch = true;
                    if (food.time === "저녁") foodStatus.dinner = true;
                    if (food.time === "간식") foodStatus.dessert = true;
                }
            });

            return {
                ...day,
                foodStatus,
            };
        });

        const filteredFood = foods.filter((food) => 
            food.date.day === selectedDate.day &&
            food.date.month === selectedDate.month + 1 &&
            food.date.year === selectedDate.year
        )
        setFoodList(filteredFood)
        console.log(filteredFood, "필터푸드")

        console.log("업데이트된 days:", updatedDays);
        setDays(updatedDays);

        filteredFood.forEach((food) => {
            console.log("food : ", food)
            if(selectedDate.day == food.date.day){
                if(kcal[food.time] !== undefined){
                    kcal[food.time] += food.kcal;
                }
                if(foodCount[food.time] !== undefined){
                    foodCount[food.time] += 1;
                    isFoodFilled[food.time] = true;
                }
            }
        

        })
        
        setKcal(kcal);
        setFoodCount(foodCount);
        setIsFoodFilled(isFoodFilled);
    }

    // useEffect(()=>{
    //     renderCalendar();
    //     showFood();
    // }, [])

    // const [allFoodList, setAllFoodList] = useState([]);
    // const getFoodList = async () => {
    //     // 유현이라는 사람의 모든 달력의 데이터를 가져오는 백엔드 경로
    //     const response = await fetch(`http://localhost:8000/diary/foodInfo?id=${currentUser._id}`)
    //     if(!response.ok) throw new Error('전체 푸드 리스트 리스폰스 오류');
    //     const allFoods = await response.json();
    //     setAllFoodList(allFoodList)
    // }
 
    useEffect(() => {
        // 모든 데이터를 가져온다.
        // getFoodList()

        renderCalendar();
        
        if(days.length > 0){
            showFood();
        }

        const key = `${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`;
        if (!foodChecked[key]) { 
            setFoodChecked((prevState) => ({
                ...prevState,
                [key]: {
                    아침: false,
                    점심: false,
                    저녁: false,
                    간식: false,
                },
            }));
        }
    }, [foodList, selectedDate, currentDate, selectedDate]); 


    return (
        <S.DiaryWrapper>
            <S.Calendar>
                <S.CalendarHeader>
                    <h2> {currentDate.getFullYear()}년 {currentDate.toLocaleString('default', { month: 'long' })}</h2>
                    <S.CalendarHeaderButton>
                        <img src={left_button} onClick={() => changeMonth(-1)} />
                        <img src={right_button} onClick={() => changeMonth(1)} />
                    </S.CalendarHeaderButton>
                    
                </S.CalendarHeader>
                <S.CalendarDays>
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
                        <S.DayNames key={index}>{day}</S.DayNames>
                  
                  ))}
                    {days.map((day, index) => (
                        <S.Day key={index} onClick={day.isCurrentMonth && currentUser ? () => clickDate(day.day) : undefined} isCurrentMonth = {day.isCurrentMonth}>
                            <S.DayCircle isSelected={selectedDate.day === day.day && selectedDate.month === currentDate.getMonth() && selectedDate.year === currentDate.getFullYear()} isCurrentMonth={day.isCurrentMonth} isToday={day.isToday}>
                                {day.day}
                            </S.DayCircle>
                            <S.FoodStickerWrapper>
                                {day.isCurrentMonth && (
                                    <>
                                        <S.Sticker
                                            className="morning"
                                            isFoodFilled={day.foodStatus?.morning}
                                        >
                                            {day.foodStatus?.morning ? "아침" : ""}
                                        </S.Sticker>
                                        <S.Sticker
                                            className="lunch"
                                            isFoodFilled={day.foodStatus?.lunch}
                                        >
                                            {day.foodStatus?.lunch ? "점심" : ""}
                                        </S.Sticker>
                                        <S.Sticker
                                            className="dinner"
                                            isFoodFilled={day.foodStatus?.dinner}
                                        >
                                            {day.foodStatus?.dinner ? "저녁" : ""}
                                        </S.Sticker>
                                        <S.Sticker
                                            className="dessert"
                                            isFoodFilled={day.foodStatus?.dessert}
                                        >
                                            {day.foodStatus?.dessert ? "간식" : ""}
                                        </S.Sticker>
                                    </>
                                )}
                                
                            </S.FoodStickerWrapper>
                        </S.Day>
                        
                    ))}
                </S.CalendarDays>
            </S.Calendar>
            <div>
                <S.DiaryFoodBox>
                    <S.Diary>DIARY</S.Diary>
                    <S.SelectedDate>
                        {selectedDate
                            ? `${selectedDate.year}년 ${selectedDate.month + 1}월 ${selectedDate.day}일`
                            : `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`}
                    </S.SelectedDate>
                    {/* 아침 */}
                    <S.FoodBox isFoodFilled = {isFoodFilled["아침"]}>
                        <S.FoodInfo>
                            <S.FoodIconCircle>
                                <S.FoodIcon>
                                    <Icon icon="ph:bowl-food-thin" width={"48px"} height={"48px"} />
                                </S.FoodIcon>
                            </S.FoodIconCircle>
                            <S.FoodText>
                                <S.FoodTitle>아침</S.FoodTitle>
                                <S.FoodSubTitle>식사메뉴</S.FoodSubTitle>
                            </S.FoodText>
                            {isFoodFilled["아침"] ? <img src={greencheck} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('아침')} /> :
                            <img src={plus} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('아침')} />}
                            
                        </S.FoodInfo>
                        <S.Line></S.Line>
                        <S.Kcal isFoodFilled = {isFoodFilled["아침"]}>
                            {isFoodFilled["아침"] ? `${kcal["아침"]}Kcal` : 
                                (<div>
                                    {foodChecked[`${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`]?.["아침"] ? 
                                        (<img src={greycheck} width={"22px"} height={"22px"} onClick={() => {checkFood(selectedDate, "아침")}} />) :
                                        (<img src={noFood} width={"22px"} height={"22px"} onClick={() => {checkFood(selectedDate, "아침")}} />)
                                    }
                                   <p>단식했어요</p> 
                                </div>)}
                        </S.Kcal>
                    </S.FoodBox>
                    {/* 점심 */}
                    <S.FoodBox isFoodFilled = {isFoodFilled["점심"]}>
                        <S.FoodInfo>
                            <S.FoodIconCircle>
                                <S.FoodIcon>
                                    <Icon icon="ph:bowl-food-thin" width={"48px"} height={"48px"} />
                                </S.FoodIcon>
                            </S.FoodIconCircle>
                            <S.FoodText>
                                <S.FoodTitle>점심</S.FoodTitle>
                                <S.FoodSubTitle>식사메뉴</S.FoodSubTitle>
                            </S.FoodText>
                            {isFoodFilled["점심"] ? <img src={greencheck} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('점심')} /> :
                            <img src={plus} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('점심')} />}
                        </S.FoodInfo>
                        <S.Line></S.Line>
                        <S.Kcal isFoodFilled = {isFoodFilled["점심"]}>
                            {isFoodFilled["점심"] ? `${kcal["점심"]}Kcal` : 
                                (<div>
                                    {foodChecked[`${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`]?.["점심"] ? 
                                        (<img src={greycheck} width={"22px"} height={"22px"} onClick={() => {checkFood(selectedDate, "점심")}} />) :
                                        (<img src={noFood} width={"22px"} height={"22px"} onClick={() => {checkFood(selectedDate, "점심")}} />)
                                    }
                                   <p>단식했어요</p> 
                                </div>)}
                        </S.Kcal>
                    </S.FoodBox>
                    {/* 저녁 */}
                    <S.FoodBox isFoodFilled = {isFoodFilled["저녁"]}>
                        <S.FoodInfo>
                            <S.FoodIconCircle>
                                <S.FoodIcon>
                                <img src={salad} width={"48px"} height={"48px"} alt="" />
                                </S.FoodIcon>
                            </S.FoodIconCircle>
                            <S.FoodText>
                                <S.FoodTitle>저녁</S.FoodTitle>
                                <S.FoodSubTitle>식사메뉴</S.FoodSubTitle>
                            </S.FoodText>
                            {isFoodFilled["저녁"] ? <img src={greencheck} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('저녁')} /> :
                            <img src={plus} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('저녁')} />}
                        </S.FoodInfo>
                        <S.Line></S.Line>
                        <S.Kcal isFoodFilled = {isFoodFilled["저녁"]}>
                            {isFoodFilled["저녁"] ? `${kcal["저녁"]}Kcal` : 
                                (<div>
                                    {foodChecked[`${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`]?.["저녁"] ? 
                                        (<img src={greycheck} width={"22px"} height={"22px"} onClick={() => {checkFood(selectedDate, "저녁")}} />) :
                                        (<img src={noFood} width={"22px"} height={"22px"} onClick={() => {checkFood(selectedDate, "저녁")}} />)
                                    }
                                   <p>단식했어요</p> 
                                </div>)}
                        </S.Kcal>
                    </S.FoodBox>
                    {/* 간식 */}
                    <S.FoodBox isFoodFilled = {isFoodFilled["간식"]}>
                        <S.FoodInfo>
                            <S.FoodIconCircle>
                                <S.FoodIcon>
                                    <img src={cupcake} width={"48px"} height={"48px"} alt="" />
                                </S.FoodIcon>
                            </S.FoodIconCircle>
                            <S.FoodText>
                                <S.FoodTitle>간식</S.FoodTitle>
                                <S.FoodSubTitle>식사메뉴</S.FoodSubTitle>
                            </S.FoodText>
                            {isFoodFilled["간식"] ? <img src={greencheck} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('간식')} /> :
                            <img src={plus} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('간식')} />}
                        </S.FoodInfo>
                        <S.Line></S.Line>
                        <S.Kcal isFoodFilled = {isFoodFilled["간식"]}>
                            {isFoodFilled["간식"] ? `${kcal["간식"]}Kcal` : 
                                (<div>
                                    {foodChecked[`${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`]?.["간식"] ? 
                                        (<img src={greycheck} width={"22px"} height={"22px"} onClick={() => {checkFood(selectedDate, "간식")}} />) :
                                        (<img src={noFood} width={"22px"} height={"22px"} onClick={() => {checkFood(selectedDate, "간식")}} />)
                                    }
                                   <p>단식했어요</p> 
                                </div>)}
                        </S.Kcal>
                    </S.FoodBox>
                </S.DiaryFoodBox>
            </div>

            { isInfoModalOpen && (
                <S.ModalBox>
                    <S.ModalHeader>
                        <S.ModalHeaderInfo>
                            <S.ForkImage src={modalfork} alt="식사 아이콘" />
                            <S.ModalHeaderText>
                                <S.HeaderKcal>{kcal[foodTime]}kcal 먹었어요</S.HeaderKcal>
                                <S.FoodTime>{foodTime}</S.FoodTime>
                            </S.ModalHeaderText>
                        </S.ModalHeaderInfo>
                         <img src={close} alt='' onClick={closeInfoModal} />
                    </S.ModalHeader>
                    
                    <S.ModalBody>
                        <S.BodyTitle>
                            {foodTime} 메뉴&nbsp; <S.FoodCount isFoodFilled={isFoodFilled[foodTime]}> {foodCount[foodTime]}</S.FoodCount> 
                        </S.BodyTitle>
                        <S.FoodList>
                            <ul>
                                {foodList.filter((food) => food.time === foodTime && food.date.day == selectedDate.day && food.date.month == selectedDate.month + 1 && food.date.year == selectedDate.year).map((food, index)=>(
                                    <S.ListWrapper>
                                        <S.ListTextWrapper>
                                            <S.FoodList key={index}>{food.foodName}</S.FoodList>
                                            <S.FoodKcal>{food.kcal}kcal</S.FoodKcal>
                                        </S.ListTextWrapper>
                                        <img src={greyclose} alt='' onClick={() => deleteFood(food._id)} />
                                    </S.ListWrapper>
                                ))} 
                            </ul>
                        </S.FoodList>
                    </S.ModalBody>
                    
                    <S.ModalFooter>
                        <S.PlusButton onClick={clickPlus}>+ 추가</S.PlusButton>
                        <S.UpdateButton onClick={closeInfoModal}>수정 완료</S.UpdateButton>
                    </S.ModalFooter>
                </S.ModalBox>
            )}

            { isInputModalOpen && (
                <S.Form onSubmit = {handleSubmit(async(data) => {
                    console.log("data : ", data);
                    console.log(data.foodInput)
                    if(!isLogin){
                        alert("로그인 해주세요")
                        return;
                    }
                    try{
                        const response = await fetch("http://localhost:8000/diary/foodInput", {
                            method : "POST",
                            headers : {
                                "Content-Type" : "application/json"
                            },
                            body : JSON.stringify({
                                time : foodTime,
                                foodName : data.foodInput,
                                kcal : data.kcal || 0,
                                tan : data.carbs || 0,
                                dan : data.protein || 0,
                                gi : data.fat || 0,
                                id : currentUser._id,
                                date : {
                                    year : selectedDate.year,
                                    month : selectedDate.month + 1,
                                    day : selectedDate.day
                                }
                            })
                            
                        })

                        const food = await response.json();
                        console.log("음식 : ", food)
                        if(response.ok){
                            showFood();
                            setIsInfoModalOpen(true);
                            setIsInputModalOpen(false);
                        }
                        reset();
                    }
                    catch(error){
                        console.error(error)
                    }
                })}>
                    <S.ModalBox>
                        <S.ModalHeader>
                            <S.ModalHeaderInfo>
                                <S.ForkImage src={modalfork} alt="식사 아이콘" />
                                <S.ModalHeaderText>
                                    <S.HeaderKcal>무슨 음식을 드셨나요?</S.HeaderKcal>
                                    <S.FoodTime>섭취한 음식을 직접 등록해주세요.</S.FoodTime>
                                </S.ModalHeaderText>
                            </S.ModalHeaderInfo>
                            <img src={close} alt='' onClick={closeInputModal} />
                        </S.ModalHeader>
                        
                        <S.ModalBody>
                            <S.FoodName>
                                음식이름&nbsp;<div> (필수)</div>
                            </S.FoodName>
                            <S.FoodInput placeholder='음식 이름(최대 20자)' id='foodName' {
                                ...register("foodInput", {required : true})
                            }></S.FoodInput>
                            <S.NutritionInfo>
                                영양정보&nbsp;<div>(선택)</div>
                            </S.NutritionInfo>
                            <S.NutritionInput>
                                <S.NutritionContainer>
                                    칼로리
                                    <S.Input id='kcal' type='text' placeholder='0 kcal' { ...register("kcal")}></S.Input>
                                </S.NutritionContainer>
                                <S.NutritionContainer>
                                    탄수화물
                                    <S.Input id='carbs' type='text' placeholder='0 g' { ...register("carbs")}></S.Input>
                                </S.NutritionContainer>
                                <S.NutritionContainer>
                                    단백질
                                    <S.Input id='protein' type='text' placeholder='0 g' { ...register("protein")}></S.Input>
                                </S.NutritionContainer>
                                <S.NutritionContainer>
                                    지방
                                    <S.Input id='fat' type='text' placeholder='0 g' { ...register("fat")}></S.Input>
                                </S.NutritionContainer>
                            </S.NutritionInput>
                            <S.Notice>＊ 입력하지 않은 영양정보는 0으로 자동 입력돼요</S.Notice>
                        </S.ModalBody>
                        
                        <S.ModalFooter>
                            <S.HelpButton>도움이 필요해요!</S.HelpButton>
                            <S.CloseModalButton>
                                <S.CancleButton onClick={closeInputModal}>취소</S.CancleButton>
                                <S.ConfirmButton type='submit'>확인</S.ConfirmButton>
                            </S.CloseModalButton>
                            
                        </S.ModalFooter>
                    </S.ModalBox>
                </S.Form>
            )}
        </S.DiaryWrapper>

        
        
    );
};

export default Diary;
