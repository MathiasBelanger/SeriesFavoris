import BoutonFavoris from "./FavorisBouton";

const Trending = ({ title, year, slug, poster }) => {
  return (
    <article className="trending-card">
      <a className="trending-card-poster" href={`/series/${slug}`}>
        <img src={poster} alt={title} />
      </a>
      <div className="serie-card-info">
        <a className="serie-card-title" href={`/series/${slug}`}>
          <h2>{title}</h2>
          <p>{year}</p>
        </a>
      </div>
      <BoutonFavoris slug={slug} title={title} />
    </article>
  );
};

export default Trending;
