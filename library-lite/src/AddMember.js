import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMember() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // --- Handle Input Changes ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // --- Handle Form Submit ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      setMessage("⚠️ Please fill all fields.");
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/members", formData);
      setMessage("✅ Member added successfully!");
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "" });

      // Optionally redirect to members page after 2 sec
      setTimeout(() => navigate("/members"), 2000);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add member. Check server.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Theme Colors ---
  const PRIMARY_BLUE = "#0056b3";
  const HOVER_BLUE = "#003d80";
  const LIGHT_BLUE = "#e6f0ff";
  const TEXT_DARK = "#2c3e50";

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: LIGHT_BLUE,
      padding: "20px",
    },
    card: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "15px",
      width: "400px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
      fontFamily: "'Poppins', sans-serif",
    },
    heading: {
      textAlign: "center",
      color: PRIMARY_BLUE,
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "600",
      color: TEXT_DARK,
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: PRIMARY_BLUE,
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontWeight: "600",
      cursor: "pointer",
      fontSize: "15px",
      marginTop: "10px",
      transition: "0.2s",
    },
    buttonHover: {
      backgroundColor: HOVER_BLUE,
    },
    message: {
      textAlign: "center",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "8px",
      color: "white",
      backgroundColor: isSuccess ? "#28a745" : "#e74c3c",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>➕ Add New Member</h2>

        {message && <div style={styles.message}>{message}</div>}

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter member name"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button} disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Member"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMember;
