import React from "react";
import "./Calculator.css";
const Calculator = () => {
  return (
    <div className="calculatorBox">
      <div className="screen"></div>
      <div className="pasi">
        <div className="oq">AC</div>
        <div className="oq">+/-</div>
        <div className="oq">%</div>
        <div className="sariq">/</div>
        <div className="oq">7</div>
        <div className="oq">8</div>
        <div className="oq">9</div>
        <div className="sariq">x</div>
        <div className="oq">4</div>
        <div className="oq">5</div>
        <div className="oq">6</div>
        <div className="sariq">-</div>
        <div className="oq">1</div>
        <div className="oq">2</div>
        <div className="oq">3</div>
        <div className="sariq">+</div>
        <div className="oq nol">0</div>
        <div className="oq">.</div>
        <div className="sariq">=</div>
      </div>
    </div>
  );
};

export default Calculator;
