import React from "react";
import "./Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaHeadset,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Whether you need a website, mobile app, DevOps support, or IT
          consulting — our team is here to help.
        </p>
      </section>

      {/* Contact Form (Optional but recommended) */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-info">
            <span className="contact-tag">CONTACT US</span>
            <h2>Let’s Build Something Amazing Together</h2>
            <p>
              Have a project idea or need IT solutions for your business? Send
              us a message and our team will get back to you shortly.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <FaEnvelope className="contact-icon" />
                <span>contact@infotechmindslab.com</span>
              </div>

              <div className="contact-card">
                <FaPhone className="contact-icon" />
                <span>+91 7758827146</span>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <div className="section-header">
          <span className="section-tag">WHY CHOOSE US</span>
          <h2>Why Businesses Trust Infotech Minds</h2>
        </div>

        <div className="choose-grid">
          <div className="choose-card">
            <FaLaptopCode className="choose-icon" />
            <h3>Modern Technologies</h3>
            <p>
              We build scalable and future-ready digital products using the
              latest technologies.
            </p>
          </div>

          <div className="choose-card">
            <FaHeadset className="choose-icon" />
            <h3>Dedicated Support</h3>
            <p>
              Our team provides fast support and maintenance for all your
              business solutions.
            </p>
          </div>

          <div className="choose-card">
            <FaShieldAlt className="choose-icon" />
            <h3>Reliable & Secure</h3>
            <p>
              We prioritize security, performance, and reliability in every
              project.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-container">
          <div className="faq-item">
            <h4>How quickly can you start a project?</h4>
            <p>
              We usually begin within 2-5 business days after discussing
              requirements.
            </p>
          </div>

          <div className="faq-item">
            <h4>Do you provide maintenance support?</h4>
            <p>
              Yes, we provide ongoing maintenance and technical support
              services.
            </p>
          </div>

          <div className="faq-item">
            <h4>Can you develop custom software solutions?</h4>
            <p>
              Absolutely. We specialize in custom web, mobile, and enterprise
              software solutions.
            </p>
          </div>
        </div>
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
