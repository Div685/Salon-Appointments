import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import decode from 'jwt-decode';
import cookie from 'react-cookies';
import PropTypes from 'prop-types';
import { fetchItemDetail } from '../api/fetchItems';
import ItemDetails from '../components/ItemDetails';
import { bookAppointment } from '../api/authUserRequest';
import BookAppointment from '../components/BookAppointment';
import { addAppointments } from '../redux/actions';

const SalonDetails = ({ addAppointments, history }) => {
  const item = useSelector((state) => state.item.item);
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    fetchItemDetail(id);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleBookAppointment = async (date, userId, branch) => {
    try {
      const response = await bookAppointment(date, id, userId, branch);
      if (isMounted && response.status === 'created') {
        setMessage('Successfully Booked your Appointment');
        addAppointments(response.appointments);
      } else {
        setMessage(response.message);
      }
    } catch {
      setMessage('Sorry, Couldn\'t book your Appointment');
    }
  };

  const handleSubmit = (date, branch) => {
    if (cookie.load('token')) {
      const decodedToken = decode(cookie.load('token'));
      const { userId } = decodedToken;
      handleBookAppointment(date, userId, branch);
      history.push('/appointments');
    } else {
      setMessage('Please Login to Book an Appointment');
    }
  };

  const disablePastDate = () => {
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    const year = new Date().getFullYear();
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    return `${year}-${month}-${day}T00:00`.toString();
  };

  const heatMap = () => (
    <div className="heatmap__details">
      <div className="heatmap__details-up">
        <div className="heatmap__details-img" />
        <div>
          <div className="heatmap__details-title" />
          <div className="heatmap__details-title" />
          <div className="heatmap__details-title" />
        </div>
      </div>

      <div className="heatmap__appointment">
        <div className="title1" />
        <div className="title2" />
        <div className="title3" />
      </div>
    </div>
  );

  return (
    <div>
      {message && <p className="error-msg d-flex p-3 justify-content-center bg-danger text-white">{message}</p>}
      {
        item
          ? (
            <>
              <ItemDetails item={item} />
              <BookAppointment handleSubmit={handleSubmit} prevDate={disablePastDate} />
            </>
          )
          : (heatMap())
      }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addAppointments: (appointment) => dispatch(addAppointments(appointment)),
});

SalonDetails.propTypes = {
  history: PropTypes.instanceOf(Object),
  addAppointments: PropTypes.func,
};

SalonDetails.defaultProps = {
  history: null,
  addAppointments: null,
};

export default connect(null, mapDispatchToProps)(SalonDetails);
