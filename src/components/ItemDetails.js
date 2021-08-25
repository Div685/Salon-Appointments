import React from 'react';
import PropTypes from 'prop-types';

const ItemDetails = ({ item }) => {
  const { name, description, img } = item;
  return (
    <div className="itemDetails">
      <img src={img} alt="img" />
      <div className="item__details">
        <p className="item__title">{name}</p>
        <p className="item__desc">{description}</p>
        <div className="item__price">
          <p>Price: $20 </p>
          <p>VAT 18%</p>
          <p>Total: 23.6</p>
        </div>
      </div>
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
