import "server-only";
import { db } from "@/db";
import { and, like } from "drizzle-orm";
import { eq } from "drizzle-orm";
import { user } from "@/db/schema/auth-schema";
import { favorisTable, likeTable } from "@/db/schema/schema";

export const getAllTrending = async () => {
  try {
    const resp = await fetch("http://localhost:3000/api/series/trending");
    if (!resp.ok) {
      throw new Error("Une erreur est survenue");
    }
    const data = await resp.json();
    return data.series;
  } catch (err) {
    return [];
  }
};
export const searchSeries = async (input) => {
  const resp = await fetch(`http://localhost:3000/api/series/search?q=${input}`);
  if (!resp.ok) {
    throw new Error("Une erreur est survenue");
  }
  const data = await resp.json();
  return data.series;
}
export const searchUsers = async (input) => {
  const searchQuery = `%${input}%`;
  const resp = await db
    .select()
    .from(user)
    .where(like(user.name, searchQuery));
  return resp;
}

export const getUser = async (usersId) => {
  const [foundUser] = await db
    .select()
    .from(user)
    .where(eq(user.id, usersId))
    .limit(1);
  return foundUser ?? null;
};

export const getAllDetails = async (slug) => {
  try {
    const resp = await fetch("http://localhost:3000/api/series/" + slug);
    if (!resp.ok) {
      throw new Error("Une erreur est survenue");
    }
    const data = await resp.json();
    return data.serie;
  } catch (err) {
    return [];
  }
};

export const getAllFavoris = async (usersId) => {
  const favoris = await db
    .select()
    .from(favorisTable)
    .where(eq(favorisTable.usersId, usersId));
  return favoris;
};

export const getAllLike = async (usersId) => {
  const like = await db
    .select()
    .from(likeTable)
    .where(eq(likeTable.usersId, usersId));
  return like;
};

export const removeFavoris = async (usersId, slug) => {
  await db.delete(favorisTable).where(and(eq(favorisTable.usersId, usersId), eq(favorisTable.serieSlug, slug)))
  return null;
}

export const addFavoris = async (usersId, slugFav, titleFav) => {
  const [existingFavoris] = await db
    .select()
    .from(favorisTable)
    .where(
      and(
        eq(favorisTable.usersId, usersId),
        eq(favorisTable.serieSlug, slugFav),
      ),
    ).limit(1)
  if (!existingFavoris) {
    console.log("ExistingFavoris", existingFavoris);
    const entree = await db
      .insert(favorisTable)
      .values({
        usersId,
        created_at: new Date().toISOString(),
        serieSlug: slugFav,
        serieName: titleFav,
      })
      .returning();
    return entree[0];
  }
  else return null;
};

export const addLike = async (usersId, likerId) => {
  if (usersId === likerId) return null

  const [existingLike] = await db
    .select({ likerId: likeTable.likerId })
    .from(likeTable)
    .where(and(
      eq(likeTable.usersId, usersId),
      eq(likeTable.likerId, likerId),
    ),).limit(1)
  if (!existingLike) {
    const entree = await db
      .insert(likeTable)
      .values({
        usersId,
        created_at: new Date().toISOString(),
        likerId: likerId,
        nbLike: 1,
      })
      .returning();
    return entree[0];
  }
  else {
    await db
      .delete(likeTable)
      .where(and(
        eq(likeTable.usersId, usersId),
        eq(likeTable.likerId, likerId),
      ),)

    return null;
  }
};
