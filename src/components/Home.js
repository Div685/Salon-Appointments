import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import LogOutBtn from './LogOutBtn';

const Home = () => {
  const loginUser = useSelector((state) => state.user.logIn);
  return (
    <div>
      <div className="content">
        <h1>Welcome to the Salon</h1>
        { loginUser ? <LogOutBtn /> : (
          <div className="userLoginSignup">
            <button type="button">LogIn</button>
            <button type="button">SignUp</button>
          </div>
        )}
      </div>

    </div>
  );
};

Home.propTypes = {
  // loginUser: PropTypes.bool.isRequired,
};

// const mapStateToProps = (state) => ({

// });

// const mapDispatchToProps = {

// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
