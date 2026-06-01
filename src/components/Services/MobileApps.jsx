import React from "react";
import "./ServicePage.css";
import { useEffect } from "react";

import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";

import {
  FaCheckCircle,
} from "react-icons/fa";

function MobileApps() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      "h1, h2, h3, p, img, .service-card, .tech-card, .about-points, .company-links, .company-services, .company-contact, .testimonial-card, .process-card, .benefit-card"
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
          <h1>Mobile App Development</h1>
          <p>
            We build powerful, user-friendly, and scalable mobile applications
            for Android and iOS that help businesses connect with customers
            anytime, anywhere.
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
            We provide end-to-end mobile app development services tailored to
            your business needs. From idea validation and UI/UX design to
            development, testing, and deployment, we create secure,
            high-performance applications that deliver exceptional user
            experiences.
          </p>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="section">
        <h2>Technologies We Use</h2>
        <div className="tech-cards">
          <div className="tech-card">React Native</div>
          <div className="tech-card">Flutter</div>
          <div className="tech-card">Android (Java / Kotlin)</div>
          <div className="tech-card">iOS (Swift)</div>
          <div className="tech-card">Firebase / APIs</div>
          <div className="tech-card">Cloud Integration</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <h2>Benefits</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <FaCheckCircle /> User-Friendly Interface
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> High Performance
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Cross-Platform Support
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Secure & Scalable
          </div>
        </div>
      </section>

      {/* APP FEATURES */}
      <section className="section">
        <h2>Key Mobile App Features</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <FaCheckCircle /> Push Notifications
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Real-Time Chat
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Payment Gateway Integration
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> GPS & Maps Integration
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Analytics Dashboard
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Offline Support
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>Our Process</h2>
        <div className="process-cards">
          <div className="process-card">
            <img src={process1} alt="Planning" />
            <h4>Planning</h4>
            <p>
              Understanding your app idea, target users, and business goals.
            </p>
          </div>

          <div className="process-card">
            <img src={process2} alt="Design" />
            <h4>Design</h4>
            <p>
              Crafting modern UI/UX designs for smooth and engaging user
              journeys.
            </p>
          </div>

          <div className="process-card">
            <img src={process3} alt="Development" />
            <h4>Development</h4>
            <p>
              Building fast, secure, and scalable mobile applications with
              complete testing.
            </p>
          </div>
        </div>
      </section>

      {/* APP TYPES */}
      <section className="section">
        <h2>Apps We Build</h2>
        <div className="tech-cards">
          <div className="tech-card">E-Commerce Apps</div>
          <div className="tech-card">Healthcare Apps</div>
          <div className="tech-card">Education Apps</div>
          <div className="tech-card">Food Delivery Apps</div>
          <div className="tech-card">Booking Apps</div>
          <div className="tech-card">Custom Business Apps</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            "Their team delivered our app on time with amazing quality!" – Amit
          </div>
          <div className="testimonial-card">
            "Excellent support and smooth app performance. Highly recommended!"
            – Priya
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileApps;