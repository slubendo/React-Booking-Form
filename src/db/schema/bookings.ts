import {
  serial,
  text,
  pgTable,
  date,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
  description: text("description").notNull(), // name is 3 characters to 50 Check
  amount: integer("amount").notNull(), // validate email format
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
