import React, { useState } from "react";

export default function Input({ labelName }) {
  const [inputNumber, setInputNumber] = useState(0);

  function handleChange(event) {
    let change = event.target.value;
    setInputNumber(change);
  }

  return (
    <span>
      <label>{labelName}</label>
      <input
        type="number"
        name={labelName}
        required
        value={inputNumber}
        onChange={handleChange}
      ></input>
    </span>
  );
}
