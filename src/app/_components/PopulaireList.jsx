import Trending from "./Trending";
import { getAllTrending } from "../_data/data";
const SerieList = async () => {
  const allTrending = await getAllTrending();

  return (
    <section className="serie-section" aria-labelledby="serie-title">
      <div className="serie-section-heading">
        <h1 id="serie-title">Séries populaires</h1>
      </div>
      <div className="serie-list">
        {allTrending.map((trending) => (
          <Trending
            key={trending.id}
            title={trending.title}
            year={trending.year}
            slug={trending.slug}
            poster={trending.poster}
          />
        ))}
      </div>
    </section>
  );
};
export default SerieList;
