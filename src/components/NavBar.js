import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import { useSelector } from 'react-redux';
import LogOutBtn from './LogOutBtn';
import '../assets/css/NavBar.css';

const NavBar = () => {
  const [toggleNavClass, setToggleNavClass] = useState('');
  const [isClicked, setIsClicked] = useState(true);

  const isLoggedIn = useSelector((state) => state.user.logIn);
  const user = useSelector((state) => state.user);

  const changeButtonName = () => {
    setIsClicked(!isClicked);
  };

  const handleToggle = () => {
    setToggleNavClass(toggleNavClass === ' active' ? '' : ' active');
    changeButtonName();
  };

  const closeToggle = () => {
    setToggleNavClass('');
    changeButtonName();
  };

  return (
    <header className="header">
      <div className="nav__logo">
        <Link to="/">
          <h3>BookMySalon</h3>
        </Link>
      </div>
      <div className="nav__toggle">
        <button type="button" className={`header_button${toggleNavClass}`} onClick={handleToggle}>
          { isClicked ? (
            <MenuIcon />
          ) : (<CancelIcon />) }
        </button>
      </div>
      <nav className={`nav${toggleNavClass}`}>
        <div className="nav__logo-tab">
          <Link to="/">
            BookMySalon
          </Link>
        </div>
        {isLoggedIn ? (
          <div className="nav__items">
            <span>{`Welcome ${user.user.username}`}</span>
            <NavLink exact to="/items" activeClassName="selected" onClick={closeToggle}>Items</NavLink>
            <NavLink exact to="/appointments" activeClassName="selected" onClick={closeToggle}>Appointments</NavLink>
            <NavLink exact to="/" activeClassName="selected" onClick={closeToggle}>LifeStyle</NavLink>
            <NavLink exact to="/" activeClassName="selected" onClick={closeToggle}>Shop</NavLink>
            <LogOutBtn />
          </div>
        ) : (
          <div className="nav__auth">
            <NavLink exact to="/login" activeClassName="selected" onClick={closeToggle}>Login</NavLink>
            <NavLink exact to="/signup" activeClassName="selected" onClick={closeToggle}>Sing Up</NavLink>
          </div>
        ) }
      </nav>
    </header>
  );
};

NavBar.defaultProps = {
  user: {},
};

export default NavBar;
