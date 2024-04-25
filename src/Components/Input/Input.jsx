import React from "react";
import "./Input.css";
import { useState } from "react";
const Input = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
  }
  return (
    <div className="InputContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">ok</button>
      </form>
    </div>
  );
};

export default Input;
