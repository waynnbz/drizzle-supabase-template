import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: '.env.local' });

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  out: "./supabase/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  tablesFilter: ["test_*"],
});
