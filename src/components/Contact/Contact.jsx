import React from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions or need a solution? Get in touch with us and we’ll help
          you grow your business.
        </p>
      </section>

      {/* Contact Details */}
      <section className="contact-container">

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Call Us</h3>
          <p>+91 77588 27146</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>contact@infotechmindslab.com</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p>
            Flat No. 603, Anukur Apt, Gothivali, Navi Mumbai - 400701
          </p>
        </div>

      </section>

      {/* Contact Form (Optional but recommended) */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* COMPANY INFO (Same as Services page) */}
       <section className="company-info">
              <div className="company-container">
                <div className="company-about">
                  <h3>Infotech Minds</h3>
                  <p>
                    Founded in 2020, we deliver innovative and reliable software
                    development and IT consulting solutions that help businesses grow
                    through technology and creativity.
                  </p>
                </div>
      
                <div className="company-contact">
                  <h4>Information</h4>
      
                  <p>
                    <FaPhone className="icon" /> +91 77588 27146
                  </p>
      
                  <p>
                    <FaEnvelope className="icon" /> contact@infotechmindslab.com
                  </p>
      
                  <p>
                    <FaMapMarkerAlt className="icon" />
                    FLAT NO. 603, ANUKUR APT, GOTHIVALI, NAVI MUMBAI 400 701.
                  </p>
                </div>
      
                <div className="company-services">
                  <h4>Services</h4>
                  <p>Website Development</p>
                  <p>Mobile Application Development</p>
                  <p>DevOps & CI/CD</p>
                  <p>UI/UX & Graphic Design</p>
                  <p>Maintenance & Support</p>
                </div>
      
                <div className="company-links">
                  <h4>Quick Links</h4>
                  <a href="/">Home</a>
                  <a href="/about">About Us</a>
                  <a href="/services">Services</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>
            </section>

    </div>
  );
}

export default Contact;