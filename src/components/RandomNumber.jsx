import React, { useState } from "react";

const RandomNumber = () => {
  const [number, setNumber] = useState([]);
  console.log(number)
  const generateNumbers = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber((prev) => [...prev, randomNum]);
  };

  return (
    <div>
      <button
        className="text-5xl mt-7"
        onClick={generateNumbers}
        disabled={number === 10}
      >
        Random Numbers{" "}
      </button>
      <h2> Generated numbers:</h2>
      <ul style={{ display: "flex" }}>
        {number.map((num, index) => (
          <li style={{ padding: "0 10px" }} key={index}>
            
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomNumber;
