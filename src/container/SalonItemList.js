import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchItemList } from '../api/fetchItems';
import Item from '../components/Item';

const SalonItemList = () => {
  const items = useSelector((state) => state.items.items);
  console.log(items);
  useEffect(() => {
    fetchItemList();
  }, []);

  return (
    <div className="items">
      <h1>Welcome to Salon Item Lists</h1>
      <p>Please select Items to Book an appointment with us.</p>
      <Item />
    </div>
  );
};

export default SalonItemList;
