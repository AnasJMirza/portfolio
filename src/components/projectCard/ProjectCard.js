import React from 'react';
import Button from '../button/Button';
import './ProjectCard.css'

const ProjectCard = (props) => {
    return (
        <div className='projectCardBody'>
            <div className='projectCardHeading'>
                {props.heading}
            </div>
            <div className='projectCardDesc'>
                {props.desc}
            </div>
            <div>
                <Button title="Live Demo"/>
            </div>
        </div>
    );
};

export default ProjectCard;