import React from 'react';
import './Home.css'
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/button/Button';
import resume from '../../Resume-1.1.png'
import PageHeading from '../../components/pageHeading/PageHeading';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeCard from '../../components/homeCard/HomeCard';

const Home = () => {
    return (
        <div>
            <Navbar/>

            <div className='homeBG' id='home'>
                <div className='homeText'>

                    <p className='homeGreetings'>Hello I'm</p>
                    <p className='homeName'>Muhammad Anas</p>
                    <p className='homeDesc'>React-JS Developer</p>

                    <div className='homeButton'>
                        <a href={resume} download className='textDecoration'><Button title="Download Resume"/></a>
                    </div>

                    <div className='homeIconsWrapper'>
                        <a href='https://github.com/AnasJMirza' target={"_blank"} className='homeIcon'>
                            <GitHubIcon />
                        </a>
                        <a href='https://twitter.com/AnasJMirza' target={"_blank"} className='homeIcon'>
                            <TwitterIcon/>
                        </a>
                        <a href='https://www.instagram.com/anas.codes/' target={"_blank"} className='homeIcon'>
                            <InstagramIcon/>
                        </a>
                    </div>

                </div>

                <PageHeading  title="Things I Love"/>

                <div className='homeCardWrapper'>
                
                    <div className='homeCard'>
                        <HomeCard heading='FrontEnd' desc="I'm more front end focused and love to work with Reactjs as well as pure HTML, CSS." code={true} js={false} />
                    </div>

                    <div className='homeCard'>
                        <HomeCard heading='JavaScript' desc="I just extremely love javascript, I can’t even express how much I love javascript with just a few lines." code={false} js={true}/>
                    </div>
                    
                    <div className='homeCard'>
                        <HomeCard heading='Craetive Coding' desc="I love creative coding because I do both coding & designing. making beautiful art with code is very satisfying to me."/>
                    </div>
                </div>

            </div>

            
        </div>
    );
};

export default Home;