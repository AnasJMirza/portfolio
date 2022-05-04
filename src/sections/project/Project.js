import React from 'react';
import './Project.css'
import { projectOneDesc } from '../../constants/ProjectCardConstant';
import PageHeading from '../../components/pageHeading/PageHeading';
import ProjectCard from '../../components/projectCard/ProjectCard';
import netflix from '../../images/netflix.PNG'
import tesla from '../../images/tesla-clone.PNG'


const Project = () => {
    return (
        <div className='projectMainDiv'>
            
            
            <div className='projectHeading' id='project'>
                <PageHeading title="Side Projects"/>
            </div>

            <div>
                <ProjectCard heading="Netflix Clone" desc={projectOneDesc} link="https://netflixclonebyanas.surge.sh/" img={netflix} />
            </div>

            <div>
                <ProjectCard heading="Tesla Clone" desc={projectOneDesc} link="http://teslaclonebyanas.surge.sh/" img={tesla} />
            </div>
            
            
        </div>
    );
};

export default Project;