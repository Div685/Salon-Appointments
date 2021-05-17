import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchItemList } from '../api/fetchItems';
import Item from '../components/Item';

const SalonItemList = () => {
  const items = useSelector((state) => state.items.items);
  useEffect(() => {
    fetchItemList();
  }, []);

  const heatMap = () => {

  };

  return (
    <div className="items">
      <h1>Welcome to Salon Item Lists</h1>
      <p>Please select Items to Book an appointment with us.</p>
      {
        items && items.length
          ? items.map((item) => (
            <Item key={item.id} item={item} />
          ))
          : (heatMap())
      }
    </div>
  );
};

export default SalonItemList;
