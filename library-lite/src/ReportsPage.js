import React, { useState } from "react";

function ReportsPage() {
  const [activeTab, setActiveTab] = useState("overdue");

  // --- Theme Constants ---
  const PRIMARY_BLUE = "#0056b3";
  const HOVER_BLUE = "#003d80";
  const ACCENT_BLUE = "#3498db";
  const LIGHT_BLUE_TINT = "#e6f0ff";
  const TEXT_DARK = "#2c3e50";
  const TEXT_GRAY = "#5e6c84";

  // --- Sample Data ---
  const overdueBooks = [
    { member: "Eleanor Vance", title: "The Midnight Library", dueDate: "2023-10-15", daysOverdue: 122, severity: "critical" },
    { member: "Marcus Holloway", title: "Project Hail Mary", dueDate: "2023-11-28", daysOverdue: 79, severity: "high" },
    { member: "Clara Oswald", title: "Dune", dueDate: "2024-01-05", daysOverdue: 41, severity: "medium" },
    { member: "Arthur Pendragon", title: "The Hobbit", dueDate: "2024-02-01", daysOverdue: 14, severity: "low" },
  ];

  const topBooks = [
    { title: "Sapiens: A Brief History of Humankind", checkouts: 95, rank: 1 },
    { title: "Where the Crawdads Sing", checkouts: 88, rank: 2 },
    { title: "The Seven Husbands of Evelyn Hugo", checkouts: 72, rank: 3 },
  ];

  // --- CSV Export Function ---
  const exportCSV = (data, filename = "report.csv") => {
    if (!data || data.length === 0) return;

    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));
    data.forEach(row => {
      csvRows.push(headers.map(h => `"${row[h]}"`).join(","));
    });

    const csvData = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = window.URL.createObjectURL(csvData);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // --- Filter & Sort Overdue Books ---
  const today = new Date();
  const filteredOverdueBooks = overdueBooks
    .filter(book => new Date(book.dueDate) < today)
    .sort((a, b) => b.daysOverdue - a.daysOverdue);

  // --- Sort Top Books ---
  const sortedTopBooks = topBooks
    .sort((a, b) => b.checkouts - a.checkouts || a.title.localeCompare(b.title));

  // --- Render Overdue Report ---
  const renderOverdueReport = () => (
    <div>
      <div className="report-header">
        <h2>Overdue Books Report</h2>
        <button
          className="export-btn"
          onClick={() => exportCSV(filteredOverdueBooks, "overdue_report.csv")}
        >
          ⬇️ Export as CSV
        </button>
      </div>

      {filteredOverdueBooks.length > 0 ? (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th className="th-member">Member Name</th>
                <th>Book Title</th>
                <th>Due Date</th>
                <th style={{ textAlign: "right" }}>Days Overdue</th>
              </tr>
            </thead>
            <tbody>
              {filteredOverdueBooks.map((book, index) => (
                <tr key={index}>
                  <td>{book.member}</td>
                  <td>{book.title}</td>
                  <td>{book.dueDate}</td>
                  <td style={{ textAlign: "right" }}>
                    <span className={`badge badge-${book.severity}`}>
                      {book.daysOverdue} Days
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-report">
          <h3>All Clear!</h3>
          <p>No books are currently overdue.</p>
        </div>
      )}
    </div>
  );

  // --- Render Top Books Report ---
  const renderTopBooksReport = () => (
    <div>
      <div className="report-header">
        <h2>Top 3 Most Checked Out Books</h2>
        <button
          className="export-btn"
          onClick={() => exportCSV(sortedTopBooks, "top_books_report.csv")}
        >
          ⬇️ Export as CSV
        </button>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Rank</th>
              <th>Book Title</th>
              <th style={{ textAlign: "right", width: "20%" }}>Checkouts</th>
            </tr>
          </thead>
          <tbody>
            {sortedTopBooks.map((book, index) => (
              <tr key={index}>
                <td style={{ fontWeight: "bold" }}>#{book.rank}</td>
                <td>{book.title}</td>
                <td style={{ textAlign: "right" }}>
                  <span className="checkout-count">{book.checkouts}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="reports-container">
      <style>{`
        .reports-container {
          font-family: 'Inter', 'Poppins', sans-serif;
          background-color: ${LIGHT_BLUE_TINT};
          min-height: 100vh;
          padding: 40px 60px;
          color: ${TEXT_DARK};
        }
        h1 { font-size: 36px; font-weight: 800; color: ${PRIMARY_BLUE}; margin-bottom: 5px; }
        .reports-container > p { color: ${TEXT_GRAY}; margin-bottom: 30px; font-size: 16px; border-bottom: 1px solid #c8d8ec; padding-bottom: 15px; }

        .tabs { display: flex; gap: 30px; border-bottom: 3px solid #c8d8ec; margin-bottom: 30px; }
        .tab-btn { background: none; border: none; font-weight: 700; font-size: 17px; cursor: pointer; padding: 10px 0; color: ${TEXT_GRAY}; transition: color 0.3s ease, border-bottom 0.3s ease; }
        .tab-btn.active { color: ${PRIMARY_BLUE}; border-bottom: 3px solid ${PRIMARY_BLUE}; }
        .tab-btn:hover { color: ${PRIMARY_BLUE}; }

        .report-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .report-header h2 { font-size: 24px; color: ${TEXT_DARK}; font-weight: 600; }
        .export-btn { background-color: ${ACCENT_BLUE}; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-weight: 600; transition: background-color 0.3s ease; font-size: 14px; box-shadow: 0 2px 4px ${ACCENT_BLUE}50; }
        .export-btn:hover { background-color: #2980b9; }

        .table-wrapper { background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 15px 20px; text-align: left; border-bottom: 1px solid #ebedf0; color: ${TEXT_GRAY}; font-size: 14px; }
        th { background-color: #f7f9fb; color: ${PRIMARY_BLUE}; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px; }
        tr:last-child td { border-bottom: none; }
        tr:hover { background-color: #f0f8ff; }

        .badge { padding: 5px 10px; border-radius: 4px; font-size: 12px; font-weight: 700; text-transform: uppercase; }
        .badge-critical { background-color: #fde8e8; color: #e74c3c; border: 1px solid #e74c3c; }
        .badge-high { background-color: #fff4e5; color: #f39c12; border: 1px solid #f39c12; }
        .badge-medium { background-color: #e6f7ff; color: ${ACCENT_BLUE}; border: 1px solid ${ACCENT_BLUE}; }
        .badge-low { background-color: #e8f8f5; color: #1abc9c; border: 1px solid #1abc9c; }

        .checkout-count { font-weight: 700; color: ${PRIMARY_BLUE}; font-size: 16px; }

        .no-report { text-align: center; background: white; padding: 60px; border-radius: 10px; border: 1px dashed #c0c8d1; color: ${TEXT_GRAY}; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .no-report h3 { font-size: 20px; color: ${TEXT_DARK}; margin-bottom: 10px; }
      `}</style>

      <h1>📈 Library Reports</h1>
      <p>View and export key library activity and performance metrics. These reports help identify trends and critical issues like overdue books.</p>

      <div className="tabs">
        <button className={`tab-btn ${activeTab === "overdue" ? "active" : ""}`} onClick={() => setActiveTab("overdue")}>Overdue Status</button>
        <button className={`tab-btn ${activeTab === "topbooks" ? "active" : ""}`} onClick={() => setActiveTab("topbooks")}>Usage & Ranking</button>
      </div>

      {activeTab === "overdue" && renderOverdueReport()}
      {activeTab === "topbooks" && renderTopBooksReport()}
    </div>
  );
}

export default ReportsPage;
