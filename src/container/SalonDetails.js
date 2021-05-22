import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import decode from 'jwt-decode';
import { fetchItemDetail } from '../api/fetchItems';
import ItemDetails from '../components/ItemDetails';
import { bookAppointment } from '../api/authUserRequest';
import BookAppointment from '../components/BookAppointment';
import { addAppointments } from '../redux/actions';

const SalonDetails = () => {
  const item = useSelector((state) => state.item.item);
  const history = useHistory();
  const { id } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchItemDetail(id);
  }, []);

  const handleBookAppointment = async (date, userId, branch) => {
    try {
      const response = await bookAppointment(date, id, userId, branch);
      if (response.status === 'Created') {
        setMessage('Successfully Booked your Appointment');
        addAppointments(response);
        history.push('/appointments');
      } else {
        setMessage(response.message);
      }
    } catch {
      setMessage('Sorry, Couldn\'t book your Appointment');
    }
  };

  const handleSubmit = (date, branch) => {
    if (localStorage.token) {
      const decodedToken = decode(localStorage.token);
      const { userId } = decodedToken;
      handleBookAppointment(date, userId, branch);
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

export default SalonDetails;
