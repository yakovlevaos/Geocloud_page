import React from 'react';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <div className="heading">Облачные сервисы</div>
    </header>
  );
}

export default Header;
