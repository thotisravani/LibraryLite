import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    status: "Available",
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post("http://localhost:5000/api/books", formData);
      setMessage("✅ Book added successfully!");
      setIsSuccess(true);
      setFormData({ title: "", author: "", category: "", status: "Available" });
    } catch (err) {
      console.error("AxiosError:", err);
      const errorMsg =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Failed to add book. Please try again.";
      setMessage(`❌ ${errorMsg}`);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }

    setTimeout(() => setMessage(""), 4000);
  };

  // --- Theme Constants ---
  const PRIMARY_BLUE = "#0056b3";
  const HOVER_BLUE = "#003d80";
  const LIGHT_BLUE_TINT = "#e6f0ff";
  const ACCENT_BLUE = "#3498db";
  const TEXT_DARK = "#2c3e50";

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(135deg, ${LIGHT_BLUE_TINT} 0%, #d8e5f5 100%)`,
      padding: "20px",
    },
    card: {
      width: "420px",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      padding: "30px 35px",
      color: TEXT_DARK,
      fontFamily: "'Inter', 'Poppins', sans-serif",
    },
    heading: {
      textAlign: "center",
      marginBottom: "25px",
      color: PRIMARY_BLUE,
      fontSize: "1.8rem",
      fontWeight: "700",
    },
    toast: {
      textAlign: "center",
      padding: "10px",
      color: "white",
      borderRadius: "8px",
      marginBottom: "20px",
      fontWeight: "500",
      animation: "fadeIn 0.4s ease",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    inputGroup: {
      marginBottom: "18px",
    },
    label: {
      fontWeight: "600",
      marginBottom: "8px",
      display: "block",
      color: TEXT_DARK,
      fontSize: "15px",
    },
    input: {
      width: "100%",
      padding: "12px",
      border: "1px solid #d4d4d4",
      borderRadius: "8px",
      fontSize: "15px",
      outline: "none",
      transition: "0.3s",
    },
    inputFocus: {
      borderColor: PRIMARY_BLUE,
      boxShadow: `0 0 0 3px ${PRIMARY_BLUE}30`,
    },
    button: {
      backgroundColor: PRIMARY_BLUE,
      color: "white",
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
      marginTop: "10px",
      transition: "background-color 0.2s, transform 0.1s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonHover: {
      backgroundColor: HOVER_BLUE,
      transform: "translateY(-1px)",
    },
    buttonDisabled: {
      backgroundColor: ACCENT_BLUE,
      cursor: "not-allowed",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📘 Add New Book</h2>

        {message && (
          <div
            style={{
              ...styles.toast,
              backgroundColor: isSuccess ? "#28a745" : "#e74c3c",
            }}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Title */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter book title"
              required
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, styles.input)}
            />
          </div>

          {/* Author */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Author:</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, styles.input)}
            />
          </div>

          {/* Category */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter book category"
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, styles.input)}
            />
          </div>

          {/* Status */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
              onBlur={(e) => Object.assign(e.target.style, styles.input)}
            >
              <option value="Available">Available</option>
              <option value="Issued">Issued</option>
              <option value="Reserved">Reserved</option>
            </select>
          </div>

          <button
            type="submit"
            style={
              isLoading
                ? { ...styles.button, ...styles.buttonDisabled }
                : styles.button
            }
            disabled={isLoading}
            onMouseOver={(e) =>
              !isLoading && Object.assign(e.target.style, styles.buttonHover)
            }
            onMouseOut={(e) =>
              !isLoading && Object.assign(e.target.style, styles.button)
            }
          >
            {isLoading ? "Adding..." : "➕ Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
