import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const UpdateProfile = () => {
  const { updateEmailAddress, currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(currentUser.email);

  async function handleSubmit(e) {
    e.preventDefault();



    setLoading(true);

    if (email === currentUser.email) {
      setLoading(false);
      return navigate("/");
    }

    try {
      await updateEmailAddress(email);
      navigate("/");
    } catch (error) {
      alert("Ocorreu um erro ao tentar atualizar o usuário")
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1> Atualizar Perfil</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <button disabled={loading} className="button-block">Atualizar</button>
      </form>
    </div>
  )
}