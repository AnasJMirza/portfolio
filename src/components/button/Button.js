import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div className='btn'>
            {props.title}
        </div>
    );
};

export default Button;