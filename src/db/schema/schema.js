import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const favorisTable = sqliteTable("favories", {
  id: integer().primaryKey({ autoIncrement: true }),
  usersId: text().notNull(),
  created_at: text().notNull(),
  serieSlug: text().notNull(),
  serieName: text().notNull(),
});
export const likeTable = sqliteTable("like", {
  id: integer().primaryKey({ autoIncrement: true }),
  usersId: text().notNull(),
  likerId: text().notNull(),
  nbLike: integer().default(0),
  created_at: text().notNull(),
});
