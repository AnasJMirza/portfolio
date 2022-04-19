import React from 'react';
import './Skills.css'
import html from '../../images/skill-html.png'
import css from '../../images/skill-css.png'
import js from '../../images/skill-JS.png'
import react from '../../images/skill-react.png'
import PageHeading from '../../components/pageHeading/PageHeading';

const Skills = () => {
    return (
        <div id='skills' className='skillSection'> 
            <div className='skillHeading'>
                <PageHeading title="My Skillset"/>
            </div>

            <div className='skillsLogoWrapper'>
                
                    <img className='skillsLogo' src={html}/>
                

                
                    <img className='skillsLogo' src={css}/>
                

                
                    <img src={js} className='skillsLogo'/>
                
                
                
                    <img className='skillsLogo' src={react}/> 
                
            </div>
        </div>
    );
};

export default Skills;