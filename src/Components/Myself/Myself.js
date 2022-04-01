import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, ornaments }) => {
  return (
    <div>
      <h3>Myself</h3>
      <p>House : {house}</p>
      <Special house={house} ornaments={ornaments}></Special>
    </div>
  );
};

export default Myself;