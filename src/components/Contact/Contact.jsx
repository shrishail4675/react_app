import React from "react";
import { useEffect, useRef, useState } from "react";

import {
  FaPhone,
  FaEnvelope,
  FaLaptopCode,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";
// import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <div className="contact-page">

      {/* Contact Form (Optional but recommended) */}
      <section className="contact-form-section" ref={sectionRef}>
        <h2 className="mt-5 pt-5">CONTACT US</h2>
        <div className="contact-container">
          <div className={`contact-info ${visible ? "show-left" : ""}`}>

            <h2>Let’s Build Something Amazing Together</h2>
            <p>
              Have a project idea or need IT solutions for your business? Send
              us a message and our team will get back to you shortly.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <FaEnvelope className="contact-icon" />
                <span>contact@infotechmindslab.com</span>
              </div>

              <div className="contact-card">
                <FaPhone className="contact-icon" />
                <span>+91 7758827146</span>
              </div>
            </div>
          </div>

          <form className={`contact-form ${visible ? "show-right" : ""}`}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose delay-1">
        <div className="section-header">
          <h2>Why Businesses Trust Infotech Minds</h2>
        </div>

        <div className="choose-grid">
          <div className="choose-card">
            <FaLaptopCode className="choose-icon" />
            <h3>Modern Technologies</h3>
            <p>
              We build scalable and future-ready digital products using the
              latest technologies.
            </p>
          </div>

          <div className="choose-card">
            <FaHeadset className="choose-icon" />
            <h3>Dedicated Support</h3>
            <p>
              Our team provides fast support and maintenance for all your
              business solutions.
            </p>
          </div>

          <div className="choose-card">
            <FaShieldAlt className="choose-icon" />
            <h3>Reliable & Secure</h3>
            <p>
              We prioritize security, performance, and reliability in every
              project.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-container">
          <div className="faq-item">
            <h4>How quickly can you start a project?</h4>
            <p>
              We usually begin within 2-5 business days after discussing
              requirements.
            </p>
          </div>

          <div className="faq-item">
            <h4>Do you provide maintenance support?</h4>
            <p>
              Yes, we provide ongoing maintenance and technical support
              services.
            </p>
          </div>

          <div className="faq-item">
            <h4>Can you develop custom software solutions?</h4>
            <p>
              Absolutely. We specialize in custom web, mobile, and enterprise
              software solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
