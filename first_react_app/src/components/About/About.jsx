import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      <h1>About Us</h1>

      <p className="about-description">
        Welcome to our React application. We build modern, scalable,
        and secure web applications using the latest technologies.
      </p>

      {/* Mission Vision Section */}

      <div className="about-cards">

        <div className="about-card">
          <img src="/images/mission.jpg" alt="Mission" />
          <h3>Our Mission</h3>
          <p>
            Our mission is to develop high-quality web applications
            that are fast, secure, and user friendly.
          </p>
        </div>

        <div className="about-card">
          <img src="/images/vision.jpg" alt="Vision" />
          <h3>Our Vision</h3>
          <p>
            We aim to become a leading technology provider by
            delivering innovative digital solutions.
          </p>
        </div>

        <div className="about-card">
          <img src="/images/team.jpg" alt="Team" />
          <h3>Our Team</h3>
          <p>
            Our team consists of passionate developers who specialize
            in frontend and backend technologies.
          </p>
        </div>

      </div>

      {/* Team Section */}

      <div className="team-section">

        <h2>Meet Our Team</h2>

        <div className="team-cards">

          <div className="team-card">
            <img src="/images/dev1.jpg" alt="Developer"/>
            <h4>John Doe</h4>
            <p>Frontend Developer</p>
          </div>

          <div className="team-card">
            <img src="/images/dev2.jpg" alt="Developer"/>
            <h4>Jane Smith</h4>
            <p>Backend Developer</p>
          </div>

          <div className="team-card">
            <img src="/images/dev3.jpg" alt="Developer"/>
            <h4>Michael Lee</h4>
            <p>Full Stack Developer</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;