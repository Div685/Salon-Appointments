import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchItemList } from '../api/fetchItems';
import Item from '../components/Item';
import '../assets/css/SalonItems.css';

const SalonItemList = () => {
  const items = useSelector((state) => state.items.items);
  useEffect(() => {
    fetchItemList();
  }, []);

  const heatMap = () => {

  };

  return (
    <div className="items">
      <div className="items__header">
        <h1>Our Services</h1>
        <p>Please select service and Book an appointment with us.</p>
      </div>
      <div className="items__Lists">
        {
          items && items.length
            ? items.map((item) => (
              <Item key={item.id} item={item} />
            ))
            : (heatMap())
        }
      </div>
    </div>
  );
};

export default SalonItemList;
