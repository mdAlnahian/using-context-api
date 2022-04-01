import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext('diamond ring');
export const HaguContext = createContext('golapi hagu')


const Grandpa = () => {
  // const house = 7;
  const [house, setHouse] = useState(1);

  const ornaments = "Diamond";

  const handleBuyAHouse = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };

  return (
    <RingContext.Provider value={ornaments}>
      <div className="grandpa">
        <h2>GrandPa</h2>
        <p>
          House :{house} <button onClick={handleBuyAHouse}>Buy a House </button>
        </p>
        <div style={{ display: "flex" }}>
          <HaguContext.Provider value="Yellow Hagu">
            <Father house={house} ornaments={ornaments}></Father>
          </HaguContext.Provider>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
