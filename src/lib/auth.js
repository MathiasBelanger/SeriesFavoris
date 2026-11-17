import { db } from "@/db"; // variable créée avec Drizzle
import { betterAuth } from "better-auth";
// version supportant les nouvelles relations Drizzle
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { nextCookies } from "better-auth/next-js";
import * as authSchema from "../db/schema/auth-schema";
import { headers } from "next/headers";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: { ...authSchema },
  }),
  plugins: [nextCookies()],
  emailAndPassword: {
    enabled: true,
  },
});

export const getServerSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
};
