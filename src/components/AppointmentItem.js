import React from 'react';
import PropTypes from 'prop-types';

const AppointmentItem = ({ items }) => {
  const { date, branch } = items;
  const branches = () => {
    if (branch === null) {
      return 'Main';
    }
    return branch;
  };

  return (
    <div className="Appointment d-flex flex-lg-column p-2">
      <img src={items.item.img} alt="img" />
      <div className="d-flex flex-column mx-3">
        <h3 className="text-uppercase">{items.item.name}</h3>
        <p className="h5">{`Date: ${date}`}</p>
        <p className="h5">{`Branch: ${branches()}`}</p>
      </div>
    </div>
  );
};

AppointmentItem.propTypes = {
  items: PropTypes.shape({
    item: PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
    }),
    date: PropTypes.string,
    branch: PropTypes.string,
  }).isRequired,
};

export default AppointmentItem;
