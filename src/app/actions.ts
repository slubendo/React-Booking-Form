"use server";

import { db } from "@/db";
import { bookings } from "@/db/schema/bookings";
import { revalidatePath } from "next/cache"

export async function createBooking(date: string, name: string, email: string) {
  console.log({
    date,
    name,
    email,
  });

  if (name.length < 3) {
    return { error: "Name must be at least 3 characters" };
  }
  // connect to the database
  const result = await db.insert(bookings).values({ date, name, email }).returning();
  console.log({ result });
  // redirect
  // revalidate
  revalidatePath("/")
}
