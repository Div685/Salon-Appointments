import React from 'react';
import PropTypes from 'prop-types';

const AppointmentItem = ({ items }) => {
  const { date, branch } = items;
  return (
    <div>
      <figure>
        <img src={items.item.img} alt="img" />
        <figcaption>{items.item.name}</figcaption>
      </figure>
      <div className="d-flex">
        <p>{`Date: ${date}`}</p>
        <p>{`Branch: ${branch}`}</p>
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
