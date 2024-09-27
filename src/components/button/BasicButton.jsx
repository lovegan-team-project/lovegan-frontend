import React from 'react';
import Button from './style';


const BasicButton = ({size, background, ...rest}) => {
    return (
        <div>
            <Button size={size} background={background} {...rest}>
                {children}
            </Button>
        </div>
    );
};

export default BasicButton;