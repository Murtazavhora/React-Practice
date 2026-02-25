import React, { useState } from "react";

const TwoWayBinding = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Two Way Binding Example</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <p>You typed: {name}</p>
    </div>
  );
};

export default TwoWayBinding;