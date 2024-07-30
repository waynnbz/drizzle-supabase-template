import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from 'dotenv';

config({ path: '.env.local' });

import * as schema from "./schema";

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema });