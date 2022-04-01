import React from 'react';
import "./Tshirt.css"

const Tshirt = ({ handleAddToCart , tshirt }) => {
  const { name, price, picture } = tshirt;
//   const { handleAddToCart, tshirt } = props;
  return (
    <div className="tshirt">
      <img className="tshirt-picture" src={picture} alt="" srcset="" />
      <h4> {name} </h4>
      <p>Price : ${price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
    </div>
  );
};

export default Tshirt;