import React from "react";

function Reports() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-5">
      <h1 className="text-3xl font-bold mb-2">Reports</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Generate overdue and top-books reports.
      </p>
      <ul className="list-disc ml-6">
        <li>Overdue Report (loans where due date &lt; today)</li>
        <li>Top Books Report (most checked-out books)</li>
      </ul>
    </div>
  );
}

export default Reports;
