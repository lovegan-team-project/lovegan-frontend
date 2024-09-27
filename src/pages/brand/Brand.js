import React, { useEffect, useState, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ReactComponent as Logo } from './images/brandLogo.svg';
import { ReactComponent as Page1 } from './images/brand1.svg';
import { ReactComponent as Page2 } from './images/brand2.svg';
import { ReactComponent as Page3 } from './images/brand3.svg';
import S from './style';

const Brand = () => {
    useEffect(() => {
        Aos.init(); 
    }, []);

    const txt = `비건을 시작하는 사람들부터 오랜 비건 생활을 해온 사람들, 그리고 환경을 사랑하는 모든 사람들을 위한 
    자연 친화적인 제품을 제공하는 동시에, 건강하고 행복한 삶을 모두 함께 영위할 수 있도록 응원합니다.
    \n\n\n\nLOVEgan과 함께, 더 나은 세상을 위한 작은 실천을 시작하세요.`;

    const [text, setText] = useState("");  
    const [count, setCount] = useState(0);  
    const [startTyping, setStartTyping] = useState(false);  

    const page3Ref = useRef();  

    useEffect(() => {
        if (startTyping) {
            const textInterval = setInterval(() => {
                setText((prev) => prev + txt[count]);  // 타이핑할 텍스트 추가
                setCount((prev) => prev + 1);  // 글자 수 업데이트
            }, 90);

            if (count === txt.length) {  // 모든 텍스트가 타이핑되면 타이머 해제
                clearInterval(textInterval);
            }

            return () => clearInterval(textInterval);  
        }
    }, [count, startTyping, txt]);

    useEffect(() => {

        const observerCallback = (entries, observer) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setStartTyping(true);  // Page3가 보이면 타이핑 시작
                observer.disconnect();  // 옵저버 해제
            }
        };


        const observer = new IntersectionObserver(observerCallback);

        if (page3Ref.current) {
            observer.observe(page3Ref.current);  // Page3 요소가 화면에 보이는지 감지 시작
        }

        return () => observer.disconnect();  // 컴포넌트 언마운트 시 옵저버 해제

    }, []);

    return (
        <>
            <S.Div1 data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
                <Logo />
            </S.Div1>
            <S.Div2 data-aos="zoom-in" data-aos-delay="300">
                <Page1 />
            </S.Div2>
            <S.Div2 data-aos="zoom-in" data-aos-delay="400">
                <Page2 />
            </S.Div2>
            <S.Div2 ref={page3Ref} data-aos="zoom-in" data-aos-delay="450">
                <Page3 />
            </S.Div2>
            <S.Div3 data-aos="zoom-in" data-aos-delay="50000" data-aos-duration="30000">
                <p>{text}</p>
            </S.Div3> 
       </>
    );
};

export default Brand;
