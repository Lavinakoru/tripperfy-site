import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";

import BlogsSection from "./BlogsSection";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTrips, setShowTrips] = useState(false);
  const dropdownRef = useRef(null);
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  destination: "",
  budget: "",
  month: "",
  message: "",
});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowTrips(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const whatsappNumber = "919799992378"; // <-- apna number

const sendToWhatsApp = () => {

  if (!formData.name || !formData.phone) {
    alert("Please enter your Name and Phone Number.");
    return;
  }

  const message = `Hi Tripperfly! 👋

*New Trip Enquiry*

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📍 Destination: ${formData.destination}

💰 Budget: ${formData.budget}

📅 Travel Month: ${formData.month}

📝 Additional Details:

${formData.message}`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

  const trips = [
    {
      name: "Tungnath Trek",
      image: "/images/tungnath.jpeg",
      description: "Chopta to Tungnath & Chandrashila trek with stunning Himalayan views.",
      itinerary: ["## Tungnath Trek Itinerary (Ex Jaipur)",
      "**Day 0:** Departure from Jaipur (Overnight Journey)",
"**Day 1:** Arrive at Haridwar/Rishikesh and drive to Chopta. Check-in, relax, and enjoy the beautiful Himalayan surroundings.",
"**Day 2:** Early morning trek to **Tungnath Temple** followed by an optional hike to **Chandrashila Summit**. Return to Chopta for an overnight stay.",
"**Day 3:** After breakfast, drive back to Haridwar/Rishikesh and board your overnight journey to Jaipur.",
"**Day 4:** Arrive back in Jaipur with unforgettable Himalayan memories.",]
    },
    {
      name: "Yulla Kanda Trek",
      image: "/images/yulla.jpeg",
      description: "Hidden lake trek in Himachal with a Shiva temple in the middle of the lake.",
      itinerary: null,
    },
    {
      name: "Har Ki Dun Trek",
      image: "/images/harkidun.jpeg",
      description: "Beautiful valley trek known for rivers, forests, and ancient villages.",
      itinerary: null,
    },
    {
      name: "Char Dham Yatra",
      image: "/images/chardham.jpeg",
      description: "Spiritual journey covering Yamunotri, Gangotri, Kedarnath & Badrinath.",
      itinerary: null,
    },
    {
      name: "Kuari Pass Trek",
      image: "/images/kuari.jpeg",
      description: "Explore the trail once walked by Lord Curzon — breathtaking views of Nanda Devi and the Garhwal Himalayas.",
      itinerary: [
        "Day 1: Arrive at Rishikesh – Trek briefing",
        "Day 2: Tugasi to Guling campsite",
        "Day 3: Guling to Khulara campsite",
        "Day 4: Trek from Khulara to Kuari Pass summit and back",
        "Day 5: Descend to Tugasi and depart for Rishikesh",
      ],
    },
// 🔥 NEW COMING SOON CARD IN THE SLIDER
    {
      name: "Kedarnath & Kedarkantha",
      image: "/images/kedarkantha.jpeg",
      startLocation: "Himalayas",
      description: "The ultimate snow and spiritual expedition is arriving soon for winter slots.",
      isComingSoon: true
    }
  ];



  

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: isScrolled ? "rgba(255, 102, 0, 0.95)" : "rgba(255, 102, 0, 0.85)",
          padding: isScrolled ? "0.5rem 2rem" : "1rem 2rem",
          borderRadius: "30px",
          marginTop: "1rem",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "sticky",
          top: "15px",
          zIndex: "1000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.15)" : "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <span style={{ color: "#fff", fontWeight: "900", fontSize: "1.3rem", letterSpacing: "1px" }}>TRIPPERFLY</span>
        
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {["Home","About", "Blogs", "Media", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "#fff",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              {item}
            </a>
          ))}

          {/* Trips Dropdown */}
          <div style={{ position: "relative" }} ref={dropdownRef}>
            <span
              onClick={() => setShowTrips(!showTrips)}
              style={{ color: "#fff", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}
            >
              Trips <span style={{ fontSize: "0.8rem" }}>▼</span>
            </span>

            {showTrips && (
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "0",
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "0.6rem",
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "200px",
                  maxHeight: "300px",
                  overflowY: "auto",
                  zIndex: "1001",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
                }}
              >
                {[
                  "Agra", "Tungnath", "Yulla Kanda", "Har Ki Dun", "Kedarnath",
                  "Kedarkantha", "Kuari Pass", "Jaipur", "Udaipur", "Pushkar",
                  "Banaras", "Goa", "Mount Abu",
                ].map((trip) => (
                  <a
                    key={trip}
                    href={`#${trip.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setShowTrips(false)}
                    className="dropdown-item"
                    style={{
                      padding: "0.6rem 1rem",
                      color: "#333",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontSize: "0.95rem",
                      transition: "background 0.2s"
                    }}
                  >
                    {trip}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
     
      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="hero-overlay">
          <img src="/tripperflylogo.jpeg" alt="Tripperfly Logo" className="hero-logo" />
          <h1 className="hero-title">Tripperfly</h1>
          <p className="hero-subtitle">Har trip pe fly karo, Tripperfly karo!</p>

          <div className="hero-btn-container">
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hero-btn channels-btn">
              Join Channel 📢
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hero-btn whatsapp-btn">
              WhatsApp Us
            </a>
            <a href="#book-now" className="hero-btn book-btn">
              Book Now
            </a>
          </div>
        </div>
      </header>

{/* ================= ABOUT SECTION ================= */}

<section id="about" className="about-section">

  <div className="about-image">

    <img
      src="/images/lavina-about.jpeg"
      alt="Lavina Korani"
    />

  </div>

  <div className="about-content">

    <span className="about-tag">
      ABOUT TRIPPERFLY
    </span>

    <h2>
      Hi, I'm Lavina 👋
    </h2>

    <p>
      I'm the founder of Tripperfly and an explorer at heart.
      For the last 3+ years I've been travelling across India,
      discovering mountains, hidden villages, heritage cities
      and unforgettable experiences.
    </p>

    <p>
      What started as my love for travelling slowly became a mission to help others experience India beyond the usual tourist spots.

From Himalayan treks to heritage walks in Jaipur, every trip listed here is based on places I've personally explored.

My goal isn't just to organize trips—it's to create experiences where strangers become friends and memories last forever.

I don't just plan trips. I create stories you'll remember for life.
Har Trip pe Fly Karo. Tripperfly Karo.
    </p>

    <div className="about-stats">

      <div className="stat-box">
        <h3>20+</h3>
        <span>States Explored</span>
      </div>

      <div className="stat-box">
        <h3>3+</h3>
        <span>Years Experience</span>
      </div>

      <div className="stat-box">
        <h3>100+</h3>
        <span>Happy Travelers</span>
      </div>

    </div>

  </div>

</section>


{/* ✈️ PLAN YOUR NEXT ADVENTURE */}

<section className="trip-planner">

  <div className="planner-left">

    <span className="planner-tag">
      PLAN YOUR NEXT ADVENTURE
    </span>

    <h2>Where Will Your Next Adventure Take You? 🌍</h2>

    <p>
      Not sure where to go? Tell us your budget and travel month,
      and we'll recommend the perfect destination for you.
    </p>

  </div>

  <div className="planner-form">

    <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="👤 Full Name"
  required
   />

   <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="📞 Phone Number"
  required
/>

  <input
  type="text"
  name="destination"
  value={formData.destination}
  onChange={handleChange}
  placeholder="📍 Where do you want to go?"
   />

<select
  name="budget"
  value={formData.budget}
  onChange={handleChange}
>
  <option value="">Select Budget</option>

  <option value="Under ₹5,000">
    Under ₹5,000
  </option>

  <option value="₹5,000 - ₹10,000">
    ₹5,000 - ₹10,000
  </option>

  <option value="₹10,000 - ₹20,000">
    ₹10,000 - ₹20,000
  </option>

  <option value="Above ₹20,000">
    Above ₹20,000
  </option>
</select>

   <input
  type="month"
  name="month"
  value={formData.month}
  onChange={handleChange}
/>

<textarea
  rows="4"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Anything else you'd like us to know?"
></textarea>

   <button
  className="planner-btn"
  type="button"
  onClick={sendToWhatsApp}
>
      🚀 Let's Plan My Trip
    </button>

  </div>

</section>

      {/* Blog Section */}
      <div id="blogs" style={{ padding: "4rem 0" }}>
        <BlogsSection />
      </div>

      {/* Featured Trips Slider Section */}
      <section style={{ padding: "4rem 0" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: "900", color: "#222", marginBottom: "0.5rem" }}>
          🏔️ Featured Adventures
        </h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "3rem", fontSize: "1.1rem" }}>Handpicked experiences packed with thrill and wonder</p>

        <div className="slider-wrapper" style={{ padding: "0 1rem" }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="trips-swiper"
          >
            {trips.map((trek, idx) => (
              <SwiperSlide key={idx} style={{ height: "auto" }}>
                <div className="trip-card">
                  <div className="image-container">
                    <img src={trek.image} alt={trek.name} />
                  </div>

                  <div className="card-content">
                    <h3>{trek.name}</h3>
                    <p>{trek.description}</p>

                    {trek.itinerary && (
                      <details className="itinerary-details">
                        <summary>View Plan</summary>
                        <ul>
                          {trek.itinerary.map((day, i) => (
                            <li key={i}>{day}</li>
                          ))}
                        </ul>
                      </details>
                    )}

                    <a
                      href={`https://wa.me?text=Hi!%20I%20want%20to%20book%20the%20${encodeURIComponent(trek.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-book-btn"
                    >
                      Book on WhatsApp 💬
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <span className="contact-tag">GET IN TOUCH</span>
            <h2>Let's Plan Your Next Adventure</h2>
            <p>
              Have questions about a trip, trek, weekend getaway or custom
              itinerary? Reach out and I'll personally help you plan it.
            </p>
          </div>

          <div className="contact-grid">
            <a
              href="mailto:tripperfly.care@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>tripperfly.care@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919799992378"
              className="contact-card"
            >
              <div className="contact-icon">📱</div>
              <div>
                <h3>Call / WhatsApp</h3>
                <p>+91 97999 92378</p>
              </div>
            </a>

            <a
              href="https://wa.me/919799992378"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">💬</div>
              <div>
                <h3>WhatsApp</h3>
                <p>Chat directly for trip enquiries</p>
              </div>
            </a>

            <a
              href="https://instagram.com/tripperfly"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">📷</div>
              <div>
                <h3>Instagram</h3>
                <p>@tripperfly</p>
              </div>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">📘</div>
              <div>
                <h3>Facebook</h3>
                <p>Tripperfly</p>
              </div>
            </a>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Based In</h3>
                <p>Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Tripperfly</h2>
            <p>Har Trip pe Fly Karo, Tripperfly Karo!</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a
              href="https://instagram.com/tripperfly"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/919799992378"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Tripperfly. All rights reserved.</p>
        </div>
      </footer>

    </div>
  

);

}


export default App;
