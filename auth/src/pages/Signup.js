import React, { useState } from "react";
import { useAuth } from "../context/authContext";

export const Signup = () => {
  const { Signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e){
    e.PreventDefault();
  }

  return (
    <div className="container">
      <h2>Signup</h2>
      <form>
        <label>E-mail: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <label>Password confirmation</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>

        <button oncClick={handleSubmit} className="button-block" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};