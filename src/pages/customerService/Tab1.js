import React from 'react';
import S from './style';

const Tab1 = () => {
    return (
        <div>
            <S.Wrap>
                <S.Div>
                    <S.H2>공지사항</S.H2>
                    <S.P>Lovegan의 새로운 소식들 유용한 정보들을 한곳에서 확인하세요.</S.P>
                </S.Div>

                <div>
                    <table>
                        <tr>
                            <td>번호</td>
                            <td>제목</td>
                            <td>작성자</td>
                            <td>작성일</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>[안내] 고객님들께 안내드립니다.</td>
                            <td>LOVEgan</td>
                            <td>2024.09.01</td>
                        </tr>
                    </table>
                </div>
            </S.Wrap>
        </div>
    );
};

export default Tab1;