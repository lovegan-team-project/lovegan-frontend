import React from 'react';

const Main = () => {
    return (
        <div className='wrapper'>
            <img src={process.env.PUBLIC_URL + "/images/main/main01.png"} alt='메인이미지 1'>
            </img>
        </div>
    );
};

export default Main;