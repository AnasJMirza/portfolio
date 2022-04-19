import React from 'react';
import './Navbar.css'
import DragHandleSharpIcon from '@mui/icons-material/DragHandleSharp';

const Navbar = () => {
    return (
        <div className='navBackground'>
            <div className='navContent'>
                <div className='logoWrapper'>
                    <a href='#home' className='ajm'>AJM</a>
                    {/* <img src={logo} width={"50px"} className='logo' / > */}
                </div>

                <div className='navItemsWrapper'>
                    <a href='#home' className='navItem'>Home</a>
                    <a href='#about' className='navItem'>About</a>
                    <a href='#skills' className='navItem'>Skills</a>
                    <a href='#project' className='navItem'>Projects</a>
                    <a href='#contact' className='navItem'>Contact</a>
                </div>
                <div className='menuIcon'>
                    <DragHandleSharpIcon />
                </div>
            </div>
        </div>
    );
};

export default Navbar;