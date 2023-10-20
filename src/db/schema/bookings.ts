import {
  serial,
  varchar,
  text,
  pgTable,
  date,
  timestamp,
} from "drizzle-orm/pg-core";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(), // name is 3 characters to 50 Check
  email: text("email").notNull(), // validate email format
  date: date("date").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
