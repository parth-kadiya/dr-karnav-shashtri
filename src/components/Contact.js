import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("https://dr-karnav-server-production.up.railway.app/api/contact", formData);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message");
      console.error(error);
    }
  };

  return (
    <section className="contact-section" id="footer-section">
      <div className="contact-container">
        <h4>Contact Us</h4>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              required
              pattern="[0-9]{10}"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Enter Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}
