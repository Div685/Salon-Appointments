import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import LogOutBtn from './LogOutBtn';

const NavBar = () => {
  const [toggleNavClass, setToggleNavClass] = useState('');

  const isLoggedIn = useSelector((state) => state.user.logIn);
  const user = useSelector((state) => state.user);

  const handleToggle = () => {
    setToggleNavClass(toggleNavClass === ' active' ? '' : ' active');
  };

  const closeToggle = () => {
    setToggleNavClass('');
  };

  return (
    <header className="d-flex justify-content-between p-2 align-items-center">
      <div className="nav__logo">
        <Link to="/">
          BookMySalon
        </Link>
      </div>
      <div className="nav__toggle">
        <button type="button" className={`header_button${toggleNavClass}`} onClick={handleToggle}>
          <MenuIcon />
        </button>
      </div>
      <nav className={`nav${toggleNavClass}`}>
        {isLoggedIn ? (
          <>
            <span>{`Welcome ${user.user.username}`}</span>
            <NavLink exact to="/items" onClick={closeToggle}>Items</NavLink>
            <NavLink exact to="/" onClick={closeToggle}>LifeStyle</NavLink>
            <NavLink exact to="/" onClick={closeToggle}>Shop</NavLink>
            <LogOutBtn />
          </>
        ) : (
          <>
            <NavLink exact to="/login" onClick={closeToggle}>Login</NavLink>
            <NavLink exact to="/signup" onClick={closeToggle}>Sing Up</NavLink>
          </>
        ) }
      </nav>
    </header>
  );
};

NavBar.defaultProps = {
  user: {},
};

export default NavBar;
