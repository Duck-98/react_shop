import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { rangecontext } from '/Users/duckuengna/Desktop/Coding/코딩애플 리액트/shop/src/App.js';
const Product = (props) => {
  // const item = useContext(rangecontext);
  const history = useHistory();
  return (
    <>
      <div
        className="col-md-4"
        key={props.shoeData.id}
        onClick={() => {
          history.push('/detail/' + props.shoeData.id);
        }}
      >
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
