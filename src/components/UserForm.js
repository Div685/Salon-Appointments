import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ handleSubmit, btnName }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(userName, password);
  };

  return (
    <div className="form__section">
      <form className="form" onSubmit={onSubmitForm}>
        <input
          className="form__input"
          placeholder="Username"
          type="text"
          name="username"
          value={userName}
          onChange={(event) => { setUserName(event.target.value); }}
        />
        <input
          className="form__input"
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => { setPassword(event.target.value); }}
        />

        <button type="submit" className="btn__login">{btnName}</button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
};

export default UserForm;
