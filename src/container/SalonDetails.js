import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItemDetail } from '../api/fetchItems';
import ItemDetails from '../components/ItemDetails';

const SalonDetails = () => {
  const item = useSelector((state) => state.item.item);
  const { id } = useParams();
  console.log(item);

  useEffect(() => {
    fetchItemDetail(id);
  }, []);

  const heatMap = () => {
    <div>
      <h1>
        Loading...
      </h1>
    </div>;
  };

  return (
    <div>
      {
        item
          ? <ItemDetails item={item} />
          : (heatMap())
      }
    </div>
  );
};

export default SalonDetails;
