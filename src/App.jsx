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
    "6kFk13HfNNE",
    "AVJ6Pztv_yM",
    "n5eVzyNZHlc",
    "Jl56to_9WIA"
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


<section className="bg-gray-100 py-12 px-6">
  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">🏔️ Featured Treks</h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        name: "Kuari Pass Trek",
        image: "/images/kuari.jpeg",
        description:
          "Explore the trail once walked by Lord Curzon — breathtaking views of Nanda Devi and the Garhwal Himalayas.",
        itinerary: [
          "Day 1: Arrive at Rishikesh – Trek briefing",
          "Day 2: Tugasi to Guling campsite",
          "Day 3: Guling to Khulara campsite",
          "Day 4: Trek from Khulara to Kuari Pass summit and back to Khulara campsite",
          "Day 5: Descend from Khulara campsite to Tugasi and departure for Rishikesh",
        ],
      },
      {
        name: "Kedarkantha Trek",
        image: "/images/kedarkantha.jpeg",
        description:
          "The winter wonderland of Uttarakhand! Experience snow trails, pine forests, and summit sunrise views.",
        itinerary: null,
      },
      {
        name: "Aravalli Trails",
        image: "/images/aravali.jpeg",
        description:
          "Discover Rajasthan’s rugged beauty — hidden lakes, dry forests, and ancient trails near Jaipur.",
        itinerary: null,
      },
    ].map((trek, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
      >
        <img
          src={trek.image}
          alt={trek.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{trek.name}</h3>
          <p className="text-gray-600 mb-4">{trek.description}</p>

          {trek.itinerary && (
            <details className="mt-3">
              <summary className="cursor-pointer font-medium text-orange-600">
                View Itinerary
              </summary>
              <ul className="text-gray-700 mt-2 text-sm list-disc pl-5">
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
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition mt-4"
          >
            Book Now
          </a>
        </div>
      </div>
    ))}
  </div>
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
        <p style={{ fontSize: "1.2rem" }}>
          Email:{" "}
          <a
            href="mailto:tripperfly.care@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ff6600" }}
          >
            tripperfly.care@gmail.com
          </a>
        </p>
        
        
      </section>
    </div>
  );
}

export default App;
