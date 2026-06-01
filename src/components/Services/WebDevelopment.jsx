import React from "react";
import "./ServicePage.css";
import { useEffect } from "react";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";

import { FaCheckCircle } from "react-icons/fa";

function WebDevelopment() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      "h1, h2, h3, p, img, .service-card, .tech-card, .about-points, .benefit-card, .process-card, .testimonial-card, .company-links, .company-services, .company-contact"
    );

    elements.forEach((el) => el.classList.add("fade-up"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
        <h2>About This Service</h2>
        <div className="container">

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
          <div className="tech-card fade-up delay-3">React / Angular</div>
          <div className="tech-card fade-up delay-3">Spring Boot / Node.js</div>
          <div className="tech-card fade-up delay-3">MySQL / MongoDB</div>
          <div className="tech-card fade-up delay-3">AWS / Azure</div>
          <div className="tech-card fade-up delay-3">HTML / CSS / JS</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <h2>Benefits</h2>
        <div className="benefit-cards">
          <div className="benefit-card fade-up delay-3"><FaCheckCircle /> Fast & Responsive</div>
          <div className="benefit-card fade-up delay-3"><FaCheckCircle /> SEO Friendly</div>
          <div className="benefit-card fade-up delay-3"><FaCheckCircle /> Mobile Optimized</div>
          <div className="benefit-card fade-up delay-3"><FaCheckCircle /> Secure & Scalable</div>
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

    </div>
  );
}

export default WebDevelopment;