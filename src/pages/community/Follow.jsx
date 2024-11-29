import React, { useState } from 'react';

const Follow = () => {

    const [isFollow, setIsFollow] = useState('#03A63C')
    const followColorChange = () => {
        if(isFollow === "#03A63C"){
            setIsFollow("#D9D9D9")
        } else {
            setIsFollow("#03A63C")
        }
    }

    return (
        <div>
            <p onClick={followColorChange} style={{color : isFollow}}>팔로우</p>
        </div>
    );
};

export default Follow;