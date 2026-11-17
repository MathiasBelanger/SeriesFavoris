import { NextResponse } from 'next/server';
import {ENV} from '../../_config/env';
import { fetchExtendedShowById, fetchTrending } from '../_services/trakt';
import trendingListOffline from '../_data/trending_list.json';

export const GET = async () => {
    const {isOnline} = ENV;

    if (!isOnline) {        
        return NextResponse.json({success: true, series: trendingListOffline}, {status: 200});
    }

    try {
        const trendingSeries = await fetchTrending();
        return NextResponse.json({success: true, series: trendingSeries}, {status: 200});
    } catch(err) {
        console.log('[GET TRENDING SERIES ERROR]', err);
        return NextResponse.json({success: false, erreur: 'Une erreur s\'est produite'}, {status: 500});
    }
};