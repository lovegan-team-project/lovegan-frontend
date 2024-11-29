import React, { useState } from 'react';
import scrap from './image/scrap.svg';
import { ScrapButtonCmAll } from './style';

const ScrapBt = () => {

    const [scrapColor, setScrapColor] = useState('#fff')
    const [scrapStroke, setScrapStroke] = useState('#fff')
    const [scrapOpacity, setScrapOpacity] = useState(true)

    const scrapChange = () => {
        setScrapColor(prevColor => (prevColor === '#fff' ? '#F27830' : '#fff'))
        setScrapStroke(prevStroe => (prevStroe === '#fff' ? '#F27830' : '#fff'))
        setScrapOpacity(prevOpacity => (!prevOpacity ))
    }

    return (
        <ScrapButtonCmAll src={scrap} onClick={scrapChange} color={scrapColor} stroke={scrapStroke} opacity={scrapOpacity}/>
    );
};

export default ScrapBt;