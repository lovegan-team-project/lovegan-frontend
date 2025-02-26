import React, { useEffect, useState } from 'react';
import PS from './postsStyle.js';
import S from './style.js';
import post1 from './images/post1.png';
import post2 from './images/post2.png';
import post3 from './images/post3.png';
import post4 from './images/post4.png';
import post5 from './images/post5.png';
import ScrapBt from '../../components/scrapButton/ScrapBt.jsx';
import { useSelector } from 'react-redux';


const Scrap = () => {

    const currentUser = useSelector((state) => state.user.currentUser);

    const [myScraps, setMyScraps] = useState([]);
    const [isMyScrapsUpdate, setIsMyScrapsUpdate] = useState(false);

    const getMyScraps = async (email) => {
        try {
            const response = await fetch(`http://localhost:8000/community/getMyScraps`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }), // 이메일을 body에 포함
            });

            // 응답 상태가 성공적인 경우에만 JSON 파싱
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setMyScraps(data.myScraps);
                    setIsMyScrapsUpdate(true);
                    console.log(myScraps)
                } else {
                    alert(data.message);
                }
            } else {
                alert(response.status);
            }
        } catch (error) {
            console.error("Error fetching shipping list:", error);
            alert(`내가 스크랩한 게시물을 불러오는 데 오류가 발생했습니다. (${error.message})`);
        }
    }

    useEffect(() => {
        if (currentUser?.email) { // currentUser가 null이 아닐 때만 실행
            getMyScraps(currentUser.email);
        }
      }, [currentUser, isMyScrapsUpdate])

    return (
        <>
            <S.ContentTitle>스크랩</S.ContentTitle>
            <PS.ContentWrapper>
                {myScraps.length > 0 ? (
                    myScraps.map((scrap, index) => (
                        <PS.Content key={scrap._id || index}>
                            <div className='scrap-btn-wrapper'>
                                <ScrapBt postId={scrap._id} isScrapped={true}/>
                            </div>
                            <p className='post-user-nickname'>{scrap.author.nickname || '알 수 없음'}</p>
                            <img 
                                src={post1} 
                                alt={''} 
                            />
                            <p className='post-title'>{scrap.title}</p>
                        </PS.Content>
                    ))
                ) : (
                    <p>스크랩한 게시물이 없습니다.</p>
                )}
            </PS.ContentWrapper>
        </>
    );
};

export default Scrap;
