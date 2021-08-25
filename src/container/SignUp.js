import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cookie from 'react-cookies';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signedUp } from '../api/authUserRequest';
import UserForm from '../components/UserForm';
import { signUp, logIn } from '../redux/actions';

const SignUp = ({
  signUp, logIn, history, loginUser,
}) => {
  const [message, setMessage] = useState('');

  const handleSignUp = async (userName, password) => {
    try {
      const response = await signedUp(userName, password);
      if (response.status === 'created') {
        setMessage('SuccessFully Created User!');
        cookie.save('token', response.token);
        signUp(response.user);
        logIn(true);
        history.push('/items');
      } else {
        setMessage(response.message);
      }
    } catch {
      setMessage('Sorry, Signup failed ');
    }
  };

  const handleSubmit = (userName, password) => {
    handleSignUp(userName, password);
  };

  return loginUser ? <Redirect to="/items" /> : (
    <div className="LogIn">
      {message && <p className="error-msg d-flex p-3 justify-content-center bg-danger text-white">{message}</p>}
      <h2>Sign up</h2>
      <UserForm handleSubmit={handleSubmit} btnName="Sign Up" />
      <Link to="/login" className="btn__signup">Log in</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginUser: state.user.logIn,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  logIn: (status) => dispatch(logIn(status)),
});

SignUp.propTypes = {
  history: PropTypes.instanceOf(Object),
  logIn: PropTypes.func,
  signUp: PropTypes.func,
  loginUser: PropTypes.bool.isRequired,
};

SignUp.defaultProps = {
  history: null,
  logIn: null,
  signUp: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
