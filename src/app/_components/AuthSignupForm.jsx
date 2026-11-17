"use client";
import ErrorMsg from "./ErrorMsg";
import { useActionState } from "react";
import { addUserAction } from "@/app/_actions/_usersActions";
const AuthSignupForm = () => {
  const [prevState, formAction] = useActionState(addUserAction, {
    success: false,
    error: "",
    data: null,
  });
  return (
    <>
      {prevState.error ? (
        <ErrorMsg msg={prevState.error} success={prevState.success} />
      ) : null}
      {prevState.data ? (
        <ErrorMsg msg="Succès" success={prevState.success} />
      ) : null}
      <form action={formAction}>
        <div>
          <div>
            <label htmlFor="fld_email">Entrez votre adresse courriel :</label>
            <input
              type="email"
              id="fld_email"
              placeholder="Votre courriel"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="fld_pwd">Entrez votre mot de passe :</label>
            <input
              type="password"
              id="fld_pwd"
              placeholder="Votre mot de passe"
              name="password"
            />
          </div>
          <div>
            <label htmlFor="fld_username">
              Entrez votre nom d’utilisateur :
            </label>
            <input
              type="text"
              id="fld_username"
              placeholder="Votre nom d'utilisateur"
              name="username"
            />
          </div>
        </div>

        <button>Créer un compte</button>
      </form>
    </>
  );
};
export default AuthSignupForm;
