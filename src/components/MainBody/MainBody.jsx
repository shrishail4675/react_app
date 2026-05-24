import React from "react";
import "./MainBody.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import aboutImg from "../../assets/about-company.png";
import { Link } from "react-router-dom";
import DevopsImage from "../../assets/DevopsImage.png";
import AIMl from "../../assets/Ai-Ml.png";

function Body() {
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

          <div className="hero-buttons fade-up delay-3">
            <button className="btn primary">Get Started</button>
            <Link to="/contact">
              <button className="btn secondary">Contact Us</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT COMPANY */}
      <section className="about-company">
        <div className="about-left">
          <h2>Our Company</h2>

          <p>
            Infotech Minds is a leading IT solutions provider specializing in
            modern software development, enterprise applications, and digital
            transformation services.
          </p>

          <p>
            We help startups, businesses, and enterprises build scalable,
            secure, and high-performance applications using cutting-edge
            technologies.
          </p>

          <p>
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

        <p className="section-subtitle">
          We provide a wide range of IT services to help your business grow.
        </p>

        <div className="service-cards">
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

      {/* WHY CHOOSE US
      <section className="why-us">
        <h2>Why Choose Us</h2>

        <div className="why-grid">
          <div>🚀 Fast Delivery</div>
          <div>💡 Innovative Solutions</div>
          <div>🔒 Secure Applications</div>
          <div>📈 Business Growth Focus</div>
          <div>🤝 Dedicated Support</div>
          <div>💻 Latest Technologies</div>
        </div>
      </section> */}

      {/* TECH STACK */}
      <section className="tech-stack">
        <h2>Technologies We Work With</h2>
        <p className="section-subtitle">
          We use modern technologies to build reliable solutions.
        </p>

        <div className="tech-list">
          <span>Java</span>
          <span>Python</span>
          <span>React</span>
          <span>Angular</span>
          <span>Node.js</span>
          <span>MySQL</span>
          <span>Oracle</span>
          <span>MongoDB</span>
          <span>AWS</span>
          <span>Docker</span>
          <span>Git</span>
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
              <FaMapMarkerAlt className="icon" /> Flat No. 603, Ankur APT,
              Gothivali, Navi Mumbai 400 701.
            </p>
          </div>

          <div className="company-services">
            <h4>Services</h4>
            <p>Website Development</p>
            <p>Mobile App Development</p>
            <p>DevOps & CI/CD</p>
            <p>UI/UX Design</p>
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

export default Body;
