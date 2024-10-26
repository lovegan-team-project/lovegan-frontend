import React from 'react';
import Button from './style';


const BasicButton = ({size, background,children, ...rest}) => {
    return (
        <div>
            <Button size={size} background={background} {...rest}>
                {children}
            </Button>
        </div>
    );
};

export default BasicButton;