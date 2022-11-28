import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


export const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    if (password.length < 6) {
      alert("A Senha deve ter no mínimo 6 caracteres.");
      setLoading(false);
      return;
    }
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      alert("Ocorreu um erro ao tentar realizar o Login.")
    }
    setLoading(false);
  }

  return (
    <div className="container">
      <h2>Login</h2>
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

        <button disabled={loading} className="button-block" type="submit">
          Login
        </button>
      </form>
    </div>
  )
};