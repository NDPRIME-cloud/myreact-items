import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");

  return (
    <React.Fragment>
      <input
        type="text"
        name=""
        value={name}
        onInput={(e) => setName(e.target.value)}
      />
      <h1>Hello, {name || "Guest"}</h1>
    </React.Fragment>
  );
};

export default Greeting;
