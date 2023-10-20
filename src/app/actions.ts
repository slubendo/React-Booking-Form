"use server";

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

  // redirect
  // revalidate
}
