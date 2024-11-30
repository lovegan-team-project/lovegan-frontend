import React from 'react';
import S from './style';
import Tab from './Tab';
import { useSearchParams } from 'react-router-dom';
import Register from './Register';
import Notice from './Notice';
import RegisterComplete from './RegisterComplete';

const CustomerService = () => {

    // 쿼리스트링 키값으로 페이지 이동
    const [searchParams] = useSearchParams();

    const details = searchParams.get("details");

    return (
        <>
            {/* 기본 고객센터 페이지 */}
            {details !== "register" && details !== "notice" && details !== "registerComplete" && (
            <S.Container>
                <Tab />
            </S.Container>
            )}

            {/* 공지사항 -> 제목 누르면 이동 */}
            {details == "notice" && (<Notice />) }

            {/* 1:1문의 -> 글 작성 버튼 누르면 이동 */}
            {details == "register" && (<Register />) }

            {/* 1:1문의 -> 제목 누르면 이동 */}
            {details == "registerComplete" && (<RegisterComplete />) }

        </>
        
    );
};

export default CustomerService;