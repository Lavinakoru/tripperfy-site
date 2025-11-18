import { useState } from "react";

export default function BlogsSection() {
  const [openBlog, setOpenBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Exploring the Ancient Aravalli Hills",
      summary:
        "Discover the billion-year-old Aravalli Range, its hidden trails, rich wildlife, and scenic trekking routes.",
      content: `
The Aravalli Range, one of the oldest fold mountains in the world, stretches across Rajasthan, Haryana, and Delhi. 
These hills are not just a geological wonder but also a cultural heritage corridor filled with ancient forts, tribal settlements, and forest trails.

### 🌿 What Makes the Aravallis Special?

- Over **3 billion years old**
- Home to leopards, hyenas, and diverse birdlife
- Scenic ridges perfect for day hikes
- Historic locations like Nahargarh, Amer, and Jaigarh around Jaipur
- Natural lakes, rocky landscapes, and desert forests

### 🥾 Trekking in the Aravallis

Trekking in the Aravallis is perfect for beginners and explorers looking for easy-to-moderate trails. 
From sunrise hikes to full-day jungle treks, the region offers a unique mix of nature, culture, and adventure.

Whether you're exploring around Jaipur or camping deeper into the range, 
the Aravallis promise serenity, scenic beauty, and a true connection with nature.
      `,
    },

    {
      id: 2,
      title: "Kuari Pass Trek – The Lord Curzon Trail",
      summary:
        "A majestic Himalayan trek offering views of Nanda Devi, Dronagiri, and India’s most iconic peaks.",
      content: `
The Kuari Pass Trek, located in Uttarakhand, is one of the most beautiful winter treks in India. 
Known as the **Curzon Trail**, it offers unmatched panoramic views of the Himalayan snow peaks.

### 🏔️ Highlights of the Kuari Pass Trek

- Breathtaking views of **Nanda Devi (7816 m)**, India’s second-highest peak  
- Wide alpine meadows covered with snow in winter  
- Stunning campsites like Gulling and Tali  
- Ancient oak and rhododendron forests  
- Perfect for beginners and intermediate trekkers  

### ❄️ Why Kuari Pass is Famous

The trail offers a rare amphitheater of 7000m+ Himalayan giant peaks.  
Clear skies and snow-covered meadows make it a photographer’s paradise.  
This trek remains doable even for first-time trekkers due to its balanced difficulty level.

Kuari Pass is more than a trek — it’s a gateway to the timeless beauty of the Indian Himalayas.
      `,
    },
  ];

  return (
    <div style={{ padding: "1.5rem 1rem" }}>
      <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#222", marginBottom: "1rem", textAlign: "center" }}>
        Blogs
      </h2>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "1rem",
            marginBottom: "1rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#333" }}>{blog.title}</h3>

          <p style={{ color: "#555", marginTop: "0.3rem" }}>{blog.summary}</p>

          {/* Read More Button */}
          <button
            onClick={() => setOpenBlog(openBlog === blog.id ? null : blog.id)}
            style={{
              marginTop: "0.8rem",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              border: "none",
              background: "#ff6600",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {openBlog === blog.id ? "Hide" : "Read More"}
          </button>

          {/* Expandable Full Blog Content */}
          {openBlog === blog.id && (
            <div
              style={{
                marginTop: "1rem",
                whiteSpace: "pre-wrap",
                color: "#444",
                lineHeight: "1.6",
              }}
            >
              {blog.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
