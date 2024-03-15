import Image from "next/image";

import { cn } from "@/lib/utils";

// import { BookingSystemForm } from "@/components/booking-system-form";
import BookingForm from "./booking-form";
import UserDetails from "./user-details";
import Bookings from "./bookings";
import LoadingBookings from "./loading-bookings";
import { Suspense } from "react";


// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default function Home() {
  const user = {
    username: "mo",
    avatar:
      "https://cdn.discordapp.com/attachments/1093396341243252786/1165030167748546620/sam69420_tired_bcit_student_357ef9cd-22eb-4aec-a66e-48be01dcde18.png?ex=65455de5&is=6532e8e5&hm=60de35bd902f543c5b0bc522f68355bf72f8ae685de621f052512a3397f8a4e2&",
  };


  return (
    <main className="bg-white max-w-xl m-auto ">
      <BookingForm></BookingForm>

      <Suspense fallback={<LoadingBookings />}>
        <Bookings/>
      </Suspense>
      
    </main>
  );
}
