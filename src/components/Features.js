// src/components/Features.js
import React from 'react';

export default function Features() {
  // Define an array of your feature data for easier maintenance
  const features = [
    {
      img: 'Achievements.png',
      alt: 'Achievements',
      title: 'Early Life',
      description:
        'Born in the village of Kadi, Karnavbhai hails from a dedicated family of government service and homemaking traditions.',
    },
    {
      img: 'Values.png',
      alt: 'Values',
      title: 'Core Values',
      description:
        'Strongly rooted in discipline and dedication, Karnavbhai’s life reflects perseverance and integrity.',
    },
    {
      img: 'Vision.png',
      alt: 'Vision',
      title: 'Vision',
      description:
        'Aimed at societal betterment and community development, his vision focuses on education and empowerment.',
    },
  ];

  return (
    <section className="features">
      {features.map(({ img, alt, title, description }) => {
        // Construct the correct public-assets path
        const rawPath = `${process.env.PUBLIC_URL}/assets/${img}`;
        // No spaces in these filenames, so encodeURI is optional—but safe to include
        const src = encodeURI(rawPath);

        return (
          <div key={img} className="feature-item">
            <div className="icon-circle">
              <img src={src} alt={alt} />
            </div>
            <div className="feature-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
