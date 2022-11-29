import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const Signup = () => {
  const { singUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.length < 6) {
      alert("A Senha deve ter no mínimo 6 caracteres");
      return
    }
    if (password !== confirmPassword) {
      alert("As senhas não conferem");
      return;
    }
    try {
      await singUp(email, password)
    } catch (error) {
      alert("Ocorreu um erro ao tentar criar o usuário.");
      return;
    }
  }

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
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

        <button className="button-block" type="submit">
          Signup
        </button>
        <div className="center">
          <div>
            <p>Já possui uma conta? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
};