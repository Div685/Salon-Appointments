import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { branches } from '../redux/actions/actionTypes';

const BookAppointment = ({ handleSubmit }) => {
  const [date, setDate] = useState('');
  const [branch, setBranch] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(date, branch);
  };

  return (
    <div className="bookAppointment">
      <form className="appointmentForm" onSubmit={onSubmitForm}>
        <input
          className="form-control w-100 col-md-8 col-lg-4"
          type="datetime-local"
          onChange={(event) => { setDate(event.target.value); }}
        />
        <select
          name="filter"
          onChange={(event) => { setBranch(event.target.value); }}
          id="filter"
        >
          {
          branches.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))
          }
        </select>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

BookAppointment.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default BookAppointment;
