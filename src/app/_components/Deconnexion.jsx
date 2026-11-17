"use client";
import { signOutAction } from "@/app/_actions/_usersActions";

const Deconnexion = () => {
  return (
    <button
      className="serie-signout"
      onClick={() => signOutAction()}
      type="button"
    >
      Déconnexion
    </button>
  );
};

export default Deconnexion;
