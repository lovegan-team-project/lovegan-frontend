import React, { useState } from 'react';
import { ScrapButtonBlack } from './style';
import scrapBlack from './image/scrapBlack.svg';

const ScrapBlack = () => {

    const [scrapClick, setScrapClick] = useState("#fff")
    const [scrapStroke, setScrapStroke] = useState("#333")
    const scrapColor = () => {
        setScrapClick(prevColor => (prevColor === '#fff' ? '#F27830' : '#fff'))
        setScrapStroke(prevStroke => (prevStroke === '#333' ? '#939393' : '#333'))
    }
    
    return (
        <ScrapButtonBlack src={scrapBlack} onClick={scrapColor} color={scrapClick} stroke={scrapStroke} />
    );
};

export default ScrapBlack;