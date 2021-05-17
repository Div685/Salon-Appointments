import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookAppointment = ({ handleSubmit }) => {
  const [date, setDate] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(date);
  };

  return (
    <div className="bookAppointment">
      <form className="appointmentForm" onSubmit={onSubmitForm}>
        <input
          className="form-control w-100 col-md-8 col-lg-4"
          type="datetime-local"
          onChange={(event) => { setDate(event.target.value); }}
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

BookAppointment.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default BookAppointment;
