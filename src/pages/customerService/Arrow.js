import React, { useEffect, useState } from 'react';
import S from './style';
import left from './img/left.svg'
import right from './img/right.svg'

const Arrow = () => {

    // onClick시 버튼 색 변경
    const [clickColor,setClickColor] = useState("one");

    useEffect(()=>{
        setClickColor("one")
    },[setClickColor])

    return (
        <S.A_Button>
            <button><img src={left} alt="left" /></button>
            <button className={clickColor === "one" ? "active" : "" } onClick={()=>setClickColor('one')}>1</button>
            <button className={clickColor === "two" ? "active" : "" } onClick={()=>setClickColor('two')}>2</button>
            <button className={clickColor === "three" ? "active" : "" } onClick={()=>setClickColor('three')}>3</button>
            <button><img src={right} alt="right" /></button>
        </S.A_Button>
    );
};

export default Arrow;

