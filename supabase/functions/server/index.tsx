import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use('*', logger(console.log));

app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

app.get("/make-server-629e5ff1/health", (c) => {
  return c.json({ status: "ok" });
});

app.post("/make-server-629e5ff1/register-email", async (c) => {
  try {
    const { email } = await c.req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return c.json({ error: "Ungültige E-Mail-Adresse" }, 400);
    }

    const timestamp = new Date().toISOString();
    const key = `email_registration:${timestamp}:${email}`;
    await kv.set(key, { email, registeredAt: timestamp });

    console.log(`Neue E-Mail-Registrierung: ${email} um ${timestamp}`);
    return c.json({ success: true });
  } catch (err) {
    console.log(`Fehler bei der E-Mail-Registrierung: ${err}`);
    return c.json({ error: "Interner Serverfehler" }, 500);
  }
});

Deno.serve(app.fetch);
