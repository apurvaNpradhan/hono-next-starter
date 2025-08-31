import { Hono } from "hono";

import type { AppContext } from "./lib/context.js";
import type { Env } from "./lib/env.js";

import { createDb } from "./db/index.js";
import app from "./lib/app.js";
import { createAuth } from "./lib/auth.js";

type CloudflareEnv = Env;

const worker = new Hono<{
  Bindings: CloudflareEnv;
  Variables: AppContext["Variables"];
}>();

worker.use("*", async (c, next) => {
  const db = createDb(c.env);
  const auth = createAuth(db, c.env);
  c.set("db", db);
  c.set("auth", auth);

  await next();
});

worker.route("/", app);

export default worker;
