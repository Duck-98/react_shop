import React from 'react';

const Product = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

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
