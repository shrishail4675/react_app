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

function UIUX() {
  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <div className="service-hero professional-hero">
        <div className="hero-content">
          <h1>
            Creative UI/UX <br />
            Design Solutions
          </h1>
          <p>
            We design intuitive, engaging, and visually stunning digital
            experiences that improve user satisfaction and help your business
            stand out in the competitive market.
          </p>
          <a href="/contact" className="cta-btn">
            Contact Us
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <h2>About UI/UX Design Service</h2>
          <p>
            Our UI/UX design services focus on creating seamless digital
            experiences that users love. We combine creativity, usability, and
            modern design principles to deliver interfaces that are both
            beautiful and functional. Whether it’s a mobile app, website, or
            enterprise software, our team ensures every screen is designed to
            maximize engagement and improve user journey.
          </p>
        </div>
      </section>

      {/* DESIGN SERVICES */}
      <section className="section">
        <h2>Our UI/UX Services</h2>
        <div className="tech-cards">
          <div className="tech-card">Wireframing & Prototyping</div>
          <div className="tech-card">User Research</div>
          <div className="tech-card">Website UI Design</div>
          <div className="tech-card">Mobile App UI Design</div>
          <div className="tech-card">Dashboard Design</div>
          <div className="tech-card">Design Systems</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <h2>Why Choose Our UI/UX Design?</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <FaCheckCircle /> User-Centered Design
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Modern Visual Appeal
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Better User Retention
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Improved Conversions
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="section">
        <h2>Our Design Process</h2>
        <div className="process-cards">
          <div className="process-card">
            <img src={process1} alt="Research" />
            <h4>Research</h4>
            <p>
              Understanding your users, business goals, and project
              requirements.
            </p>
          </div>

          <div className="process-card">
            <img src={process2} alt="Design" />
            <h4>Design</h4>
            <p>
              Creating wireframes, prototypes, and polished UI screens for the
              best experience.
            </p>
          </div>

          <div className="process-card">
            <img src={process3} alt="Testing" />
            <h4>Testing</h4>
            <p>
              Validating usability and refining the design based on user
              feedback.
            </p>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section">
        <h2>Tools We Use</h2>
        <div className="tech-cards">
          <div className="tech-card">Figma</div>
          <div className="tech-card">Adobe XD</div>
          <div className="tech-card">Photoshop</div>
          <div className="tech-card">Illustrator</div>
          <div className="tech-card">Miro</div>
          <div className="tech-card">Zeplin</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            "Their UI/UX design transformed our product experience completely!"
            – Rahul
          </div>
          <div className="testimonial-card">
            "Creative, professional, and very user-focused design team." –
            Sneha
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
            <p>Mobile Apps</p>
            <p>UI/UX Design</p>
            <p>DevOps</p>
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

export default UIUX;