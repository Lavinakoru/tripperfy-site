import React from "react";
import "./App.css";

function App() {
  // Example blog posts
  const blogs = [
    {
      title: "Top 5 Treks in India",
      summary: "Discover breathtaking treks from the Himalayas to the Western Ghats...",
      link: "#"
    },
    {
      title: "Travel Tips for Beginners",
      summary: "Everything you need to know before your first adventure...",
      link: "#"
    },
  ];

  // Example YouTube videos (replace YOUR_VIDEO_ID)
  const videos = [
    "tY1iiMZkHP8",
    "6kFk13HfNNE"
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      
      {/* Navigation */}
      <nav style={{ backgroundColor: "#ff6600", padding: "1rem", textAlign: "center" }}>
        <a href="#home" style={{ margin: "0 1rem", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Home</a>
        <a href="#tours" style={{ margin: "0 1rem", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Tours</a>
        <a href="#blogs" style={{ margin: "0 1rem", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Blogs</a>
        <a href="#media" style={{ margin: "0 1rem", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Media</a>
        <a href="#contact" style={{ margin: "0 1rem", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Contact</a>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        style={{
          background: "linear-gradient(135deg, #ff6600, #ffcc00)",
          color: "#fff",
          padding: "3rem 1rem",
          textAlign: "center",
          borderRadius: "0 0 50% 50%",
        }}
      >
        <img
          src="/tripperflylogo.jpeg"
          alt="Tripperfly Logo"
          style={{ width: "180px", marginBottom: "1rem" }}
        />
        <h1 style={{ fontSize: "3rem", margin: "0.5rem 0" }}>Tripperfly</h1>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Trip per fly karo, Tripperfly karo!
        </p>
        <div style={{ marginTop: "2rem" }}>
          <a
            href="https://wa.me/919799992378"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "1rem 2rem",
              marginRight: "1rem",
              backgroundColor: "#25D366",
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
              borderRadius: "30px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            WhatsApp Us
          </a>

          <a
            href="#tours"
            style={{
              padding: "1rem 2rem",
              backgroundColor: "#ff3300",
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
              borderRadius: "30px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Book Now
          </a>
        </div>
      </header>

      {/* Tours & Treks Section */}
      <section
        id="tours"
        style={{
          padding: "3rem 1rem",
          backgroundColor: "#fff7e6",
          borderRadius: "30px",
          margin: "2rem auto",
          maxWidth: "900px",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Tours & Treks</h2>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Explore breathtaking locations and unforgettable adventures with Tripperfly.
        </p>
        <ul style={{ textAlign: "left", marginTop: "1rem", fontSize: "1.1rem" }}>
          <li>Customized trekking experiences</li>
          <li>Local sightseeing tours</li>
          <li>Adventure and outdoor activities</li>
          <li>Hassle-free bookings</li>
        </ul>
      </section>

      {/* Blogs Section */}
      <section
        id="blogs"
        style={{
          padding: "3rem 1rem",
          backgroundColor: "#e6f7ff",
          borderRadius: "30px",
          margin: "2rem auto",
          maxWidth: "900px",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Blogs</h2>
        {blogs.map((blog, idx) => (
          <article key={idx} style={{ marginBottom: "1.5rem" }}>
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
            <a href={blog.link}>Read more</a>
          </article>
        ))}
      </section>

      {/* Media / YouTube Section */}
      <section
        id="media"
        style={{
          padding: "3rem 1rem",
          backgroundColor: "#fff0f5",
          borderRadius: "30px",
          margin: "2rem auto",
          maxWidth: "900px",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Videos</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          {videos.map((id, idx) => (
            <iframe
              key={idx}
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "3rem 1rem",
          backgroundColor: "#f0f8ff",
          borderRadius: "30px",
          margin: "2rem auto",
          maxWidth: "900px",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Get in Touch</h2>
        <p style={{ fontSize: "1.2rem" }}>
          Contact: <strong>9799992378</strong>
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Instagram:{" "}
          <a
            href="https://instagram.com/tripperfly"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ff6600" }}
          >
            @tripperfly
          </a>
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Website:{" "}
          <a
            href="https://www.tripperfly.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ff6600" }}
          >
            www.tripperfly.in
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
