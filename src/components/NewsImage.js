// src/components/NewsImage.js
import React from 'react';

export default function NewsImage() {
  const posts = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section className="image-news-section" id="news-image">
      <div className="section-heading">
        <h1>Auspicious Thoughts</h1>
      </div>
      <div className="carousel-container">
        <div className="carousel-track">
          {posts.map((num) => {
            // Construct path with space in filename
            const rawPath = `${process.env.PUBLIC_URL}/assets/Post ${num}.jpg`;
            const src = encodeURI(rawPath);

            return (
              <div key={num} className="carousel-item">
                <img
                  src={src}
                  alt={`Post ${num}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
