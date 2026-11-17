import Profil from "./Profil";
import RechercheHeader from "./RechercheHeader";
import "./Populaire.css";

const Recherche = async ({ name }) => {
  return (
    <main className="catalog-page">
      <Profil name={name} />
      <div className="catalog-content">
        <RechercheHeader />
      </div>
    </main>
  );
};
export default Recherche;
