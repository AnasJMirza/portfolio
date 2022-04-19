import React from 'react';
import './Project.css'
import PageHeading from '../../components/pageHeading/PageHeading';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Project = () => {
    return (
        <div>
            <div className='projectHeading'>
                <PageHeading title="Side Projects"/>
            </div>

            <div>
                <ProjectCard heading="Tesla Clone" desc="Build With React"/>
            </div>
        </div>
    );
};

export default Project;