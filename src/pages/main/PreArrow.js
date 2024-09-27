import React from 'react';
import { ReactComponent as ArrowPre } from './images/prevArrow.svg'

const PreArrow = ({onClick}) => {
    return (
        <div onClick={onClick} style={{cursor : 'pointer', position : 'absolute', left : '1296px', bottom : '42px', zIndex:1}}>
            <ArrowPre />
        </div>
    );
};

export default PreArrow;