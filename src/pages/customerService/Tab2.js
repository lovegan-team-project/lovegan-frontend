import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { divIcon } from 'leaflet';
import Arrow from './Arrow';

const Tab2 = () => {

    // 열림,닫힘 상태 관리
    const [isOpen,setIsOpen] = useState(false);

    // 상태 토글
    const toggleAnswer = () => {
        setIsOpen((prev)=>!prev);
    }
    
    return (
            <S.Wrap>
                <S.Div>
                    <S.H2>자주하는 질문</S.H2>
                    <S.P>고객님들이 가장 자주하시는 질문을 모았습니다.</S.P>
                </S.Div>

                <S.T_wrapper>
                    <table className='faqTable'>
                        <thead>
                            <tr>
                                <td>번호</td>
                                <td>제목</td>
                            </tr>
                        </thead>

                        <tbody>
                            {/* 클릭시 토글 이벤트 발생 */}
                            <tr onClick={toggleAnswer}>
                                <td>1</td>
                                <td>
                                    <div>
                                        교환/반품 진행 시, 배송비가 부과 되나요?
                                        {isOpen&&(
                                        <div className='answer'>
                                            -단순변심에 의한 교환/반품 시 배송비 6,000원을 고객님께서 부담하셔야 합니다.
                                        </div>
                                        )}
                                    </div>
                                </td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td>교환/반품 진행 시, 배송비가 부과 되나요?</td>
                            </tr>
                        </tbody>
                    </table>

                    <S.A_Div>
                        <Arrow></Arrow>
                    </S.A_Div>
                </S.T_wrapper>
            </S.Wrap>
    );
};

export default Tab2;