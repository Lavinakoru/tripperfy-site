import React, { useEffect, useState } from "react";
import "./App.css";
import BlogsSection from "./BlogsSection";

function App() {const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const blogs = [
    {
      title: "Top 5 Treks in India",
      summary: "Discover breathtaking treks from the Himalayas to the Western Ghats...",
      link: "#",
    },
    {
      title: "Travel Tips for Beginners",
      summary: "Everything you need to know before your first adventure...",
      link: "#",
    },
  ];

  const videos = ["tY1iiMZkHP8", "6kFk13HfNNE", "AVJ6Pztv_yM", "n5eVzyNZHlc", "Jl56to_9WIA"];

  const treks = [
    {
      name: "Kuari Pass Trek",
      image: "/images/kuari.jpeg",
      description:
        "Explore the trail once walked by Lord Curzon — breathtaking views of Nanda Devi and the Garhwal Himalayas.",
      itinerary: [
        "Day 1: Arrive at Rishikesh – Trek briefing",
        "Day 2: Tugasi to Guling campsite",
        "Day 3: Guling to Khulara campsite",
        "Day 4: Trek from Khulara to Kuari Pass summit and back",
        "Day 5: Descend to Tugasi and depart for Rishikesh",
      ],
    },
    {
      name: "Kedarkantha Trek",
      image: "/images/kedarkantha.jpeg",
      description:
        "The winter wonderland of Uttarakhand! Experience snow trails, pine forests, and sunrise summit views.",
      itinerary: null,
    },
    {
      name: "Aravalli Trails",
      image: "/images/aravali.jpeg",
      description:
        "Discover Rajasthan’s rugged beauty — hidden lakes, dry forests, and ancient trails near Jaipur.",
      itinerary: null,
    },
  ];

  // ⭐ No horizontal scroll
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#71bedaff",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0",
    overflowX: "hidden",
  };

  return (
    <div style={containerStyle}>
      {/* Navigation */}
    <nav
      style={{
        backdropFilter: "blur(6px)",
        backgroundColor: isScrolled ? "rgba(255,102,0,0.92)" : "#ff6600",

      padding: isScrolled ? "0.3rem" : "1rem",
      borderRadius: "10px",
      marginTop: "1rem",
      transition: "all 0.3s ease",

      position: "sticky",
      top: "0",
      zIndex: "1000",

      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: isScrolled ? "0.4rem" : "0.7rem",

     boxShadow: isScrolled ? "0 4px 10px rgba(0,0,0,0.35)" : "none",
     }}
      >

        {["Home", "Tours", "Blogs", "Media", "Contact"].map((i) => (
          <a
            key={i}
            href={"#" + i.toLowerCase()}
            style={{
              margin: "0 1rem",
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: isScrolled ? "0.9rem" : "1.1rem",
              transition: "font-size 0.3s ease",
            }}
          >
            {i}
          </a>
        ))}
      </nav>
      <div style={{ height: "10px" }} />

      {/* Hero Section */}
      <header
        id="home"
        style={{
          background: "linear-gradient(135deg, #060606ff, #060606ff)",
          color: "#fff",
          padding: "1rem 1rem",
          textAlign: "center",
          borderRadius: "20px",
          marginTop: "1rem",
        }}
      >
        <img
          src="/tripperflylogo.jpeg"
          alt="Tripperfly Logo"
          style={{   width: "clamp(220px, 40vw, 380px)",  display: "block",  margin: "0 auto 1rem", borderRadius: "20px" }}
         />

        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            margin: "1rem 0",
            fontWeight: 800,
          }}
        >
          TripperFly
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 4vw, 1.4rem)",
            fontWeight: "bold",
          }}
        >
          Har trip pe fly karo, Tripperfly karo!
        </p>

        <div style={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem"
          }}>
          <a
            href="https://wa.me/919799992378"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.8rem 1.5rem",              
              backgroundColor: "#25D366",
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
              borderRadius: "25px",
              display: "inline-block",
            }}
          >
            WhatsApp Us
          </a>

          <a
            href="https://wa.me/919799992378"
            style={{
              padding: "0.8rem 1.5rem",
              backgroundColor: "#ff3300",
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
              borderRadius: "25px",
              display: "inline-block",
            }}
          >
            Book Now
          </a>
        </div>
      </header>

      {/* ⭐ INSERTED BLOG SECTION HERE */}
      <div id="blogs">
        <BlogsSection />
      </div>

      {/* Featured Treks */}
      <section style={{ marginTop: "3rem" }}>
  <h2
    style={{
      textAlign: "center",
      fontSize: "clamp(1.5rem, 5vw, 2.4rem)",
      fontWeight: "900",
      color: "#333",
      marginBottom: "2rem",
    }}
  >
    🏔️ Featured Treks
  </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {treks.map((trek, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src={trek.image}
                alt={trek.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "1rem" }}>
                <h3
                  style={{
                    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                    fontWeight: "700",
                    marginBottom: "0.5rem",
                  }}
                >
                  {trek.name}
                </h3>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.5",
                    fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                    marginBottom: "1rem",
                  }}
                >
                  {trek.description}
                </p>

                {trek.itinerary && (
                  <details style={{ marginBottom: "1rem" }}>
                    <summary
                      style={{
                        cursor: "pointer",
                        fontWeight: "bold",
                        color: "#ff6600",
                        fontSize: "clamp(1rem, 2.4vw, 1.3rem)",
                      }}
                    >
                      View Itinerary
                    </summary>

                    <ul
                      style={{
                        fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                        marginTop: "0.5rem",
                        paddingLeft: "1.2rem",
                        lineHeight: "1.5",
                      }}
                    >
                      {trek.itinerary.map((day, i) => (
                        <li key={i}>{day}</li>
                      ))}
                    </ul>
                  </details>
                )}

                <a
                  href={`https://wa.me/919799992378?text=Hi%20I%20want%20to%20book%20the%20${encodeURIComponent(
                    trek.name
                  )}!`}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#25D366",
                    color: "#fff",
                    padding: "0.7rem 1.2rem",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section
        id="media"
        style={{
          marginTop: "3rem",
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "15px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2rem)",
            marginBottom: "1rem",
            fontWeight: "800",
          }}
        >
          Videos
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
         {videos.map((id, idx) => (
       <iframe
         key={idx}
         src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video"
          allowFullScreen
          style={{
          width: "100%",
          maxWidth: "320px",
          height: "180px",
          borderRadius: "10px"
          }}
       ></iframe>
      ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "15px",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2rem)",
            fontWeight: "800",
            marginBottom: "1rem",
          }}
        >
          Get in Touch
        </h2>

        <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
          Contact: <strong>9799992378</strong>
        </p>

        <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
          Instagram:{" "}
          <a href="https://instagram.com/tripperfly" style={{ color: "#ff6600" }}>
            @tripperfly
          </a>
        </p>

        <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
          Website:{" "}
          <a href="https://www.tripperfly.in" style={{ color: "#ff6600" }}>
            www.tripperfly.in
          </a>
        </p>

        <p style={{ fontSize: "1.1rem" }}>
          Email:{" "}
          <a href="mailto:tripperfly.care@gmail.com" style={{ color: "#ff6600" }}>
            tripperfly.care@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
