import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// --- Dummy Members for Waitlist Demo ---
const MEMBERS = ["Alice", "Bob", "Charlie", "David"];

function LibraryPage() {
  // --- Theme Constants ---
  const PRIMARY_BLUE = "#0056b3";
  const HOVER_BLUE = "#003d80";
  const LIGHT_BLUE_TINT = "#e6f0ff";
  const TEXT_DARK = "#2c3e50";
  const TEXT_GRAY = "#5e6c84";

  // --- State ---
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(false);

  const [books, setBooks] = useState([
    { title: "The Midnight Library", author: "Matt Haig", tags: "Fiction, Sci-Fi", status: "Available", color: PRIMARY_BLUE, waitlist: [], dueDate: null },
    { title: "Atomic Habits", author: "James Clear", tags: "Self-Help", status: "On Loan", color: "#ff8800", waitlist: [], dueDate: new Date() },
    { title: "Dune", author: "Frank Herbert", tags: "Sci-Fi, Classic", status: "Available", color: PRIMARY_BLUE, waitlist: [], dueDate: null },
    { title: "Project Hail Mary", author: "Andy Weir", tags: "Sci-Fi", status: "Available", color: PRIMARY_BLUE, waitlist: [], dueDate: null },
    { title: "The Silent Patient", author: "Alex Michaelides", tags: "Thriller, Mystery", status: "On Loan", color: "#ff8800", waitlist: [], dueDate: new Date() },
  ]);

  // --- Book Actions ---
  const handleLend = (index) => {
    setBooks((prev) => {
      const newBooks = [...prev];
      const book = newBooks[index];

      if (book.status === "Available") {
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 7);
        book.status = "On Loan";
        book.color = "#ff8800";
        book.dueDate = dueDate;
        alert(`✅ Book "${book.title}" lent. Due in 7 days.`);
      } else {
        const nextMember = MEMBERS[Math.floor(Math.random() * MEMBERS.length)];
        if (!book.waitlist.includes(nextMember)) {
          book.waitlist.push(nextMember);
          alert(`ℹ️ ${nextMember} added to waitlist for "${book.title}".`);
        } else {
          alert(`⚠️ ${nextMember} is already in the waitlist.`);
        }
      }

      return newBooks;
    });
  };

  const handleReturn = (index) => {
    setBooks((prev) => {
      const newBooks = [...prev];
      const book = newBooks[index];

      if (book.waitlist.length > 0) {
        const nextMember = book.waitlist.shift();
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 7);
        book.dueDate = dueDate;
        alert(`✅ Book "${book.title}" automatically loaned to ${nextMember}.`);
      } else {
        book.status = "Available";
        book.color = PRIMARY_BLUE;
        book.dueDate = null;
        alert(`✅ Book "${book.title}" returned and now available.`);
      }

      return newBooks;
    });
  };

  // --- Populate Library by Genre ---
  const handlePopulate = async () => {
    if (!genre.trim()) return alert("Please enter a genre first!");

    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}`
      );

      const fetchedBooks =
        response.data.items?.map((item) => ({
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors?.[0] || "Unknown Author",
          tags: genre,
          status: "Available",
          color: PRIMARY_BLUE,
          waitlist: [],
          dueDate: null,
        })) || [];

      if (fetchedBooks.length === 0) {
        alert("No books found for this genre!");
      } else {
        setBooks((prev) => [...prev, ...fetchedBooks]);
        alert(`✅ Added ${fetchedBooks.length} new "${genre}" books!`);
      }
    } catch (error) {
      console.error("Error populating books:", error);
      alert("❌ Failed to fetch books. Try another genre!");
    } finally {
      setLoading(false);
    }
  };

  // --- Filter by Search ---
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- Styles ---
  const styles = {
    page: { fontFamily: "'Poppins', sans-serif", backgroundColor: LIGHT_BLUE_TINT, color: TEXT_DARK, minHeight: "100vh" },
    main: { padding: "40px 60px" },
    mainHeader: { marginBottom: "25px" },
    mainHeading: { fontSize: "32px", fontWeight: "800", color: PRIMARY_BLUE, borderBottom: `3px solid ${PRIMARY_BLUE}33`, paddingBottom: "5px", display: "inline-block" },
    subHeading: { color: TEXT_GRAY, fontSize: "15px" },
    searchContainer: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px", gap: "15px" },
    searchBox: { width: "100%", maxWidth: "400px", padding: "12px 15px", borderRadius: "8px", border: `1px solid ${PRIMARY_BLUE}40`, fontSize: "14px", outlineColor: PRIMARY_BLUE },
    addButton: { backgroundColor: isButtonHovered ? HOVER_BLUE : PRIMARY_BLUE, color: "white", border: "none", borderRadius: "8px", padding: "12px 25px", fontWeight: "600", cursor: "pointer", boxShadow: `0 4px 8px ${PRIMARY_BLUE}50`, transition: "0.3s ease", textTransform: "uppercase", fontSize: "13px", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" },
    tableWrapper: { backgroundColor: "#ffffff", borderRadius: "10px", overflow: "hidden", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" },
    table: { width: "100%", borderCollapse: "collapse" },
    th: { textAlign: "left", backgroundColor: PRIMARY_BLUE, color: "white", padding: "15px 20px", fontWeight: "700", fontSize: "14px", borderBottom: "none" },
    td: { padding: "15px 20px", fontSize: "14px", borderBottom: "1px solid #eee", color: TEXT_DARK },
    rowOdd: { backgroundColor: "white" },
    rowEven: { backgroundColor: "#f9fbfd" },
    rowHover: { backgroundColor: "#f0f8ff" },
    actionBtn: { color: "white", border: "none", borderRadius: "20px", padding: "8px 18px", cursor: "pointer", fontWeight: "600", transition: "0.3s", minWidth: "90px", fontSize: "13px", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" },
    lendBtn: { backgroundColor: PRIMARY_BLUE },
    returnBtn: { backgroundColor: "#ff8800" },
    populateSection: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 6px 15px rgba(0,0,0,0.1)", marginBottom: "25px" },
    populateInput: { padding: "10px 14px", border: `1px solid ${PRIMARY_BLUE}55`, borderRadius: "8px", marginRight: "10px", width: "250px", outlineColor: PRIMARY_BLUE },
    populateBtn: { backgroundColor: PRIMARY_BLUE, color: "white", border: "none", padding: "10px 18px", borderRadius: "8px", cursor: "pointer", fontWeight: "600" },
  };

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <div style={styles.mainHeader}>
          <h1 style={styles.mainHeading}>📚 Book Inventory</h1>
          <p style={styles.subHeading}>Manage and track every book in your library efficiently.</p>
        </div>

        {/* Search + Add Book */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="🔍 Search by title..."
            style={styles.searchBox}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link
            to="/add-book"
            style={styles.addButton}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            ➕ Add Book
          </Link>
        </div>

        {/* Populate Library Section */}
        <div style={styles.populateSection}>
          <h3 style={{ color: PRIMARY_BLUE }}>✨ Auto-Populate Library</h3>
          <p style={{ color: TEXT_GRAY }}>Enter a genre and I’ll fill your library with top books!</p>
          <div style={{ marginTop: "10px" }}>
            <input
              type="text"
              placeholder="e.g., Mystery, Fantasy, Romance"
              style={styles.populateInput}
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <button style={styles.populateBtn} onClick={handlePopulate} disabled={loading}>
              {loading ? "Loading..." : "Populate"}
            </button>
          </div>
        </div>

        {/* Books Table */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ ...styles.th, borderTopLeftRadius: "10px" }}>Title</th>
                <th style={styles.th}>Author</th>
                <th style={styles.th}>Tags</th>
                <th style={styles.th}>Status</th>
                <th style={{ ...styles.th, borderTopRightRadius: "10px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book, i) => {
                const rowBaseStyle = i % 2 === 0 ? styles.rowOdd : styles.rowEven;
                const isLend = book.status === "Available";
                const baseActionStyle = isLend ? styles.lendBtn : styles.returnBtn;

                return (
                  <tr
                    key={i}
                    style={rowBaseStyle}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.rowHover.backgroundColor)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = rowBaseStyle.backgroundColor)}
                  >
                    <td style={styles.td}>{book.title}</td>
                    <td style={styles.td}>{book.author}</td>
                    <td style={styles.td}>{book.tags}</td>
                    <td style={{ ...styles.td, color: book.color, fontWeight: "600" }}>
                      {book.status}
                      {book.dueDate ? ` (Due: ${book.dueDate.toLocaleDateString()})` : ""}
                    </td>
                    <td style={styles.td}>
                      <button
                        style={{ ...styles.actionBtn, ...baseActionStyle }}
                        onClick={() => (isLend ? handleLend(i) : handleReturn(i))}
                      >
                        {isLend ? "Lend" : "Return"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default LibraryPage;
