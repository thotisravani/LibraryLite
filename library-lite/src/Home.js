import React from "react";

function Home() {
  // Define the new royal blue palette
  const PRIMARY_BLUE = "#0056b3"; // Deep Royal Blue
  const LIGHT_BLUE_TINT = "#e6f0ff"; // Very subtle light blue background
  const TEXT_DARK = "#2c3e50"; // Dark text for high contrast

  const styles = {
    // General
    container: {
      fontFamily: "Poppins, sans-serif",
      backgroundColor: "#f9fafb",
      padding: "20px 40px",
      color: "#333",
    },
    sectionTitle: {
      fontSize: "24px", // Slightly larger for professionalism
      marginBottom: "20px",
      fontWeight: "700",
      color: PRIMARY_BLUE,
      borderBottom: `3px solid ${PRIMARY_BLUE}`, // Thicker underline
      paddingBottom: "8px",
      textTransform: "uppercase", // Added for a more corporate look
    },

    // Header & Stats
    header: {
      marginBottom: "30px",
    },
    welcome: {
      fontSize: "30px", // Increased size
      fontWeight: "700",
      marginBottom: "20px",
      color: TEXT_DARK,
    },
    statsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", // Wider cards
      gap: "25px", // Increased gap
    },
    statCard: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: `0 6px 15px rgba(0, 86, 179, 0.15)`, // Blue shadow
      textAlign: "center",
      transition: "transform 0.3s ease",
      cursor: "pointer",
      borderLeft: `6px solid ${PRIMARY_BLUE}`,
      // Added hover effect for interactivity
      ":hover": {
        transform: "translateY(-3px)",
        boxShadow: `0 8px 20px rgba(0, 86, 179, 0.25)`,
      },
    },
    statNumber: {
      fontSize: "36px", // Increased size
      fontWeight: "800",
      color: PRIMARY_BLUE,
    },
    statLabel: {
      fontSize: "16px",
      marginTop: "10px",
      color: "#555",
      fontWeight: "500",
    },

    // Hero Section
    hero: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "15px",
      margin: "30px 0",
      color: "#fff",
      height: "350px", // Slightly taller
      position: "relative",
      overflow: "hidden",
    },
    heroOverlay: {
      borderRadius: "15px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "30px",
      // Dark overlay for better text contrast
      backgroundColor: "rgba(0, 86, 179, 0.5)",
    },
    heroTitle: {
      fontSize: "42px", // Larger, more impactful title
      fontWeight: "900",
      marginBottom: "15px",
      textShadow: "3px 3px 8px rgba(0,0,0,0.6)",
    },
    heroSubtitle: {
      fontSize: "20px",
      marginBottom: "30px",
      maxWidth: "700px",
      fontWeight: "300",
    },
    ctaButton: {
      padding: "15px 40px",
      backgroundColor: PRIMARY_BLUE,
      color: "#fff",
      border: "2px solid #fff", // White border for contrast
      borderRadius: "50px",
      fontSize: "18px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease",
      ":hover": {
        backgroundColor: "#003d80", // Darker blue on hover
        transform: "scale(1.05)",
      },
    },

    // Wisdom Section
    wisdomSection: {
      backgroundColor: LIGHT_BLUE_TINT, // soft blue tint
      padding: "40px",
      borderRadius: "15px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      marginBottom: "40px",
    },
    quoteBox: {
      textAlign: "center",
      color: PRIMARY_BLUE, // Quote color is blue
    },
    quote: {
      fontStyle: "italic",
      fontSize: "20px", // Larger quote font
      lineHeight: "1.7",
      fontWeight: "500",
      maxWidth: "800px",
      margin: "0 auto",
    },
    author: {
      marginTop: "20px",
      fontWeight: "700",
      color: TEXT_DARK,
      fontSize: "17px",
    },

    // Feedback Section
    feedbackSection: {
      marginBottom: "40px",
    },
    feedbackContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "25px",
    },
    feedbackCard: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      borderLeft: `5px solid ${PRIMARY_BLUE}`,
    },
    feedbackText: {
      fontStyle: "italic",
      color: "#555",
      lineHeight: "1.6",
    },
    feedbackAuthor: {
      marginTop: "15px",
      fontWeight: "600",
      textAlign: "right",
      color: PRIMARY_BLUE,
    },

    // Contact Section
    contactSection: {
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "15px",
      boxShadow: `0 4px 15px rgba(0, 86, 179, 0.1)`,
    },
    contactContent: {
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      marginTop: "20px",
    },
    contactInfo: {
      flex: "1",
      minWidth: "250px",
      fontSize: "17px",
      lineHeight: "2.2",
    },
    socialIcons: {
      marginTop: "15px",
      fontSize: "28px", // Larger icons
      display: "flex",
      gap: "20px",
      color: PRIMARY_BLUE, // Blue icons
    },
    contactForm: {
      flex: "2",
      minWidth: "300px",
      display: "flex",
      flexDirection: "column",
      gap: "18px", // Increased gap
    },
    input: {
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      fontSize: "16px",
      transition: "border-color 0.3s, box-shadow 0.3s",
      ":focus": {
        borderColor: PRIMARY_BLUE,
        boxShadow: `0 0 0 3px ${LIGHT_BLUE_TINT}`,
        outline: "none",
      },
    },
    textarea: {
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      fontSize: "16px",
      resize: "vertical",
      minHeight: "120px",
      transition: "border-color 0.3s, box-shadow 0.3s",
      ":focus": {
        borderColor: PRIMARY_BLUE,
        boxShadow: `0 0 0 3px ${LIGHT_BLUE_TINT}`,
        outline: "none",
      },
    },
    button: {
      padding: "15px",
      backgroundColor: PRIMARY_BLUE,
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "700",
      transition: "background-color 0.3s",
      ":hover": {
        backgroundColor: "#003d80",
      },
    },

    // Footer
    footer: {
      textAlign: "center",
      marginTop: "50px",
      padding: "25px 0",
      borderTop: "1px solid #eee",
      fontSize: "15px",
      color: "#777",
    },
  };

  // Components (Using inline style objects which is a common React pattern, though Tailwind is preferred)
  const StatCard = ({ number, label }) => (
    <div
      style={styles.statCard}
      // Re-applying :hover effects via onMouse handlers for proper styling in a non-CSS-in-JS environment
      onMouseOver={(e) => {
        Object.assign(e.currentTarget.style, styles.statCard[":hover"]);
      }}
      onMouseOut={(e) => {
        // Resetting to original state
        e.currentTarget.style.transform = styles.statCard.transform;
        e.currentTarget.style.boxShadow = `0 6px 15px rgba(0, 86, 179, 0.15)`;
      }}
    >
      <h3 style={styles.statNumber}>{number}</h3>
      <p style={styles.statLabel}>{label}</p>
    </div>
  );

  const FeedbackCard = ({ text, author }) => (
    <div style={styles.feedbackCard}>
      <p style={styles.feedbackText}>{text}</p>
      <h4 style={styles.feedbackAuthor}>{author}</h4>
    </div>
  );

  const ContactForm = () => (
    <form
      style={styles.contactForm}
      onSubmit={(e) => {
        e.preventDefault();
        // Custom modal replacement for alert()
        const messageBox = document.getElementById('messageBox');
        if (messageBox) {
            messageBox.style.display = 'flex';
            setTimeout(() => {
                messageBox.style.display = 'none';
            }, 3000);
        }
      }}
    >
      <input
        type="text"
        placeholder="Your Name"
        style={styles.input}
        required
        onFocus={(e) => Object.assign(e.currentTarget.style, styles.input[":focus"])}
        onBlur={(e) => {
            e.currentTarget.style.borderColor = styles.input.border.split(' ')[1];
            e.currentTarget.style.boxShadow = 'none';
        }}
      />
      <input
        type="email"
        placeholder="Your Email"
        style={styles.input}
        required
        onFocus={(e) => Object.assign(e.currentTarget.style, styles.input[":focus"])}
        onBlur={(e) => {
            e.currentTarget.style.borderColor = styles.input.border.split(' ')[1];
            e.currentTarget.style.boxShadow = 'none';
        }}
      />
      <textarea
        placeholder="Your Message"
        rows="4"
        style={styles.textarea}
        required
        onFocus={(e) => Object.assign(e.currentTarget.style, styles.textarea[":focus"])}
        onBlur={(e) => {
            e.currentTarget.style.borderColor = styles.textarea.border.split(' ')[1];
            e.currentTarget.style.boxShadow = 'none';
        }}
      ></textarea>
      <button
        type="submit"
        style={styles.button}
        onMouseOver={(e) => {e.currentTarget.style.backgroundColor = styles.button[":hover"].backgroundColor;}}
        onMouseOut={(e) => {e.currentTarget.style.backgroundColor = PRIMARY_BLUE;}}
      >
        Send Message 📧
      </button>
    </form>
  );

  // Data
  const statsData = [
    { number: "12,450", label: "Total Collection" },
    { number: "891", label: "Active Members" },
    { number: "2,134", label: "Currently Borrowed" },
    { number: "42", label: "Items Overdue" },
  ];

  const feedbackData = [
    {
      text: "“The new interface is professional, intuitive, and the best library system I've used. Excellent job on the redesign!”",
      author: "– Sarah L., Academic Researcher",
    },
    {
      text: "“The blue theme brings a sense of calm and efficiency. Tracking my borrowed items and due dates has never been easier or looked better.”",
      author: "– Mark D., Student",
    },
    {
      text: "“A truly premium feel! The clear layout and strong contrast make the content highly readable and accessible.”",
      author: "– Chris P., Community Member",
    },
  ];

  // Message Box for notifications (Replaces alert())
  const MessageBox = () => (
      <div id="messageBox" style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: PRIMARY_BLUE,
          color: 'white',
          padding: '20px 40px',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          zIndex: 1000,
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '700',
          fontSize: '18px',
      }}>
          Message Sent! (Demo only)
      </div>
  );


  return (
    <div style={styles.container}>
      {/* Notification Box */}
      <MessageBox />

      {/* Header */}
      <header style={styles.header}>
        <h2 style={styles.welcome}>👋 Welcome back, Alex</h2>
        <div style={styles.statsContainer}>
          {statsData.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Discover Your Next Great Read</h1>
          <p style={styles.heroSubtitle}>
            "A library is not a luxury but one of the necessities of life." — Henry Ward Beecher. Start exploring our vast, curated digital and physical collections today.
          </p>
          <button
            style={styles.ctaButton}
            onMouseOver={(e) => {e.currentTarget.style.backgroundColor = styles.ctaButton[":hover"].backgroundColor; e.currentTarget.style.transform = styles.ctaButton[":hover"].transform;}}
            onMouseOut={(e) => {e.currentTarget.style.backgroundColor = PRIMARY_BLUE; e.currentTarget.style.transform = styles.ctaButton.transition.includes("scale") ? "scale(1)" : styles.ctaButton.transform;}}
          >
            Explore New Arrivals 📚
          </button>
        </div>
      </section>

      {/* Wisdom */}
      <section style={styles.wisdomSection}>
        <h2 style={styles.sectionTitle}>Inspirational Quote</h2>
        <div style={styles.quoteBox}>
          <p style={styles.quote}>
            “A reader lives a thousand lives before he dies... The man who never
            reads lives only one.”
          </p>
          <p style={styles.author}>— George R.R. Martin</p>
        </div>
      </section>

      {/* Feedback */}
      <section style={styles.feedbackSection}>
        <h2 style={styles.sectionTitle}>User Testimonials</h2>
        <div style={styles.feedbackContainer}>
          {feedbackData.map((f, i) => (
            <FeedbackCard key={i} {...f} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Contact & Support</h2>
        <div style={styles.contactContent}>
          <div style={styles.contactInfo}>
            <p>📍 <strong>Headquarters:</strong> Library Street, Hyderabad, India</p>
            <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
            <p>✉️ <strong>Email:</strong> support@librarylite.com</p>
            <div style={styles.socialIcons}>
              <span>📘</span> <span>🐦</span> <span>📸</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Library Lite | Professional Library Management System.</p>
      </footer>
    </div>
  );
}

export default Home;