import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchItemList } from '../api/fetchItems';
import Banner from '../components/Banner';
import Item from '../components/Item';

const SalonItemList = () => {
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    fetchItemList();
  }, []);

  const heatMap = () => (
    <>
      <div className="heatmap__items">
        <div className="heatmap__image" />
        <div className="heatmap__title" />
      </div>

      <div className="heatmap__items">
        <div className="heatmap__image" />
        <div className="heatmap__title" />
      </div>

      <div className="heatmap__items">
        <div className="heatmap__image" />
        <div className="heatmap__title" />
      </div>

    </>
  );

  return (
    <>
      <Banner />
      <div className="items">
        <div className="items__header">
          <h1>Our Services</h1>
          <p>Please select a service.</p>
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
    </>
  );
};

export default SalonItemList;
