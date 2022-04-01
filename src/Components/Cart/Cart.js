import React from 'react';
import "./Cart.css"

const Cart = ({ cart, handleRemoveFromCart }) => {
    // conditional rendering options
    // 1. element variable
    // 2> ternary operator condition ? true : false ;
    // 3> && operator 
    // 4> || operator 

    let command;
    if(cart.length === 0){
        command = <div>
            <h4>Oi kipta! kichu koroch kor</h4>
            <p>kinos na ken!!</p>
        </div>
    }
    else if(cart.length === 1){
        command = <p>please add more</p>
    }
    else{
        command = <p>thanks for adding item </p>
    }


  return (
    <div>
      <h2>Item Selected : {cart.length}</h2>

      {cart.map((tshirt) => (
        <p>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt)}> X</button>
        </p>
      ))}
      {cart.length === 0 || <p className="orange">YAY You are buying </p>}
      {cart.length === 3 && (
        <div className="orange">
          <h3> Trigonal </h3>
          <p>ar karo jonno niben nah ??</p>
        </div>
      )}
      {command}
      {cart.length !== 4 ? <p>keep adding</p> : <button>Remove All</button>}
      {cart.length === 4 && <button className="orange">Review item</button>}
    </div>
  );
};

export default Cart;