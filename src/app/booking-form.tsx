"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import UserDetails from "./user-details";

import { createBooking } from "./actions";

export default function AppointmentForm({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const buttonDisabled = !date || !name || !email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log({ date, name, email });
    const result = await createBooking(date, name, email)
    if (result?.error) {
      alert(result.error)
    }
    // send to server and save in database
    setDate("");
    setName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl"
    >
      {children}
      {/* <UserDetails user={user} /> */}
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Book Your Appointment
        </h3>
        <p className="text-sm text-muted-foreground">
          Select a date and time, then fill out your details.
        </p>
      </div>
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="date"
            placeholder="Enter your name"
            required
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="name"
          >
            Your name
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="name"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="email"
            placeholder="m@example.com"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button
          className={cn(
            "border-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full",
            buttonDisabled && "opacity-50 pointer-events-none",
            !buttonDisabled && "hover:bg-slate-200"
          )}
          type="submit"
          disabled={buttonDisabled}
        >
          Confirm Booking
        </button>
      </div>
    </form>
  );
}
