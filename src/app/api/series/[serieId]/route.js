import { NextResponse } from "next/server";
import { ENV } from "../../_config/env";
import { fetchExtendedShowById } from "../_services/trakt";
import offlineDetails from '../_data/series_details.json';

export const GET = async (req, { params }) => {
    const { isOnline } = ENV;

    const { serieId } = await params;

    if (!isOnline) {
        const serieInfo = offlineDetails.find(({ id, slug }) => id == +serieId || slug == serieId);
        if (!serieInfo) {
            return NextResponse.json({ success: false, erreur: "Cette série ne semble pas exister ou une erreur est survenue" });
        }

        const { seasons, ...serie } = serieInfo;

        return NextResponse.json({ success: true, serie }, { status: 200 });
    }

    try {
        const serie = await fetchExtendedShowById(serieId);
        return NextResponse.json({ success: true, serie }, { status: 200 });
    } catch (err) {
        console.log('[GET SERIE DETAILS ERROR]', err);
        return NextResponse.json({ success: false, erreur: 'Une erreur s\'est produite.' }, { status: 500 });
    }
    // return NextResponse.json({success: true});

};