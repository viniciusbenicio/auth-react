import React, { useState } from "react";
import { Link, Navigate, useActionData, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await resetPassword(email);
      alert("Foi enviado um e-mail para recuperar sua senha")
      navigate("/login");
    } catch (error) {
      alert("Ocorreu um erro ao recuperar a sua senha")
    }
    setLoading(false);

  }

  return (
    <div className="container">
      <h1>Esqueci minha senha</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />

        <button loading={loading} className="button-block">Recuperar senha</button>
      </form>
      <div className="center">
        <div>
          <p>
            Já tenho conta? <Link to="/login">Entrar</Link>
          </p>
          <p>
            Não tem conta? <Link to="/signup">Cadastra-se</Link>
          </p>
        </div>
      </div>
    </div>
  )
}