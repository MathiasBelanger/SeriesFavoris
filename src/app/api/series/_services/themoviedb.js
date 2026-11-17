const THEMOVIEDB_PREFIX = `https://api.themoviedb.org/3/tv`;

export const fetchPoster = async (themovieDbId, apiKey, type = 'poster') => {
    try {
        const resp = await fetch(`${THEMOVIEDB_PREFIX}/${themovieDbId}/images?api_key=${apiKey}`);
        const data = await resp.json();

        return { poster: data.posters.length > 0 ? `https://image.tmdb.org/t/p/w500` + data.posters[0].file_path : null, backdrop: data.backdrops.length > 0 ? `https://image.tmdb.org/t/p/original` + data.backdrops[0].file_path : null };
    } catch (err) {
        console.log('[FETCHING SERIE POSTER]', err);
        return null;
    }
};

