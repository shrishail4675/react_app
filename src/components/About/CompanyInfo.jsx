import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function CompanyInfo() {
    return (
        <div className="body-container">
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
                        <h3>Information</h3>
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
                        <h3>Services</h3>
                        <p>Website Development</p>
                        <p>Mobile Application Development</p>
                        <p>DevOps & CI/CD</p>
                        <p>UI/UX & Graphic Design</p>
                        <p>Maintenance & Support</p>
                    </div>

                    <div className="company-links">
                        <h4>Quick Links</h4>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CompanyInfo;
