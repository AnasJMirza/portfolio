import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <a href={props.link} target="_blank" className='linkRemover'>
            <div className='btn'>
                {props.title}
            </div>
        </a>
    );
};

export default Button;