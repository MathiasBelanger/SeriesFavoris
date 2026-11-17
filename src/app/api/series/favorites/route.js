import { NextResponse } from "next/server";
import { fetchShowsByIds } from "../_services/trakt";
import offlineTrending from '../_data/trending_list.json';
import { ENV } from "../../_config/env";

export const GET = async (req) => {
    const query = [...req.nextUrl.searchParams.getAll('id[]'), ...req.nextUrl.searchParams.getAll('id')];
    
    if (!query || !query.length) {
        return NextResponse.json({success: false, erreur: 'Des paramètres de requête "id" sont nécessaires.'}, {status: 400});
    }
    const ids = typeof query === 'string' ? [query] : query;

    const {isOnline} = ENV;
    if (!isOnline) {
        const series = offlineTrending.filter(({id}) => ids.map(i => +i).indexOf(id) !== -1);
        return NextResponse.json({success: true, series: series}, {status: 200});        
    }


    try {
        const favoriteShows = await fetchShowsByIds(ids);
        return NextResponse.json({success: true, series: favoriteShows}, {status: 200});
    } catch(err) {
        console.log('[GET FAVORITES SERIES]', err);
        return NextResponse.json({success: false, erreur: 'Une erreur s\'est produite'}, {status: 500});
    }

};