import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import ws from "ws";

import type { Env } from "../lib/env";

type DbEnv = Pick<Env, "DATABASE_URL">;

export function createDb(dbenv: DbEnv) {
  neonConfig.webSocketConstructor = ws;
  neonConfig.poolQueryViaFetch = true;

  const sql = neon(dbenv.DATABASE_URL || "");
  const db = drizzle(sql);

  return db;
}

export type DB = ReturnType<typeof createDb>;
