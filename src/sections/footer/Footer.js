import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerBody'>
            <i className='logo'>
                AJM
            </i>
            <div className='endLine'>
                Made with love ❤ and <span className='footerReact'>REACT</span> By <span className='footerName'>Anas J Mirza.</span>
            </div>
        </div>
    );
};

export default Footer;