import React from 'react';

import './Item.css';

const Item = ({ data }) => {
  const { title, discountPercentage, price, image_url } = data;
  return (
    <div className="item-box">
      <div className="item-box-upper">
        <img src={image_url} />
      </div>
      <div className="item-box-lower">
        <div className="item-box-title">
          <div>{title}</div>
          {discountPercentage ? <div>{`${discountPercentage}%`}</div> : null}
        </div>
        <div className="item-box-percent">{price}</div>
      </div>
    </div>
  );
};

export default Item;
