import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister'

const Father = ({ house, ornaments }) => {
  return (
    <div>
      <h3>Father</h3>
      <p>House : {house}</p>
      <div style={{ display: "flex" }}>
        <Myself house={house} ornaments={ornaments}></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </div>
    </div>
  );
};

export default Father;