import React, { useState } from 'react';
import scrap from './image/scrap.svg';
import { ScrapButtonCmAll } from './style';

const ScrapBt = () => {
    const [scrapClick, setScrapClick] = useState("#fff")
    const [scrapOpacity, setScrapOpacity] = useState(true)
    const [hoverStrorke, setHoverStroke] = useState(true)
    const scrapColor = () => {
        setScrapClick(prevColor => (prevColor === '#fff' ? '#F27830' : '#fff'))
        setHoverStroke((prevStroke) => !prevStroke)
        setScrapOpacity((prevOpacity) => !prevOpacity);
        // if()
    }

    return (
        <ScrapButtonCmAll src={scrap} onClick={scrapColor} color={scrapClick} stroke={hoverStrorke} scrapOpacity={scrapOpacity}/>
    );
};

export default ScrapBt;