import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function singUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    })
    return unsubscribe;
  }, []);

  return (<AuthContext.Provider
    value={{
      singUp: singUp,
    }}
  >
    {children}
  </AuthContext.Provider>
  );
}