"use client";
import { useActionState } from "react";
import { searchSeriesAction } from "../_actions/_searchActions";
import Trending from "./Trending";
import User from "./User";

const RechercheHeader = () => {
  const [prevState, formAction, isPending] = useActionState(
    searchSeriesAction,
    {
      success: false,
      error: "",
      series: [],
      users: [],
    },
  );
  return (
    <>
      <header className="serie-header">
        <form className="recherche-form" action={formAction}>
          <label className="recherche-label" htmlFor="series-search">
            Recherche
          </label>
          <input
            id="series-search"
            type="search"
            placeholder="Recherche..."
            name="input"
            aria-label="Rechercher une série"
          />
          <button type="submit" disabled={isPending} aria-label="Rechercher">
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
          </button>
        </form>
      </header>
      <section className="serie-section" aria-label="Résultats de recherche">
        {prevState.error && (
          <p className="recherche-error" role="alert">
            {prevState.error}
          </p>
        )}
        <div className="recherche-results">
          <div className="serie-list">
            {prevState.series.map((series) => (
              <Trending
                key={series.id}
                title={series.title}
                year={series.year}
                slug={series.slug}
                poster={series.poster}
              />
            ))}
          </div>
          <div className="userslist">
            {prevState.users.map((user) => (
              <User key={user.id} name={user.name} id={user.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RechercheHeader;
