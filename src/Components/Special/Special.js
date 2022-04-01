import React, { useContext } from 'react';
import { HaguContext, RingContext } from '../Grandpa/Grandpa';

const Special = ({ ornaments }) => {
  const ring  =useContext(RingContext);
  const superSpecialGift = useContext(HaguContext);
  return (
    <div>
      <h5>Special</h5>
      <p>Ornaments : {ornaments}</p>
      <p>
        <small>Gift : {ring}</small>
      </p>
      <h3>Special Gift : {superSpecialGift}</h3>
    </div>
  );
};

export default Special;