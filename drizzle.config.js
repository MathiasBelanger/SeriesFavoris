import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema",
  dialect: "sqlite",
  dbCredentials: {
    // correspond au nom de la variable dans .env
    url: process.env.DATABASE_URL,
  },
});
