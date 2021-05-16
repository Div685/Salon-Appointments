import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signedUp } from '../api/authUserRequest';
import UserForm from '../components/UserForm';
import { signUp, logIn } from '../redux/actions';

const SignUp = ({
  signUp, logIn, history, loginUser,
}) => {
  const [message, setMessage] = useState([]);

  const handleSignUp = async (userName, password) => {
    try {
      const response = await signedUp(userName, password);
      if (response.status === 'created') {
        setMessage(['SuccessFully Created User!']);
        localStorage.setItem('token', response.token);
        signUp(response.user);
        logIn(true);
        history.push('/items');
      } else {
        setMessage(response.message);
      }
    } catch {
      setMessage(['Sorry, Signup failed ']);
    }
  };

  const handleSubmit = (userName, password) => {
    handleSignUp(userName, password);
  };

  return loginUser ? <Redirect to="/items" /> : (
    <div>
      {message && message.map((msg) => (<p key={msg}>{msg}</p>))}
      <h2>Sign up</h2>
      <UserForm handleSubmit={handleSubmit} btnName="Sign Up" />
      <Link to="/" className="btn">Home</Link>
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
  logIn: PropTypes.bool,
  signUp: PropTypes.func,
  loginUser: PropTypes.bool.isRequired,
};

SignUp.defaultProps = {
  history: null,
  logIn: null,
  signUp: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
