import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { branches } from '../redux/actions/actionTypes';

const BookAppointment = ({ handleSubmit, prevDate }) => {
  const [date, setDate] = useState('');
  const [branch, setBranch] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(date, branch);
  };

  return (
    <div className="bookAppointment">
      <h3>Book Appointment</h3>
      <span>Book an Appointment now and get 5% discount</span>
      <form className="appointmentForm" onSubmit={onSubmitForm}>
        <input
          className="form_control"
          type="datetime-local"
          onChange={(event) => { setDate(event.target.value); }}
          min={prevDate()}
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
  prevDate: PropTypes.func.isRequired,
};

export default BookAppointment;
