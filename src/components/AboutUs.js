// src/components/AboutUs.js
import React from 'react';

export default function AboutUs() {
  // PUBLIC_URL + path with space needs encoding
  const rawPath = `${process.env.PUBLIC_URL}/assets/Image 2.jpg`;
  const imgSrc = encodeURI(rawPath);

  return (
    <section className="about-us" id="about-us">
      <div className="about-us-image">
        <img src={imgSrc} alt="Karnavbhai" />
      </div>
      <div className="about-us-content">
        <h4>About</h4>
        <h2>The Genesis of Karnavbhai</h2>
        <p>
          Born into a Brahmin family on the 7th of August 1991, Karnavbhai
          entered the world in the village of Kadi, nestled in the
          Gandhinagar district of Gujarat. His father, Shrideepakbhai
          Shashtri, serves as a government employee at the local education
          department secretariat, while his mother, Rakshaben, fulfills the
          role of a dedicated homemaker.
        </p>
      </div>
    </section>
  );
}
