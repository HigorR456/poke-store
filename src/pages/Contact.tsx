import React from 'react';
import Title from '../components/Title'
import NavBar from '../components/NavBar'

const Contact = () => {
    return (
        <>
            <header><Title /></header>

            <nav><NavBar /></nav>

             <h2>Contact Page</h2>
            
            <a style={{textDecoration: 'none', color: 'cyan', display: 'block'}} href='https://github.com/HigorR456'>GitHub</a>
            <a style={{textDecoration: 'none', color: 'cyan', display: 'block'}}href='https://codepen.io/Higor456/'>Codepen</a>
        
        </>
    );
};

export default Contact;