import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Item = () => {
  const items = useSelector((state) => state.items.items);

  const renderItems = items.map((item) => {
    const { id, name, img } = item;
    return (
      <div key={id} className="item">
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
  });

  return (
    <>
      {renderItems}
    </>
  );
};

export default Item;
