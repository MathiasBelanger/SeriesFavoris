"use server";

import { getServerSession } from "@/lib/auth";
import { addFavoris, addLike, removeFavoris } from "@/app/_data/data";
import { revalidatePath } from "next/cache";
export const addFavorisAction = async (slug, title) => {
    try {
        const session = await getServerSession();
        const usersId = session.user.id;

        const newfavoris = await addFavoris(usersId, slug, title);
    } catch (err) {
        return { success: false, error: err.message, data: null };
    }
    revalidatePath("/populaire");
    revalidatePath("/recherche");
};


export const removeFavorisAction = async (slug) => {
    try {
        const session = await getServerSession();
        const usersId = session.user.id;

        await removeFavoris(usersId, slug);
    } catch (err) {
        return { success: false, error: err.message, data: null };
    }
    revalidatePath("/populaire");
    revalidatePath("/recherche");
};

export const addLikeAction = async (usersId) => {
    try {
        const session = await getServerSession();
        const likerId = session.user.id;

        const newlike = await addLike(usersId, likerId);
    } catch (err) {
        return { success: false, error: err.message, data: null };
    }
    revalidatePath("/populaire");
    revalidatePath("/recherche");
};