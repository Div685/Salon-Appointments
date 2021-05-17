import React from 'react';
import PropTypes from 'prop-types';

const ItemDetails = ({ item }) => {
  const { name, description, img } = item;
  return (
    <div className="itemDetails">
      <img src={img} alt="img" />
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default ItemDetails;
