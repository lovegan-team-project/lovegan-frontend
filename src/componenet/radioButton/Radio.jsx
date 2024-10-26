import React, { useState } from 'react';
import RadioButton from './style';

const Radio = ({children, variant, shape, boxSize, ...rest}) => {

    const [isClickRadio, setIsClickRadio] = useState(false);
    const [isChecked, setIsChecked] = useState(false); 

    const handleRadioChange = () => {
        setIsClickRadio(!isClickRadio)
    }

    return (
        <RadioButton
            variant={variant}
            shape={shape}
            boxSize={boxSize}
            checked={isClickRadio}
            onChange={handleRadioChange}
            {...rest}
        >
            {children}
        </RadioButton>
    );
};

export default Radio;