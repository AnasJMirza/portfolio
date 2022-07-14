import React from 'react';
import './Project.css'
import { projectOneDesc, projectTwoDesc, projectThreeDesc } from '../../constants/ProjectCardConstant';
import PageHeading from '../../components/pageHeading/PageHeading';
import ProjectCard from '../../components/projectCard/ProjectCard';
import netflix from '../../images/netflix.PNG'
import tesla from '../../images/tesla-clone.PNG'
import disneyplus from '../../images/disneyplus.jpg'


const Project = () => {
    return (
        <div className='projectMainDiv'>
            
            
            <div className='projectHeading' id='project'>
                <PageHeading title="Side Projects"/>
            </div>

            <div>
                <ProjectCard heading="DisneyPlus Clone" desc={projectOneDesc} link="https://disneyplus-clone-f00a7.web.app/" img={disneyplus} />
            </div>

            <div>
                <ProjectCard heading="Netflix Clone" desc={projectTwoDesc} link="https://netflixclonebyanas.surge.sh/" img={netflix} />
            </div>

            <div>
                <ProjectCard heading="Tesla Clone" desc={projectThreeDesc} link="http://teslaclonebyanas.surge.sh/" img={tesla} />
            </div>            
            
        </div>
    );
};

export default Project;