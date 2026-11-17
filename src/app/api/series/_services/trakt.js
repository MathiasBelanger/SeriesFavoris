import { ENV } from "../../_config/env";
import { fetchPoster } from "./themoviedb";

const TRAKT_PREFIX = 'https://api.trakt.tv';

export const fetchTrending = async () => {
    const { trakt: { apiKey, apiVersion }, theMovieDb: { apiKey: tmdbKey } } = ENV;
    try {
        const resp = await fetch(`${TRAKT_PREFIX}/shows/trending?limit=15`, {
            headers: {
                'Content-Type': 'application/json',
                'trakt-api-key': apiKey,
                'trakt-api-version': apiVersion,
                "User-Agent": "Web5TIM/1.0",
            }
        });
        const data = await resp.json();

        return await Promise.all(formatSeries(data.map(s => s.show), tmdbKey));

    } catch (err) {
        console.log('[FETCHING TRENDING SHOWS ERROR]', err);
        throw 'Une erreur interne au serveur est survenue';
    }
};

export const fetchShowsByIds = async (ids) => {
    const { trakt: { apiKey, apiVersion }, theMovieDb: { apiKey: tmdbKey } } = ENV;
    try {
        const details = await Promise.all(ids.map(id => {
            return fetch(`${TRAKT_PREFIX}/shows/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'trakt-api-key': apiKey,
                    'trakt-api-version': apiVersion,
                    "User-Agent": "Web5TIM/1.0",
                }
            }).then(resp => {
                if (resp.status === 404 || !resp.ok) {
                    throw 'Cette série ne semble pas exister';
                }
                return resp.json();
            }, (err) => {
                console.log('[FETCHING SHOW BY ID ERROR', err);
                throw 'Une erreur interne au serveur est survenue';
            });
        }));

        return await Promise.all(details.map(d => {

            return fetchPoster(d.ids.tmdb, tmdbKey).then(imgs => {
                const { title, year, ids } = d;
                return {
                    title,
                    year,
                    slug: d?.ids?.slug,
                    id: ids.trakt,
                    imdb: 'https://www.imdb.com/title/' + ids.imdb + '/',
                    poster: imgs?.poster,
                    backdrop: imgs?.backdrop
                };
            });
        }));

    } catch (err) {
        console.log('[FETCHING SHOWS BY IDS', err);
        throw 'Une erreur interne au serveur est survenue';
    }
};

export const fetchExtendedShowById = async (id) => {
    const { trakt: { apiKey, apiVersion }, theMovieDb: { apiKey: tmdbKey } } = ENV;
    try {
        const fetchedDetails = await /*Promise.all([
            */fetch(`${TRAKT_PREFIX}/shows/${id}?extended=full`, {
            headers: {
                'Content-Type': 'application/json',
                'trakt-api-key': apiKey,
                'trakt-api-version': apiVersion,
                "User-Agent": "Web5TIM/1.0",
            }
        }).then(resp => {
            if (resp.status === 404) {
                throw 'Cette série ne semble pas exister';
            }
            return resp.json();
        }, (err) => {
            console.log('[FETCHING SHOW BY ID ERROR', err);
            throw 'Une erreur interne au serveur est survenue';
        })/*,

            fetch(`${TRAKT_PREFIX}/shows/${id}/seasons?extended=episodes`, {
                headers: {
                    'Content-Type': 'application/json',
                    'trakt-api-key': apiKey,
                    'trakt-api-version': apiVersion,
                    "User-Agent": "Web5TIM/1.0",
                }
            }).then(resp => {
                if (resp.status === 404) {
                    throw 'Cette série ne semble pas exister';
                }
                return resp.json();
            }, (err) => {
                console.log('[FETCHING SHOW EPISODES ERROR', err);
                throw 'Une erreur interne au serveur est survenue';
            }),
        ])*/;

        const { title,
            year,
            ids,
            tagline,
            overview,
            network,
            country,
            trailer,
            status,
            rating,
            votes,
            language,
            genres,
            aired_episodes } = fetchedDetails/*[0]*/;


        const imgs = await fetchPoster(ids.tmdb, tmdbKey);
        return {
            title,
            year,
            id: ids.trakt,
            slug: ids?.slug,
            imdb: ids.imdb ? 'https://www.imdb.com/title/' + ids.imdb + '/' : null,
            tagline,
            overview,
            network,
            country,
            trailer,
            status,
            rating,
            votes,
            language,
            genres,
            aired_episodes,
            poster: imgs?.poster,
            backdrop: imgs?.backdrop,
            // seasons: fetchedDetails[1]
        };
        // const poster = await fetchPoster(data['ids']['imdb']);

    } catch (err) {
        console.log('[FETCHING SHOW BY ID ERROR]', err);
        throw 'Cette série ne semble pas exister ou une erreur est survenue';
    }
};

export const searchShows = async (query) => {
    const { trakt: { apiKey, apiVersion }, theMovieDb: { apiKey: tmdbKey } } = ENV;
    try {
        const resp = await fetch(`${TRAKT_PREFIX}/search/show?query=${query}&limit=15`, {
            headers: {
                'Content-Type': 'application/json',
                'trakt-api-key': apiKey,
                'trakt-api-version': apiVersion,
                "User-Agent": "Web5TIM/1.0",
            }
        });
        const data = await resp.json();
        return Promise.all(formatSeries(data.map(s => s.show), tmdbKey));

    } catch (err) {
        console.log('[SEARCH SHOW ERROR]', err);
        throw 'Une erreur interne au serveur est survenue';
    }
};

const formatSeries = (showsSummary, tmdbKey) => {
    return showsSummary.map(({ title, year, ids }) => ({ title, year, id: ids.trakt, slug: ids.slug, imdb: 'https://www.imdb.com/title/' + ids.imdb + '/', tmdb: ids.tmdb }))
        .map(({ title, year, id, slug, imdb, tmdb }) => {
            return fetchPoster(tmdb, tmdbKey).then(imgs => ({
                title, year, id, slug, imdb, poster: imgs?.poster, backdrop: imgs?.backdrop
            }));
        });
};