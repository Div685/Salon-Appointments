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

  const heatMap = () => (
    <div>
      <h1>
        Loading...
      </h1>
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
              <BookAppointment handleSubmit={handleSubmit} />
            </>
          )
          : (heatMap())
      }
    </div>
  );
};

export default SalonDetails;
