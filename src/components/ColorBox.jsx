import React, { useState } from "react";

const ColorBox = () => {
  const colors = ["red", "blue", "green", "purple", "pink"];
  const [color, setColor] = useState(0);

  const toggleColor = () => {
    setColor((prev) => (prev + 1) % colors.length);
  };

  return (
    <div>
      <button onClick={toggleColor}> change colors</button>
      <div className="box" style={{ backgroundColor: colors[color] }}>
        {" "}
        <p className="y">
          {colors[color] === "pink" ? "I am happy" : colors[color]}
        </p>
      </div>
    </div>
  );
};

export default ColorBox;
