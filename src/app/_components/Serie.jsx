import ReactPlayer from "react-player";
const Serie = async ({ title, overview, status, trailer }) => {
  return (
    <section className="serie-details">
      <h1 className="serie-title">{title}</h1>

      {trailer && (
        <section className="serie-trailer" aria-label="Bande-annonce">
          <h2>Bande-annonce</h2>
          <div className="serie-trailer-frame">
            <ReactPlayer src={trailer} width="100%" height="100%" controls />
          </div>
        </section>
      )}

      <div className="serie-info">
        {overview && (
          <section className="serie-overview">
            <h2>Synopsis</h2>
            <p>{overview}</p>
          </section>
        )}
        {status && (
          <p className="serie-status">
            <span>Statut</span>
            {status}
          </p>
        )}
      </div>
    </section>
  );
};
export default Serie;
