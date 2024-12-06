import React, { useEffect, useState } from 'react';
import S from './style';
import left from './img/left.svg'
import right from './img/right.svg'

const Arrow = () => {

    // onClick시 버튼 색 변경
    const [nextClick,setNextClick] = useState("one");

    useEffect(()=>{
        setNextClick("one")
    },[setNextClick])

    return (
        <S.nextPage>
                <img className='left' src={left} />
                <button className={nextClick === "one" ? "click" : "unClick"} onClick={()=>setNextClick("one")}><p>1</p></button>
                <button className={nextClick === "two" ? "click" : "unClick"} onClick={()=>setNextClick("two")}><p>2</p></button>
                <button className={nextClick === "three" ? "click" : "unClick"} onClick={()=>setNextClick("three")}><p>3</p></button>
                <button className={nextClick === "four" ? "click" : "unClick"} onClick={()=>setNextClick("four")}><p>4</p></button>
                <button className={nextClick === "five" ? "click" : "unClick"} onClick={()=>setNextClick("five")}><p>5</p></button>
                <img className='right' src={right} />
        </S.nextPage>
    );
};

export default Arrow;

