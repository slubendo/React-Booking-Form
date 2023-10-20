import { db } from "@/db";
import { bookings as bookingsTable } from "@/db/schema/bookings";

import { mightFail } from "might-fail";

export default async function Bookings() {
  let { result: bookings, error: bookingsError } = await mightFail(db.select().from(bookingsTable))

  return (
    <div className="max-w-full divide-y divide-gray-200 shadow-lg rounded-lg bg-white dark:bg-gray-800">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800">
          {bookingsError ? (
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Error!</td>
              <td className="px-6 py-4 whitespace-nowrap">Error!</td>
              <td className="px-6 py-4 whitespace-nowrap">Error!</td>
              <td className="px-6 py-4 whitespace-nowrap">Error!</td>
              <td className="px-6 py-4 whitespace-nowrap flex justify-center">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2 w-auto h-auto">
                  Delete
                </button>
              </td>
            </tr>
          ) : (
            bookings.map((row) => (
              <tr key={row.id}>
                <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.date}</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-center">
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2 w-auto h-auto">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
