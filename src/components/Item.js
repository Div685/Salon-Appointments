import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
  const { id, name, img } = item;

  return (
    <div className="item">
      <Link to={`items/${id}`}>
        <div className="item__data">
          <figure>
            <img src={img} alt={img} />
            <figcaption className="items__data-title">{name}</figcaption>
          </figure>

        </div>
      </Link>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default Item;
