import React from "react";
import "./About.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import heroImg from "../../assets/AboutImg.png";
import companyImg from "../../assets/about-company.png";

function About() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <img src={heroImg} alt="IT Services" className="hero-img" />

        {/* Overlay Content */}
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            Infotech Minds is a leading IT solutions company delivering
            innovative, <br></br>scalable, and reliable digital services.
          </p>
          <p className="hero-subtitle">
            We help businesses grow with cutting-edge technology<br></br> and
            smart solutions tailored to their needs.
          </p>
        </div>
      </section>
      {/* COMPANY INTRO */}
      <section className="about-company">
        <div className="about-company-text">
          <h2>Who We Are</h2>
          <p>
            Infotech Minds is a software development and IT consulting company
            founded in 2020. We specialize in web development, mobile
            applications, DevOps, cloud solutions, and enterprise software
            development.
          </p>
          <p>
            Our goal is to help businesses transform digitally by building
            secure, scalable, and high-performance applications.
          </p>
        </div>

        <div className="about-company-image">
          <img src={companyImg} alt="Company" />
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="about-cards">
        <div className="about-card">
          <img src="/images/mission.png" alt="Mission" />
          <h3>Our Mission</h3>
          <p>
            To deliver innovative, reliable, and scalable software solutions
            that help businesses grow through technology and digital
            transformation.
          </p>
        </div>

        <div className="about-card">
          <img src="/images/vision.png" alt="Vision" />
          <h3>Our Vision</h3>
          <p>
            To become a leading technology company known for quality,
            innovation, and customer satisfaction.
          </p>
        </div>

        <div className="about-card">
          <img src="/images/values.png" alt="Values" />
          <h3>Our Values</h3>
          <p>
            Innovation, Integrity, Quality, Customer Satisfaction, and
            Continuous Improvement drive everything we do.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
     <section className="why-choose">
  <div className="why-tag">Our Strengths</div>
  <h2>Why Choose Infotech Minds</h2>
  <p className="why-subtitle">Everything you need to build, scale, and grow your digital product</p>

  <div className="why-cards">
    <div className="why-card">
      <div className="why-icon">👥</div>
      <div className="why-label">Experienced Development Team</div>
    </div>
    <div className="why-card">
      <div className="why-icon">💻</div>
      <div className="why-label">Modern Technologies</div>
    </div>
    <div className="why-card">
      <div className="why-icon">🛡️</div>
      <div className="why-label">Scalable & Secure Applications</div>
    </div>
    <div className="why-card">
      <div className="why-icon">⚙️</div>
      <div className="why-label">End-to-End Development</div>
    </div>
    <div className="why-card">
      <div className="why-icon">🔧</div>
      <div className="why-label">Maintenance & Support</div>
    </div>
    <div className="why-card">
      <div className="why-icon">💰</div>
      <div className="why-label">Affordable Pricing</div>
    </div>
  </div>

  {/* <div className="why-bottom">
    <div className="why-stat"><strong>10+</strong><span>Years experience</span></div>
    <div className="why-divider" />
    <div className="why-stat"><strong>500+</strong><span>Projects delivered</span></div>
    <div className="why-divider" />
    <div className="why-stat"><strong>98%</strong><span>Client satisfaction</span></div>
    <div className="why-divider" />
    <div className="why-stat"><strong>50+</strong><span>Team members</span></div>
  </div> */}
</section>

      {/* TECHNOLOGIES */}
      <section className="technologies-section">
        <h2>Technologies We Use</h2>

        {/* Desktop */}
        <div className="tech-cards desktop-tech">
          {[
            "Java",
            "Python",
            "React",
            "Node",
            "Spring",
            "MySQL",
            "Oracle",
            "Docker",
            "Jenkins",
            "AWS",
          ].map((tech) => (
            <div className="tech-card" key={tech}>
              <img src={require(`../../assets/${tech}.png`)} alt={tech} />
              <p>{tech}</p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="tech-slider mobile-tech">
          <div className="tech-track">
            {[
              "Java",
              "Python",
              "React",
              "Node",
              "Spring",
              "MySQL",
              "Oracle",
              "Docker",
              "Jenkins",
              "AWS",
            ].map((tech) => (
              <div className="tech-card" key={tech}>
                <img src={require(`../../assets/${tech}.png`)} alt={tech} />
                <p>{tech}</p>
              </div>
            ))}
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
              <FaMapMarkerAlt className="icon" />
              Flat No. 603, Ankur APT, Gothivali, Navi Mumbai 400 701.
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

export default About;
