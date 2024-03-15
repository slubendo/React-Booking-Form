'use client'
import { deleteBooking } from "./actions";

export default function DeleteButton({id}: {id:number}) {

    const deleteEntry = async () => await deleteBooking(id)

  return (
    <button onClick={deleteEntry} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2 w-auto h-auto">
    Delete
    </button>
  );
}
