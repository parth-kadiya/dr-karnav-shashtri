import React from 'react';

export default function Features() {
  return (
    <section className="features">
      <div className="feature-item">
        <div className="icon-circle">
          <img
            src={`${process.env.PUBLIC_URL}/Achievements.png`}
            alt="Achievements"
          />
        </div>
        <div className="feature-content">
          <h3>Early Life</h3>
          <p>
            Born in the village of Kadi, Karnavbhai hails from a dedicated family
            of government service and homemaking traditions.
          </p>
        </div>
      </div>

      <div className="feature-item">
        <div className="icon-circle">
          <img
            src={`${process.env.PUBLIC_URL}/Values.png`}
            alt="Values"
          />
        </div>
        <div className="feature-content">
          <h3>Core Values</h3>
          <p>
            Strongly rooted in discipline and dedication, Karnavbhai’s life
            reflects perseverance and integrity.
          </p>
        </div>
      </div>

      <div className="feature-item">
        <div className="icon-circle">
          <img
            src={`${process.env.PUBLIC_URL}/Vision.png`}
            alt="Vision"
          />
        </div>
        <div className="feature-content">
          <h3>Vision</h3>
          <p>
            Aimed at societal betterment and community development, his vision
            focuses on education and empowerment.
          </p>
        </div>
      </div>
    </section>
  );
}
