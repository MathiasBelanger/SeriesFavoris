"use client";
import { removeFavorisAction } from "../_actions/_favorisActions";

const BoutonSuprimer = ({ slug }) => {
  const clickHandler = () => {
    removeFavorisAction(slug);
  };

  return (
    <button
      className="delete-button"
      onClick={clickHandler}
      type="button"
      aria-label={`Suprimer de la liste`}
      title="Suprimer de la liste favoris"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 7h16M10 11v6m4-6v6M5 7l1 14h12l1-14M9 7V4h6v3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BoutonSuprimer;
