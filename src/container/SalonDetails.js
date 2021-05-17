import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import decode from 'jwt-decode';
import { fetchItemDetail } from '../api/fetchItems';
import ItemDetails from '../components/ItemDetails';
import { bookAppointment } from '../api/authUserRequest';
import BookAppointment from '../components/BookAppointment';
import { addAppointments } from '../redux/actions';

const SalonDetails = () => {
  const item = useSelector((state) => state.item.item);
  const { id } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchItemDetail(id);
  }, []);

  const handleBookAppointment = async (date, userId) => {
    try {
      const response = await bookAppointment(date, id, userId);
      if (response.status === 'created') {
        setMessage('Successfully Booked your Appointment');
        addAppointments(response.appointments);
      } else {
        setMessage(response.message);
      }
    } catch {
      setMessage('Sorry, Couldn\'t book your Appointment');
    }
  };

  const handleSubmit = (date) => {
    if (localStorage.token) {
      const decodedToken = decode(localStorage.token);
      const { userId } = decodedToken;
      handleBookAppointment(date, userId);
    } else {
      setMessage('Please Login to Book an Appointment');
    }
  };

  const heatMap = () => {
    <div>
      <h1>
        Loading...
      </h1>
    </div>;
  };

  return (
    <div>
      {message && <p className="error-msg">{message}</p>}
      {
        item
          ? (
            <>
              <ItemDetails item={item} />
              <BookAppointment handleSubmit={handleSubmit} />
            </>
          )
          : (heatMap())
      }
    </div>
  );
};

export default SalonDetails;
