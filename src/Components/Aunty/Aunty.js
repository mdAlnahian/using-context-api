import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({ house }) => {
  const value = useContext(RingContext);
  return (
    <div>
      <h3>Aunty</h3>
      <p>House : {house}</p>
      <p><small>Gift : {value}</small></p>
    </div>
  );
};

export default Aunty;