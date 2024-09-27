import React from 'react';
import { ReactComponent as ArrowNext}  from './images/nextArrow.svg'

const NextArrow = ({onClick}) => {
    return (
        <div
            onClick={onClick} style={{cursor : 'pointer', position: 'absolute', right : '40px', bottom : '42px', zIndex: 1}}
        >
            <ArrowNext />
        </div>
    );
};

export default NextArrow;