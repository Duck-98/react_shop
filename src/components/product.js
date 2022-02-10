import React, { useContext } from 'react';
import { rangecontext } from './App.js';
const Product = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const item = useContext(rangecontext);
  return (
    <>
      <div className="col-md-4" key={props.shoeData.id}>
        <img
          src={
            'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
          }
          width="100%"
          alt="profile"
        ></img>
        <h4>{props.shoeData.title}</h4>
        <p>{props.shoeData.content}</p>
        <p>{props.shoeData.price}</p>
      </div>
    </>
  );
};

export default Product;
