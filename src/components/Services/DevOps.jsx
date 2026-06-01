import React from "react";
import "./ServicePage.css";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";
import { useEffect } from "react";

import {
  FaCheckCircle,
} from "react-icons/fa";

function DevOps() {

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
            DevOps & CI/CD <br />
            Automation Services
          </h1>
          <p>
            We streamline software delivery with robust DevOps practices,
            continuous integration, and automated deployment pipelines to help
            your business release faster, safer, and more efficiently.
          </p>
          <a href="/contact" className="cta-btn">
            Contact Us
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <h2>About DevOps & CI/CD</h2>
          <p>
            Our DevOps solutions help businesses improve collaboration between
            development and operations teams. We build scalable CI/CD pipelines,
            automate deployments, improve infrastructure reliability, and ensure
            faster software delivery with minimal downtime.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2>Our DevOps Services</h2>
        <div className="tech-cards">
          <div className="tech-card">CI/CD Pipeline Setup</div>
          <div className="tech-card">Cloud Deployment</div>
          <div className="tech-card">Docker & Kubernetes</div>
          <div className="tech-card">Infrastructure as Code</div>
          <div className="tech-card">Monitoring & Alerts</div>
          <div className="tech-card">Security Automation</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <h2>Benefits</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <FaCheckCircle /> Faster Releases
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Reduced Downtime
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Better Collaboration
          </div>
          <div className="benefit-card">
            <FaCheckCircle /> Scalable Infrastructure
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>Our Process</h2>
        <div className="process-cards">
          <div className="process-card">
            <img src={process1} alt="Assessment" />
            <h4>Assessment</h4>
            <p>
              We analyze your current workflows, tools, and infrastructure.
            </p>
          </div>

          <div className="process-card">
            <img src={process2} alt="Implementation" />
            <h4>Implementation</h4>
            <p>
              We set up automation pipelines, containerization, and deployment
              workflows.
            </p>
          </div>

          <div className="process-card">
            <img src={process3} alt="Optimization" />
            <h4>Optimization</h4>
            <p>
              We monitor, optimize, and continuously improve your delivery
              process.
            </p>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section">
        <h2>Tools & Platforms</h2>
        <div className="tech-cards">
          <div className="tech-card">Jenkins</div>
          <div className="tech-card">GitHub Actions</div>
          <div className="tech-card">Docker</div>
          <div className="tech-card">Kubernetes</div>
          <div className="tech-card">AWS / Azure</div>
          <div className="tech-card">Terraform</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            "Our deployment time dropped drastically after their DevOps setup!"
            – Karan
          </div>
          <div className="testimonial-card">
            "Reliable team with strong automation expertise." – Meera
          </div>
        </div>
      </section>
    </div>
  );
}

export default DevOps;
