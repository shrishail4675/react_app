import React, { useEffect } from "react";
import "./ServicePage.css";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";

import {
  FaCheckCircle,
} from "react-icons/fa";

function ArtificialIntelligence() {

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
          <h1>
            Artificial Intelligence & <br />
            Machine Learning
          </h1>
          <p>
            We help businesses harness the power of artificial intelligence and machine learning to automate processes, uncover insights, and build smarter digital experiences.
          </p>
          <a href="/contact" className="cta-btn">
            Contact Us
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <h2>About AI & Machine Learning</h2>
          <p>
            Our AI and ML services are designed to help businesses innovate with intelligent solutions. From predictive analytics and chatbots to computer vision and process automation, we build scalable AI systems tailored to your goals.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2>Our AI & ML Services</h2>
        <div className="tech-cards">
          <div className="tech-card">AI Chatbots & Virtual Assistants</div>
          <div className="tech-card">Predictive Analytics</div>
          <div className="tech-card">Machine Learning Models</div>
          <div className="tech-card">Computer Vision Solutions</div>
          <div className="tech-card">Natural Language Processing</div>
          <div className="tech-card">Business Process Automation</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <h2>Benefits</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <FaCheckCircle /> Smarter Automation
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Better Decision Making
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Increased Efficiency
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Scalable Intelligence
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>Our AI Development Process</h2>
        <div className="process-cards">
          <div className="process-card">
            <img src={process1} alt="Discovery" />
            <h4>Discovery</h4>
            <p>
              We understand your business goals, challenges, and AI opportunities.
            </p>
          </div>

          <div className="process-card">
            <img src={process2} alt="Model Development" />
            <h4>Model Development</h4>
            <p>
              We build and train intelligent models using quality data and modern tools.
            </p>
          </div>

          <div className="process-card">
            <img src={process3} alt="Deployment" />
            <h4>Deployment</h4>
            <p>
              We deploy, monitor, and continuously improve AI systems for real-world performance.
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="section">
        <h2>AI Technologies We Use</h2>
        <div className="tech-cards">
          <div className="tech-card">Python</div>
          <div className="tech-card">TensorFlow</div>
          <div className="tech-card">PyTorch</div>
          <div className="tech-card">OpenAI APIs</div>
          <div className="tech-card">Computer Vision Tools</div>
          <div className="tech-card">Cloud AI Platforms</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            "Their AI solution transformed our customer support and saved hours every day!" – Suresh
          </div>
          <div className="testimonial-card">
            "Excellent AI expertise and seamless implementation. Highly recommended!" – Kavya
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArtificialIntelligence;
