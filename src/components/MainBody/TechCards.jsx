import React from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const techCards = [
  {
    title: "Java",
    color: "primary",
    description:
      "Java is widely used for enterprise applications, backend systems, and Android development.",
  },
  {
    title: "Python",
    color: "primary",
    description:
      "Python is popular for AI, machine learning, automation, and web development.",
  },
  {
    title: "React",
    color: "primary",
    description:
      "React helps build fast and interactive user interfaces using reusable components.",
  },
  {
    title: "Angular",
    color: "primary",
    description:
      "Angular is a TypeScript-based frontend framework used for dynamic single-page applications.",
  },
  {
    title: "Node",
    color: "primary",
    description:
      "Node.js allows JavaScript to run on the server for scalable backend apps.",
  },
  {
    title: "MySQL",
    color: "primary",
    description:
      "MySQL is a relational database management system used to store and manage structured data.",
  },
  {
    title: "Oracle",
    color: "primary",
    description:
      "Oracle Database is an enterprise-grade relational database known for performance and scalability.",
  },
  {
    title: "MongoDB",
    color: "primary",
    description:
      "MongoDB is a NoSQL database that stores data in flexible JSON-like documents.",
  },
  {
    title: "AWS",
    color: "primary",
    description:
      "AWS provides cloud computing services including storage, servers, databases, and deployment tools.",
  },
  {
    title: "Docker",
    color: "primary",
    description:
      "Docker helps developers package applications into lightweight, portable containers.",
  },
  {
    title: "Git",
    color: "primary",
    description:
      "Git is a version control system used to track code changes and collaborate on projects.",
  },
  {
    title: "Spring",
    color: "primary",
    description:
      "Spring Boot simplifies the creation of stand-alone, production-grade Spring-based applications.",
  },
];

export default function FlipCards() {

  useEffect(() => {
    const cards = document.querySelectorAll(".tech-card-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("show");

            // force reflow
            void entry.target.offsetWidth;

            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {techCards.map((card, index) => {
          const row = Math.floor(index / 4);

          return (
            <div
              key={index}
              className={`col-md-3 mb-4 tech-card-wrapper ${row % 2 === 0 ? "slide-left" : "slide-right"
                }`}
            >
              <div className="flip-card">
                <div className="flip-card-inner">

                  {/* Front */}
                  <div className="flip-card-front card-title-bg text-white shadow-right-bottom">
                    <div className="text-center p-3">
                      <img
                        src={require(`../../assets/${card.title}.png`)}
                        alt={card.title}
                      />
                      <h4 className="fw-bold mb-0 text-dark">
                        {card.title}
                      </h4>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className={`flip-card-back bg-${card.color} text-white shadow-right-bottom`}
                  >
                    <div className="text-center p-3">
                      <p className="fs-5 mb-0">
                        {card.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}