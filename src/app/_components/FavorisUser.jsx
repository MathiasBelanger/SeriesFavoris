import { getAllFavoris, getAllLike, getUser } from "../_data/data";
import FavorisPage from "@/app/_components/FavorisPage";
import BoutonLike from "@/app/_components/BoutonLike";

const FavorisUser = async ({ name, id }) => {
  const allFavoris = await getAllFavoris(id);
  const allLike = await getAllLike(id);

  return (
    <section className="user-favorites" aria-labelledby="user-title">
      <header className="user-heading">
        <span className="user-avatar" aria-hidden="true">
          {name?.charAt(0)?.toUpperCase() || "A"}
        </span>
        <h1 id="user-title">{name}</h1>
      </header>
      <div className="user-favorites-heading">
        <h2>Favoris</h2>
      </div>
      <ul className="user-favorites-list">
        {allFavoris.map((favoris) => (
          <FavorisPage
            key={favoris.id}
            title={favoris.serieName}
            slug={favoris.serieSlug}
          />
        ))}
      </ul>
      <BoutonLike userId={id} nbLike={allLike.length} />
    </section>
  );
};

export default FavorisUser;
