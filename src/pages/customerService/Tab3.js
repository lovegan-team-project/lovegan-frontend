import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton';
import Arrow from './Arrow';

const Tab3 = () => {

    // onClick시 버튼 색 변경
    const [clickColor,setClickColor] = useState("color");

    useEffect(()=>{
        setClickColor("color")
    },[setClickColor])

    return (
            <S.Wrap>
                <S.Div>
                    <S.H2>1:1 문의</S.H2>
                    <S.P>고객님의 문의사항을 남겨주세요.</S.P>
                    <Link to="/customer/quest/register"><S.C_Button className={clickColor === "color" ? "active" : "" } onClick={()=>{setClickColor("color")}}>글 작성</S.C_Button></Link>
                    
                </S.Div>

                <S.T_wrapper>
                    <table>
                        <thead>
                            <tr>
                                <td>번호</td>
                                <td>제목</td>
                                <td>작성자</td>
                                <td>작성일</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
                            </tr>

                            <tr >
                                <td>1</td>
                                <td><Link to="/customer/quest">배송문의</Link></td>
                                <td>LOVEgan</td>
                                <td>2024.09.01</td>
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

export default Tab3;