import React from 'react';
import './About.css'
import anas from '../../images/anas.png'
import anas1 from '../../images/anas-1.png'
import PageHeading from '../../components/pageHeading/PageHeading';
import { Grid } from '@mui/material';


const About = () => {
    return (
        <div className='aboutSection' >
            <div className='aboutHeading' id='about'>
                <PageHeading title="About" />
            </div>

            <div className='aboutContentWrapper'>
                <Grid container>
                    <Grid item md={4}>
                        <div className='aboutImgWrapper'>
                            <img src={anas1} width="55%"/>
                        </div>
                    </Grid>

                    <Grid item md={8} container alignItems={"center"}>
                    <div className='aboutTextWrapper'>
                        <div>
                            <p className='aboutText'>Hi, I'm Anas J Mirza, a self-taught passionate FrontEnd developer from Pakistan, currently doing Bachelor's in <b>Computer Science</b> from <b> Riphah International University </b>. I've been building stuff on the web and mobiles from last <b> two years </b>, I've made many side projects and I also posses magical powers of using react to build delightful user interfaces.</p>

                            <p className='aboutText'>I also love learning new technologies, Besides that I love to <b> share  my knowlege </b> that I have in this domain to other people. In my free time I play guitar and do some sports.</p>
                        </div>
                    </div>        
                    </Grid>
                </Grid>

                
                
                
                
            </div>
        </div>
    );
};

export default About;