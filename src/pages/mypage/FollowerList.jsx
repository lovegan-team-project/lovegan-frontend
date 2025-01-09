import React from 'react';
import FS from './followStyle.js';
import profile1 from './images/profile1.png'
import profile2 from './images/profile2.png'
import profile3 from './images/profile3.png'
import profile4 from './images/profile4.png'
import profile5 from './images/profile5.png'
import profile6 from './images/profile6.png'
import more from './icons/more.svg';
import plus from './icons/plus.svg';
import checkSmall from './icons/check-small.svg';
import FollowButton from './FollowButton.jsx';

const FollowerList = () => {
    return (
        <>
            <FS.FollowHeader>
                <div>사용자 정보</div>
                <div>최근 업로드</div>
                <div>상태</div>
            </FS.FollowHeader>
            <FS.FollowData>
                <div className='profile-img-wrapper'><img src={profile3} alt="" /></div>
                <div>유저 닉네임</div>
                <div>유저 한 줄 소개</div>
                <div>2024년 10월 24일</div>
                <div className='wrapper'>
                    <div>
                        <FollowButton initialFollowing={false} />
                    </div>
                    <img src={more} alt="" />
                </div>
            </FS.FollowData>
            <FS.FollowData>
                <div className='profile-img-wrapper'><img src={profile6} alt="" /></div>
                <div>유저 닉네임</div>
                <div>유저 한 줄 소개</div>
                <div>2024년 10월 24일</div>
                <div className='wrapper'>
                    <div>
                        <FollowButton initialFollowing={false} />
                    </div>
                    <img src={more} alt="" />
                </div>
            </FS.FollowData>
            <FS.FollowData>
                <div className='profile-img-wrapper'><img src={profile1} alt="" /></div>
                <div>유저 닉네임</div>
                <div>유저 한 줄 소개</div>
                <div>2024년 10월 24일</div>
                <div className='wrapper'>
                    <div>
                        <FollowButton initialFollowing={false} />
                    </div>
                    <img src={more} alt="" />
                </div>
            </FS.FollowData>
            <FS.FollowData>
                <div className='profile-img-wrapper'><img src={profile2} alt="" /></div>
                <div>유저 닉네임</div>
                <div>유저 한 줄 소개</div>
                <div>2024년 10월 24일</div>
                <div className='wrapper'>
                    <div>
                        <FollowButton initialFollowing={false} />
                    </div>
                    <img src={more} alt="" />
                </div>
            </FS.FollowData>
            <FS.FollowData>
                <div className='profile-img-wrapper'><img src={profile5} alt="" /></div>
                <div>유저 닉네임</div>
                <div>유저 한 줄 소개</div>
                <div>2024년 10월 24일</div>
                <div className='wrapper'>
                    <div>
                        <FollowButton initialFollowing={false} />
                    </div>
                    <img src={more} alt="" />
                </div>
            </FS.FollowData>
            <FS.FollowData>
                <div className='profile-img-wrapper'><img src={profile4} alt="" /></div>
                <div>유저 닉네임</div>
                <div>유저 한 줄 소개</div>
                <div>2024년 10월 24일</div>
                <div className='wrapper'>
                    <div>
                        <FollowButton initialFollowing={false} />
                    </div>
                    <img src={more} alt="" />
                </div>
            </FS.FollowData>
        </>
    );
};

export default FollowerList;