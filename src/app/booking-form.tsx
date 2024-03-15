"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import UserDetails from "./user-details";

import { createBooking } from "./actions";
import LoadingBookings from "./loading-bookings";
import Bookings from "./bookings";

export default function AppointmentForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");

  const buttonDisabled = !date || !description || !amount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(loading) {
      setLoading(true);
      setSuccessMsg("");
    }


    const result = await createBooking(date, description, amount)
    setLoading(false);
    setSuccessMsg("Expense added");

    if (result?.error) {
      alert(result.error)
    }
    // send to server and save in database
    setDate("");
    setDescription("");
    setAmount(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl"
    >

        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Expense tracker
        </h3>
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
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="description"
            placeholder="Expense Description"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="email"
          >
            Amount
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="amount"
            placeholder="Amount Spent"
            required
            type="number"
            onChange={(e) => setAmount(+e.target.value)}
            value={amount}
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
{loading ? (<LoadingBookings></LoadingBookings>) : (<Bookings></Bookings>)}
</form>
  
  );
}
