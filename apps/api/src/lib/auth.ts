import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { expo } from "@better-auth/expo";
import { nextCookies } from "better-auth/next-js";
import { type DB } from "../db";
import { schema as Db } from "@repo/db";
import type { Env } from "./env";
type AuthEnv = Pick<Env, "BETTER_AUTH_SECRET" | "CORS_ORIGIN" | "BETTER_AUTH_URL">;
export function createAuth(db: DB, env: AuthEnv): ReturnType<typeof betterAuth> {
   return betterAuth({
      database: drizzleAdapter(db, {
         provider: "pg",
         schema: {
            identity: Db.identity,
            session: Db.session,
            user: Db.user,
            verification: Db.verification,
         },
      }),
      account: {
         modelName: "identity",
      },
      trustedOrigins: [env.CORS_ORIGIN],
      emailAndPassword: {
         enabled: true,
      },
      secret: env.BETTER_AUTH_SECRET,
      baseURL: env.BETTER_AUTH_URL,
      advanced: {
         defaultCookieAttributes: {
            sameSite: "none",
            secure: true,
            httpOnly: true,
         },
         advanced: {
            database: {
               generateId: false,
            },
         },
      },
      plugins: [expo(), nextCookies()],
   });
}

export type Auth = ReturnType<typeof betterAuth>;
