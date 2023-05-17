import React, { useState } from 'react';

import './Item.css';

const Item = ({ data }) => {
  const { title, discountPercentage, price, image_url } = data;

  const [show, setShow] = useState(false);
  return (
    <>
      <div className="item-box">
        <div
          className="item-box-upper"
          onClick={() => {
            setShow(true);
          }}
        >
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
      {show ? (
        <div
          className="image-modal"
          onClick={() => {
            setShow(false);
          }}
        >
          <div className="image-modal-box">
            <img src={image_url} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Item;
