import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchUserAppointments } from '../api/fetchItems';
import AppointmentItem from '../components/AppointmentItem';

const AppointmentLists = () => {
  const appointments = useSelector((state) => state.appointmentItems.appointmentItems);
  const logIn = useSelector((state) => state.user.logIn);

  useEffect(() => {
    fetchUserAppointments();
  }, []);

  const heatMap = () => {
    <h1>Loading...</h1>;
  };

  const appointmentMap = () => (
    <>
      {
       appointments && appointments.length
         ? appointments.map((item) => (
           <AppointmentItem key={item.id} items={item} />
         ))
         : (heatMap())
      }
    </>
  );

  return (
    <div>
      <h1>Your Appointments:</h1>
      {
        !logIn ? <Redirect to="/login" /> : (
          appointmentMap()
        )
      }
    </div>
  );
};

export default AppointmentLists;
