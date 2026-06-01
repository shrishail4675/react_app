import React from "react";
import { useEffect } from "react";
import companyImg from "../../assets/about-company.png";

function About() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      "h1, h2, h3, p, img, .service-card, .tech-list, .about-points, .company-links, .company-services, .company-contact, .testimonial-card"
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
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">

        {/* Overlay Content */}
        <div className="hero-overlay">
          <h1 className="hero-title fade-up delay-1">About Us</h1>
          <p className="hero-subtitle fade-up delay-2">
            Infotech Minds is a leading IT solutions company delivering
            innovative, <br></br>scalable, and reliable digital services.
          </p>
          <p className="hero-subtitle fade-up delay-3">
            We help businesses grow with cutting-edge technology<br></br> and
            smart solutions tailored to their needs.
          </p>
        </div>
      </section>
      {/* COMPANY INTRO */}
      <section className="about-company">
        <h2 className="fade-up delay-1">Who We Are</h2>
        <div className="about-left">

          <p className="fade-up delay-3">
            Infotech Minds is a software development and IT consulting company
            founded in 2020. We specialize in web development, mobile
            applications, DevOps, cloud solutions, and enterprise software
            development.
          </p>
          <p className="fade-up delay-2">
            Our goal is to help businesses transform digitally by building
            secure, scalable, and high-performance applications.
          </p>
        </div>

        <div className="about-right">
          <img src={companyImg} alt="Company" width={400} />
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="about-cards">
        <h2 className="fade-up delay-1">Our Core Values</h2>
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
        <h2>Why Choose Infotech Minds</h2>
        <p className="why-subtitle">Everything you need to build, scale, and grow your digital product</p>

        <div className="why-cards">
          <div className="why-card">
            <div className="why-card-inner">

              <div className="why-card-front">
                <div className="why-icon">👥</div>
                <div className="why-label">
                  Experienced Development Team
                </div>
              </div>

              <div className="why-card-back">
                <p className="why-desc">
                  Skilled engineers delivering scalable web and mobile solutions.
                </p>
              </div>

            </div>
          </div>
          <div className="why-card">
            <div className="why-card-inner">

              <div className="why-card-front">
                <div className="why-icon">💻</div>
                <div className="why-label">
                  Modern Technologies
                </div>
              </div>

              <div className="why-card-back">
                <p className="why-desc">
                  Utilizing the latest technologies to build cutting-edge web and mobile applications.
                </p>
              </div>

            </div>
          </div>
          <div className="why-card">
            <div className="why-card-inner">

              <div className="why-card-front">
                <div className="why-icon">🛡️</div>
                <div className="why-label">
                  Scalable & Secure Applications
                </div>
              </div>

              <div className="why-card-back">
                <p className="why-desc">
                  Building applications that can handle growth and are protected against security threats.
                </p>
              </div>

            </div>
          </div>
          <div className="why-card">
            <div className="why-card-inner">

              <div className="why-card-front">
                <div className="why-icon">⚙️</div>
                <div className="why-label">
                  End-to-End Development
                </div>
              </div>

              <div className="why-card-back">
                <p className="why-desc">
                  Comprehensive development services from concept to deployment.
                </p>
              </div>

            </div>
          </div>
          <div className="why-card">
            <div className="why-card-inner">

              <div className="why-card-front">
                <div className="why-icon">🔧</div>
                <div className="why-label">
                  Maintenance & Support
                </div>
              </div>

              <div className="why-card-back">
                <p className="why-desc">
                  updating, monitoring, troubleshooting, and improving a system or product to ensure it operates efficiently and reliably.
                </p>
              </div>

            </div>
          </div>
          <div className="why-card">
            <div className="why-card-inner">

              <div className="why-card-front">
                <div className="why-icon">💰</div>
                <div className="why-label">
                  Affordable Pricing
                </div>
              </div>

              <div className="why-card-back">
                <p className="why-desc">
                  Competitive pricing without compromising on quality.
                </p>
              </div>

            </div>
          </div>
        </div>

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
    </div>
  );
}

export default About;
