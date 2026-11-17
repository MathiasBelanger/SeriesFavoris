import Profil from "./Profil";
import SerieList from "./PopulaireList";
import "./Populaire.css";

const Serie = async ({ name }) => {
  return (
    <main className="catalog-page">
      <Profil name={name} />

      <div className="catalog-content">
        <div className="serie-header" />
        <SerieList />
      </div>
    </main>
  );
};
export default Serie;
