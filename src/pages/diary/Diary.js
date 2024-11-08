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
    const [foodCount, setFoodCount] = useState(0);
    const [kcal, setKcal] = useState(0);
    const [isClickPlus, setIsClickPlus] = useState(false);

    useEffect(() => {
        renderCalendar();
    }, [currentDate]);

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
            month : currentDate.getMonth(),
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
                            ? `${selectedDate.year}년 ${selectedDate.month + 1}월 ${selectedDate.day}일`
                            : `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`}
                    </S.SelectedDate>
                    {/* 아침 */}
                    <S.FoodBox>
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
                        <S.Kcal>{kcal}&nbsp;Kcal</S.Kcal>
                    </S.FoodBox>
                    {/* 점심 */}
                    <S.FoodBox>
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
                        <S.Kcal>{kcal}&nbsp;Kcal</S.Kcal>
                    </S.FoodBox>
                    {/* 저녁 */}
                    <S.FoodBox>
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
                        <S.Kcal>{kcal}&nbsp;Kcal</S.Kcal>
                    </S.FoodBox>
                    {/* 간식 */}
                    <S.FoodBox>
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
                        <S.Kcal>{kcal}&nbsp;Kcal</S.Kcal>
                    </S.FoodBox>
                </S.DiaryFoodBox>
            </div>

            { isInfoModalOpen && (
                <S.ModalBox>
                    <S.ModalHeader>
                        <S.ModalHeaderInfo>
                            <S.ForkImage src={modalfork} alt="식사 아이콘" />
                            <S.ModalHeaderText>
                                <S.HeaderKcal>0kacl 먹었어요</S.HeaderKcal>
                                <S.FoodTime>{foodTime}</S.FoodTime>
                            </S.ModalHeaderText>
                        </S.ModalHeaderInfo>
                         <img src={close} alt='' onClick={closeInfoModal} />
                    </S.ModalHeader>
                    
                    <S.ModalBody>
                        <S.BodyTitle>
                            {foodTime} 메뉴&nbsp; <S.FoodCount> {foodCount}</S.FoodCount> 
                        </S.BodyTitle>
                        
                    </S.ModalBody>
                    
                    <S.ModalFooter>
                        <S.PlusButton onClick={clickPlus}>+ 추가</S.PlusButton>
                        <S.UpdateButton onClick={closeInfoModal}>수정 완료</S.UpdateButton>
                    </S.ModalFooter>
                </S.ModalBox>
            )}

            { isInputModalOpen && (
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
                        <S.FoodInput placeholder='음식 이름(최대 20자)'></S.FoodInput>
                        <S.NutritionInfo>
                            영양정보&nbsp;<div>(선택)</div>
                        </S.NutritionInfo>
                        <S.NutritionInput>
                            <S.NutritionContainer>
                                칼로리
                                <S.Input id='kcal' type='text' placeholder='0 kcal'></S.Input>
                            </S.NutritionContainer>
                            <S.NutritionContainer>
                                탄수화물
                                <S.Input id='carbs' type='text' placeholder='0 g'></S.Input>
                            </S.NutritionContainer>
                            <S.NutritionContainer>
                                단백질
                                <S.Input id='protein' type='text' placeholder='0 g'></S.Input>
                            </S.NutritionContainer>
                            <S.NutritionContainer>
                                지방
                                <S.Input id='fat' type='text' placeholder='0 g'></S.Input>
                            </S.NutritionContainer>
                        </S.NutritionInput>
                        <S.Notice>＊ 입력하지 않은 영양정보는 0으로 자동 입력돼요</S.Notice>
                    </S.ModalBody>
                    
                    <S.ModalFooter>
                        <S.HelpButton>도움이 필요해요!</S.HelpButton>
                        <S.CloseModalButton>
                            <S.CancleButton onClick={closeInputModal}>취소</S.CancleButton>
                            <S.ConfirmButton onClick={closeInputModal}>확인</S.ConfirmButton>
                        </S.CloseModalButton>
                        
                    </S.ModalFooter>
                </S.ModalBox>
            )}
        </S.DiaryWrapper>

        
        
    );
};

export default Diary;
