import React from 'react';
import './PageHeading.css'

const PageHeading = (props) => {
    return (
        <div>
            <p className='pageHeading'>{props.title}</p>
        </div>
    );
};

export default PageHeading;