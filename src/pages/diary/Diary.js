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
import greyclose from './icons/close-grey.svg'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';


const Diary = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState([]);
    const [selectedDate, setSelectedDate] = useState({
        day : currentDate.getDate(),
        month : currentDate.getMonth()+1,
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
        간식 : false,
    })
    const [isClickPlus, setIsClickPlus] = useState(false);
    const [foodInfo, setFoodInfo] = useState([]);

    const { register, handleSubmit, getValues, formState: { isSubmitted, isSubmitting, errors}} = useForm({mode : "onchange"});

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);

    useEffect(() => {
        renderCalendar();
    }, [currentDate]);
    useEffect(()=>{
        console.log("음식정보 업데이트댐")
        console.log("현재 foodInfo 상태:", foodInfo);
    }, [foodInfo])
    useEffect(()=>{
        console.log("select",selectedDate)
        showFoodInfo();
    },[selectedDate])

    const showFoodInfo = async () => {
        console.log("가져오는중~")
        if(!currentUser){
            alert("로그인해주세요")
        }
        try{
            const response = await fetch(`http://localhost:8000/diary/foodInfo?id=${currentUser._id}&year=${selectedDate.year}&month=${selectedDate.month}&day=${selectedDate.day}`, {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                }  
            })
            const data = await response.json();
            setFoodInfo(data);
            console.log("foodInfo",data)
            const kcal = { 아침 : 0, 점심 : 0, 저녁 : 0, 간식 : 0};
            const foodCount = { 아침 : 0, 점심 : 0, 저녁 : 0, 간식 : 0};
            const isFoodFilled = {아침 : false, 점심 : false, 저녁 : false, 간식 : false};
            data.forEach((food) => {
                if(kcal[food.time] !== undefined){
                    kcal[food.time] += food.kcal;
                }
                if(foodCount[food.time] !== undefined){
                    foodCount[food.time] += 1;
                    isFoodFilled[food.time] = true;
                }
            })
            setKcal(kcal);
            setFoodCount(foodCount);
            setIsFoodFilled(isFoodFilled);
            console.log("데이터:", data);
            data.forEach((item) => console.log("item.date 구조:", item.date));
        }
        catch(error){
            console.error("데이터가져오기오류",error)
        }
    }
    const deleteFood = async (foodId, foodTime, kcalValue) => {
        try {
            const response = await fetch(`http://localhost:8000/diary/deleteFood?id=${foodId}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const updatedFoodInfo = foodInfo.filter((food) => food._id !== foodId);
                setFoodInfo(updatedFoodInfo);
    
                setKcal((prev) => ({
                    ...prev,
                    [foodTime]: prev[foodTime] - kcalValue,
                }));
    
                setFoodCount((prev) => ({
                    ...prev,
                    [foodTime]: prev[foodTime] - 1,
                }));
    
                setIsFoodFilled((prev) => ({
                    ...prev,
                    [foodTime]: updatedFoodInfo.some((food) => food.time === foodTime),
                }));
            }
        } catch (error) {
            console.error(error);
        }
    };


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
       
        setSelectedDate({
            day : day,
            month : currentDate.getMonth() + 1,
            year : currentDate.getFullYear()
        }); 
       
    }

    const openModal = (time) => {
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
    }

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
                        <S.Day key={index} onClick={() => clickDate(day.day)} isCurrentMonth = {day.isCurrentMonth}>
                            <S.DayCircle isSelected={selectedDate.day === day.day && selectedDate.month === currentDate.getMonth() && selectedDate.year === currentDate.getFullYear()} isCurrentMonth={day.isCurrentMonth} isToday={day.isToday}>
                                {day.day}
                            </S.DayCircle>
                        </S.Day>
                        
                    ))}
                </S.CalendarDays>
            </S.Calendar>
            <div>
                <S.DiaryFoodBox>
                    <S.Diary>DIARY</S.Diary>
                    <S.SelectedDate>
                        {selectedDate
                            ? `${selectedDate.year}년 ${selectedDate.month }월 ${selectedDate.day}일`
                            : `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`
                        }
                    </S.SelectedDate>
                    {/* 아침 */}
                    <S.FoodBox isFilled={isFoodFilled["아침"]}>
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
                            <img src={plus} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('아침')} />
                        </S.FoodInfo>
                        <S.Line></S.Line>
                        <S.Kcal isFilled={isFoodFilled["아침"]}>{isFoodFilled["아침"] ? `${kcal["아침"]}Kcal` :"단식했어요"}</S.Kcal>
                    </S.FoodBox>
                    {/* 점심 */}
                    <S.FoodBox isFilled={isFoodFilled["점심"]}>
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
                            <img src={plus} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('점심')} />
                        </S.FoodInfo>
                        <S.Line></S.Line>
                        <S.Kcal isFilled={isFoodFilled["점심"]}>{isFoodFilled["점심"] ? `${kcal["점심"]}Kcal` :"단식했어요"}</S.Kcal>
                    </S.FoodBox>
                    {/* 저녁 */}
                    <S.FoodBox isFilled={isFoodFilled["저녁"]}>
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
                            <img src={plus} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('저녁')} />
                        </S.FoodInfo>
                        <S.Line></S.Line>
                        <S.Kcal isFilled={isFoodFilled["저녁"]}>{isFoodFilled["저녁"] ? `${kcal["저녁"]}Kcal` :"단식했어요"}</S.Kcal>
                    </S.FoodBox>
                    {/* 간식 */}
                    <S.FoodBox isFilled={isFoodFilled["간식"]}>
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
                            <img src={plus} width={"28px"} height={"28px"} alt="" onClick={()=>openModal('간식')} />
                        </S.FoodInfo>
                        <S.Line></S.Line>
                        <S.Kcal isFilled={isFoodFilled["간식"]}>{isFoodFilled["간식"] ? `${kcal["간식"]}Kcal` :"단식했어요"}</S.Kcal>
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
                            <S.TitleWrapper>
                                {foodTime} 메뉴&nbsp; 
                                <S.FoodCount isFilled = {isFoodFilled[foodTime]}> {foodCount[foodTime]}</S.FoodCount> 
                            </S.TitleWrapper>
                            <ul>
                                {foodInfo.length > 0 ? (
                                    foodInfo
                                    .filter((info) => {
                                        console.log("filter 실행됨", info);
                                        const isDateMatch =
                                        Number(info.date.year) === Number(selectedDate.year) &&
                                        Number(info.date.month) === Number(selectedDate.month) &&
                                        Number(info.date.day) === Number(selectedDate.day);
                                        const isTimeMatch = info.time === foodTime;
                                        return isDateMatch && isTimeMatch;
                                    })
                                    .map((info, index) => (
                                        <S.ListWrapper key={info._id || index}>
                                        <S.ListTextWrapper>
                                            <S.FoodList>{info.foodName}</S.FoodList>
                                            <S.FoodKcal>{info.kcal}kcal</S.FoodKcal>
                                        </S.ListTextWrapper>
                                        <img
                                            src={greyclose}
                                            alt="삭제"
                                            onClick={() => deleteFood(info._id, foodTime, info.kcal)}
                                        />
                                        </S.ListWrapper>
                                    ))
                                ) : (
                                    <div>데이터가 없습니다</div>
                                )}
                                </ul>
                        </S.BodyTitle>
                        
                    </S.ModalBody>
                    
                    <S.ModalFooter>
                        <S.PlusButton onClick={clickPlus}>+ 추가</S.PlusButton>
                        <S.UpdateButton onClick={closeInfoModal}>수정 완료</S.UpdateButton>
                    </S.ModalFooter>
                </S.ModalBox>
            )}

            { isInputModalOpen && (
                <S.Form onSubmit = {handleSubmit(async(data) => {
                    console.log(data)
                    if(!currentUser){
                        alert("로그인해주세요")
                    }
                    try{
                        const response = await fetch("http://localhost:8000/diary/foodInput", {
                            method : "POST",
                            headers : {
                                "Content-Type" : "application/json",
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
                                    month : selectedDate.month,
                                    day : selectedDate.day
                                }
                            })
                            
                        })
                        const food = await response.json();
                        if(response.ok){
                            console.log("음식추가 : ", food)
                            showFoodInfo();
                            setIsInputModalOpen(false);
                            setIsInfoModalOpen(true);
                            setKcal((prev) => ({
                                ...prev,
                                [foodTime] : prev[foodTime] + food.kcal
                            }))
                        }
                        
                        
                    }
                    catch(error){
                        console.error(error)
                    }
                    // .catch((error) => console.error)
                })}>
                    <S.ModalWrapper>
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
                            <S.FoodInput placeholder='음식 이름(최대 20자)' id='foodInput'
                                {...register("foodInput", {
                                    required : true,
                                    maxLength : 20
                                })}
                            />
                            <S.NutritionInfo>
                                영양정보&nbsp;<div>(선택)</div>
                            </S.NutritionInfo>
                            <S.NutritionInput>
                                <S.NutritionContainer>
                                    칼로리
                                    <S.Input id='kcal' type='text' placeholder='0 kcal' {...register("kcal")} />
                                </S.NutritionContainer>
                                <S.NutritionContainer>
                                    탄수화물
                                    <S.Input id='carbs' type='text' placeholder='0 g' {...register("carbs")} />
                                </S.NutritionContainer>
                                <S.NutritionContainer>
                                    단백질
                                    <S.Input id='protein' type='text' placeholder='0 g' {...register("protein")} />
                                </S.NutritionContainer>
                                <S.NutritionContainer>
                                    지방
                                    <S.Input id='fat' type='text' placeholder='0 g' {...register("fat")} />
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
                    </S.ModalWrapper>
                </S.Form>
                
                
            )}
        </S.DiaryWrapper>

        
        
    );
};

export default Diary;