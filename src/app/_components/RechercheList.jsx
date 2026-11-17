import Trending from "./Trending";
const RechercheList = ({ prevState }) => {
  return (
    <div>
      <div className="serie-list">
        {prevState.series.map((serie) => (
          <Trending
            key={serie.id}
            title={serie.title}
            year={serie.year}
            slug={serie.slug}
            poster={serie.poster}
          />
        ))}
      </div>
    </div>
  );
};
export default RechercheList;
