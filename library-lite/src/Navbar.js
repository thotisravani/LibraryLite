import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";  // ✅ Removed BrowserRouter

function Navbar() {
  const PRIMARY_BLUE = "#0056b3";
  const HOVER_BLUE = "#003d80";
  const TEXT_DARK = "#2c3e50";
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 30px',
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
    borderBottom: `3px solid ${PRIMARY_BLUE}`,
    fontFamily: "Poppins, sans-serif",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: PRIMARY_BLUE,
  };

  const linkContainer = {
    display: "flex",
    gap: "25px",
    alignItems: "center",
  };

  const navLinkBase = {
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s',
    fontWeight: '500',
    color: TEXT_DARK,
    borderBottom: '3px solid transparent',
  };

  const navLinkActive = {
    fontWeight: '700',
    color: PRIMARY_BLUE,
    borderBottom: `3px solid ${PRIMARY_BLUE}`,
  };

  const getLinkStyle = ({ isActive }) => ({
    ...navLinkBase,
    ...(isActive ? navLinkActive : {}),
  });

  const addBookButton = {
    backgroundColor: isButtonHovered ? HOVER_BLUE : PRIMARY_BLUE,
    color: "white",
    padding: "10px 20px",
    borderRadius: "25px",
    border: "none",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "15px",
    boxShadow: `0 4px 12px rgba(0, 86, 179, 0.4)`,
    transition: "all 0.3s ease",
    transform: isButtonHovered ? "scale(1.05)" : "scale(1)",
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>📚 Library Lite</div>
      <nav style={linkContainer}>
        <NavLink to="/" style={getLinkStyle}>Home</NavLink>
        <NavLink to="/library" style={getLinkStyle}>Catalog</NavLink>
        <NavLink to="/members" style={getLinkStyle}>Members</NavLink>
        <NavLink to="/reports" style={getLinkStyle}>Reports</NavLink>

        <Link
          to="/add-book"
          style={addBookButton}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          ➕ Add Book
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
