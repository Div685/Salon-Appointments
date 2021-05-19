import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOutBtn from './LogOutBtn';

const Home = ({ loginUser }) => (
  <div>
    <div className="content">
      <h1>Welcome to the Salon</h1>
      { loginUser ? <LogOutBtn /> : (
        <div className="userLoginSignup">
          <Link to="/login" className="btn mb2 dark">Login</Link>
          <Link to="/signup" className="btn mb2 medium">Signup</Link>
        </div>
      )}
    </div>

  </div>
);
Home.propTypes = {
  loginUser: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loginUser: state.user.logIn,
});

export default connect(mapStateToProps)(Home);
