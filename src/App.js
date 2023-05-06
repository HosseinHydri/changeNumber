import React, { useState } from "react";
const App = () => {
  const [number, setNumber] = useState(0);
  console.log("first" + number);
  const changeNumber = () => {
    console.log("second" + number);
    setNumber((prev) => prev + 1);
    console.log("third" + number);
  };
  return (
    <div>
      <p>{number}</p>
      <button onClick={changeNumber}>Change Number</button>
    </div>
  );
};

export default App;
