"use server";
import { searchSeries, searchUsers } from "@/app/_data/data";

export const searchSeriesAction = async (prevState, formData) => {
    try {
        const input = formData.get("input");
        const series = await searchSeries(input);
        const users = await searchUsers(input);
        return { success: true, error: null, series: series, users: users };
    } catch (err) {
        console.log("[search error]", err);
        return { success: false, error: err.message, series: [], users: [] };
    }
};