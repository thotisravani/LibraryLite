import React from "react";

function Members() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-5">
      <h1 className="text-3xl font-bold mb-2">Members</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        View all members and their active loans.
      </p>
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border px-4 py-2">Member Name</th>
            <th className="border px-4 py-2">Active Loans</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">The Midnight Library</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Members;
