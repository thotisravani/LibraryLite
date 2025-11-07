import React from "react";
import { Link } from "react-router-dom";

function MembersPage() {
  // 🎨 Theme Constants
  const PRIMARY_BLUE = "#0056b3"; // Deep Royal Blue
  const HOVER_BLUE = "#003d80";   // Darker blue for button hover
  const LIGHT_BLUE_TINT = "#e6f0ff"; // Very light blue background
  const ACCENT_GRAY = "#5e6c84";
  const TEXT_DARK = "#2c3e50";
  const TEXT_GRAY = "#34495e";

  const style = {
    // --- Container & Text Styles ---
    container: {
      padding: "35px 50px",
      fontFamily: "Inter, Poppins, sans-serif",
      backgroundColor: LIGHT_BLUE_TINT,
      minHeight: "100vh",
      color: TEXT_DARK,
      boxSizing: "border-box",
    },
    title: {
      fontSize: "32px",
      fontWeight: "800",
      color: PRIMARY_BLUE,
      marginBottom: "10px",
      borderBottom: `3px solid ${PRIMARY_BLUE}33`,
      paddingBottom: "5px",
    },
    subtitle: {
      color: ACCENT_GRAY,
      marginBottom: "30px",
      fontSize: "16px",
      fontWeight: "400",
    },

    // --- Button Styles ---
    buttonAdd: {
      backgroundColor: PRIMARY_BLUE,
      color: "white",
      border: "none",
      padding: "12px 24px",
      borderRadius: "8px",
      cursor: "pointer",
      marginBottom: "30px",
      fontWeight: "600",
      letterSpacing: "0.5px",
      boxShadow: `0 4px 6px ${PRIMARY_BLUE}40`,
      transition: "background-color 0.3s ease, transform 0.1s ease",
      textTransform: "uppercase",
      fontSize: "13px",
    },
    buttonAddHover: {
      backgroundColor: HOVER_BLUE,
      transform: "translateY(-1px)",
    },

    // --- Table Styles ---
    tableContainer: {
      overflowX: "auto",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: "0",
    },
    th: {
      backgroundColor: PRIMARY_BLUE,
      color: "white",
      padding: "15px 20px",
      textAlign: "left",
      fontWeight: "700",
      fontSize: "14px",
    },
    td: {
      padding: "15px 20px",
      borderBottom: "1px solid #ebedf0",
      color: TEXT_GRAY,
      fontSize: "14px",
    },
    rowOdd: {
      backgroundColor: "white",
    },
    rowEven: {
      backgroundColor: "#f9fbfd",
    },
    rowHover: {
      backgroundColor: "#f0f8ff",
    },

    // --- Action Button Styles ---
    actionBtn: {
      backgroundColor: "#1abc9c",
      color: "white",
      border: "none",
      padding: "8px 15px",
      borderRadius: "5px",
      marginRight: "10px",
      cursor: "pointer",
      fontWeight: "500",
      fontSize: "13px",
      transition: "0.3s ease",
      outline: "none",
    },
    actionBtnHover: {
      backgroundColor: "#16a085",
    },
    deleteBtn: {
      backgroundColor: "#e74c3c",
      color: "white",
      border: "none",
      padding: "8px 15px",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "500",
      fontSize: "13px",
      transition: "0.3s ease",
      outline: "none",
    },
    deleteBtnHover: {
      backgroundColor: "#c0392b",
    },
    // --- Status Styles ---
    statusActive: {
      color: PRIMARY_BLUE,
    },
    statusInactive: {
      color: "#e74c3c",
    },
  };

  return (
    <div style={style.container}>
      <h1 style={style.title}>📚 Members Management</h1>
      <p style={style.subtitle}>
        Manage member profiles, view loaned books, and quickly add new members to your library system.
      </p>

      {/* ✅ Add Member Button with Link */}
      <Link to="/add-member" style={{ textDecoration: "none" }}>
        <button
          style={style.buttonAdd}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              style.buttonAddHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor =
              style.buttonAdd.backgroundColor)
          }
        >
          + ADD NEW MEMBER
        </button>
      </Link>

      {/* Members Table */}
      <div style={style.tableContainer}>
        <table style={style.table}>
          <thead>
            <tr>
              <th style={{ ...style.th, borderTopLeftRadius: "10px" }}>
                Member Name
              </th>
              <th style={style.th}>Member ID</th>
              <th style={style.th}>Status</th>
              <th style={{ ...style.th, borderTopRightRadius: "10px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Eleanor Vance", "EV-202401", "Active"],
              ["Marcus Thorne", "MT-202402", "Active"],
              ["Clara Oswald", "CO-202403", "Inactive"],
              ["Julian Bashir", "JB-202404", "Active"],
            ].map(([name, id, status], i) => {
              const rowBaseStyle = i % 2 === 0 ? style.rowOdd : style.rowEven;

              return (
                <tr
                  key={i}
                  style={rowBaseStyle}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      style.rowHover.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      rowBaseStyle.backgroundColor || "white")
                  }
                >
                  <td style={style.td}>{name}</td>
                  <td style={style.td}>{id}</td>
                  <td
                    style={{
                      ...style.td,
                      ...(status === "Active"
                        ? style.statusActive
                        : style.statusInactive),
                      fontWeight: "600",
                    }}
                  >
                    {status}
                  </td>
                  <td style={style.td}>
                    <button
                      style={style.actionBtn}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor =
                          style.actionBtnHover.backgroundColor)
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor =
                          style.actionBtn.backgroundColor)
                      }
                    >
                      Edit
                    </button>
                    <button
                      style={style.deleteBtn}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor =
                          style.deleteBtnHover.backgroundColor)
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor =
                          style.deleteBtn.backgroundColor)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MembersPage;
