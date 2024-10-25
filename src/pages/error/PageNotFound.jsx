import React from 'react';
import { Link } from 'react-router-dom';
import error from './img/error.svg'
import S from './style';

const PageNotFound = () => {
    return (
        <div>
            <S.wrapper>
                <img src={error} alt="error_logo" />
                <h2>원하시는 페이지를 찾을 수 없습니다.</h2>
                <p>찾으려는 페이지의 주소가 잘못 입력되었거나,<br />주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다. <br /> 입력하신 페이지의 주소가 정확한지 다시 한 번 확인해 주세요.</p>
                <Link className='main' to={"/"}>LOVEgan 홈 바로가기</Link>
            </S.wrapper>
        </div>
    );
};

export default PageNotFound;