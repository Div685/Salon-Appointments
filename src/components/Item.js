import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

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
          <div className="item__socialMedia">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>

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
