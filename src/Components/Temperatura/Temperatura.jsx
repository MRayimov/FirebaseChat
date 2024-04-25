import React from "react";
import { useState } from "react";
import "./Temperatura.css";
const Temperatura = () => {
  const [temperatura, setTemperatura] = useState(15);
  const [tempStyle, setTempStyle] = useState("normal");
  function qoshish() {
    setTemperatura(temperatura + 1);
  }
  function minus() {
    setTemperatura(temperatura - 1);
  }
  if (temperatura < 10 && tempStyle !== "cold") {
    setTempStyle("cold");
  }
  if (temperatura >= 10 && temperatura <= 30 && tempStyle !== "normal") {
    setTempStyle("normal");
  }
  if (temperatura > 30 && tempStyle !== "hot") {
    setTempStyle("hot");
  }
  return (
    <div>
      <h1 className={`temp ${tempStyle}`}>{temperatura}</h1>
      <button onClick={qoshish}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default Temperatura;
