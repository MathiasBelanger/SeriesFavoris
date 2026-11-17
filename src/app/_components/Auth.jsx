"use client";
import "./Auth.css";
import AuthLoginForm from "./AuthLoginForm";
import AuthSignupForm from "./AuthSignupForm";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="auth">
      <h2>{!isLogin ? "Inscription" : "Connexion"}</h2>
      {isLogin ? <AuthLoginForm /> : <AuthSignupForm />}
      <button
        onClick={() => (isLogin ? setLogin(false) : setLogin(true))}
        type="button"
      >
        {isLogin ? "Inscription" : "Connexion"}
      </button>
    </div>
  );
};
export default Auth;
