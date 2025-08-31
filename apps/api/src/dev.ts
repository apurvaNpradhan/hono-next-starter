import type { env } from "cloudflare:workers";

import { Hono } from "hono";
import { cors } from "hono/cors";
import { getPlatformProxy } from "wrangler";

import type { AppContext } from "./lib/context";

import { createDb } from "./db";
import api from "./lib/app";
import { createAuth } from "./lib/auth";

const app = new Hono<AppContext>();
const cf = await getPlatformProxy<typeof env>({
  configPath: "./wrangler.jsonc",
  persist: true,
});
app.use(
  "/*",
  cors({
    origin: cf.env.CORS_ORIGIN,
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);
app.use("*", async (c, next) => {
  const db = createDb(cf.env);
  c.set("db", db);
  c.set("auth", createAuth(db, cf.env));
  await next();
});
app.route("/", api);

export default app;
