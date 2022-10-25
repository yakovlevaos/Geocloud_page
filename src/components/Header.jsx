import React from 'react';
import logo from '../assets/images/cloud.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" width="80px" />
      <div className="heading">Облачные сервисы</div>
    </header>
  );
}

export default Header;
