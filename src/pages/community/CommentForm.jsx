import React, { useState } from 'react';

const CommentForm = ( {addList} ) => {

    const [value, setValue] = useState('');
    const handleChange  = e => {
        setValue(e.target.value);   
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(value.trim()) {
            addList({
                userid : '1',
                conent : value,
                date : new Date().toISOString().slice(0, 10),
                updateFlag : true
            });
            setValue('');
        }
    }

    return (
        <div>
            
        </div>
    );
};

export default CommentForm;