import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUserAppointments } from '../api/fetchItems';
import AppointmentItem from '../components/AppointmentItem';

const AppointmentLists = () => {
  const appointments = useSelector((state) => state.appointmentItems.appointmentItems);
  console.log(appointments);

  useEffect(() => {
    fetchUserAppointments();
  }, []);

  const heatMap = () => {

  };

  return (
    <div>
      <h1>Your Appointments:</h1>
      {
        appointments && appointments.length
          ? appointments.map((item) => (
            <AppointmentItem key={item.id} items={item} />
          ))
          : (heatMap())
      }
    </div>
  );
};

export default AppointmentLists;
