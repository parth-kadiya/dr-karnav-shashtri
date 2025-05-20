import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section" id="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            Have Questions?
            <br />
            <a href="tel:+9101169296651" className="phone-link">
              +91 1169296651
            </a>
          </p>
        </div>
        <div className="footer-column logo-column">
          <h1>Dr. Karnav Shashtri</h1>
          <p>
            Karnavbhai Shashtri’s teachings illuminate the path of
            self-discovery, devotion, and inner peace, bridging ancient
            wisdom with modern life.
          </p>
          <div className="social-icons">
            <a
              href="https://www.youtube.com/@drkarnavbhaijoshi"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/share/1EAu2GMHLW/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/drkarnavshashtri?igsh=am1pb243c2ZtZnd6&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All Rights Reserved 2025</p>
        <p>
          <a href="#">Terms & Condition</a> - <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
