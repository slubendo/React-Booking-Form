"use server";

import { db, eq } from "@/db";
import { bookings } from "@/db/schema/bookings";
import { revalidatePath } from "next/cache"

export async function createBooking(date: string, description: string, amount: number) {
  console.log({
    date,
    description,
    amount,
  });

  if (description.length < 3) {
    return { error: "Name must be at least 3 characters" };
  }
  // connect to the database
  const result = await db.insert(bookings).values({ date, description, amount }).returning();
  console.log({ result });
  // redirect
  // revalidate
  revalidatePath("/")
}

export async function deleteBooking(id: number) {
  'use server'
  console.log(id);
  await db.delete(bookings).where(eq(bookings.id, id));
  // redirect
  // revalidate
  revalidatePath("/")
}
