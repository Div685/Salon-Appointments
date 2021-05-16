/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
  const [toggleNavClass, setToggleNavClass] = useState('');

  const handleToggle = (event) => {
    setToggleNavClass(toggleNavClass === ' active' ? '' : ' active');
  };

  const closeToggle = () => {
    setToggleNavClass('');
  };

  return (
    <header className="d-flex justify-content-between p-2 align-items-center">
      <div className="nav__logo">BookMySalon</div>
      <div className="nav__toggle">
        <button type="button" className={`header_button${toggleNavClass}`} onClick={handleToggle}>
          <MenuIcon />
        </button>
      </div>
      <nav className={`nav${toggleNavClass}`}>
        <NavLink exact to="/items" onClick={closeToggle}>Items</NavLink>
        <NavLink exact to="/" onClick={closeToggle}>LifeStyle</NavLink>
        <NavLink exact to="/" onClick={closeToggle}>Shop</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
