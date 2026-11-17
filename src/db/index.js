import "dotenv/config"; // pour lire les variables d'environnement
import { drizzle } from "drizzle-orm/libsql";
// correspond au nom de la variable dans .env

export const db = drizzle({
  // logger: true,
  connection: { url: process.env.DATABASE_URL },
  schema: "./src/db/schema",
});
