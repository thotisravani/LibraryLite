import React from "react";

function Catalog() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-5">
      <h1 className="text-3xl font-bold mb-2">Book Inventory</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        View and manage the entire book inventory.
      </p>
      <input
        type="text"
        placeholder="Search by title or author..."
        className="w-full max-w-md p-2 border rounded mb-4"
      />

      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Author</th>
            <th className="border px-4 py-2">Tags</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">The Midnight Library</td>
            <td className="border px-4 py-2">Matt Haig</td>
            <td className="border px-4 py-2">Fiction, Sci-Fi</td>
            <td className="border px-4 py-2 text-green-600">Available</td>
            <td className="border px-4 py-2 text-blue-600">Lend</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Catalog;
