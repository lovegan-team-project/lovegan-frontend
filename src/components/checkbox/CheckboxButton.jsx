import React from 'react';
import CheckedBox from './style';

const CheckboxButton = ({children, variant, shape, boxSize, checkColor, ...rest}) => {
    
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckedBoxChange = () => {
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

export default CheckboxButton;