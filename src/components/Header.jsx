import React from 'react';
import logo from '../images/logo.svg';

function Header() {
    return (
        <header className='header'>
        <img src={logo} alt='logo'/>
        <div className='heading'>Облачные сервисы</div>
        {/* <a href='#' className='documentation'>Документация</a> */}
        </header>
    );
};

export default Header;