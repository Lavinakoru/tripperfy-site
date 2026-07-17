import React from "react";

function BlogsSection() {
  const blogs = [
    {
      title: "Top 5 Treks in India for Beginners",
      summary: "Discover breathtaking Himalayan treks that don't require any prior experience...",
      image: "/images/5trekindia.jpeg",
      link: "#",
    },
    {
      title: "Ultimate Backpacking Packing Checklist",
      summary: "Everything you need to pack for your first mountain adventure without overloading your spine...",
      image: "/images/backpack.jpeg",
      link: "https://www.rei.com/learn/expert-advice/backpacking-checklist.html",
    },
  ];

  return (
    <section style={{ padding: "2rem 1rem" }}>
      <h2 style={{ textAlign: "center", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: "900", color: "#222", marginBottom: "0.5rem" }}>
        📖 Travel Stories & Guides
      </h2>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "3rem", fontSize: "1.1rem" }}>
        Expert tips and logs to help you fly through your next destination
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {blogs.map((blog, idx) => (
          <article key={idx} style={{
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            border: "1px solid rgba(255,255,255,0.6)",
            display: "flex",
            flexDirection: "column"
          }}>
            <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#111", marginBottom: "0.5rem", lineHeight: "1.4" }}>
                {blog.title}
              </h3>
              <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: 1 }}>
                {blog.summary}
              </p>
              <a href={blog.link} style={{
                color: "#ff6600",
                fontWeight: "700",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px"
              }}>
                Read Story →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogsSection;
