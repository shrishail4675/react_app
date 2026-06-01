import React from "react";
import "./MainBody.css";
import aboutImg from "../../assets/about-company.png";
import { Link } from "react-router-dom";
import DevopsImage from "../../assets/DevopsImage.png";
import AIMl from "../../assets/Ai-Ml.png";
import TechCards from "./TechCards";
import { useEffect } from "react";

function Body() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      "h1, h2, h3, p, img, .service-card, .tech-list, .about-points, .company-links, .company-services, .company-contact, .testimonial-card, .process-card"
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
    <div className="body-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-up delay-1">
            Empowering Your Business with Smart IT Solutions
          </h1>

          <p className="fade-up delay-2">
            At Infotech Minds, we deliver innovative, scalable, and secure IT
            solutions that help businesses grow faster in the digital world.
          </p>

          <div >
            <button className="btn primary">Get Started</button>
            <button className="btn secondary" href="/contact">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT COMPANY */}
      <section className="about-company">
        <h2>Our Company</h2>
        <div className="about-left">


          <p className="fade-up delay-1">
            Infotech Minds is a leading IT solutions provider specializing in
            modern software development, enterprise applications, and digital
            transformation services.
          </p>

          <p className="fade-up delay-2">
            We help startups, businesses, and enterprises build scalable,
            secure, and high-performance applications using cutting-edge
            technologies.
          </p>

          <p className="fade-up delay-3">
            We don’t just build software — we build digital solutions that drive
            growth and success.
          </p>

          <div className="about-points">
            <span>✔ 100% Client Satisfaction</span>
            <span>✔ Expert Development Team</span>
            <span>✔ End-to-End IT Solutions</span>
          </div>
        </div>

        <div className="about-right">
          <img src={aboutImg} alt="Company" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>

        <p className="section-subtitle fade-up delay-1">
          We provide a wide range of IT services to help your business grow.
        </p>

        <div className="service-cards ">
          {/* WEBSITE DEVELOPMENT */}
          <Link to="/services/web-development" className="service-link">
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Website Development"
              />

              <h3>Website Design & Development</h3>

              <p>
                Responsive, modern, and high-performance websites built for
                business growth.
              </p>
            </div>
          </Link>

          {/* MOBILE APP */}
          <Link to="/services/mobile-apps" className="service-link">
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
                alt="Mobile App Development"
              />

              <h3>Mobile App Development</h3>

              <p>
                Android and iOS mobile applications with modern UI, high
                performance, and seamless user experience.
              </p>
            </div>
          </Link>

          {/* DEVOPS & CI/CD */}
          <Link to="/services/devops" className="service-link">
            <div className="service-card">
              <img src={DevopsImage} alt="DevOps CI/CD" />

              <h3>DevOps & CI/CD</h3>

              <p>
                Automated deployment pipelines, cloud infrastructure, secure
                automation, and faster software delivery.
              </p>
            </div>
          </Link>

          {/* AI ML */}
          <Link to="/services/ai-ml" className="service-link">
            <div className="service-card">
              <img src={AIMl} alt="AI ML" />

              <h3>Artificial Intelligence & Machine Learning</h3>

              <p>
                Smart AI solutions, automation, predictive analytics, and
                intelligent business systems.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="tech-stack">
        <h2>Technologies We Work With</h2>
        <p className="section-subtitle">
          We use modern technologies to build reliable solutions.
        </p>

        <div className="tech-list">
          <TechCards />
        </div>
      </section>
    </div>
  );
}

export default Body;
