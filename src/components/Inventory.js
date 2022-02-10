import React from 'react';

const Inventory = (props) => {
  return (
    <>
      <div>
        <p>재고 : {props.inventory[0]} </p>
      </div>
    </>
  );
};

export default Inventory;
