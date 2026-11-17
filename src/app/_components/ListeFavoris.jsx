import Favoris from "@/app/_components/Favoris";
import { getServerSession } from "@/lib/auth";
import { getAllFavoris } from "../_data/data";

const ListeFavoris = async () => {
  const session = await getServerSession();
  const allFavoris = session ? await getAllFavoris(session.user.id) : [];
  return (
    <section className="serie-favorites" aria-labelledby="favoris-title">
      <h2 id="favoris-title">Favoris</h2>
      <ul className="serie-favorites-list">
        {allFavoris.map((favoris) => (
          <Favoris
            key={favoris.id}
            title={favoris.serieName}
            slug={favoris.serieSlug}
          />
        ))}
      </ul>
    </section>
  );
};

export default ListeFavoris;
