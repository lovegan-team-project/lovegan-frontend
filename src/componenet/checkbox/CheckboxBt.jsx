import React, { useState } from 'react';
import CheckedBox from './style';

const CheckboxBt = ({children, variant, shape, boxSize, checkColor, ...rest}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckedboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
            <CheckedBox 
                variant={variant}
                shape={shape}
                boxSize={boxSize}
                checked={isChecked}
                onChange={handleCheckedboxChange}
                checkColor={checkColor}
                {...rest}
            >
                {children}
            </CheckedBox>
    );
};

export default CheckboxBt;
