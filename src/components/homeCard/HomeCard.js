import React from 'react';
import './HomeCard.css'
import CodeIcon from '@mui/icons-material/Code';
import js from '../../sections/home/js.png'
import BrushIcon from '@mui/icons-material/Brush';


const HomeCard = (props) => {
    return (
        <div className='homeCardBody'>
            <div className='homeCardIcon'>
                {props.code ? <CodeIcon sx={{ fontSize: 40 }}/> : props.js ? <img src={js} width="40%"/> : <BrushIcon sx={{ fontSize: 40 }}/>}
            </div>
            <div className='homeCardHeading'>
                {props.heading}
            </div>
            <div className='homeCardDesc'>
                {props.desc}
            </div>
        </div>
    );
};

export default HomeCard;