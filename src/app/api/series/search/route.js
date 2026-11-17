import { NextResponse } from "next/server";
import { ENV } from "../../_config/env";
import offlineTrending from '../_data/trending_list.json';
import { searchShows } from "../_services/trakt";

export const GET = async (req) => {

    const query = req.nextUrl.searchParams.get('q');

    if (!query) {
        return NextResponse.json({success: false, erreur: 'Un paramètre de requête "q" est nécessaire à la recherche.'}, {status: 400});
    }

    const {isOnline} = ENV;
    if (!isOnline) {
        const series = offlineTrending.filter(({title}) => {
            console.log(title, query);
            return title.toLowerCase().includes(query.toLowerCase());
        });        
        return NextResponse.json({success: true, series: series}, {status: 200});
    }

    try {
        const foundShows = await searchShows(query);
        return NextResponse.json({success: true, series: foundShows}, {status: 200});
    } catch(err) {
        console.log('[SEARCH SHOW ERROR]', err);
        return NextResponse.json({success: false, erreur: 'Une erreur s\'est produite'}, {status: 500});
    }
};