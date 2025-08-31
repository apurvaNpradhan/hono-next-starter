import type { CreateHTTPContextOptions } from "@trpc/server/adapters/standalone";
import type { Session, User } from "better-auth/types";
import type { Context as HonoContext } from "hono";

import type { DB } from "../db";
import type { Auth } from "./auth";
import type { env } from "./env";

export type TRPCContext = {
  /** The incoming HTTP request object */
  req: Request;

  /** tRPC request metadata (headers, connection info) */
  info: CreateHTTPContextOptions["info"];

  /** Drizzle ORM database instance (PostgreSQL via Hyperdrive cached connection) */
  // db: PostgresJsDatabase<DbSchema>;
  db: DB;

  /** Drizzle ORM database instance (PostgreSQL via Hyperdrive direct connection) */
  // dbDirect: PostgresJsDatabase<DbSchema>;

  /** Authenticated user session (null if not authenticated) */
  session: Session | null;

  /** Authenticated user data (null if not authenticated) */
  user: User | null;

  /** Request-scoped cache for storing computed values during request lifecycle */
  cache: Map<string | symbol, unknown>;

  /** Optional HTTP response object (available in Hono middleware) */
  res?: Response;

  /** Optional response headers (for setting cookies, CORS headers, etc.) */
  resHeaders?: Headers;

  /** Environment variables and secrets */
  env: typeof env;
};

export type CreateContextOptions = {
  context: HonoContext;
};
export type AppContext = {
  Bindings: typeof env;
  Variables: {
    db: DB;
    // dbDirect: PostgresJsDatabase<DbSchema>;
    auth: Auth;
    session: Session | null;
    user: User | null;
  };
};
