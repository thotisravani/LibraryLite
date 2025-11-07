import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import LibraryPage from "./LibraryPage";
import MembersPage from "./MembersPage";
import ReportsPage from "./ReportsPage";
import AddBook from "./AddBook";
import AddMember from "./AddMember";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          {/* ✅ Default Route - show Home Page first */}
          <Route path="/" element={<Home />} />

          {/* ✅ Other Routes */}
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/add-member" element={<AddMember />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
