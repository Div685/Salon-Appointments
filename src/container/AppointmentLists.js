import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUserAppointments } from '../api/fetchItems';
import AppointmentItem from '../components/AppointmentItem';
import { addAppointmentItems } from '../redux/actions';

const AppointmentLists = ({ appointments, addAppointmentItems }) => {
  const logInUser = useSelector((state) => state.user.logIn);

  const [error, setError] = useState('');

  const fetchAppointmentsUser = async () => {
    try {
      const response = await fetchUserAppointments();
      if (response.appointmentItems.length > 0) {
        setError('');
        addAppointmentItems(response.appointmentItems);
      } else {
        setError('No Appointment Found');
      }
    } catch {
      setError('Unable to fetch User Appointments');
    }
  };

  useEffect(() => {
    if (logInUser) {
      fetchAppointmentsUser();
    }
  }, []);

  const heatMap = () => (
    <>
      <div className="heatmap__appointments">
        <div className="heatmap__app-img" />
        <div className="heatmap__right">
          <div className="heatmap__title2" />
          <div className="heatmap__title3" />
        </div>
      </div>

      <div className="heatmap__appointments">
        <div className="heatmap__app-img" />
        <div className="heatmap__right">
          <div className="heatmap__title2" />
          <div className="heatmap__title3" />
        </div>
      </div>

      <div className="heatmap__appointments">
        <div className="heatmap__app-img" />
        <div className="heatmap__right">
          <div className="heatmap__title2" />
          <div className="heatmap__title3" />
        </div>
      </div>
    </>
  );

  return logInUser ? (
    <div className="Appointments">
      {error && <p className="error-msg d-flex p-3 justify-content-center bg-danger text-white">{error}</p>}
      <h1 className="d-flex justify-content-center mb-3">Your Appointments:</h1>
      <div className="Appointments_Grid">
        {
           appointments && appointments.length > 0
             ? appointments.map((item) => (
               <AppointmentItem key={item.id} items={item} />
             ))
             : (heatMap())
        }
      </div>
    </div>
  ) : <Redirect to="/login" />;
};

const mapStateToProps = (state) => ({
  appointments: state.appointmentItems.appointmentItems,
});

const mapDispatchToProps = (dispatch) => ({
  addAppointmentItems: (items) => dispatch(addAppointmentItems(items)),
});

AppointmentLists.propTypes = {
  appointments: PropTypes.instanceOf(Object),
  addAppointmentItems: PropTypes.func,
};

AppointmentLists.defaultProps = {
  appointments: {},
  addAppointmentItems: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentLists);
