import React from 'react';
import './Project.css'
import { projectOneDesc } from '../../constants/ProjectCardConstant';
import PageHeading from '../../components/pageHeading/PageHeading';
import ProjectCard from '../../components/projectCard/ProjectCard';


const Project = () => {
    return (
        <div>
            
            
            <div className='projectHeading'>
                <PageHeading title="Side Projects"/>
            </div>

            <div>
                <ProjectCard heading="Tesla Clone" desc={projectOneDesc}/>
            </div>
            
            
        </div>
    );
};

export default Project;