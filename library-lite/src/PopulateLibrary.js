import React, { useState } from "react";
import axios from "axios";

function PopulateLibrary() {
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePopulate = async () => {
    if (!genre.trim()) return alert("Please enter a genre!");

    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}`
      );

      const fetchedBooks = response.data.items?.map((item) => ({
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors?.[0] || "Unknown Author",
        tags: genre,
      })) || [];

      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
      alert("Failed to fetch books. Try another genre!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📚 Populate Library by Genre</h2>
      <input
        type="text"
        value={genre}
        placeholder="Enter genre (e.g., Mystery, Romance)"
        onChange={(e) => setGenre(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />
      <button onClick={handlePopulate} disabled={loading}>
        {loading ? "Loading..." : "Populate"}
      </button>

      {books.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Books Found ({books.length})</h3>
          <ul>
            {books.map((b, i) => (
              <li key={i}>
                <strong>{b.title}</strong> — {b.author}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PopulateLibrary;
