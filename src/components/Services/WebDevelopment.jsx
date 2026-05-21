import React from "react";
import "./ServicePage.css";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

function WebDevelopment() {
  return (
    <div className="service-page">

      {/* HERO SECTION */}
      <div className="service-hero professional-hero">
        <div className="hero-content">
          <h1>Website Development</h1>
          <p>
            Transforming ideas into interactive, responsive, and modern websites 
            that drive business growth.
          </p>
          <a href="/contact" className="cta-btn">Contact Us</a>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <h2>About This Service</h2>
          <p>
            We create high-performance websites using modern technologies like React,
            Spring Boot, and cloud platforms. Our solutions are scalable, secure,
            and designed to deliver excellent user experience.
          </p>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="section">
        <h2>Technologies We Use</h2>
        <div className="tech-cards">
          <div className="tech-card">React / Angular</div>
          <div className="tech-card">Spring Boot / Node.js</div>
          <div className="tech-card">MySQL / MongoDB</div>
          <div className="tech-card">AWS / Azure</div>
          <div className="tech-card">HTML / CSS / JS</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <h2>Benefits</h2>
        <div className="benefit-cards">
          <div className="benefit-card"><FaCheckCircle /> Fast & Responsive</div>
          <div className="benefit-card"><FaCheckCircle /> SEO Friendly</div>
          <div className="benefit-card"><FaCheckCircle /> Mobile Optimized</div>
          <div className="benefit-card"><FaCheckCircle /> Secure & Scalable</div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>Our Process</h2>
        <div className="process-cards">
          <div className="process-card">
            <img src={process1} alt="Step 1" />
            <h4>Planning</h4>
            <p>Understanding your requirements and goals.</p>
          </div>

          <div className="process-card">
            <img src={process2} alt="Step 2" />
            <h4>Design</h4>
            <p>Creating UI/UX for best experience.</p>
          </div>

          <div className="process-card">
            <img src={process3} alt="Step 3" />
            <h4>Development</h4>
            <p>Building fast, secure and scalable apps.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            "Amazing service and professional team!" – Ravi
          </div>
          <div className="testimonial-card">
            "Highly recommend for web development!" – Neha
          </div>
        </div>
      </section>

      {/* COMPANY INFO (UNCHANGED) */}
      <section className="company-info">
        <div className="company-container">

          <div className="company-about">
            <h3>Infotech Minds</h3>
            <p>
              We deliver innovative IT solutions that help businesses grow through technology and creativity.
            </p>
          </div>

          <div className="company-contact">
            <h4>Information</h4>
            <p><FaPhone /> +91 77588 27146</p>
            <p><FaEnvelope /> contact@infotechmindslab.com</p>
            <p><FaMapMarkerAlt /> Navi Mumbai, India</p>
          </div>

          <div className="company-services">
            <h4>Services</h4>
            <p>Website Development</p>
            <p>Mobile Apps</p>
            <p>DevOps</p>
            <p>UI/UX</p>
          </div>

          <div className="company-links">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>

        </div>
      </section>

    </div>
  );
}

export default WebDevelopment;