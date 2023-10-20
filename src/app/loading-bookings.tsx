

export default function LoadingBookings() {
    return (
        <div className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg bg-white dark:bg-gray-800">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800">
                    {new Array(2).fill(0).map((item, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap animate-pulse bg-gray-200"></td>
                            <td className="px-6 py-4 whitespace-nowrap animate-pulse bg-gray-200"></td>
                            <td className="px-6 py-4 whitespace-nowrap animate-pulse bg-gray-200"></td>
                            <td className="px-6 py-4 whitespace-nowrap animate-pulse bg-gray-200"></td>
                            <td className="px-6 py-4 whitespace-nowrap flex justify-center animate-pulse bg-gray-200"></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}