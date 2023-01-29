/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchUserCoupons } from '../api/authUserRequest';

const ItemDetails = ({ item }) => {
  const { name, description, img } = item;
  const [msg, setMsg] = useState('');
  const [code, setCode] = useState('');
  const [price, setPrice] = useState(20);
  const totalWithVAT = price + (price * 0.18);
  const [totalPrice, setTotalPrice] = useState(totalWithVAT);

  const handleCouponCode = async (code) => {
    try {
      const res = await fetchUserCoupons(code);
      const per = (price * (res.coupon.percentage / 100));
      const discountPrice = price - per;
      const newTotal = discountPrice + (discountPrice * 0.18);
      setPrice(discountPrice);
      setTotalPrice(newTotal);
    } catch {
      setMsg('Something went Wrong');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleCouponCode(code);
  };

  return (
    <div className="itemDetails">
      {msg}
      <img src={img} alt="img" />
      <div className="item__details">
        <p className="item__title">{name}</p>
        <p className="item__desc">{description}</p>
        <div className="item__price">
          <div>
            <p>
              Price: Before $
              {20}
              {' '}
              Discounted Price $
              {price}
            </p>
            <form onSubmit={handleSubmit}>
              <span>Use Coupon code to get discount!</span>
              <input
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </form>
          </div>
          <p>VAT 18%</p>
          <p>
            Total:
            {totalPrice}
          </p>
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
