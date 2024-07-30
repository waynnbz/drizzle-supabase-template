import {
    pgTableCreator,
    serial,
    timestamp,
    varchar,
  } from "drizzle-orm/pg-core";
  
  export const createTable = pgTableCreator((name) => `test_${name}`);
  export const products = createTable("products", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull().unique(),
    description: varchar("description", { length: 512 }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  });