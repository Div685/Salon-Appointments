import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logIn, signUp } from '../redux/actions';

const LogOutBtn = ({ logIn, signUp }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    logIn(false);
    signUp({});
  };
  return (
    <button type="button" onClick={handleLogout} className="btn btn-primary">Logout</button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (status) => dispatch(logIn(status)),
  signUp: (user) => dispatch(signUp(user)),
});

LogOutBtn.propTypes = {
  logIn: PropTypes.func,
  signUp: PropTypes.func,
};

LogOutBtn.defaultProps = {
  logIn: null,
  signUp: null,
};

export default connect(undefined, mapDispatchToProps)(LogOutBtn);
