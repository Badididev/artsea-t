import useQuantityCounter from "@/customHooks/useQuantityCounter";
import React from "react";


function QuantityCounter() {
  const { quantity, increment, decrement, handleInputChange } =
    useQuantityCounter(1);

  return (
    <div className="quantity-counter">
      <a
        className="quantity__minus"
        style={{ cursor: "pointer" }}
        onClick={decrement}
      >
        <i className="bx bx-minus" />
      </a>
      <input
        name="quantity"
        type="text"
        className="quantity__input"
        value={quantity}
        onChange={handleInputChange}
      />
      <a
        className="quantity__plus"
        style={{ cursor: "pointer" }}
        onClick={increment}
      >
        <i className="bx bx-plus" />
      </a>
    </div>
  );
}

export default QuantityCounter;
