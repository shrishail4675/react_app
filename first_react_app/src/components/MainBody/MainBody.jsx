import React from "react";
import "./MainBody.css";

function Body() {
  return (
    <div className="body-container">

      <section className="hero">
        <h1>React Application</h1>
        <p>Build modern web applications using React</p>
        <button className="btn">Get Started</button>
      </section>

      <section className="features">

        <div className="card">
          <h3>Fast</h3>
          <p>React applications are very fast and efficient.</p>
        </div>

        <div className="card">
          <h3>Reusable</h3>
          <p>Components can be reused across the application.</p>
        </div>

        <div className="card">
          <h3>Scalable</h3>
          <p>Perfect for large scale web applications.</p>
        </div>

      </section>

    </div>
  );
}

export default Body;