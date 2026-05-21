import React from "react";
import "./ServicePage.css";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Maintenance() {
  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <div className="service-hero professional-hero">
        <div className="hero-content">
          <h1>
            Maintenance & <br />
            Support Services
          </h1>
          <p>
            We provide reliable maintenance and support services to keep your
            applications secure, optimized, and running smoothly with minimal
            downtime.
          </p>
          <a href="/contact" className="cta-btn">
            Contact Us
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <h2>About This Service</h2>
          <p>
            Our maintenance and support services are designed to ensure your
            software systems remain updated, secure, and high-performing. From
            resolving bugs to monitoring infrastructure and rolling out updates,
            we help your business avoid disruptions and improve long-term
            reliability.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2>What We Offer</h2>
        <div className="tech-cards">
          <div className="tech-card">Bug Fixing & Issue Resolution</div>
          <div className="tech-card">Performance Optimization</div>
          <div className="tech-card">Security Patches & Updates</div>
          <div className="tech-card">Database Maintenance</div>
          <div className="tech-card">Backup & Recovery</div>
          <div className="tech-card">24/7 Monitoring</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <h2>Benefits</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <FaCheckCircle /> Reduced Downtime
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Improved Performance
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Better Security
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Long-Term Reliability
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>Our Support Process</h2>
        <div className="process-cards">
          <div className="process-card">
            <img src={process1} alt="Monitoring" />
            <h4>Monitoring</h4>
            <p>
              We continuously monitor your applications and systems to detect
              issues early.
            </p>
          </div>

          <div className="process-card">
            <img src={process2} alt="Resolution" />
            <h4>Resolution</h4>
            <p>
              Our team quickly fixes bugs, security issues, and performance
              bottlenecks.
            </p>
          </div>

          <div className="process-card">
            <img src={process3} alt="Optimization" />
            <h4>Optimization</h4>
            <p>
              We improve speed, stability, and scalability for long-term
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPORT AREAS */}
      <section className="section">
        <h2>Support Areas</h2>
        <div className="tech-cards">
          <div className="tech-card">Website Maintenance</div>
          <div className="tech-card">Mobile App Support</div>
          <div className="tech-card">Server Monitoring</div>
          <div className="tech-card">Cloud Maintenance</div>
          <div className="tech-card">API Support</div>
          <div className="tech-card">Database Health Checks</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            "Their support team is responsive and keeps our systems running
            flawlessly!" – Ankit
          </div>
          <div className="testimonial-card">
            "Excellent maintenance service with proactive issue handling." –
            Pooja
          </div>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="company-info">
        <div className="company-container">
          <div className="company-about">
            <h3>Infotech Minds</h3>
            <p>
              We deliver innovative IT solutions that help businesses grow
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
              <FaMapMarkerAlt className="icon" /> Navi Mumbai, India
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

export default Maintenance;