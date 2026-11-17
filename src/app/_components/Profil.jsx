import Deconnexion from "./Deconnexion";
import ListeFavoris from "./ListeFavoris";
import "./Profil.css";

const Profil = ({ name }) => {
  return (
    <aside className="serie-sidebar">
      <div className="serie-profile">
        <span className="serie-avatar" aria-hidden="true">
          {name?.charAt(0)?.toUpperCase() || "?"}
        </span>
        <h2>{name}</h2>
      </div>
      <nav className="serie-nav" aria-label="Navigation principale">
        <a className="serie-nav-link" href="/populaire">
          {" "}
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 5.5A1.5 1.5 0 0 1 5.5 4h5A1.5 1.5 0 0 1 12 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 10.5v-5ZM15 5.5A1.5 1.5 0 0 1 16.5 4h2A1.5 1.5 0 0 1 20 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-5ZM4 16.5A1.5 1.5 0 0 1 5.5 15h2A1.5 1.5 0 0 1 9 16.5v2A1.5 1.5 0 0 1 7.5 20h-2A1.5 1.5 0 0 1 4 18.5v-2ZM12 16.5A1.5 1.5 0 0 1 13.5 15h5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5v-2Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </svg>
          <span>Serie</span>
        </a>
        <a className="serie-nav-link" href="/recherche">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <circle
              cx="10.8"
              cy="10.8"
              r="6.3"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="m15.5 15.5 4.2 4.2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span>Recherche</span>
        </a>
      </nav>
      <ListeFavoris />
      <Deconnexion />
    </aside>
  );
};
export default Profil;
