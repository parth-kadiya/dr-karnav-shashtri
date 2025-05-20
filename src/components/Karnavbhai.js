// src/components/Karnavbhai.js
import React from 'react';

export default function Karnavbhai() {
  // PUBLIC_URL + path with space needs encoding
  const rawPath = `${process.env.PUBLIC_URL}/assets/Image 1.jpg`;
  const imgSrc = encodeURI(rawPath);

  return (
    <section className="karnavbhai" id="karnavbhai">
      <img
        src={imgSrc}
        alt="Karnavbhai img"
        className="karnavbhai-image"
      />
      <div className="karnavbhai-content">
        <h1>Spiritual Awakening</h1>
        <p>
          "Discover the transformative journey of Shri Karnavbhai Shashtri,
          where ancient Vedic wisdom meets modern inspiration, guiding you
          toward spiritual enlightenment and a life of purpose."
        </p>
      </div>
    </section>
  );
}
